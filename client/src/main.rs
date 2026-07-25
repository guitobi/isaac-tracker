#![windows_subsystem = "windows"]

mod api;
mod auth;
mod autostart;
mod update;

use linemux::MuxedLines;
use regex::Regex;
use tray_item::{IconSource, TrayItem};
use keyring::Entry;

use crate::auth::start_login_server;
use crate::autostart::{is_autostart_enabled, set_autostart};

   fn get_challenge_name(id: i32) -> String {                                                                                                                      
        match id {                                                                                                                                                  
            1 => "Pitch Black",                                                                                                                                     
            2 => "High Brow",                                                                                                                                       
            3 => "Head Trauma",                                                                                                                                     
            4 => "Darkness Falls",                                                                                                                                  
            5 => "The Tank",                                                                                                                                        
            6 => "Solar System",                                                                                                                                    
            7 => "Suicide King",                                                                                                                                    
            8 => "Cat Got Your Tongue",                                                                                                                             
            9 => "Demo Man",                                                                                                                                        
            10 => "Cursed!",                                                                                                                                        
            22 => "SPEED!",                                                                                                                                         
            34 => "Ultra Hard",                                                                                                                                     
            45 => "DELETE ITEM",                                                                                                                                    
            _ => "Custom Challenge",                                                                                                                                
        }.to_string()                                                                                                                                               
    } 

fn get_isaac_log_path() -> std::path::PathBuf {
    if let Ok(env_path) = std::env::var("ISAAC_LOG_PATH") {
        let p = std::path::PathBuf::from(env_path);
        if p.exists() {
            return p;
        }
    }

    let user_profile = std::env::var("USERPROFILE")
        .or_else(|_| std::env::var("HOME"))
        .unwrap_or_else(|_| "C:/Users/Default".to_string());

    let candidates = vec![
        format!("{}/Documents/My Games/Binding of Isaac Repentance+/log.txt", user_profile),
        format!("{}/OneDrive/Documents/My Games/Binding of Isaac Repentance+/log.txt", user_profile),
        format!("{}/Documents/My Games/Binding of Isaac Repentance/log.txt", user_profile),
        format!("{}/OneDrive/Documents/My Games/Binding of Isaac Repentance/log.txt", user_profile),
        format!("{}/Documents/My Games/Binding of Isaac Afterbirth+/log.txt", user_profile),
        format!("{}/OneDrive/Documents/My Games/Binding of Isaac Afterbirth+/log.txt", user_profile),
    ];

    for candidate in &candidates {
        let p = std::path::PathBuf::from(candidate);
        if p.exists() {
            println!("[INFO] Found Isaac log at: {}", p.display());
            return p;
        }
    }

    let fallback = std::path::PathBuf::from(format!("{}/Documents/My Games/Binding of Isaac Repentance+/log.txt", user_profile));
    println!("[WARN] Could not find existing log.txt, falling back to: {}", fallback.display());
    fallback
}

