import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import { fileURLToPath, URL } from "node:url";

export default defineConfig({
  base: "./",
  root: "client",
  plugins: [react()],
  resolve: { alias: { "@": fileURLToPath(new URL("./client/src", import.meta.url)) } },
  build: { outDir: "../dist/public", emptyOutDir: true },
});
