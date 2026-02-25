import { defineConfig } from "vite";
import react from "@vitejs/plugin-react-swc";
import path from "path";

export default defineConfig(() => ({
  server: {
    host: "::",
    port: 5000,
    allowedHosts: [
      "26f02aef-7abd-419f-88f0-4b65e8c919d9-00-9zsidpunvzlq.kirk.replit.dev",
      ".replit.dev",
      ".replit.app"
    ],
    cors: true,
    hmr: {
      overlay: false,
    },
  },
  plugins: [react()],
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "./src"),
    },
  },
}));
