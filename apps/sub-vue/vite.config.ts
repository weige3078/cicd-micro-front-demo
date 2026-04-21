import { defineConfig } from "vite";
import vue from "@vitejs/plugin-vue";
// qiankun不支持vite框架作为子应用，所以要用这个插件辅助一下
import qiankun from "vite-plugin-qiankun";

export default defineConfig({
  plugins: [
    vue(), 
    // 这里的名称要和主应用改造的配置的name一致
    qiankun("vueApp", { useDevMode: true })
  ],
  base: "/cicd-micro-front-demo/sub-vue/",
  server: {
    port: 7101,
    origin: "http://localhost:7101",
    headers: {
      "Access-Control-Allow-Origin": "*",
    },
  },
});
