import sharp from 'sharp';
import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

// Adjust path to point to root/public since this is in scripts/
const PUBLIC_DIR = path.join(__dirname, '../public');

async function optimizeImages(dir) {
    if (!fs.existsSync(dir)) {
        console.warn(`Directory not found: ${dir}`);
        return;
    }

    const files = fs.readdirSync(dir);

    for (const file of files) {
        const filePath = path.join(dir, file);
        const stats = fs.statSync(filePath);

        if (stats.isDirectory()) {
            await optimizeImages(filePath);
        } else {
            const ext = path.extname(file).toLowerCase();
            if (['.png', '.jpg', '.jpeg'].includes(ext)) {
                const webpPath = filePath.replace(ext, '.webp');

                // Skip if webp already exists and is newer? 
                // For now, always overwrite or skip if exists to avoid double work.
                if (fs.existsSync(webpPath)) {
                    // console.log(`Skipping ${file}, .webp already exists.`);
                    continue;
                }

                console.log(`Optimizing: ${file} -> .webp`);

                try {
                    await sharp(filePath)
                        .webp({ quality: 80 })
                        .toFile(webpPath);
                    console.log(`✅ Generated: ${path.relative(PUBLIC_DIR, webpPath)}`);
                } catch (err) {
                    console.error(`❌ Error optimizing ${file}:`, err);
                }
            }
        }
    }
}

console.log('Starting image optimization...');
optimizeImages(PUBLIC_DIR).then(() => {
    console.log('Image optimization complete!');
});
