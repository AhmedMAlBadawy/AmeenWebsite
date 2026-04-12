/** @type {import('next').NextConfig} */
const staticExport =
  process.env.STATIC_EXPORT === "1" || process.env.STATIC_EXPORT === "true";

const nextConfig = {
  ...(staticExport ? { output: "export" } : {}),
  images: {
    unoptimized: true,
  },
};

module.exports = nextConfig;
