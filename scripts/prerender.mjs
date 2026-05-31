import { mkdir, readFile, rm, writeFile } from "node:fs/promises";
import { dirname, resolve } from "node:path";
import { fileURLToPath, pathToFileURL } from "node:url";

const rootDir = resolve(dirname(fileURLToPath(import.meta.url)), "..");
const distDir = resolve(rootDir, "dist");
const ssrDir = resolve(rootDir, "dist-ssr");
const { render } = await import(pathToFileURL(resolve(ssrDir, "entry-server.js")));

const routes = [
  {
    pathname: "/",
    file: resolve(distDir, "index.html"),
  },
  {
    pathname: "/tratamentos/drenagem-linfatica-guimaraes/",
    file: resolve(distDir, "tratamentos", "drenagem-linfatica-guimaraes", "index.html"),
  },
  {
    pathname: "/tratamentos/drenagem-pos-operatorio-guimaraes/",
    file: resolve(distDir, "tratamentos", "drenagem-pos-operatorio-guimaraes", "index.html"),
  },
];

function getAttribute(tag, name) {
  const match = tag.match(new RegExp(`${name}="([^"]+)"`, "i"));
  return match?.[1];
}

function getHeroPreload(markup) {
  const sourceTag = markup.match(/<source\b[^>]*type="image\/webp"[^>]*>/i)?.[0];

  if (sourceTag) {
    const srcSet = getAttribute(sourceTag, "srcSet") ?? getAttribute(sourceTag, "srcset");
    const sizes = getAttribute(sourceTag, "sizes");

    if (srcSet?.includes(",")) {
      const sizeAttribute = sizes ? ` imagesizes="${sizes}"` : "";
      return `<link rel="preload" as="image" imagesrcset="${srcSet}"${sizeAttribute} fetchpriority="high" />`;
    }

    if (srcSet) {
      return `<link rel="preload" href="${srcSet}" as="image" fetchpriority="high" />`;
    }
  }

  const imgTag = markup.match(/<img\b[^>]*>/i)?.[0];
  const src = imgTag ? getAttribute(imgTag, "src") : undefined;
  return src ? `<link rel="preload" href="${src}" as="image" fetchpriority="high" />` : "";
}

function injectRoot(html, markup) {
  const rootMarkup = `<div id="root">${markup}</div>`;

  if (html.includes('<div id="root"></div>')) {
    return html.replace('<div id="root"></div>', rootMarkup);
  }

  return html.replace(/<div id="root">[\s\S]*?<\/div>/, rootMarkup);
}

function injectHeroPreload(html, preload) {
  if (!preload) {
    return html;
  }

  const withoutOldImagePreloads = html.replace(/\n\s*<link\s+rel="preload"[^>]+as="image"[^>]*\/?>/gi, "");
  return withoutOldImagePreloads.replace("</head>", `    ${preload}\n  </head>`);
}

for (const route of routes) {
  const markup = render(route.pathname);
  let html = await readFile(route.file, "utf8");
  html = injectRoot(html, markup);
  html = injectHeroPreload(html, getHeroPreload(markup));
  await mkdir(dirname(route.file), { recursive: true });
  await writeFile(route.file, html);
}

await rm(ssrDir, { recursive: true, force: true });
