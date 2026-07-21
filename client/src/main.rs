#![windows_subsystem = "windows"]

mod api;
mod auth;

use linemux::MuxedLines;
use regex::Regex;
use tray_item::{IconSource, TrayItem};

#[tokio::main]
async fn main() -> Result<(), Box<dyn std::error::Error>> {
    dotenvy::dotenv().ok();
    let mut tray = TrayItem::new(
        "Isaac Tracker", 
        IconSource::Resource("my-icon") 
    ).unwrap();
    
    tray.add_label("Tracker is running!").unwrap();

    tray.add_menu_item("Login", || {
        auth::start_login_server();
    }).unwrap();

    tray.add_menu_item("Quit", || {
        std::process::exit(0);
    }).unwrap();

    let mut lines = MuxedLines::new()?;
    let path = "C:/Users/Administrator/Documents/My Games/Binding of Isaac Repentance+/log.txt";

    let regex_seed = Regex::new(r"RNG Start Seed: ([a-zA-Z0-9 ]+)").unwrap();
    let regex_player = Regex::new(r"Initialized player with Variant (\d+)").unwrap();
    let regex_death = Regex::new(r"Game Over").unwrap();
    let item_regex = Regex::new(r"Adding collectible (\d+)").unwrap();

    lines.add_file(path).await?;

    println!("Tracker is running! Waiting for new lines...");

    let mut current_seed: Option<String> = None;
    let mut current_run_id: Option<i32> = None;
    let mut current_run_start_time: Option<std::time::Instant> = None;
    let mut current_items: Vec<i32> = Vec::new();

    let api_client = api::ApiClient::new();

    while let Ok(Some(line)) = lines.next_line().await {
        println!("{}", line.line());

        if let Some(captures) = item_regex.captures(line.line()) {
            let item_id = captures[1].parse::<i32>().unwrap();

            current_items.push(item_id);
            
            println!("[INFO] Picked up item: {}", item_id);
        }

        if let Some(captures) = regex_seed.captures(line.line()) {
            let seed = captures[1].to_string();
            println!("[INFO] Seed found: {}", seed);
            current_seed = Some(seed);
        }

        if let Some(captures) = regex_player.captures(line.line()) {
            if let Some(ref seed_val) = current_seed {
                let player_id = captures[1].parse::<i32>().unwrap_or(0);
                println!("[INFO] Player found: {}", player_id);

                match api_client.create_run(seed_val, player_id).await {
                    Ok(new_id) => {
                        println!("Created run with ID: {}", new_id);
                        current_run_id = Some(new_id);
                        current_run_start_time = Some(std::time::Instant::now());
                    },
                    Err(e) => println!("[ERROR] Failed to create run: {}", e),
                }
            }
        }

        if regex_death.is_match(line.line()) {
            if let Some(run_id) = current_run_id {
                let duration = current_run_start_time.unwrap().elapsed().as_secs();
                match api_client.update_run(run_id, false, current_items.clone(), duration).await {
                    Ok(_) => {
                        current_run_id = None;
                        current_items.clear();
                    },
                    Err(e) => println!("[ERROR] Failed to update run: {}", e),
                }
            }
            println!("[INFO] Game Over!");
        }        
    }
    Ok(())
}
