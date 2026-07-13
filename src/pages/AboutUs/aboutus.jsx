import { NavBar } from "../../components/navbar.jsx";
import { Footer } from "../../components/footer.jsx";
import { Cart } from "../../components/cart.jsx";
import { HeroSection, OurStorySection, StatsSection, AwardSection, LocationSection } from "./Components";
import "./Styles/aboutus.css";
export function AboutUs() {
  return (
    <>
      <NavBar />
      <div className="main-container">
        <HeroSection />
        <OurStorySection />
        <StatsSection />
        <AwardSection />
        <LocationSection />
        <Cart />
        <Footer />
      </div>
    </>
  );
}
