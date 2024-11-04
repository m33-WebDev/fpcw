import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import pages from "./target/intermediate/manifest.json";
import { resolve } from "path";
import { VitePluginRadar as radar } from "vite-plugin-radar";

/**
 * Get build entry points.
 */
function entrypoints() {
    const entries = {};
    for (const page of pages) {
        // @ts-ignore: todo
        entries[page] = resolve("target/intermediate", page);
    }
    return entries;
}

export default defineConfig({
    plugins: [react(), radar({ analytics: { id: "G-QYQZ5QLG34" } })],
    css: {
        preprocessorOptions: {
            scss: {
                api: "modern-compiler",
                // silence warnings until the following issues are resolved
                // upstream: https://github.com/jgthms/bulma/issues/3907,
                // https://github.com/jgthms/bulma/issues/3920
                quietDeps: true,
            },
        },
    },
    build: {
        rollupOptions: {
            input: entrypoints(),
        },
    },
});
