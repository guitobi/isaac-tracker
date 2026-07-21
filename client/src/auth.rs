use std::net::TcpListener;
use std::io::Read;
use std::io::Write;
use regex::Regex;

pub fn start_login_server() -> String {
    let listener = TcpListener::bind("127.0.0.1:12345").unwrap();

    let url = std::env::var("DASHBOARD_LOGIN_URL").unwrap();
    std::process::Command::new("cmd")
        .args(["/C", "start", &url])
        .spawn()
        .unwrap();


    for l in listener.incoming() {
      let mut stream = l.unwrap();
      let mut buffer = [0u8; 1024];
      stream.read(&mut buffer).unwrap();
      let request = String::from_utf8_lossy(&buffer);
      let token = Regex::new(r"token=([^ ]+)").unwrap();
      
      if let Some(captures) = token.captures(&request) {
        let token = captures[1].to_string();
        println!("Token: {}", token);
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
        stream.write(response.as_bytes()).unwrap();
        return token;
      }

      println!("{}", request);

      break;
    }

    return String::new()
} 