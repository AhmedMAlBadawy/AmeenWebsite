/**
 * Zip contents of out/ so archive root = index.html + _next/ (not a wrapper "out" folder).
 * Writes amplify-manual-deploy.zip and out.zip (identical).
 */
const { execSync } = require("child_process");
const fs = require("fs");
const path = require("path");

const root = path.join(__dirname, "..");
const outDir = path.join(root, "out");
const zipAmplify = path.join(root, "amplify-manual-deploy.zip");
const zipOut = path.join(root, "out.zip");

const idx = path.join(outDir, "index.html");
const nx = path.join(outDir, "_next");
if (!fs.existsSync(idx) || !fs.existsSync(nx)) {
  console.error("Missing out/index.html or out/_next — run yarn build:static first.");
  process.exit(1);
}

if (fs.existsSync(zipAmplify)) fs.unlinkSync(zipAmplify);
if (fs.existsSync(zipOut)) fs.unlinkSync(zipOut);

const outGlob = path.join(outDir, "*");
const zipEsc = zipAmplify.replace(/'/g, "''");

if (process.platform === "win32") {
  const globEsc = outGlob.replace(/'/g, "''");
  execSync(
    `powershell -NoProfile -Command "Compress-Archive -Path '${globEsc}' -DestinationPath '${zipEsc}' -CompressionLevel Optimal -Force"`,
    { stdio: "inherit", cwd: root }
  );
} else {
  execSync(`cd "${outDir}" && zip -r "${zipAmplify}" .`, {
    stdio: "inherit",
    shell: true,
  });
}

fs.copyFileSync(zipAmplify, zipOut);

const mb = (fs.statSync(zipAmplify).size / 1024 / 1024).toFixed(1);
console.log("Updated:", zipAmplify, "&", zipOut, `(${mb} MB each)`);
