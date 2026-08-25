const fs = require('fs');
const path = require('path');
const sharp = require('sharp');

const PROJECT_ROOT = path.resolve(__dirname, '..');
const TARGET_DIRS = [
  path.join(PROJECT_ROOT, 'assets', 'Art'),
  path.join(PROJECT_ROOT, 'assets', 'Projects'),
  path.join(PROJECT_ROOT, 'public')
];

let totalSizeBefore = 0;
let totalSizeAfter = 0;
let filesProcessed = 0;

async function walkDir(dir) {
  let results = [];
  if (!fs.existsSync(dir)) {
    console.warn(`Directory not found: ${dir}`);
    return results;
  }
  const list = fs.readdirSync(dir);
  for (const file of list) {
    const filePath = path.join(dir, file);
    const stat = fs.statSync(filePath);
    if (stat && stat.isDirectory()) {
      results = results.concat(await walkDir(filePath));
    } else {
      const ext = path.extname(filePath).toLowerCase();
      if (['.jpg', '.jpeg', '.png'].includes(ext)) {
        results.push(filePath);
      }
    }
  }
  return results;
}

async function processImage(filePath) {
  try {
    const ext = path.extname(filePath).toLowerCase();
    const dir = path.dirname(filePath);
    const basename = path.basename(filePath, ext);
    const webpPath = path.join(dir, `${basename}.webp`);
    
    // Get original size
    const statBefore = fs.statSync(filePath);
    const sizeBefore = statBefore.size;
    totalSizeBefore += sizeBefore;
    
    // Read image into memory to allow in-place replacement
    const imageBuffer = fs.readFileSync(filePath);
    
    const sharpInstance = sharp(imageBuffer)
      .resize({ width: 1200, withoutEnlargement: true });
    
    // 1. Create WebP
    await sharpInstance.clone()
      .webp({ quality: 80 })
      .toFile(webpPath);
      
    // 2. Overwrite original with optimized version
    if (ext === '.png') {
      await sharpInstance.clone()
        .png({ compressionLevel: 9 })
        .toFile(filePath);
    } else {
      // .jpg or .jpeg
      await sharpInstance.clone()
        .jpeg({ quality: 80, progressive: true })
        .toFile(filePath);
    }
    
    const statAfter = fs.statSync(filePath);
    const statWebp = fs.statSync(webpPath);
    const sizeAfter = statAfter.size + statWebp.size; // include webp in after size
    totalSizeAfter += sizeAfter;
    
    filesProcessed++;
    
    const beforeKb = (sizeBefore / 1024).toFixed(2);
    const afterKb = (sizeAfter / 1024).toFixed(2);
    const savedKb = ((sizeBefore - sizeAfter) / 1024).toFixed(2);
    
    console.log(`✅ Processed: ${path.relative(PROJECT_ROOT, filePath)}`);
    console.log(`   Size: ${beforeKb} KB -> ${afterKb} KB (Saved: ${savedKb} KB)`);
    
  } catch (error) {
    console.error(`❌ Failed to process ${filePath}:`, error.message);
  }
}

async function main() {
  console.log('Starting image compression...');
  
  let allFiles = [];
  for (const dir of TARGET_DIRS) {
    const files = await walkDir(dir);
    allFiles = allFiles.concat(files);
  }
  
  console.log(`Found ${allFiles.length} images to process.`);
  
  for (const file of allFiles) {
    await processImage(file);
  }
  
  const totalBeforeMb = (totalSizeBefore / (1024 * 1024)).toFixed(2);
  const totalAfterMb = (totalSizeAfter / (1024 * 1024)).toFixed(2);
  const totalSavedMb = ((totalSizeBefore - totalSizeAfter) / (1024 * 1024)).toFixed(2);
  const percentSaved = totalSizeBefore > 0 ? ((totalSizeBefore - totalSizeAfter) / totalSizeBefore * 100).toFixed(2) : 0;
  
  console.log('\n=============================================');
  console.log('🎉 Compression Complete! 🎉');
  console.log(`Files Processed: ${filesProcessed}`);
  console.log(`Total Size Before: ${totalBeforeMb} MB`);
  console.log(`Total Size After (Original + WebP): ${totalAfterMb} MB`);
  console.log(`Total Space Saved: ${totalSavedMb} MB (${percentSaved}%)`);
  console.log('=============================================');
}

main();
