import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import pages from "./target/intermediate/manifest.json";
import { resolve } from "path";

const input = (pages as string[]).reduce((prev, page) => {
    // @ts-ignore
    prev[page] = resolve("target/intermediate", page);
    return prev;
}, {});

export default defineConfig({
    plugins: [react()],
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
            input,
        },
    },
});
