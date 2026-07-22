use std::net::TcpListener;
use std::io::Read;
use std::io::Write;
use regex::Regex;

pub fn start_login_server() -> String {
    let listener = match TcpListener::bind("127.0.0.1:12345") {
      Ok(server) => server,
      Err(error) => {
        println!("[ERROR] Something went wrong when starting a server: {}", error);
        return String::new(); // Return empty string instead of killing the program
      }
    };

    let url = std::env::var("DASHBOARD_LOGIN_URL").unwrap_or("http://localhost:3000/login?desktop=true".to_string());
    if let Err(e) = std::process::Command::new("cmd")
        .args(["/C", "start", &url])
        .spawn() {
            println!("[ERROR] Failed to open browser: {}", e);
    }

    for l in listener.incoming() {
      if let Ok(mut stream) = l {
          let mut buffer = [0u8; 1024];
          if stream.read(&mut buffer).is_err() {
              continue;
          }
          let request = String::from_utf8_lossy(&buffer);
          let token_regex = Regex::new(r"token=([^ &\n\r]+)").unwrap();
          let user_regex = Regex::new(r"username=([^ &\n\r]+)").unwrap();
          
          if let Some(t_caps) = token_regex.captures(&request) {
            let token = t_caps[1].to_string();
            let username = match user_regex.captures(&request) {
                Some(u_caps) => u_caps[1].to_string(),
                None => "Isaac".to_string(), // Fallback if frontend is cached
            };
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
            let _ = stream.write(response.as_bytes());

            let json = serde_json::json!({
                "token": token,
                "username": username
            });
            return json.to_string();
          }

          println!("{}", request);
          continue;
      }
    }

    String::new()
} 