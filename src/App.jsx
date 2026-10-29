import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/home";
import Bmi from "./pages/Bmi";
import Bmr from "./pages/Bmr";
import Car from "./pages/Car";
export default function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/bmi" element={<bmi />} />
          <Route path="/bmr" element={<bmr />} />
          <Route path="/car" element={<car />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}
