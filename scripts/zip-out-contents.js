/**
 * Zip contents of out/ so archive root = index.html + _next/ (not a wrapper "out" folder).
 * Writes amplify-manual-deploy.zip and out.zip (identical).
 *
 * IMPORTANT: PowerShell Compress-Archive uses backslashes in ZIP entry names. Amplify/S3
 * expect forward slashes (e.g. _next/static/css/...), so assets would 404 on manual deploy.
 * This script uses archiver with POSIX-style names.
 */
const archiver = require("archiver");
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

/** @returns {{ full: string, entryName: string }[]} */
function collectFiles(absDir, baseDir) {
  /** @type {{ full: string, entryName: string }[]} */
  const out = [];
  for (const ent of fs.readdirSync(absDir, { withFileTypes: true })) {
    const full = path.join(absDir, ent.name);
    if (ent.isDirectory()) {
      out.push(...collectFiles(full, baseDir));
    } else {
      const rel = path.relative(baseDir, full);
      const entryName = rel.split(path.sep).join("/");
      out.push({ full, entryName });
    }
  }
  return out;
}

function zipToFile(files, destPath) {
  return new Promise((resolve, reject) => {
    if (fs.existsSync(destPath)) fs.unlinkSync(destPath);
    const output = fs.createWriteStream(destPath);
    const archive = archiver("zip", { zlib: { level: 9 } });
    output.on("close", () => resolve(undefined));
    archive.on("error", (err) => reject(err));
    archive.pipe(output);
    for (const { full, entryName } of files) {
      archive.file(full, { name: entryName });
    }
    archive.finalize();
  });
}

async function main() {
  const files = collectFiles(outDir, outDir);
  await zipToFile(files, zipAmplify);
  fs.copyFileSync(zipAmplify, zipOut);
  const mb = (fs.statSync(zipAmplify).size / 1024 / 1024).toFixed(1);
  console.log("Updated:", zipAmplify, "&", zipOut, `(${mb} MB each)`);
  const sample = files.find((f) => f.entryName.includes("_next/static/css/"));
  if (sample) {
    console.log("Sample entry (forward slashes):", sample.entryName);
  }
}

main().catch((err) => {
  console.error(err);
  process.exit(1);
});
