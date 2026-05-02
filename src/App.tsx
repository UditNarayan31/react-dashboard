import { useState } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Navbar from "./components/HorizontalNav";
import Home from "./pages/Home";
import About from "./pages/About";
import NotFound from "./pages/NotFound";
import VerticalNav from "./components/VerticalNav";
import { Settings } from "lucide-react";
import { themeColors } from "./theme/color";

const App = () => {
  const [bgColor, setBgColor] = useState("#1f2937");
  const [open, setOpen] = useState(false);

  return (
    <BrowserRouter>
      <Navbar />

      <div className="fixed top-20 right-0 z-50">
        <button
          onClick={() => setOpen(!open)}
          className="p-2 rounded-full bg-white shadow hover:scale-105 transition"
        >
          <Settings size={18} />
        </button>

        {open && (
          <div className="mt-2 p-2 bg-white rounded-lg shadow-lg flex gap-2 flex-wrap w-40">
            {themeColors.map((color) => (
              <button
                key={color}
                onClick={() => {
                  setBgColor(color);
                  setOpen(false);
                }}
                className="w-6 h-6 rounded-full border border-gray-300"
                style={{ backgroundColor: color }}
              />
            ))}
          </div>
        )}
      </div>

      <div
        className="flex min-h-screen overflow-hidden transition-all duration-300"
        style={{ backgroundColor: bgColor }}
      >
        <VerticalNav bgColor={bgColor} />

        <div className="flex-1 p-4">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="*" element={<NotFound />} />
          </Routes>
        </div>
      </div>
    </BrowserRouter>
  );
};

export default App;
