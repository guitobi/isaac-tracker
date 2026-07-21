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
        stream.write("HTTP/1.1 200 OK\r\n\r\nLogin Successful!".as_bytes()).unwrap();
        return token;
      }

      println!("{}", request);

      break;
    }

    return String::new()
} 