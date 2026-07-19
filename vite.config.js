import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

export default defineConfig({
  plugins: [react()],
  server: {
    host: "127.0.0.1",
  },
  build: {
    rollupOptions: {
      output: {
        manualChunks(id) {
          if (id.includes("node_modules")) {
            if (id.includes("@supabase")) return "vendor-supabase";
            if (id.includes("lucide-react")) return "vendor-icons";
            if (id.includes("i18next") || id.includes("react-i18next")) {
              return "vendor-i18n";
            }
            if (
              id.includes("/react/") ||
              id.includes("/react-dom/") ||
              id.includes("/react-router")
            ) {
              return "vendor-react";
            }
            return "vendor-runtime";
          }

          if (id.endsWith("/src/locales/en.js")) return "locale-en";
          if (id.endsWith("/src/locales/zh-hk.js")) return "locale-zh-hk";
          if (id.endsWith("/src/locales/ar.js")) return "locale-ar";
        },
      },
    },
  },
});
