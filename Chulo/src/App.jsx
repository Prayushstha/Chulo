import "./App.css";
import { HashRouter, Route, Routes } from "react-router";
import { AboutUs } from "./pages/aboutus";
import { HomePage } from "./pages/homepage";
function App() {
  return (
    <HashRouter>
      <Routes>
        <Route path="/" element={<HomePage />}/>
        <Route path="/aboutus" element={<AboutUs />}/>


      </Routes>
    </HashRouter>
  );
}

export default App;
