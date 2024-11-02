import * as fs from "fs/promises";
import React from "react";
import { renderToString } from "react-dom/server";
import { resolve } from "path";

async function main() {
    const sourceDir = "src";
    const targetDir = "target";
    const intermediateDir = `${targetDir}/intermediate`;

    // create build directory
    await fs.mkdir(intermediateDir, { recursive: true });

    // read all files from source dir
    const entries = await fs.readdir(sourceDir, {
        withFileTypes: true,
        recursive: true,
    });

    const pages = [
        "src/404.tsx",
        "src/appointments.tsx",
        "src/brain-testing.tsx",
        "src/careers.tsx",
        "src/contact.tsx",
        "src/formsuccess.tsx",
        "src/gallery.tsx",
        "src/index.tsx",
        "src/library.tsx",
        "src/providers.tsx",
        "src/services.tsx",
        "src/tms.tsx",
    ];

    // render all pages to intermediate format
    for (const entry of entries) {
        // skip directories
        if (entry.isDirectory()) {
            continue;
        }

        // blindly copy anything that is not typescript
        if (!entry.name.endsWith(".tsx")) {
            const inPath = `${entry.parentPath}/${entry.name}`;
            const outPath = inPath.replace(sourceDir, intermediateDir);
            const outParent = entry.parentPath.replace(sourceDir, intermediateDir);
            await fs.mkdir(outParent, { recursive: true });
            await fs.copyFile(inPath, outPath);
            continue;
        }

        // blindly copy typescript files that are not marked as pages
        const componentPath = `${entry.parentPath}/${entry.name}`.replace(/\\/g, "/");
        if (!pages.includes(componentPath)) {
            const inPath = `${entry.parentPath}/${entry.name}`;
            const outPath = inPath.replace(sourceDir, intermediateDir);
            const outParent = entry.parentPath.replace(sourceDir, intermediateDir);
            await fs.mkdir(outParent, { recursive: true });
            await fs.copyFile(inPath, outPath);
            continue;
        }

        const componentAbsPath = resolve(componentPath);
        const mainPath = componentPath.replace(".tsx", ".main.tsx");
        const mainName = entry.name.replace(".tsx", ".main.tsx");

        // load the page component
        const component = await import(`file://${componentAbsPath}`);

        // render page from react to html
        const data = await (component.query?.() ?? Promise.resolve({}));
        const head = component.Head
            ? renderToString(React.createElement(component.Head, data))
            : "";
        const node = React.createElement(component.default, data);
        const body = renderToString(node);
        const template = await fs.readFile("engine/base.html", {
            encoding: "utf-8",
        });
        const html = template
            .replace("<!--head-->", head)
            .replace("<!--body-->", body)
            .replace("<!--main-->", mainName);

        // save rendered html
        const renderedPath = componentPath
            .replace(sourceDir, intermediateDir)
            .replace(".tsx", ".html");
        await fs.writeFile(renderedPath, html);

        // save page component
        const componentOutPath = componentPath.replace(sourceDir, intermediateDir);
        fs.copyFile(componentPath, componentOutPath);

        // copy main script
        const mainContent = await fs.readFile("engine/client_main.tsx", {
            encoding: "utf-8",
        });
        const mainCompleteContent = mainContent
            .replace("<!--path-->", entry.name)
            .replace("<!--props-->", JSON.stringify(data));
        await fs.writeFile(mainPath.replace(sourceDir, intermediateDir), mainCompleteContent);
    }
}

main();
