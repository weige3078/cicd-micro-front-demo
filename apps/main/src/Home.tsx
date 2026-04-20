import { Link } from "react-router-dom";

export default function Home() {
  return (
    <div style={{ padding: 24 }}>
      <h1>基座（React）cicd测试</h1>
      <p>
        <Link to="/vue">进入 Vue 子应用 /vue</Link>
      </p>
    </div>
  );
}