#[tokio::main]
async fn main() -> Result<(), Box<dyn std::error::Error>> {
    dotenvy::dotenv().ok();

    let path = get_isaac_log_path();

    let mut lines = MuxedLines::new()?;

    const FINAL_BOSSES: &[&str] = &["The Beast", "Mother", "Delirium", "Mega Satan", "Ultra Greed", "Ultra Greedier", "Isaac", "Satan", "The Lamb", "It Lives"];    

    let regex_seed = Regex::new(r"RNG Start Seed: ([a-zA-Z0-9 ]+)").unwrap();
    let regex_player = Regex::new(r"(?:Subtype\s+|Subtype\()\s*(\d+)").unwrap();
    let regex_death = Regex::new(r"Game Over").unwrap();
    let item_regex = Regex::new(r"Adding collectible (\d+)").unwrap();
    let trinket_regex = Regex::new(r"Adding trinket (\d+)").unwrap();
    let regex_boss_room = Regex::new(r"Room 5\.\d+\((.+?)\)").unwrap();
    let boss_death_regex = Regex::new(r"deathspawn_boss").unwrap();
    let victory_regex = Regex::new(r"(?i)cutscene|show ending|ending\s+\d+|beast|mega satan|delirium|mother|ultra greed").unwrap();
    let stage_regex = Regex::new(r"load stage \d+:\s*(.*?)\s*\(mode \d+\)").unwrap();    
    let challenge_regex = Regex::new(r"(?i)Challenge\s+(\d+)").unwrap();                                                                                                                                                                       

    lines.add_file(&path).await?;

    println!("Tracker is running! Waiting for new lines...");

    let mut current_seed: Option<String> = None;
    let mut current_run_id: Option<i32> = None;
    let mut current_run_start_time: Option<std::time::Instant> = None;
    let mut current_items: Vec<i32> = Vec::new();
    let mut current_trinkets: Vec<i32> = Vec::new();
    let mut current_room_boss: Option<String> = None;
    let mut current_bosses: Vec<String> = Vec::new();
    let mut current_is_victory: bool = false;
    let mut current_final_boss: Option<String> = None;
    let mut current_death_stage: Option<String> = None;
    let mut current_cause_of_death: Option<String> = None;
    let mut current_challenge_id: Option<i32> = None;
    let mut current_challenge_name: Option<String> = None;

    let mut api_client = api::ApiClient::new();

    let entry = Entry::new("isaac-tracker", "default").unwrap();

    let saved_json = match entry.get_password() {
        Ok(json_str) => json_str,
        Err(_) => {
            let res = start_login_server();
            let _ = entry.set_password(&res);
            res
        }
    };

    let (token, username) = match serde_json::from_str::<serde_json::Value>(&saved_json) {
        Ok(json) if json["token"].is_string() => {
            (json["token"].as_str().unwrap().to_string(), json["username"].as_str().unwrap_or("Unknown").to_string())
        },
        _ => {
            // Encountered old token format (not JSON) - prompting login again
            println!("[INFO] Old token format detected. Prompting login...");
            let res = start_login_server();
            let _ = entry.set_password(&res);
            let json: serde_json::Value = serde_json::from_str(&res).unwrap();
            (json["token"].as_str().unwrap().to_string(), json["username"].as_str().unwrap_or("Unknown").to_string())
        }
    };

    api_client.set_token(token);
    println!("[INFO] Welcome back, {}!", username);

    // Safely attempt tray initialization without panicking
    let _tray = match TrayItem::new("Isaac Tracker", IconSource::Resource("my-icon")) {
        Ok(mut tray_item) => {
            let user_label = format!("Isaac Tracker (User: {})", username);
            tray_item.add_label(&user_label).ok();

            tray_item.add_menu_item("Open Dashboard", || {
                let _ = std::process::Command::new("cmd")
                    .args(["/C", "start", "https://isaa-tracker.vercel.app/"])
                    .spawn();
            }).ok();

            let autostart_label = if is_autostart_enabled() {
                "Autostart: Enabled (Click to Disable)"
            } else {
                "Autostart: Disabled (Click to Enable)"
            };

            tray_item.add_menu_item(autostart_label, || {
                let currently_enabled = is_autostart_enabled();
                let _ = set_autostart(!currently_enabled);
            }).ok();

            tray_item.add_menu_item("Check for Updates", || {
                tokio::spawn(async {
                    if let Some((tag, download_url)) = update::check_for_updates().await {
                        println!("[INFO] New version available: v{}. Downloading...", tag);
                        let _ = update::download_and_update(&download_url).await;
                    } else {
                        println!("[INFO] You are running the latest version!");
                    }
                });
            }).ok();

            let logout_label = format!("Logout ({})", username);
            tray_item.add_menu_item(&logout_label, || {
                let entry = Entry::new("isaac-tracker", "default").unwrap();
                let _ = entry.delete_credential();
                println!("[INFO] Logged out! Please restart tracker to log in again.");
                std::process::exit(0);
            }).ok();

            tray_item.add_menu_item("Quit", || {
                std::process::exit(0);
            }).ok();

            Some(tray_item)
        },
        Err(e) => {
            println!("[WARN] System tray unavailable: {}. Continuing in background mode.", e);
            None
        }
    };

    // Pre-scan recent log file lines to catch active seed/player if tracker started mid-game
    let mut initial_player_id: Option<i32> = None;
    if let Ok(content) = std::fs::read_to_string(path) {
        for l in content.lines().rev().take(300).collect::<Vec<_>>().into_iter().rev() {
            if let Some(captures) = regex_seed.captures(l) {
                current_seed = Some(captures[1].trim().to_string());
                initial_player_id = None;
            }
            if let Some(captures) = regex_player.captures(l) {
                if let Ok(pid) = captures[1].parse::<i32>() {
                    initial_player_id = Some(pid);
                }
            }
            if regex_death.is_match(l) {
                current_seed = None;
                initial_player_id = None;
            }
        }
        if let Some(ref s) = current_seed {
            println!("[INFO] Detected active run seed from log: {}", s);
            let pid = initial_player_id.unwrap_or(0);
            match api_client.create_run(s, pid, current_challenge_id, current_challenge_name.clone()).await {
                Ok(new_id) => {
                    println!("[SUCCESS] Connected to active run with ID: {}", new_id);
                    current_run_id = Some(new_id);
                    current_run_start_time = Some(std::time::Instant::now());
                },
                Err(e) => println!("[WARN] Failed to auto-connect active run on startup: {}", e),
            }
        }
    }

    while let Ok(Some(line)) = lines.next_line().await {
        println!("{}", line.line());

        if let Some(captures) = challenge_regex.captures(line.line()) {
            if let Ok(cid) = captures[1].parse::<i32>() {
                let cname  = get_challenge_name(cid);
                println!("[INFO] Challenge detected: {} (ID: {})", cname, cid);
                current_challenge_id = Some(cid);
                current_challenge_name = Some(cname);
            }
        }

        if let Some(captures) = stage_regex.captures(line.line()) {
            let stage = captures[1].trim().to_string();
            println!("[INFO] Stage loaded: {}", stage);
            current_death_stage = Some(stage);
        }

        if let Some(captures) = item_regex.captures(line.line()) {
            let item_id = captures[1].parse::<i32>().unwrap_or(0);
            if !current_items.contains(&item_id) {
                current_items.push(item_id);
                println!("[INFO] Picked up item: {}", item_id);

                // Real-time sync item to active run on server
                if let Some(run_id) = current_run_id {
                    let duration = current_run_start_time.map(|t| t.elapsed().as_secs()).unwrap_or(0);
                    let _ = api_client.update_run(
                        run_id,
                        false,
                        current_items.clone(),
                        current_trinkets.clone(),
                        current_bosses.clone(),
                        duration,
                        None,
                        None,
                        None
                    ).await;
                }
            }
        }

        if let Some(captures) = trinket_regex.captures(line.line()) {
            let trinket_id = captures[1].parse::<i32>().unwrap_or(0);
            if !current_trinkets.contains(&trinket_id) {
                current_trinkets.push(trinket_id);
                println!("[INFO] Picked up trinket: {}", trinket_id);

                // Real-time sync trinket to active run on server
                if let Some(run_id) = current_run_id {
                    let duration = current_run_start_time.map(|t| t.elapsed().as_secs()).unwrap_or(0);
                    let _ = api_client.update_run(
                        run_id,
                        false,
                        current_items.clone(),
                        current_trinkets.clone(),
                        current_bosses.clone(),
                        duration,
                        None,
                        None,
                        None
                    ).await;
                }
            }
        }

        if let Some(captures) = regex_boss_room.captures(line.line()) {
            let raw_boss = captures[1].to_string();
            let boss = raw_boss
                .split('(').next().unwrap_or(&raw_boss)
                .trim()
                .to_string();
            println!("[INFO] Boss found: {} (raw: {})", boss, raw_boss);
            current_room_boss = Some(boss);
        }

        if boss_death_regex.is_match(line.line()) {
            if let Some(boss_name) = current_room_boss.take() {
                println!("[INFO] Boss is dead: {}", boss_name);

                if FINAL_BOSSES.contains(&&boss_name.as_str()) {
                    current_final_boss = Some(boss_name.clone());
                }                 

                if !current_bosses.contains(&boss_name) {
                    current_bosses.push(boss_name);

                    if let Some(run_id) = current_run_id {
                        let duration = current_run_start_time.map(|t| t.elapsed().as_secs()).unwrap_or(0);
                        let _ = api_client.update_run(
                            run_id,
                            false,
                            current_items.clone(),
                            current_trinkets.clone(),
                            current_bosses.clone(),
                            duration,
                            current_final_boss.clone(),
                            current_death_stage.clone(),
                            current_cause_of_death.clone()
                        ).await;
                    }
                }
            }
        }

        if victory_regex.is_match(line.line()) {
            println!("[INFO] Victory condition detected in log!");
            current_is_victory = true;
        }

        if let Some(captures) = regex_seed.captures(line.line()) {
            let seed = captures[1].to_string();
            println!("[INFO] Seed found: {}", seed);

            // Handle Quick Restart (R key): close previous run if it wasn't finished
            if let Some(old_run_id) = current_run_id.take() {
                let duration = current_run_start_time.map(|t| t.elapsed().as_secs()).unwrap_or(0);
                println!("[INFO] Quick restart detected! Closing previous run #{}...", old_run_id);
                if let Err(e) = api_client.update_run(
                    old_run_id,
                    current_is_victory,
                    current_items.clone(),
                    current_trinkets.clone(),
                    current_bosses.clone(),
                    duration,
                    None,
                    None,
                    None
                ).await {
                    println!("[ERROR] Failed to close restarted run #{}: {}", old_run_id, e);
                }
            }

            // Clear buffers for new run
            current_items.clear();
            current_trinkets.clear();
            current_bosses.clear();
            current_is_victory = false;
            current_seed = Some(seed);
            current_cause_of_death = None;
            current_final_boss = None;
            current_death_stage = None;
            current_challenge_id = None;
            current_challenge_name = None
        }

        if let Some(captures) = regex_player.captures(line.line()) {
            let player_id = captures[1].parse::<i32>().unwrap_or(0);
            
            // Only create a new run if we have a seed AND don't already have an active run
            if current_run_id.is_none() {
                let seed_val = current_seed.clone().unwrap_or_else(|| "UNKNOWN".to_string());
                println!("[INFO] Player found: {} (Seed: {})", player_id, seed_val);

                match api_client.create_run(&seed_val, player_id, current_challenge_id, current_challenge_name.clone()).await {
                    Ok(new_id) => {
                        println!("[SUCCESS] Created run with ID: {}", new_id);
                        current_run_id = Some(new_id);
                        current_run_start_time = Some(std::time::Instant::now());
                    },
                    Err(e) => println!("[ERROR] Failed to create run: {}", e),
                }
            }
        }

        if regex_death.is_match(line.line()) {
            let target_run_id = match current_run_id {
                Some(id) => Some(id),
                None => {
                    let seed_val = current_seed.clone().unwrap_or_else(|| "UNKNOWN".to_string());
                    println!("[WARN] Game Over detected without active run ID. Fallback creating run for seed: {}...", seed_val);
                    match api_client.create_run(&seed_val, 0, current_challenge_id, current_challenge_name.clone()).await {
                        Ok(new_id) => {
                            println!("[SUCCESS] Fallback created run ID: {}", new_id);
                            Some(new_id)
                        },
                        Err(e) => {
                            println!("[ERROR] Failed to create fallback run: {}", e);
                            None
                        }
                    }
                }
            };

            if let Some(run_id) = target_run_id {
                let duration = current_run_start_time.map(|t| t.elapsed().as_secs()).unwrap_or(30);
                match api_client.update_run(run_id, current_is_victory, current_items.clone(), current_trinkets.clone(), current_bosses.clone(), duration, current_final_boss.clone(), current_death_stage.clone(), current_cause_of_death.clone()).await {
                    Ok(_) => {
                        println!("[SUCCESS] Run #{} updated on server (Victory: {})!", run_id, current_is_victory);
                        current_run_id = None;
                        current_items.clear();
                        current_trinkets.clear();
                        current_bosses.clear();
                        current_is_victory = false;
                    },
                    Err(e) => println!("[ERROR] Failed to update run #{}: {}", run_id, e),
                }
            }
            println!("[INFO] Game Over!");
        }        
    }
    Ok(())
}
