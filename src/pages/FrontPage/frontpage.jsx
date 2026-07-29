import { Footer } from "../../components/footer";
import "./Styles/frontpage.css";
import { LoginContainer, DescriptionAndReviewSection, HeroSection } from "./Components";
import { useState } from "react";
export function FrontPage({cartActive, setCartActive}) {
  const [ShowLoginPanel, setShowLoginPanel] = useState(false);
  const [ShowReview, setShowReview] = useState(null);
  return (
    <>
      <MainContent
        setShowLoginPanel={setShowLoginPanel}
        ShowReview={ShowReview}
        setShowReview={setShowReview}
      
      /> 
      <LoginContainer
        showLoginPanel={ShowLoginPanel}
        setShowLoginPanel={setShowLoginPanel}
      />
      <Footer />
    </>
  );
}
function MainContent({ setShowLoginPanel, ShowReview, setShowReview}) {
  return (
    <>
      <HeroSection setShowLoginPanel={setShowLoginPanel} />
      <DescriptionAndReviewSection
        ShowReview={ShowReview}
        setShowReview={setShowReview}
      />
    </>
  );
}
