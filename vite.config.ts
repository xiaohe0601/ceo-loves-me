import { defineConfig } from "vite";
import ImgPreload from "vite-plugin-img-preload";

export default defineConfig({
  plugins: [
    ImgPreload()
  ]
});