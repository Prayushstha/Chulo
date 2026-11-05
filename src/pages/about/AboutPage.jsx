import { HeroSection, OurStorySection, StatsSection, AwardSection, LocationSection } from "./components/index.jsx";
import "./about.css";
export function AboutPage() {
  return (
    <>
      <div className="main-container">
        <HeroSection />
        <OurStorySection />
        <StatsSection />
        <AwardSection />
        <LocationSection />
      </div>
    </>
  );
}
