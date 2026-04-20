import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { BrowserRouter } from "react-router-dom";
import { registerMicroApps, start } from "qiankun";
import App from "./App";

registerMicroApps([
  {
    name: "vueApp",
    entry: "//localhost:7101",
    container: "#subapp-container",
    activeRule: (location) => location.pathname.startsWith("/vue"),
  },
]);

start({ sandbox: true });

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </StrictMode>,
);
