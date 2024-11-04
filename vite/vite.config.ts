import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

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
});
