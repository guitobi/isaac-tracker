const fs = require('fs');
const path = require('path');
const https = require('https');

const fontDir = path.join(__dirname, '../dashboard/public/fonts');
if (!fs.existsSync(fontDir)) {
  fs.mkdirSync(fontDir, { recursive: true });
}

const dest = path.join(fontDir, 'upheavtt.ttf');
const url = 'https://raw.githubusercontent.com/razorbeard/classic-games/master/assets/fonts/upheavtt.ttf';

console.log('Downloading Upheaval TTF font from razorbeard/classic-games...');
const file = fs.createWriteStream(dest);

https.get(url, (response) => {
  if (response.statusCode === 200) {
    response.pipe(file);
    file.on('finish', () => {
      file.close();
      console.log('SUCCESS: Downloaded upheaval.ttf to dashboard/public/fonts/upheavtt.ttf!');
    });
  } else {
    console.error(`Failed to download: ${response.statusCode}`);
  }
}).on('error', (err) => {
  fs.unlink(dest, () => {});
  console.error(err);
});
