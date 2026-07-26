use winreg::enums::*;
use winreg::RegKey;

const APP_NAME: &str = "IsaacTracker";
const REG_KEY_PATH: &str = r"Software\Microsoft\Windows\CurrentVersion\Run";

pub fn is_autostart_enabled() -> bool {
    let hkcu = RegKey::predef(HKEY_CURRENT_USER);
    if let Ok(key) = hkcu.open_subkey_with_flags(REG_KEY_PATH, KEY_READ) {
        let val: Result<String, _> = key.get_value(APP_NAME);
        if let Ok(path) = val {
            if let Ok(current_exe) = std::env::current_exe() {
                if let Some(exe_str) = current_exe.to_str() {
                    let formatted = format!("\"{}\"", exe_str);
                    return path.eq_ignore_ascii_case(&formatted) || path.trim_matches('"').eq_ignore_ascii_case(exe_str);
                }
            }
        }
    }
    false
}

pub fn set_autostart(enable: bool) -> Result<(), Box<dyn std::error::Error>> {
    let hkcu = RegKey::predef(HKEY_CURRENT_USER);
    let (key, _) = hkcu.create_subkey(REG_KEY_PATH)?;

    if enable {
        if let Ok(current_exe) = std::env::current_exe() {
            if let Some(exe_str) = current_exe.to_str() {
                let formatted = format!("\"{}\"", exe_str);
                key.set_value(APP_NAME, &formatted)?;
                println!("[INFO] Windows autostart enabled for {}", formatted);
            }
        }
    } else {
        let _ = key.delete_value(APP_NAME);
        println!("[INFO] Windows autostart disabled");
    }

    Ok(())
}
