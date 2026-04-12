/** @type {import('next').NextConfig} */
const staticExport =
  process.env.STATIC_EXPORT === "1" || process.env.STATIC_EXPORT === "true";

// Only if the live URL includes a path prefix, e.g. https://host/myapp/ (rare on Amplify root):
//   NEXT_STATIC_BASE_PATH=/myapp
let basePath = process.env.NEXT_STATIC_BASE_PATH;
if (typeof basePath === "string") {
  basePath = basePath.trim();
  if (basePath === "" || basePath === "/") {
    basePath = undefined;
  } else if (!basePath.startsWith("/")) {
    basePath = `/${basePath}`;
  }
  basePath = basePath.replace(/\/+$/, "") || undefined;
} else {
  basePath = undefined;
}

const nextConfig = {
  // Default export uses absolute "/_next/..." — correct for Amplify when zip root is index.html + _next/
  ...(staticExport ? { output: "export" } : {}),
  ...(basePath ? { basePath } : {}),
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
