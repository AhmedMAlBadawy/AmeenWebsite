/** @type {import('next').NextConfig} */
const staticExport =
  process.env.STATIC_EXPORT === "1" || process.env.STATIC_EXPORT === "true";

const nextConfig = {
  ...(staticExport ? { output: "export" } : {}),
  images: {
    unoptimized: true,
    remotePatterns: [
      {
        protocol: "https",
        hostname: "admin.ameener.com",
        pathname: "/**",
      },
      {
        protocol: "https",
        hostname: "admin.testing.ameener.com",
        pathname: "/**",
      },
      {
        protocol: "https",
        hostname: "gateway.ameen.care",
        pathname: "/**",
      },
      {
        protocol: "https",
        hostname: "gateway.testing.ameener.com",
        pathname: "/**",
      },
    ],
  },
};

module.exports = nextConfig;
