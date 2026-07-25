use reqwest::Client;

pub const CURRENT_VERSION: &str = env!("CARGO_PKG_VERSION");
const REPO_OWNER: &str = "guitobi";
const REPO_NAME: &str = "isaac-tracker";

pub fn show_info_box(title: &str, message: &str) {
    let _ = std::process::Command::new("powershell")
        .args([
            "-Command",
            &format!("Add-Type -AssemblyName System.Windows.Forms; [System.Windows.Forms.MessageBox]::Show('{}', '{}')", message, title)
        ])
        .spawn();
}

pub async fn check_for_updates() -> Option<(String, String)> {
    let client = Client::new();
    let url = format!("https://api.github.com/repos/{}/{}/releases/latest", REPO_OWNER, REPO_NAME);
    
    let res = match client.get(&url)
        .header("User-Agent", "isaac-tracker-client")
        .send()
        .await {
            Ok(r) => r,
            Err(_) => return None,
        };

    if !res.status().is_success() {
        return None;
    }

    let json: serde_json::Value = match res.json().await {
        Ok(j) => j,
        Err(_) => return None,
    };

    let tag_name = json["tag_name"].as_str()?.trim_start_matches('v').to_string();
    
    // Compare tag_name with CURRENT_VERSION
    if tag_name != CURRENT_VERSION {
        let assets = json["assets"].as_array()?;
        
        // EXPLICITLY look for isaac-tracker.exe (NOT IsaacTrackerSetup.exe)
        let download_url = assets
            .iter()
            .find(|asset| asset["name"].as_str().map_or(false, |name| name == "isaac-tracker.exe"))
            .or_else(|| {
                assets.iter().find(|asset| asset["name"].as_str().map_or(false, |name| name.ends_with(".exe") && !name.contains("Setup")))
            })
            .and_then(|asset| asset["browser_download_url"].as_str())?
            .to_string();

        return Some((tag_name, download_url));
    }

    None
}

pub async fn download_and_update(download_url: &str) -> Result<(), Box<dyn std::error::Error>> {
    let client = Client::new();
    let bytes = client.get(download_url)
        .header("User-Agent", "isaac-tracker-client")
        .send()
        .await?
        .bytes()
        .await?;

    let current_exe = std::env::current_exe()?;
    let old_exe = current_exe.with_extension("exe.old");
    let temp_new_exe = current_exe.with_extension("exe.new");

    // Save downloaded file
    std::fs::write(&temp_new_exe, &bytes)?;

    // Rename current running exe to .old
    if old_exe.exists() {
        let _ = std::fs::remove_file(&old_exe);
    }
    std::fs::rename(&current_exe, &old_exe)?;

    // Rename temp new exe to current exe
    std::fs::rename(&temp_new_exe, &current_exe)?;

    println!("[INFO] Updated executable successfully. Restarting...");
    
    // Spawn updated process and exit current
    std::process::Command::new(&current_exe).spawn()?;
    std::process::exit(0);
}
