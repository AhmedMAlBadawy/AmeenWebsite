/**
 * Sets STATIC_EXPORT so next.config.js enables output: "export", then runs `next build`.
 * Produces ./out for Amplify manual (zip) hosting or any static host.
 */
process.env.STATIC_EXPORT = "1";
require("child_process").execSync("npx next build", {
  stdio: "inherit",
  env: process.env,
  shell: true,
});
