export default function VueLayout() {
  return (
    <div style={{ padding: 24 }}>
      <p>子应用挂载点：</p>
      <div
        id="subapp-container"
        style={{ minHeight: 240, border: "1px dashed #ccc" }}
      >
        <div id="app" />
      </div>
    </div>
  );
}
