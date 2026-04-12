const fs = require("fs");
const path = require("path");

const out = path.join(__dirname, "..", "out");
const nextDir = path.join(out, "_next");
const index = path.join(out, "index.html");

if (!fs.existsSync(out)) {
  console.error("Missing out/ — run yarn build:static first.");
  process.exit(1);
}
if (!fs.existsSync(nextDir)) {
  console.error(
    "Missing out/_next — CSS/JS/images will 404. Ensure zip includes the _next folder next to index.html."
  );
  process.exit(1);
}
if (!fs.existsSync(index)) {
  console.error("Missing out/index.html");
  process.exit(1);
}

const mediaDir = path.join(nextDir, "static", "media");
if (fs.existsSync(mediaDir)) {
  const n = fs.readdirSync(mediaDir).length;
  if (n < 5) {
    console.warn(`Warning: out/_next/static/media has only ${n} files (expected many).`);
  }
}

console.log("OK: out/index.html and out/_next exist.");
