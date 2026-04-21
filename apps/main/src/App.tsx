import { Routes, Route, useLocation } from "react-router-dom";
import Home from "./Home";
import { useEffect, useState } from "react";
import { bindHostCountSetter } from "./hostState";
import { actions } from "./globalState";
export default function App() {
  const location = useLocation();
  const showVue = location.pathname === "/vue" || location.pathname.startsWith("/vue/");
  const [count,setCount] = useState(0);
  useEffect(() => {
    bindHostCountSetter(setCount);
    actions.onGlobalStateChange?.((state: any) => {
      if (typeof state?.count === "number") setCount(state.count);
    }, true);
  }, []);
  return (
    <>
      <div style={{ display: showVue ? "block" : "none", padding: 24 }}>
        <h3>主应用的数据：{count}</h3>
        <p>子应用挂载点：</p>
        <div
          id="subapp-container"
          style={{ minHeight: 240, border: "1px dashed #ccc" }}
        >
          <div id="sub-vue-root" />
        </div>
      </div>

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/vue/*" element={null} />
      </Routes>
    </>
  );
}
