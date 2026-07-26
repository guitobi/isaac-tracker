use std::net::TcpListener;
use std::io::{Read, Write};
use std::time::{Duration, Instant};
use regex::Regex;

pub fn start_login_server() -> Result<String, Box<dyn std::error::Error + Send + Sync>> {
    let listener = TcpListener::bind("127.0.0.1:12345")?;
    listener.set_nonblocking(true)?;

    let url = std::env::var("DASHBOARD_LOGIN_URL").unwrap_or_else(|_| "https://isaa-tracker.vercel.app/login?desktop=true".to_string());
    if let Err(e) = std::process::Command::new("cmd")
        .args(["/C", "start", &url])
        .spawn() {
            println!("[ERROR] Failed to open browser: {}", e);
    }

    let timeout = Duration::from_secs(120);
    let start_time = Instant::now();

    loop {
        if start_time.elapsed() > timeout {
            return Err("Login server timed out waiting for browser callback".into());
        }

        match listener.accept() {
            Ok((mut stream, _)) => {
                let _ = stream.set_nonblocking(false);
                let _ = stream.set_read_timeout(Some(Duration::from_secs(5)));
                let mut buffer = [0u8; 4096];
                if stream.read(&mut buffer).is_err() {
                    continue;
                }
                let request = String::from_utf8_lossy(&buffer);
                let token_regex = Regex::new(r"token=([^ &\n\r]+)").unwrap();
                let user_regex = Regex::new(r"username=([^ &\n\r]+)").unwrap();

                if let Some(t_caps) = token_regex.captures(&request) {
                    let raw_token = t_caps[1].to_string();
                    let token = urlencoding::decode(&raw_token).unwrap_or(std::borrow::Cow::Borrowed(&raw_token)).to_string();

                    let raw_username = match user_regex.captures(&request) {
                        Some(u_caps) => u_caps[1].to_string(),
                        None => "Isaac".to_string(),
                    };
                    let username = urlencoding::decode(&raw_username).unwrap_or(std::borrow::Cow::Borrowed(&raw_username)).to_string();

                    println!("[INFO] Login Successful! User: {}", username);
                    let response = "HTTP/1.1 200 OK\r\nContent-Type: text/html\r\n\r\n\
                    <html>\
                    <body style=\"background-color: #1c1815; color: #e3d2b8; font-family: sans-serif; display: flex; justify-content: center; align-items: center; height: 100vh; margin: 0;\">\
                    <div style=\"text-align: center;\">\
                    <h1>Login Successful!</h1>\
                    <p>Returning to tracker...</p>\
                    <script>setTimeout(() => window.close(), 2000);</script>\
                    </div>\
                    </body>\
                    </html>";
                    let _ = stream.write_all(response.as_bytes());

                    let json = serde_json::json!({
                        "token": token,
                        "username": username
                    });
                    return Ok(json.to_string());
                }
            }
            Err(ref e) if e.kind() == std::io::ErrorKind::WouldBlock => {
                std::thread::sleep(Duration::from_millis(100));
            }
            Err(e) => {
                println!("[WARN] Socket accept error: {}", e);
                std::thread::sleep(Duration::from_millis(100));
            }
        }
    }
}