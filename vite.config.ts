import { resolve } from "path";
import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  resolve: {
    alias: {
      "@components": resolve(__dirname, "./src/components"),
      "@hooks": resolve(__dirname, "./src/hooks"),
      "@types": resolve(__dirname, "./src/types"),
      "@assets": resolve(__dirname, "./src/assets"),
      "@store": resolve(__dirname, "./src/store"),
      "@pages": resolve(__dirname, "./src/pages"),
      "@context": resolve(__dirname, "./src/context"),
      "@utils": resolve(__dirname, "./src/utils"),
    },
  },
});
