/**
 * Full: yarn build:static (refreshes out/ + out.zip) — already zips at end of build.
 * Re-zip only: node scripts/amplify-zip.js --no-build
 */
const { execSync } = require("child_process");
const path = require("path");

const root = path.join(__dirname, "..");
const noBuild = process.argv.includes("--no-build");

if (!noBuild) {
  execSync("yarn build:static", { cwd: root, stdio: "inherit", shell: true });
  process.exit(0);
}

execSync("node scripts/zip-out-contents.js", {
  cwd: root,
  stdio: "inherit",
  shell: true,
});
