use reqwest::Client;

pub struct ApiClient {
    client: Client,
    base_url: String,
    token: String
}

impl ApiClient {
    pub fn new() -> Self {
        Self {
            client: Client::new(),
            base_url: std::env::var("RUNS_URL").unwrap_or("http://localhost:3000/runs".to_string()),
            token: String::new(),
        }
    }

    pub fn set_token(&mut self, token: String) {
        self.token = token;
    }

    pub async fn create_run(&self, seed: &str, character_id: i32) -> Result<i32, Box<dyn std::error::Error>> {
          let payload = serde_json::json!({
                "seed": seed, 
                "characterId": character_id, 
                "isVictory": false,
                "duration": 0
            });

        let res = self.client.post(&self.base_url)
            .bearer_auth(&self.token)
            .json(&payload)
            .send()
            .await?;

        let data: serde_json::Value = res.json().await?;

        if data["id"].is_null() {
            return Err(format!("Server return an error: {}", data).into());
        }

        let new_id = data["id"].as_i64().unwrap() as i32;

        Ok(new_id)
    }

    // Метод для оновлення забігу
    pub async fn update_run(&self, run_id: i32, is_victory: bool, items: Vec<i32>, duration: u64) -> Result<(), Box<dyn std::error::Error>> {
        let payload = serde_json::json!({
            "isVictory": is_victory,
            "items": items,
            "duration": duration
        });

        let url = format!("{}/{}", self.base_url, run_id);
        
        let res = self.client.patch(&url)
            .bearer_auth(&self.token)
            .json(&payload)
            .send()
            .await?;

        let data: serde_json::Value = res.json().await?;
        println!("[INFO] Run updated on server: {}", data);
        
        Ok(())
    }
}
