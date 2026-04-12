/**
 * Sets STATIC_EXPORT so next.config.js enables output: "export", then runs `next build`.
 * Produces ./out for Amplify manual (zip) hosting or any static host.
 */
process.env.STATIC_EXPORT = "1";
const path = require("path");
const { execSync } = require("child_process");
execSync("npx next build", {
  stdio: "inherit",
  env: process.env,
  shell: true,
});
execSync("node scripts/check-static-out.js", {
  stdio: "inherit",
  env: process.env,
  shell: true,
});
// Keep out.zip + amplify-manual-deploy.zip in sync (skip with SKIP_OUT_ZIP=1)
if (process.env.SKIP_OUT_ZIP !== "1") {
  execSync("node scripts/zip-out-contents.js", {
    cwd: path.join(__dirname, ".."),
    stdio: "inherit",
    env: process.env,
    shell: true,
  });
}
