import { NavBar } from "../../components/navbar";
import { Footer } from "../../components/footer";
import "./Styles/frontpage.css";
import { LoginContainer, DescriptionAndReviewSection, HeroSection } from "./Components";
import { useState } from "react";
import { Cart } from "../../components/cart.jsx";
export function FrontPage({cartActive, setCartActive}) {
  const [ShowLoginPanel, setShowLoginPanel] = useState(false);
  const [ShowReview, setShowReview] = useState(null);
  return (
    <>
      <NavBar cartActive={cartActive} setCartActive={setCartActive} />
      <MainContent
        setShowLoginPanel={setShowLoginPanel}
        ShowReview={ShowReview}
        setShowReview={setShowReview}
        cartActive={cartActive} setCartActive={setCartActive} 
      />
      
      <LoginContainer
        showLoginPanel={ShowLoginPanel}
        setShowLoginPanel={setShowLoginPanel}
      />
      <Footer />
    </>
  );
}

function MainContent({ setShowLoginPanel, ShowReview, setShowReview, cartActive, setCartActive }) {
  return (
    <>
      <HeroSection setShowLoginPanel={setShowLoginPanel} />
      <Cart cartActive={cartActive} setCartActive={setCartActive} />
      <DescriptionAndReviewSection
        ShowReview={ShowReview}
        setShowReview={setShowReview}
      />
    </>
  );
}
