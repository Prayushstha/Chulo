import "./App.css";
import { HashRouter, Route, Routes } from "react-router";
import { AboutUs } from "./pages/aboutus";
import { HomePage } from "./pages/homepage";
import { FrontPage } from "./pages/frontpage";
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
