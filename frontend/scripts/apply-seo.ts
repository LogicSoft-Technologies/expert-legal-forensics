import { readFileSync, writeFileSync, readdirSync, statSync } from "fs";
import { join, relative, sep } from "path";

const APP_DIR = join(process.cwd(), "app");
const SKIP_DIRS = new Set(["node_modules", ".next", "api"]);

function findPageFiles(dir: string, results: string[] = []): string[] {
  for (const entry of readdirSync(dir)) {
    if (SKIP_DIRS.has(entry)) continue;
    const fullPath = join(dir, entry);
    const stat = statSync(fullPath);
    if (stat.isDirectory()) {
      findPageFiles(fullPath, results);
    } else if (entry === "page.tsx") {
      results.push(fullPath);
    }
  }
  return results;
}

function toRoutePath(pageFile: string): string {
  const rel = relative(APP_DIR, pageFile);
  const withoutFile = rel.split(sep).slice(0, -1).join("/");
  return withoutFile === "" ? "" : `/${withoutFile}`;
}

function main() {
  const pageFiles = findPageFiles(APP_DIR);
  let applied = 0;
  let skipped = 0;

  for (const file of pageFiles) {
    const routePath = toRoutePath(file);
    const source = readFileSync(file, "utf8");
    const relFile = relative(process.cwd(), file);

    if (source.includes("generatePageMetadata(")) continue;

    if (/^\s*["']use client["']/m.test(source)) {
      console.warn(`⚠  Skipped ${relFile} — Client Component, can't export metadata directly.`);
      skipped++;
      continue;
    }

    const routesConfigSrc = readFileSync(join(process.cwd(), "lib/seo/routes.config.ts"), "utf8");
    const keyPattern = new RegExp(`["']${routePath.replace(/[.*+?^${}()|[\]\\]/g, "\\$&")}["']\\s*:`);
    if (!keyPattern.test(routesConfigSrc)) {
      console.warn(`⚠  Skipped ${relFile} — no entry for "${routePath || "/"}" in lib/seo/routes.config.ts. Add one, then re-run.`);
      skipped++;
      continue;
    }

    const lines = source.split("\n");
    let lastImportIdx = -1;
    lines.forEach((line, i) => {
      if (/^import .+ from ["'].+["'];?\s*$/.test(line)) lastImportIdx = i;
    });

    const injection = [
      `import { generatePageMetadata } from "@/lib/seo/metadata";`,
      `import { ROUTES_CONFIG } from "@/lib/seo/routes.config";`,
      ``,
      `export const metadata = generatePageMetadata({`,
      `  ...ROUTES_CONFIG["${routePath}"],`,
      `  path: "${routePath}",`,
      `});`,
    ];

    lines.splice(lastImportIdx + 1, 0, "", ...injection);
    writeFileSync(file, lines.join("\n"), "utf8");
    console.log(`✔  Applied SEO metadata to ${relFile} (${routePath || "/"})`);
    applied++;
  }

  console.log(`\nDone. ${applied} page(s) updated, ${skipped} skipped.`);
}

main();