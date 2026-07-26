; Inno Setup Script for Isaac Tracker Desktop Client

#define MyAppName "Isaac Tracker"
#define MyAppVersion "0.1.8"
#define MyAppPublisher "Isaac Tracker Team"
#define MyAppURL "https://isaa-tracker.vercel.app/"
#define MyAppExeName "isaac-tracker.exe"

[Setup]
AppId={{D8A1E952-6C9A-4E10-9F62-841793BB812A}
AppName={#MyAppName}
AppVersion={#MyAppVersion}
AppPublisher={#MyAppPublisher}
AppPublisherURL={#MyAppURL}
AppSupportURL={#MyAppURL}
AppUpdatesURL={#MyAppURL}
DefaultDirName={localappdata}\Programs\IsaacTracker
DisableProgramGroupPage=yes
PrivilegesRequired=lowest
OutputBaseFilename=IsaacTrackerSetup
SetupIconFile=..\client\icon.ico
Compression=lzma
SolidCompression=yes
WizardStyle=modern

[Languages]
Name: "english"; MessagesFile: "compiler:Default.isl"

[Tasks]
Name: "desktopicon"; Description: "{cm:CreateDesktopIcon}"; GroupDescription: "{cm:AdditionalIcons}"; Flags: unchecked
Name: "autostart"; Description: "Run Isaac Tracker automatically when Windows starts"; GroupDescription: "Startup options:"

[Files]
Source: "..\client\target\release\{#MyAppExeName}"; DestDir: "{app}"; Flags: ignoreversion

[Icons]
Name: "{autoprograms}\{#MyAppName}"; Filename: "{app}\{#MyAppExeName}"; IconFilename: "{app}\{#MyAppExeName}"; IconIndex: 0
Name: "{autodesktop}\{#MyAppName}"; Filename: "{app}\{#MyAppExeName}"; IconFilename: "{app}\{#MyAppExeName}"; IconIndex: 0; Tasks: desktopicon

[Registry]
Root: HKCU; Subkey: "Software\Microsoft\Windows\CurrentVersion\Run"; ValueType: string; ValueName: "IsaacTracker"; ValueData: """{app}\{#MyAppExeName}"""; Tasks: autostart

[Run]
Filename: "{app}\{#MyAppExeName}"; Description: "{cm:LaunchProgram,{#StringChange(MyAppName, '&', '&&')}}"; Flags: nowait postinstall skipifsilent
