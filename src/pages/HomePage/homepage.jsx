import { NavBar } from "../../components/navbar.jsx";
import { ImageSlider } from "./Components/imageslider.jsx";
import { SideBar } from "./Components/sidebar.jsx";
import './Styles/homepage.css'
import { CategorySection } from "./Components/HomepageCategorySection.jsx";
const categories = {
  "Around-The-Globe": [1, 2, 3, 4, 5],
  Trending: [4, 2, 3, 1, 6],
  Dessert: [7, 8, 9, 10],
  Healthy: [11, 12, 13, 14, 15],
  Desi: [16, 17, 18],
};

export function HomePage() {

  return (
    <>
      <NavBar />
      <ImageSlider />
      <div className="name">
        <p id="categories">CATEGORIES</p>
      </div>
      <MainContent />
    </>
  );
}

function MainContent() {
  return (
    <div className="food-preview-container">
      <SideBar />

      <div className="main-content">
        <CategorySection
          id="Around-The-Globe"
          title="AROUND THE GLOBE"
          itemIds={categories["Around-The-Globe"]}
        />
        <CategorySection id="Trending" title="Trending" itemIds={categories.Trending} showRanks />
        <CategorySection id="Dessert" title="DESSERT" itemIds={categories.Dessert} />
        <CategorySection id="Healthy" title="Healthy Option" itemIds={categories.Healthy} />
        <CategorySection id="Desi" title="Desi Foods" itemIds={categories.Desi} />
      </div>
    </div>
  );
}



