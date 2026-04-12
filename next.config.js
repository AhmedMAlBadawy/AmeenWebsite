/** @type {import('next').NextConfig} */
const nextConfig = {
  // Standalone bundles traced server files for platforms like Amplify WEB_COMPUTE.
  // (Static `output: "export"` + `out/` does not produce the trace layout deploy expects.)
  output: "standalone",
  images: {
    unoptimized: true,
  },
};

module.exports = nextConfig;
