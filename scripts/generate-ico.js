const fs = require('fs');
const path = require('path');
const sharp = require('sharp');
const toIco = require('png-to-ico');

(async () => {
  try {
    const root = path.join(__dirname, '..');
    const assetsSvg = path.join(root, 'assets', 'app-icon.svg');
    const buildDir = path.join(root, 'build');
    const brandingDir = path.join(root, 'assets', 'branding');
    if (!fs.existsSync(buildDir)) fs.mkdirSync(buildDir, { recursive: true });
    if (!fs.existsSync(brandingDir)) fs.mkdirSync(brandingDir, { recursive: true });

    const sizes = [256, 128, 64, 48, 32, 24, 16];
    const pngPaths = [];

    for (const size of sizes) {
      const outPng = path.join(buildDir, `icon-${size}.png`);
      await sharp(assetsSvg).resize(size, size, { fit: 'contain' }).png().toFile(outPng);
      pngPaths.push(outPng);
    }

    const icoBuf = await toIco(pngPaths);
    const icoBuildPath = path.join(buildDir, 'app-icon.ico');
    const icoBrandingPath = path.join(brandingDir, 'app-icon.ico');
    fs.writeFileSync(icoBuildPath, icoBuf);
    fs.writeFileSync(icoBrandingPath, icoBuf);
    console.log('ICO generated at', icoBuildPath);
    console.log('ICO copied to', icoBrandingPath);
  } catch (e) {
    console.error('ICO generation failed:', e);
    process.exit(1);
  }
})();
