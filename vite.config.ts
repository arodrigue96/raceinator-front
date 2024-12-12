/// <reference types="vitest" />
import { defineConfig } from "vite";
import react from "@vitejs/plugin-react-swc";
import Inspect from "vite-plugin-inspect";

// https://vite.dev/config/
export default defineConfig({
  plugins: [
    react(),
    Inspect({
      build: true,
      outputDir: ".vite-inspect",
    }),
  ],
  test: {
    globals: true,
    environment: "jsdom",
    setupFiles: ["src/setupTest.ts"],
    coverage: {
      include: ["src/**/*.tsx", "src/**/*.ts"],
      exclude: [
        "src/main.tsx",
        "src/vite-env.d.ts",
        "src/**/*.test.tsx",
        "src/**/*.test.ts",
        "src/**/types.ts",
      ],
      reporter: ["lcov", "text"],
    },
  },
});
