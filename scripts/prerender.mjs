import { mkdir, readFile, rm, writeFile } from "node:fs/promises";
import { dirname, resolve } from "node:path";
import { fileURLToPath, pathToFileURL } from "node:url";

const rootDir = resolve(dirname(fileURLToPath(import.meta.url)), "..");
const distDir = resolve(rootDir, "dist");
const ssrDir = resolve(rootDir, "dist-ssr");
const { render, serviceGroups } = await import(pathToFileURL(resolve(ssrDir, "entry-server.js")));

// Prices live only in serviceGroups (src/App.tsx). The JSON-LD in the HTML entries
// carries no numbers; they are filled in here so Google always sees the site's prices.
function parsePrice(price) {
  const value = Number(price.replace("€", "").trim());
  if (!Number.isFinite(value)) {
    throw new Error(`Invalid price "${price}" in serviceGroups`);
  }
  return value;
}

const priceByName = new Map(
  serviceGroups.flatMap((group) => group.items.map((item) => [item.name, parsePrice(item.price)])),
);

function applyServicePrices(node, file) {
  if (Array.isArray(node)) {
    node.forEach((child) => applyServicePrices(child, file));
    return;
  }
  if (!node || typeof node !== "object") {
    return;
  }

  if (node["@type"] === "Offer" && node.itemOffered?.name && node.priceSpecification) {
    const price = priceByName.get(node.itemOffered.name);
    if (price === undefined) {
      throw new Error(`${file}: JSON-LD offer "${node.itemOffered.name}" has no matching service in src/App.tsx`);
    }
    node.priceSpecification.price = price;
  }

  if (node["@type"] === "AggregateOffer" && node.url) {
    const { pathname } = new URL(node.url);
    const group = serviceGroups.find((candidate) => candidate.secondaryCta?.href === pathname);
    if (!group) {
      throw new Error(`${file}: JSON-LD AggregateOffer for ${pathname} has no matching service group in src/App.tsx`);
    }
    const prices = group.items.map((item) => parsePrice(item.price));
    Object.assign(node, {
      lowPrice: Math.min(...prices),
      highPrice: Math.max(...prices),
      offerCount: prices.length,
    });
  }

  Object.values(node).forEach((child) => applyServicePrices(child, file));
}

function injectServicePrices(html, file) {
  return html.replace(
    /(<script type="application\/ld\+json">)([\s\S]*?)(\n(\s*)<\/script>)/g,
    (_match, open, json, close, indent) => {
      const data = JSON.parse(json);
      applyServicePrices(data, file);
      const body = JSON.stringify(data, null, 2)
        .split("\n")
        .map((line) => `${indent}  ${line}`)
        .join("\n");
      return `${open}\n${body}${close}`;
    },
  );
}

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
  html = injectServicePrices(html, route.file);
  await mkdir(dirname(route.file), { recursive: true });
  await writeFile(route.file, html);
}

await rm(ssrDir, { recursive: true, force: true });
