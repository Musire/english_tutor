import sharp from 'sharp';
import fs from 'fs';
import path from 'path';

const dir = './src/assets/products';

fs.readdirSync(dir).forEach(file => {
  if (file.endsWith('.png')) {
    const filePath = path.join(dir, file);
    sharp(filePath)
      .resize(16)
      .toBuffer()
      .then(() => console.log(`✅ OK: ${file}`))
      .catch(err => console.error(`❌ CRASH: ${file}`, err.message));
  }
});