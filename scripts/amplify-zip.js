/**
 * Builds static export and creates amplify-manual-deploy.zip with the CORRECT layout:
 * zip root = index.html, _next/, *.html (NOT a parent "out" folder).
 *
 * If you zip the "out" folder itself, Amplify serves /out/index.html and /out/_next/
 * while the app requests /_next/ → 404 for all CSS/JS (what you see in DevTools).
 */
const { execSync } = require("child_process");
const fs = require("fs");
const path = require("path");

const root = path.join(__dirname, "..");
const outDir = path.join(root, "out");
const zipFile = path.join(root, "amplify-manual-deploy.zip");

execSync("yarn build:static", { cwd: root, stdio: "inherit", shell: true });

const idx = path.join(outDir, "index.html");
const nx = path.join(outDir, "_next");
if (!fs.existsSync(idx) || !fs.existsSync(nx)) {
  console.error("Missing out/index.html or out/_next — build failed?");
  process.exit(1);
}

if (fs.existsSync(zipFile)) fs.unlinkSync(zipFile);

const outGlob = path.join(outDir, "*");
const zipEsc = zipFile.replace(/'/g, "''");

if (process.platform === "win32") {
  const globEsc = outGlob.replace(/'/g, "''");
  execSync(
    `powershell -NoProfile -Command "Compress-Archive -Path '${globEsc}' -DestinationPath '${zipEsc}' -CompressionLevel Optimal -Force"`,
    { stdio: "inherit", cwd: root }
  );
} else {
  execSync(`cd "${outDir}" && zip -r "${zipFile}" .`, {
    stdio: "inherit",
    shell: true,
  });
}

const mb = (fs.statSync(zipFile).size / 1024 / 1024).toFixed(1);
console.log("\n=== Upload this file to Amplify (Deploy without Git) ===");
console.log(zipFile);
console.log("Size:", mb, "MB");
console.log(
  "\nAfter deploy, open in a NEW incognito window (avoid cache):"
);
console.log("  https://YOUR_APP.amplifyapp.com/_next/static/media/");
console.log(
  "If you see 404, the zip root is wrong (must be index.html + _next/, not a wrapper folder)."
);
console.log(
  "If HTML references old hashes but files are new, hard-refresh or wait for CDN."
);
