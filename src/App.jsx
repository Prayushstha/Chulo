import "./App.css";
import { HashRouter, Route, Routes } from "react-router";
import { AboutUs } from "./pages/AboutUs/aboutus";
import { HomePage } from "./pages/HomePage/homepage";
import { FrontPage } from "./pages/FrontPage/frontpage";
import { Products } from "./pages/Products/product";
function App() {
  return (
    <HashRouter>
      <Routes>
        <Route path="/dashboard" element={<HomePage />}/>
        <Route path="/aboutus" element={<AboutUs />}/>
        <Route path="/" element={<FrontPage/>} />
        <Route path="/product/:id" element={<Products />} />
      </Routes>
    </HashRouter>
  );
}

export default App;
