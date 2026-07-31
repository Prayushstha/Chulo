import "./App.css";
import { HashRouter, Route, Routes } from "react-router";
import { AboutUs } from "./pages/AboutUs/aboutus";
import { HomePage } from "./pages/HomePage/homepage";
import { FrontPage } from "./pages/FrontPage/frontpage";
import { Products } from "./pages/Products/product";
import { NavBar } from "./components/navbar";
import { useState } from "react";
import { Cart } from "./components/Cart/cart";
function App() {
  // For toggling the cart sidebar
  const [cartActive, setCartActive] = useState(false);
  // for cart items
  const [cart,setCart] = useState([]);


  return (
    <HashRouter>
      <NavBar cartActive={cartActive} setCartActive={setCartActive} />
      <div className="main-content">
        <Cart cartActive={cartActive} setCartActive={setCartActive} cart={cart} setCart={setCart} />
        <Routes>
          <Route
            path="/dashboard"
            element={
              <HomePage cartActive={cartActive} setCartActive={setCartActive} cart={cart} setCart={setCart} />
            }
          />
          <Route
            path="/aboutus"
            element={
              <AboutUs cartActive={cartActive} setCartActive={setCartActive} />
            }
          />
          <Route
            path="/"
            element={
              <FrontPage
                cartActive={cartActive}
                setCartActive={setCartActive}
              />
            }
          />
          <Route path="/product/:id" element={<Products />} />
        </Routes>
      </div>
    </HashRouter>
  );
}

export default App;
