import { base_URL } from "../enviroments/enviroments";

/**
 * CMS paths are often relative. On the deployed site the browser would otherwise
 * request https://<amplify-host>/uploads/... and 404. Absolute and data URLs pass through.
 */
export function resolveMediaUrl(path) {
  if (path == null || path === "") return "";
  const s = String(path).trim();
  if (
    s.startsWith("http://") ||
    s.startsWith("https://") ||
    s.startsWith("data:") ||
    s.startsWith("blob:")
  ) {
    return s;
  }
  if (s.startsWith("//")) {
    return `https:${s}`;
  }
  const base = base_URL.replace(/\/+$/, "");
  const pathPart = s.startsWith("/") ? s : `/${s}`;
  return `${base}${pathPart}`;
}
