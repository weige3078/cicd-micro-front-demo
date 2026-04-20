import { Routes, Route } from "react-router-dom";
import Home from "./Home";
import VueLayout from "./VueLayout";

export default function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/vue/*" element={<VueLayout />} />
    </Routes>
  );
}
