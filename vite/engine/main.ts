import * as fs from "fs/promises";
import React from "react";
import { renderToString } from "react-dom/server";
import { resolve } from "path";

async function main() {
    const sourceDir = "src";
    const targetDir = "target";
    const intermediateDir = `${targetDir}/intermediate`;
    const intermediateAbsDir = resolve(intermediateDir).replace(/\\/g, "/");

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

    const templates = ["src/providers/template.tsx", "src/library/template.tsx"];
    const templateToItems = {
        "src/providers/template.tsx": [
            {
                path: "src/providers/ronald-pan.tsx",
                name: "ronald-pan.tsx",
                parentPath: "target/intermediate/providers",
                id: "7bQ8VtZRYsyWB9iJLR0V1R",
            },
        ],
        "src/library/template.tsx": [
            {
                path: "src/library/how-to-stay-healthy-in-the-holidays.tsx",
                name: "how-to-stay-healthy-in-the-holidays.tsx",
                parentPath: "target/intermediate/library",
                id: "3P03nUX5QpcEGzepk49NOi",
            },
        ],
    };

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

        // blindly copy typescript files that are not marked as pages or templates
        const componentPath = `${entry.parentPath}/${entry.name}`.replace(/\\/g, "/");
        if (!pages.includes(componentPath) && !templates.includes(componentPath)) {
            const inPath = `${entry.parentPath}/${entry.name}`;
            const outPath = inPath.replace(sourceDir, intermediateDir);
            const outParent = entry.parentPath.replace(sourceDir, intermediateDir);
            await fs.mkdir(outParent, { recursive: true });
            await fs.copyFile(inPath, outPath);
            continue;
        }

        if (pages.includes(componentPath)) {
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
            await fs.copyFile(componentPath, componentOutPath);

            // copy main script
            const mainContent = await fs.readFile("engine/client_main.tsx", {
                encoding: "utf-8",
            });
            const mainCompleteContent = mainContent
                .replace("<!--intermediate-->", intermediateAbsDir)
                .replace("<!--path-->", entry.name)
                .replace("<!--props-->", entry.name.replace(".tsx", ".props.json"));
            await fs.writeFile(mainPath.replace(sourceDir, intermediateDir), mainCompleteContent);

            // save props
            const propsPath = componentPath
                .replace(".tsx", ".props.json")
                .replace(sourceDir, intermediateDir);
            const props = JSON.stringify(data);
            await fs.writeFile(propsPath, props);
        }

        if (templates.includes(componentPath)) {
            // @ts-ignore: todo
            const items = templateToItems[componentPath];
            for (const item of items) {
                const basePath = item.path;
                const componentAbsPath = resolve(componentPath);
                const mainPath = basePath.replace(".tsx", ".main.tsx");
                const mainName = item.name.replace(".tsx", ".main.tsx");

                // load the page component
                const component = await import(`file://${componentAbsPath}`);

                // render page from react to html
                const data = await (component.query?.(item.id) ?? Promise.resolve({}));
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

                // make the parent dir; todo: make this more generic
                await fs.mkdir(item.parentPath, { recursive: true });

                // save rendered html
                const renderedPath = basePath
                    .replace(sourceDir, intermediateDir)
                    .replace(".tsx", ".html");
                await fs.writeFile(renderedPath, html);

                // save page component
                const componentOutPath = basePath.replace(sourceDir, intermediateDir);
                await fs.copyFile(componentPath, componentOutPath);

                // copy main script
                const mainContent = await fs.readFile("engine/client_main.tsx", {
                    encoding: "utf-8",
                });
                const mainCompleteContent = mainContent
                    .replace("<!--intermediate-->", intermediateAbsDir)
                    .replace("<!--path-->", item.name)
                    .replace("<!--props-->", item.name.replace(".tsx", ".props.json"));
                await fs.writeFile(
                    mainPath.replace(sourceDir, intermediateDir),
                    mainCompleteContent,
                );

                // save props
                const propsPath = basePath
                    .replace(".tsx", ".props.json")
                    .replace(sourceDir, intermediateDir);
                const props = JSON.stringify(data);
                await fs.writeFile(propsPath, props);
            }
        }
    }
}

main();
