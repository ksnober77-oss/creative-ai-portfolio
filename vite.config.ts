import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

export default defineConfig({
  base: "./",
  plugins: [react()],
  resolve: { alias: { "@": "/home/ubuntu/creative-ai-portfolio/client/src" } },
  root: "/home/ubuntu/creative-ai-portfolio/client",
  build: { outDir: "../dist/public", emptyOutDir: true },
});
