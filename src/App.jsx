import "./App.css";
import { HashRouter, Route, Routes } from "react-router";
import { AboutUs } from "./pages/AboutUs/aboutus";
import { HomePage } from "./pages/HomePage/homepage";
import { FrontPage } from "./pages/FrontPage/frontpage";
function App() {
  return (
    <HashRouter>
      <Routes>
        <Route path="/dashboard" element={<HomePage />}/>
        <Route path="/aboutus" element={<AboutUs />}/>
        <Route path="/" element={<FrontPage/>} />
      </Routes>
    </HashRouter>
  );
}

export default App;
