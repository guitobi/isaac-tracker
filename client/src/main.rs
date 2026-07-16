use linemux::MuxedLines;
use regex::Regex;

#[tokio::main]
async fn main() -> Result<(), Box<dyn std::error::Error>> {
    dotenvy::dotenv().ok();
    let mut lines = MuxedLines::new()?;
    let path = "C:/Users/Administrator/Documents/My Games/Binding of Isaac Repentance+/log.txt";

    let regex_seed = Regex::new(r"RNG Start Seed: ([a-zA-Z0-9 ]+)").unwrap();
    let regex_player = Regex::new(r"Initialized player with Variant (\d+)").unwrap();
    let regex_death = Regex::new(r"Game Over").unwrap();

    lines.add_file(path).await?;

    println!("Tracker is running! Waiting for new lines...");

    let client = reqwest::Client::new();
    let mut current_seed: Option<String> = None;
    let mut current_run_id: Option<i32> = None;
    let mut current_run_start_time: Option<std::time::Instant> = None;

    while let Ok(Some(line)) = lines.next_line().await {
        println!("{}", line.line());

        if let Some(captures) = regex_seed.captures(line.line()) {
            let seed = captures[1].to_string();
            println!("[INFO] Seed found: {}", seed);
            current_seed = Some(seed);
        }

        if let Some(captures) = regex_player.captures(line.line()) {
    
            if let Some(ref seed_val) = current_seed {
                let player = captures[1].to_string();
                println!("[INFO] Player found: {}", player);

                let payload = serde_json::json!({
                    "seed": seed_val, 
                    "characterId": 1,
                    "userId": 1,
                    "isVictory": false,
                    "duration": 0
                });

                let res = client.post(std::env::var("RUNS_URL").unwrap_or("http://localhost:3000/runs".to_string()))
                    .json(&payload)
                    .send()
                    .await?;

                let data: serde_json::Value = res.json().await?;
                let new_id = data["id"].as_i64().unwrap() as i32; 
                println!("Created run with ID: {}", new_id);

                current_run_id = Some(new_id);
                current_run_start_time = Some(std::time::Instant::now());
            }
        }

        if regex_death.is_match(line.line()) {
            if let Some(run_id) = current_run_id {
                let duration = current_run_start_time.unwrap().elapsed().as_secs();
                let payload = serde_json::json!({
                    "isVictory": false,
                    "duration": duration
                });

                let res = client.patch(format!("{}/{}", std::env::var("RUNS_URL").unwrap_or("http://localhost:3000/runs".to_string()), run_id)).json(&payload).send().await?;

                let data: serde_json::Value = res.json().await?;

                current_run_id = None;

                println!("[INFO] Run updated: {}", data);

            }
            println!("[INFO] Game Over!");
        }

        
    }
    Ok(())
}
