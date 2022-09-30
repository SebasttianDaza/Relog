import * as path from "path";

import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "src"),
      "@Components": path.resolve(__dirname, "src/Components"),
      "@Errors": path.resolve(__dirname, "src/Errors"),
      "@Hooks": path.resolve(__dirname, "src/Hooks"),
      "@Pages": path.resolve(__dirname, "src/Pages"),
      "@Style-components": path.resolve(__dirname, "src/Styled-components"),
      "@Utils": path.resolve(__dirname, "src/Utils"),
      "@Services": path.resolve(__dirname, "src/Services"),
      "@Themes": path.resolve(__dirname, "src/Themes"),
    },
  },
});
