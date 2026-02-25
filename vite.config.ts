import { defineConfig } from "vite";
import react from "@vitejs/plugin-react-swc";
import path from "path";

export default defineConfig(() => ({
  server: {
    host: "::",
    port: 5000,
    allowedHosts: [
      "47fdbec6-0652-4c95-bb70-7a3458418797-00-1uqsucsd2nrjg.picard.replit.dev",
      "ac4d957f-29ee-4853-86f3-19984b9dfc8b-00-2k52y45xelrs1.worf.replit.dev"
    ],
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
