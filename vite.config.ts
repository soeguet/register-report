/// <reference types="vitest" />
import react from "@vitejs/plugin-react-swc";
import { defineConfig } from "vite";

// https://vitejs.dev/config/
export default defineConfig({
    build: {
        sourcemap: true,
    },
    plugins: [react()],
    test: {
        root: "./src",
        globals: true,
        environment: "jsdom",
        setupFiles: "./src/test/setup.ts",
        // include: ["src/**/*.{js,ts}"],
        includeSource: ["src/**/*.{js,ts}"],
        // css: true,
    },
});
