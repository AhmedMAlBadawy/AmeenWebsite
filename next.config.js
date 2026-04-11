/** @type {import('next').NextConfig} */
const nextConfig = {
  // Enable static export output to generate the `out` directory during `next build`.
  output: "export",
  images: {
    // Disable Next.js image optimization so `next/image` works with static export.
    unoptimized: true,
  },
};

module.exports = nextConfig;
