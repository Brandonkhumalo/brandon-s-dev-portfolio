import { defineConfig } from "vite";
import react from "@vitejs/plugin-react-swc";
import path from "path";

export default defineConfig(() => ({
  server: {
    host: "::",
    port: 5000,
    allowedHosts: ["ac4d957f-29ee-4853-86f3-19984b9dfc8b-00-2k52y45xelrs1.worf.replit.dev"],
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
