import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { HashRouter } from "react-router-dom";
import { registerMicroApps, start } from "qiankun";
import App from "./App";
import { incHostCount } from "./hostState";
import { actions } from "./globalState";

registerMicroApps([
  {
    // 子应用名称
    name: "vueApp",
    // 子应用的在线页面地址或者js和css地址
    entry: import.meta.env.DEV
      ? "//localhost:7101"
      : "/cicd-micro-front-demo/sub-vue/",
      // 子应用挂载的目标容器
    container: "#subapp-container",
    // 显示某个子应用对应的路由规则
    activeRule: (location) =>
      location.hash === "#/vue" || location.hash.startsWith("#/vue/"),
    props: {
      incCount: () => incHostCount(),
      onGlobalStateChange: actions.onGlobalStateChange.bind(actions),
      setGlobalState: actions.setGlobalState.bind(actions),
    }
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
