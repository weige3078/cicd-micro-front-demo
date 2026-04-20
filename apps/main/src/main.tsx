import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { HashRouter } from "react-router-dom";
import { registerMicroApps, start } from "qiankun";
import App from "./App";

registerMicroApps([
  {
    name: "vueApp",
    entry: import.meta.env.DEV
      ? "//localhost:7101"
      : "/cicd-micro-front-demo/sub-vue/",
    container: "#subapp-container",
    activeRule: (location) =>
      location.hash === "#/vue" || location.hash.startsWith("#/vue/"),
  },
]);

start({ sandbox: true });

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <HashRouter>
      <App />
    </HashRouter>
  </StrictMode>,
);
