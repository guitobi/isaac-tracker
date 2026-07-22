// #![windows_subsystem = "windows"]

mod api;
mod auth;

use linemux::MuxedLines;
use regex::Regex;
use tray_item::{IconSource, TrayItem};
use keyring::Entry;

use crate::auth::start_login_server;

#[tokio::main]
async fn main() -> Result<(), Box<dyn std::error::Error>> {
    dotenvy::dotenv().ok();


    let mut lines = MuxedLines::new()?;
    let path = "C:/Users/Administrator/Documents/My Games/Binding of Isaac Repentance+/log.txt";

    let regex_seed = Regex::new(r"RNG Start Seed: ([a-zA-Z0-9 ]+)").unwrap();
    let regex_player = Regex::new(r"Initialized player with Variant (\d+)").unwrap();
    let regex_death = Regex::new(r"Game Over").unwrap();
    let item_regex = Regex::new(r"Adding collectible (\d+)").unwrap();
    let trinket_regex = Regex::new(r"Adding trinket (\d+)").unwrap();
    let regex_boss_room = Regex::new(r"Room 5\.\d+\((.+?)\)").unwrap();
    let boss_death_regex = Regex::new(r"deathspawn_boss").unwrap();

    lines.add_file(path).await?;

    println!("Tracker is running! Waiting for new lines...");

    let mut current_seed: Option<String> = None;
    let mut current_run_id: Option<i32> = None;
    let mut current_run_start_time: Option<std::time::Instant> = None;
    let mut current_items: Vec<i32> = Vec::new();
    let mut current_trinkets: Vec<i32> = Vec::new();
    let mut current_room_boss: Option<String> = None;
    let mut current_bosses: Vec<String> = Vec::new();

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
            tray_item.add_label("Tracker is running!").ok();
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
            println!("[WARN] System tray unavailable: {}. Continuing in console mode.", e);
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
            match api_client.create_run(s, pid).await {
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

        if let Some(captures) = item_regex.captures(line.line()) {
            let item_id = captures[1].parse::<i32>().unwrap_or(0);

            current_items.push(item_id);
            
            println!("[INFO] Picked up item: {}", item_id);
        }

        if let Some(captures) = trinket_regex.captures(line.line()) {
            let trinket_id = captures[1].parse::<i32>().unwrap_or(0);

            current_trinkets.push(trinket_id);


            println!("[INFO] Picked up trinket: {}", trinket_id);
        }

        if let Some(captures) = regex_boss_room.captures(line.line()) {
            let boss = captures[1].to_string();
            println!("[INFO] Boss found: {}", boss);
            current_room_boss = Some(boss);
        }

        if boss_death_regex.is_match(line.line()) {
            if let Some(boss_name) = current_room_boss.take() {
                println!("[INFO] Boss is dead: {}", boss_name);
                current_bosses.push(boss_name);
            }
        }

        if let Some(captures) = regex_seed.captures(line.line()) {
            let seed = captures[1].to_string();
            println!("[INFO] Seed found: {}", seed);
            current_seed = Some(seed);
        }

        if let Some(captures) = regex_player.captures(line.line()) {
            let player_id = captures[1].parse::<i32>().unwrap_or(0);
            let seed_val = current_seed.clone().unwrap_or_else(|| "UNKNOWN".to_string());

            // Handle Quick Restart (R key): close previous run if it wasn't finished
            if let Some(old_run_id) = current_run_id.take() {
                let duration = current_run_start_time.map(|t| t.elapsed().as_secs()).unwrap_or(0);
                println!("[INFO] Quick restart detected! Closing previous run #{}...", old_run_id);
                if let Err(e) = api_client.update_run(
                    old_run_id,
                    false,
                    current_items.clone(),
                    current_trinkets.clone(),
                    current_bosses.clone(),
                    duration
                ).await {
                    println!("[ERROR] Failed to close restarted run #{}: {}", old_run_id, e);
                }
            }

            // Clear buffers for new run
            current_items.clear();
            current_trinkets.clear();
            current_bosses.clear();

            println!("[INFO] Player found: {} (Seed: {})", player_id, seed_val);

            match api_client.create_run(&seed_val, player_id).await {
                Ok(new_id) => {
                    println!("[SUCCESS] Created run with ID: {}", new_id);
                    current_run_id = Some(new_id);
                    current_run_start_time = Some(std::time::Instant::now());
                },
                Err(e) => println!("[ERROR] Failed to create run: {}", e),
            }
        }

        if regex_death.is_match(line.line()) {
            // Fallback: If current_run_id is None, attempt creating a run on the fly so Game Over is never lost
            let target_run_id = match current_run_id {
                Some(id) => Some(id),
                None => {
                    let seed_val = current_seed.clone().unwrap_or_else(|| "UNKNOWN".to_string());
                    println!("[WARN] Game Over detected without active run ID. Fallback creating run for seed: {}...", seed_val);
                    match api_client.create_run(&seed_val, 0).await {
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
                match api_client.update_run(run_id, false, current_items.clone(), current_trinkets.clone(), current_bosses.clone(), duration).await {
                    Ok(_) => {
                        println!("[SUCCESS] Run #{} updated on server (Game Over)!", run_id);
                        current_run_id = None;
                        current_items.clear();
                        current_trinkets.clear();
                        current_bosses.clear();
                    },
                    Err(e) => println!("[ERROR] Failed to update run #{}: {}", run_id, e),
                }
            }
            println!("[INFO] Game Over!");
        }        
    }
    Ok(())
}
