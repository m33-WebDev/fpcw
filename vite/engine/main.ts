import * as fs from "fs/promises";
import React from "react";
import { renderToString } from "react-dom/server";
import { resolve } from "path";
import { InstanceInfo } from "./instance";
import { pages } from "./pages";
import * as dirs from "./dirs";

async function main() {
    const engine = new Engine();
    engine.compile();
}

/**
 * Rendering engine.
 */
class Engine {
    readonly pages: string[] = [];

    /**
     * Compiles site content.
     */
    async compile() {
        // Ensure output dir exists
        await fs.mkdir(dirs.intermediate, { recursive: true });

        // Identify all source files
        const sources = await fs.readdir(dirs.source, { withFileTypes: true, recursive: true });
        for (const entry of sources) {
            const source = `${entry.parentPath}/${entry.name}`.replace(/\\/g, "/");

            // If directory, skip
            if (entry.isDirectory()) {
                continue;
            }

            // If not TypeScript or not listed as page, copy as-is
            if (!entry.name.endsWith(".tsx") || !pages.includes(source)) {
                const out = source.replace(dirs.source, dirs.intermediate);
                const outParent = entry.parentPath.replace(dirs.source, dirs.intermediate);
                await fs.mkdir(outParent, { recursive: true });
                await fs.copyFile(source, out);
                continue;
            }

            // If template file, calculate instances and then create pages
            if (source.endsWith(".template.tsx")) {
                const module = await import(`file://${resolve(source)}`);
                const instances: InstanceInfo<any>[] = await module.instances();
                for (const instance of instances) {
                    await this.createPage(instance.path, source, instance.params);
                }
                continue;
            }

            // Otherwise, create single page
            const path = source.replace("src/", "").replace(".tsx", "");
            await this.createPage(path, source);
        }

        this.saveManifest();
        this.saveSitemap();
    }

    /**
     * Creates a page.
     *
     * The `path` is the output path of the page, relative to the site root. For
     * instance, a value of `appointments` will result in a page located at
     * `/appointments`. The `source` is the path to the source module that
     * represents the page. The `params` are opaque parameters passed to the page
     * query and are provided only for template instances.
     */
    async createPage(path: string, source: string, params?: any) {
        console.info(`creating page: ${path}`);

        // Calculate leaf name of the page
        const name = path.split("/").at(-1);

        // Load module
        const module = await import(`file://${resolve(source)}`);

        // Load props
        const props = await (module.query?.(params) ?? Promise.resolve({}));

        // Load head content
        const head = module.Head ? renderToString(React.createElement(module.Head, props)) : "";

        // Load body content
        const body = renderToString(React.createElement(module.default, props));

        // Render HTML
        const html = (await fs.readFile("engine/base.html", { encoding: "utf-8" }))
            .replace("<!--head-->", head)
            .replace("<!--body-->", body)
            .replace("<!--main-->", `${name}.main.tsx`);

        // Ensure output dir exists
        const parts = path.split("/");
        const base = parts.slice(0, parts.length - 1).join("/");
        await fs.mkdir(`${dirs.intermediate}/${base}`, { recursive: true });

        // Save HTML
        await fs.writeFile(`${dirs.intermediate}/${path}.html`, html);

        // Save module
        await fs.copyFile(source, `${dirs.intermediate}/${path}.source.tsx`);

        // Save props
        await fs.writeFile(`${dirs.intermediate}/${path}.props.json`, JSON.stringify(props));

        // Render main script
        const main = (await fs.readFile("engine/client_main.tsx", { encoding: "utf-8" }))
            .replace("<!--intermediate-->", resolve(dirs.intermediate).replace(/\\/g, "/"))
            .replace("<!--source-->", `${name}.source.tsx`)
            .replace("<!--props-->", `${name}.props.json`);

        // Save main script
        await fs.writeFile(`${dirs.intermediate}/${path}.main.tsx`, main);

        // Register page entry point
        this.pages.push(`${path}.html`);
    }

    /**
     * Saves a manifest of generated pages.
     */
    async saveManifest() {
        await fs.writeFile(`${dirs.intermediate}/manifest.json`, JSON.stringify(this.pages));
    }

    /**
     * Saves a sitemap.
     */
    async saveSitemap() {
        const base = "https://familypsychiatry.us";
        const urls = [];
        for (const page of this.pages) {
            const path = page.replace(".html", "");
            const url = `${base}/${path}`;
            urls.push(url);
        }
        await fs.writeFile(`${dirs.intermediate}/public/sitemap.txt`, urls.join("\n"));
    }
}

main();
