import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

export default defineConfig({
  plugins: [react()],
  base: "/cicd-micro-front-demo/",
  server: {
    port: 5173,
  },
});
