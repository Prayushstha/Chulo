import { Footer } from "../../components/footer.jsx";
import { Cart } from "../../components/Cart/cart.jsx";
import { HeroSection, OurStorySection, StatsSection, AwardSection, LocationSection } from "./Components";
import "./Styles/aboutus.css";
export function AboutUs() {
  return (
    <>
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
