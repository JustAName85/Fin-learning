import { defineConfig } from "vite";
import react from "@vitejs/plugin-react-swc";
import tailwindcss from "@tailwindcss/vite";
import path from "path";

// https://vite.dev/config/
export default defineConfig({
  plugins: [react(), tailwindcss()],
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "./src"),
    },
  },
  build: {
    outDir: "./build",
  },
  server: {
    allowedHosts: [
      "61ae-2402-800-61c7-e302-4803-6154-b8ea-a79a.ngrok-free.app",
    ],
  },
});
