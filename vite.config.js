import { defineConfig } from "vite";
import react from "@vitejs/plugin-react-swc";
import pagesPlugin from "vite-plugin-pages";
import generateSitemap from "vite-plugin-pages-sitemap";

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    react(),
    pagesPlugin({
      onRoutesGenerated: (routes) => generateSitemap({ routes }),
    }),
  ],
});
