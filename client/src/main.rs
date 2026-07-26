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

    let mut candidates = Vec::new();

    // 1. Check true Windows Documents folder (handles OneDrive and moved Documents)
    if let Some(doc_dir) = dirs::document_dir() {
        candidates.push(doc_dir.join("My Games/Binding of Isaac Repentance+/log.txt"));
        candidates.push(doc_dir.join("My Games/Binding of Isaac Repentance/log.txt"));
        candidates.push(doc_dir.join("My Games/Binding of Isaac Afterbirth+/log.txt"));
    }

    // 2. Fallbacks based on USERPROFILE
    let user_profile = std::env::var("USERPROFILE")
        .or_else(|_| std::env::var("HOME"))
        .unwrap_or_else(|_| "C:/Users/Default".to_string());

    candidates.push(std::path::PathBuf::from(format!("{}/Documents/My Games/Binding of Isaac Repentance+/log.txt", user_profile)));
    candidates.push(std::path::PathBuf::from(format!("{}/OneDrive/Documents/My Games/Binding of Isaac Repentance+/log.txt", user_profile)));
    candidates.push(std::path::PathBuf::from(format!("{}/Documents/My Games/Binding of Isaac Repentance/log.txt", user_profile)));

    for candidate in &candidates {
        if candidate.exists() {
            println!("[INFO] Found Isaac log at standard location: {}", candidate.display());
            return candidate.clone();
        }
    }

    println!("[WARN] Could not find log.txt in standard locations. Searching ENTIRE SYSTEM... (This may take a few minutes)");
    update::show_info_box("Isaac Tracker", "Searching your entire system for the game log file. This may take a minute...");

    let drives = vec!["C:\\", "D:\\", "E:\\", "F:\\", "G:\\", "Z:\\"];
    for drive in drives {
        if std::path::Path::new(drive).exists() {
            println!("[INFO] Scanning drive {}...", drive);
            let walk = jwalk::WalkDir::new(drive)
                .skip_hidden(true)
                .process_read_dir(|_, _, _, dir_entry_results| {
                    dir_entry_results.retain(|dir_entry_result| {
                        dir_entry_result.as_ref().map(|dir_entry| {
                            let name = dir_entry.file_name().to_string_lossy();
                            // Skip massive system directories to speed up search
                            !name.eq_ignore_ascii_case("Windows") && 
                            !name.eq_ignore_ascii_case("node_modules") &&
                            !name.eq_ignore_ascii_case("$Recycle.Bin")
                        }).unwrap_or(false)
                    })
                });

            for entry in walk.into_iter().filter_map(|e| e.ok()) {
                let path = entry.path();
                if path.is_dir() {
                    if let Some(name) = path.file_name().and_then(|n| n.to_str()) {
                        if name.starts_with("Binding of Isaac") {
                            let log_file = path.join("log.txt");
                            if log_file.exists() {
                                println!("[SUCCESS] Found Isaac log system-wide at: {}", log_file.display());
                                update::show_info_box("Isaac Tracker", &format!("Found log file at: {}", log_file.display()));
                                return log_file;
                            }
                        }
                    }
                }
            }
        }
    }

    let fallback = candidates[0].clone();
    println!("[WARN] Could not find existing log.txt even after full system search. Falling back to: {}", fallback.display());
    fallback
}

