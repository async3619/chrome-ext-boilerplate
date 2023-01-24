import * as path from "path";

import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import { crx } from "@crxjs/vite-plugin";
import eslint from "vite-plugin-eslint";
import svgr from "vite-plugin-svgr";

import manifest from "./manifest.json";

// https://vitejs.dev/config/
export default defineConfig({
    resolve: {
        alias: {
            react: path.resolve("./node_modules/react"),
        },
    },
    plugins: [
        react({
            babel: {
                plugins: ["@emotion"],
            },
        }),
        eslint(),
        crx({ manifest }),
        svgr(),
    ],
});
