// Ensure runtime build assets exist by copying from repo-tracked assets
// - Copies assets/branding/app-icon.ico -> build/app-icon.ico
// - Copies assets/branding/matriks-logo.png -> build/matriks-logo.png

const fs = require('fs');
const path = require('path');

function ensureDir(p) {
  if (!fs.existsSync(p)) fs.mkdirSync(p, { recursive: true });
}

function copyIfExists(src, dest) {
  if (fs.existsSync(src)) {
    fs.copyFileSync(src, dest);
    console.log(`[prebuild] Copied: ${src} -> ${dest}`);
    return true;
  } else {
    console.warn(`[prebuild] Missing source (skipped): ${src}`);
    return false;
  }
}

(function main(){
  const root = __dirname ? path.resolve(__dirname, '..') : process.cwd();
  const buildDir = path.join(root, 'build');
  const brandingDir = path.join(root, 'assets', 'branding');
  const assetsRoot = path.join(root, 'assets');

  ensureDir(buildDir);

  // Try branding/ first, then assets/ root
  let okIco = copyIfExists(path.join(brandingDir, 'app-icon.ico'), path.join(buildDir, 'app-icon.ico'));
  if (!okIco) okIco = copyIfExists(path.join(assetsRoot, 'app-icon.ico'), path.join(buildDir, 'app-icon.ico'));
  if (!okIco) console.warn('[prebuild] WARNING: app-icon.ico not found; Windows build icon may be missing.');

  let okLogo = copyIfExists(path.join(brandingDir, 'matriks-logo.png'), path.join(buildDir, 'matriks-logo.png'));
  if (!okLogo) okLogo = copyIfExists(path.join(assetsRoot, 'matriks-logo.png'), path.join(buildDir, 'matriks-logo.png'));
  if (!okLogo) console.warn('[prebuild] WARNING: matriks-logo.png not found; header logo may be missing.');
})();