#[tokio::main]
async fn main() -> Result<(), Box<dyn std::error::Error>> {
    dotenvy::dotenv().ok();

    let handle = tokio::runtime::Handle::current();

    let entry_check = Entry::new("isaac-tracker", "default").ok();
    let current_username = entry_check.as_ref()
        .and_then(|e| e.get_password().ok())
        .and_then(|json_str| {
            serde_json::from_str::<serde_json::Value>(&json_str).ok()
                .and_then(|j| j["username"].as_str().map(|s| s.to_string()))
        })
        .unwrap_or_else(|| "User".to_string());

    // Run TrayItem and Win32 message pump on a dedicated OS thread
    let tray_username = current_username.clone();
    std::thread::spawn(move || {
        if let Ok(mut tray_item) = TrayItem::new("Isaac Tracker", IconSource::Resource("my-icon")) {
            let label = format!("Isaac Tracker ({})", tray_username);
            let _ = tray_item.add_label(&label);

            let _ = tray_item.add_menu_item("Open Dashboard", || {
                let _ = std::process::Command::new("cmd")
                    .args(["/C", "start", "https://isaa-tracker.vercel.app/"])
                    .spawn();
            });

            let autostart_label = if is_autostart_enabled() {
                "Autostart: Enabled (Click to Disable)"
            } else {
                "Autostart: Disabled (Click to Enable)"
            };

            let _ = tray_item.add_menu_item(autostart_label, || {
                let currently_enabled = is_autostart_enabled();
                let _ = set_autostart(!currently_enabled);
            });

            let handle_clone = handle.clone();
            let _ = tray_item.add_menu_item("Check for Updates", move || {
                handle_clone.spawn(async move {
                    update::show_info_box("Isaac Tracker", "Checking for updates...");
                    if let Some((tag, download_url)) = update::check_for_updates().await {
                        update::show_info_box("Isaac Tracker", &format!("New version v{} available! Downloading update...", tag));
                        if let Err(e) = update::download_and_update(&download_url).await {
                            update::show_info_box("Isaac Tracker Error", &format!("Update failed: {}", e));
                        }
                    } else {
                        update::show_info_box("Isaac Tracker", &format!("You are running the latest version (v{})!", update::CURRENT_VERSION));
                    }
                });
            });

            let _ = tray_item.add_menu_item("Quit", || {
                std::process::exit(0);
            });

            // Keep Win32 event message loop alive for system tray interaction
            #[cfg(target_os = "windows")]
            unsafe {
                use windows_sys::Win32::UI::WindowsAndMessaging::{GetMessageW, DispatchMessageW, TranslateMessage, MSG};
                let mut msg: MSG = std::mem::zeroed();
                while GetMessageW(&mut msg, std::ptr::null_mut(), 0, 0) > 0 {
                    TranslateMessage(&msg);
                    DispatchMessageW(&msg);
                }
            }
        }
    });

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
    let victory_regex = Regex::new(r"(?i)cutscene|show ending|ending\s+\d+").unwrap();
    let stage_regex = Regex::new(r"load stage \d+:\s*(.*?)\s*\(mode \d+\)").unwrap();    
    let challenge_regex = Regex::new(r"(?i)Challenge\s+(\d+)").unwrap();                                                                                                                                                                       

    if !path.exists() {
        println!("[INFO] log.txt not found yet. Waiting for game to start...");
        while !path.exists() {
            tokio::time::sleep(std::time::Duration::from_secs(3)).await;
        }
    }

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

    let entry = Entry::new("isaac-tracker", "default");

    let saved_json = match &entry {
        Ok(e) => match e.get_password() {
            Ok(json_str) => json_str,
            Err(_) => {
                let res = start_login_server().unwrap_or_else(|_| String::new());
                if !res.is_empty() {
                    let _ = e.set_password(&res);
                }
                res
            }
        },
        Err(_) => {
            println!("[WARN] Failed to access keyring. Prompting login...");
            start_login_server().unwrap_or_else(|_| String::new())
        }
    };

    let (token, username) = match serde_json::from_str::<serde_json::Value>(&saved_json) {
        Ok(json) if json["token"].is_string() => {
            (json["token"].as_str().unwrap().to_string(), json["username"].as_str().unwrap_or("Unknown").to_string())
        },
        _ => {
            println!("[INFO] Old token format detected. Prompting login...");
            let res = start_login_server().unwrap_or_else(|_| String::new());
            if let Ok(e) = &entry {
                if !res.is_empty() {
                    let _ = e.set_password(&res);
                }
            }
            if let Ok(json) = serde_json::from_str::<serde_json::Value>(&res) {
                if json["token"].is_string() {
                    (json["token"].as_str().unwrap().to_string(), json["username"].as_str().unwrap_or("Unknown").to_string())
                } else {
                    (String::new(), "User".to_string())
                }
            } else {
                (String::new(), "User".to_string())
            }
        }
    };

    api_client.set_token(token);
    println!("[INFO] Welcome back, {}!", username);

    // Pre-scan recent log file lines to catch active seed/player if tracker started mid-game
    let mut initial_player_id: Option<i32> = None;
    if let Ok(mut file) = std::fs::File::open(&path) {
        use std::io::{Seek, SeekFrom, Read};
        let mut content = String::new();
        let file_len = file.metadata().map(|m| m.len()).unwrap_or(0);
        let seek_pos = if file_len > 32768 { file_len - 32768 } else { 0 };
        if let Ok(_) = file.seek(SeekFrom::Start(seek_pos)) {
            let _ = file.read_to_string(&mut content);
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
                    let api_clone = api_client.clone();
                    let items = current_items.clone();
                    let trinkets = current_trinkets.clone();
                    let bosses = current_bosses.clone();
                    tokio::spawn(async move {
                        let _ = api_clone.update_run(
                            run_id,
                            false,
                            items,
                            trinkets,
                            bosses,
                            duration,
                            None,
                            None,
                            None
                        ).await;
                    });
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
                    let api_clone = api_client.clone();
                    let items = current_items.clone();
                    let trinkets = current_trinkets.clone();
                    let bosses = current_bosses.clone();
                    tokio::spawn(async move {
                        let _ = api_clone.update_run(
                            run_id,
                            false,
                            items,
                            trinkets,
                            bosses,
                            duration,
                            None,
                            None,
                            None
                        ).await;
                    });
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
                    current_is_victory = true;
                }                 

                if !current_bosses.contains(&boss_name) {
                    current_bosses.push(boss_name);

                    if let Some(run_id) = current_run_id {
                        let duration = current_run_start_time.map(|t| t.elapsed().as_secs()).unwrap_or(0);
                        let api_clone = api_client.clone();
                        let items = current_items.clone();
                        let trinkets = current_trinkets.clone();
                        let bosses = current_bosses.clone();
                        let final_boss = current_final_boss.clone();
                        let death_stage = current_death_stage.clone();
                        let cause_of_death = current_cause_of_death.clone();
                        let is_victory = current_is_victory;
                        tokio::spawn(async move {
                            let _ = api_clone.update_run(
                                run_id,
                                is_victory,
                                items,
                                trinkets,
                                bosses,
                                duration,
                                final_boss,
                                death_stage,
                                cause_of_death
                            ).await;
                        });
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
                let api_clone = api_client.clone();
                let is_victory = current_is_victory;
                let items = current_items.clone();
                let trinkets = current_trinkets.clone();
                let bosses = current_bosses.clone();
                tokio::spawn(async move {
                    if let Err(e) = api_clone.update_run(
                        old_run_id,
                        is_victory,
                        items,
                        trinkets,
                        bosses,
                        duration,
                        None,
                        None,
                        None
                    ).await {
                        println!("[ERROR] Failed to close restarted run #{}: {}", old_run_id, e);
                    }
                });
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
            current_challenge_name = None;
            current_run_start_time = Some(std::time::Instant::now());
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
                let api_clone = api_client.clone();
                let is_victory = current_is_victory;
                let items = current_items.clone();
                let trinkets = current_trinkets.clone();
                let bosses = current_bosses.clone();
                let final_boss = current_final_boss.clone();
                let death_stage = current_death_stage.clone();
                let cause_of_death = current_cause_of_death.clone();
                tokio::spawn(async move {
                    match api_clone.update_run(run_id, is_victory, items, trinkets, bosses, duration, final_boss, death_stage, cause_of_death).await {
                        Ok(_) => {
                            println!("[SUCCESS] Run #{} updated on server (Victory: {})!", run_id, is_victory);
                        },
                        Err(e) => println!("[ERROR] Failed to update run #{}: {}", run_id, e),
                    }
                });
                current_run_id = None;
                current_items.clear();
                current_trinkets.clear();
                current_bosses.clear();
                current_is_victory = false;
            }
            println!("[INFO] Game Over!");
        }        
    }
    Ok(())
}
