/** @type {import('next').NextConfig} */
const staticExport =
  process.env.STATIC_EXPORT === "1" || process.env.STATIC_EXPORT === "true";

// If the site is served under a subpath (e.g. https://host/myapp/), set for static builds:
//   NEXT_STATIC_BASE_PATH=/myapp
// Then rebuild (yarn build:static). Omit for root deploys like https://xxx.amplifyapp.com/
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

// Inlined for pages/_document: <base> + assetPrefix "." so "./_next/..." always resolves to site root
// (without <base>, /blogs/* would resolve ./_next to /blogs/_next and break CSS/images).
const htmlBaseHref = staticExport
  ? basePath
    ? `${basePath.replace(/\/+$/, "")}/`
    : "/"
  : "";

const nextConfig = {
  // Relative asset prefix + <base href> (see _document.js) fixes hosts where "/_next/..." is misrouted.
  ...(staticExport ? { output: "export", assetPrefix: "." } : {}),
  ...(basePath ? { basePath } : {}),
  env: {
    NEXT_PUBLIC_STATIC_EXPORT_BASE: staticExport ? "1" : "",
    NEXT_PUBLIC_HTML_BASE_HREF: htmlBaseHref,
  },
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
