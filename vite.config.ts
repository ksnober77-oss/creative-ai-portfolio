import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import { fileURLToPath, URL } from "node:url";

const projectRoot = fileURLToPath(new URL(".", import.meta.url));
const clientRoot = fileURLToPath(new URL("./client", import.meta.url));
const staticOutput = fileURLToPath(new URL("./dist/public", import.meta.url));

export default defineConfig({
  base: "./",
  root: clientRoot,
  plugins: [react()],
  resolve: { alias: { "@": fileURLToPath(new URL("./client/src", import.meta.url)) } },
  build: { outDir: staticOutput, emptyOutDir: true },
  server: { fs: { allow: [projectRoot] } },
});
