import { defineConfig } from "vite";
import react from "@vitejs/plugin-react-swc";
import { crx } from "@crxjs/vite-plugin";
import eslint from "vite-plugin-eslint";

import manifest from "./manifest.json";

// https://vitejs.dev/config/
export default defineConfig({
    plugins: [react(), eslint(), crx({ manifest })],
});
