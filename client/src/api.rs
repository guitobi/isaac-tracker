use reqwest::Client;
use serde::Serialize;

#[derive(Clone)]
pub struct ApiClient {
    client: Client,
    base_url: String,
    token: String,
}

#[derive(Serialize, Clone)]
pub struct RunEvent {
    pub event_type: String,
    pub data: String,
    pub timestamp: u64,
}

impl ApiClient {
    pub fn new() -> Self {
        Self {
            client: Client::new(),
            base_url: std::env::var("RUNS_URL")
                .unwrap_or("https://isaac-tracker-server.fly.dev/runs".to_string()),
            token: String::new(),
        }
    }

    pub fn set_token(&mut self, token: String) {
        self.token = token;
    }

    pub async fn create_run(
        &self,
        seed: &str,
        character_id: i32,
        challenge_id: Option<i32>,
        challenge_name: Option<String>,
    ) -> Result<i32, Box<dyn std::error::Error>> {
        let payload = serde_json::json!({
            "seed": seed,
            "characterId": character_id,
            "isVictory": false,
            "duration": 0,
            "challengeId": challenge_id,
            "challengeName": challenge_name
        });

        let res = self
            .client
            .post(&self.base_url)
            .bearer_auth(&self.token)
            .json(&payload)
            .send()
            .await?;

        if res.status() == reqwest::StatusCode::UNAUTHORIZED {
            return Err("UNAUTHORIZED".into());
        }

        let data: serde_json::Value = res.json().await?;

        if !data["id"].is_i64() {
            return Err(format!("Server returned an error or missing id: {}", data).into());
        }

        let new_id = data["id"].as_i64().unwrap() as i32;

        Ok(new_id)
    }

    // Method for updating run
    pub async fn update_run(
        &self,
        run_id: i32,
        is_victory: bool,
        items: Vec<i32>,
        trinkets: Vec<i32>,
        bosses: Vec<String>,
        duration: u64,
        final_boss: Option<String>,
        death_stage: Option<String>,
        cause_of_death: Option<String>,
        timeline: Vec<RunEvent>,
    ) -> Result<(), Box<dyn std::error::Error>> {
        let payload = serde_json::json!({
            "isVictory": is_victory,
            "items": items,
            "trinkets": trinkets,
            "bosses": bosses,
            "duration": duration,
            "finalBoss": final_boss,
            "deathStage": death_stage,
            "causeOfDeath": cause_of_death,
            "timeline": timeline
        });

        let url = format!("{}/{}", self.base_url, run_id);

        let res = self
            .client
            .patch(&url)
            .bearer_auth(&self.token)
            .json(&payload)
            .send()
            .await?;

        if res.status() == reqwest::StatusCode::UNAUTHORIZED {
            return Err("UNAUTHORIZED".into());
        }

        let data: serde_json::Value = res.json().await?;
        println!("[INFO] Run updated on server: {}", data);

        Ok(())
    }
}
