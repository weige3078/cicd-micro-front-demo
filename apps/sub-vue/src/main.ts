import { createApp } from "vue";
import App from "./App.vue";
import router from "./router";
import {
  renderWithQiankun,
  qiankunWindow,
} from "vite-plugin-qiankun/dist/helper";

let app: ReturnType<typeof createApp> | null = null;

function render(props: { container?: HTMLElement } = {}) {
  const { container } = props;
  app = createApp(App);
  app.use(router);
  const mountEl = container?.querySelector("#app") ?? "#app";
  app.mount(mountEl as Element);
}

renderWithQiankun({
  bootstrap() {},
  mount(props) {
    render(props);
  },
  unmount() {
    app?.unmount();
    app = null;
  },
  update() {},
});

if (!qiankunWindow.__POWERED_BY_QIANKUN__) {
  render();
}
