import { createReadStream, existsSync, statSync } from "node:fs";
import { extname, isAbsolute, join, normalize, relative, sep } from "node:path";
import { createServer } from "node:http";

const root = process.cwd();
const port = Number(process.env.PORT || 8080);
const allowedRootFiles = new Set(["index.html", "styles.css"]);
const allowedTopLevelDirs = new Set(["assets", "public"]);

const mimeTypes = {
  ".css": "text/css; charset=utf-8",
  ".html": "text/html; charset=utf-8",
  ".jpg": "image/jpeg",
  ".jpeg": "image/jpeg",
  ".js": "text/javascript; charset=utf-8",
  ".json": "application/json; charset=utf-8",
  ".png": "image/png",
  ".svg": "image/svg+xml",
  ".webp": "image/webp",
};

function resolvePath(urlPath) {
  let decodedPath;

  try {
    decodedPath = decodeURIComponent(urlPath);
  } catch {
    return null;
  }

  if (decodedPath.includes("\0")) {
    return null;
  }

  const cleanPath = decodedPath === "/" ? "/index.html" : decodedPath;
  const resolved = normalize(join(root, cleanPath));
  const relativePath = relative(root, resolved);

  if (relativePath.startsWith("..") || isAbsolute(relativePath)) {
    return null;
  }

  const segments = relativePath.split(sep);
  if (segments.some((segment) => segment.startsWith("."))) {
    return null;
  }

  const [topLevel] = segments;
  if (!allowedRootFiles.has(relativePath) && !allowedTopLevelDirs.has(topLevel)) {
    return null;
  }

  return resolved;
}

createServer((req, res) => {
  const url = new URL(req.url || "/", `http://${req.headers.host}`);
  const filePath = resolvePath(url.pathname);

  if (!filePath || !existsSync(filePath) || statSync(filePath).isDirectory()) {
    res.writeHead(404, { "Content-Type": "text/plain; charset=utf-8" });
    res.end("Not found");
    return;
  }

  const contentType = mimeTypes[extname(filePath).toLowerCase()] || "application/octet-stream";
  res.writeHead(200, {
    "Content-Security-Policy": "default-src 'self'; object-src 'none'; frame-ancestors 'none'",
    "Content-Type": contentType,
    "Referrer-Policy": "strict-origin-when-cross-origin",
    "X-Content-Type-Options": "nosniff",
    "X-Frame-Options": "DENY",
  });
  createReadStream(filePath).pipe(res);
}).listen(port, () => {
  console.log(`Static server running at http://localhost:${port}`);
});
