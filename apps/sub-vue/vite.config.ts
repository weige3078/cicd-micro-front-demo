import { defineConfig } from "vite";
import vue from "@vitejs/plugin-vue";
import qiankun from "vite-plugin-qiankun";

export default defineConfig({
  plugins: [vue(), qiankun("vueApp", { useDevMode: true })],
  base: "/cicd-micro-front-demo/sub-vue/",
  server: {
    port: 7101,
    origin: "http://localhost:7101",
    headers: {
      "Access-Control-Allow-Origin": "*",
    },
  },
});
