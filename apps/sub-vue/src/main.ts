import { createApp } from "vue";
import App from "./App.vue";
import router from "./router";
import {
  renderWithQiankun,
  qiankunWindow,
} from "vite-plugin-qiankun/dist/helper";

type QiankunProps = {
  container?: HTMLElement;
  incCount?: () => void;
  onGlobalStateChange?: (
    cb: (state: any, prev: any) => void,
    fireImmediately?: boolean,
  ) => void;
  setGlobalState?: (state: Record<string, any>) => void;
};

let app: ReturnType<typeof createApp> | null = null;

function render(props: QiankunProps = {}) {
  const { container } = props;
  app = createApp(App);
  app.provide("qiankunProps", props);
  app.use(router);
  const mountEl = container?.querySelector("#sub-vue-root") ?? "#app";
  app.mount(mountEl as Element);
}

renderWithQiankun({
  bootstrap() {
    console.log('子应用初始化只执行一次');
  },
  mount(props) {
    console.log('主应用传过来的props',props);
    const p = props as QiankunProps;
    p.onGlobalStateChange?.((state, prev) => {
      console.log("globalState:", state, prev);
    }, true);
    render(props as QiankunProps);
  },
  unmount() {
    app?.unmount();
    app = null;
  },
  update() {},
});

// 这段判断表示：如果不是在 qiankun 微前端环境中运行（也就是作为独立页面单独启动时），就直接执行 render() 挂载应用。
// 当作为 qiankun 子应用被加载时，qiankunWindow.__POWERED_BY_QIANKUN__ 会为 true，此时由主应用控制 mount。
if (!qiankunWindow.__POWERED_BY_QIANKUN__) {
  render();
}
