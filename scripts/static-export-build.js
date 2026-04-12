/**
 * Sets STATIC_EXPORT so next.config.js enables output: "export", then runs `next build`.
 * Produces ./out for Amplify manual (zip) hosting or any static host.
 */
process.env.STATIC_EXPORT = "1";
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
