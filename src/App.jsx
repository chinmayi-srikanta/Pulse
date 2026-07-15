import { BrowserRouter, Routes, Route } from "react-router-dom";

import Home from "./pages/home";
import Products from "./pages/products";
import Technology from "./pages/technology";
import Applications from "./pages/applications";
import Contact from "./pages/contact";
import ScrollToHash from "./components/scrolltohash/scrolltohash";
function App() {
  return (
    <BrowserRouter>
    <ScrollToHash/>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/products" element={<Products />} />
        <Route path="/technology" element={<Technology />} />
        <Route path="/applications" element={<Applications />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;