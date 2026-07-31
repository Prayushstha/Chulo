import "./Styles/homepage.css";
import { CategorySection, SideBar, ImageSlider } from "./Components";
const categories = {
  "Around-The-Globe": [1, 2, 3, 4, 5],
  Trending: [4, 2, 3, 1, 6],
  Dessert: [7, 8, 9, 10],
  Healthy: [11, 12, 13, 14, 15],
  Desi: [16, 17, 18],
};

export function HomePage({ cart, setCart }) {
  return (
    <>
      <ImageSlider />
      <div className="name">
        <p id="categories">CATEGORIES</p>
      </div>
      <MainContent cart={cart} setCart={setCart} />
    </>
  );
}

function MainContent({ cart, setCart }) {
  return (
    <div className="food-preview-container">
      <SideBar />

      <div className="main-content">
        <CategorySection
          id="Around-The-Globe"
          title="AROUND THE GLOBE"
          itemIds={categories["Around-The-Globe"]}
          cart={cart}
          setCart={setCart}
        />
        <CategorySection
          id="Trending"
          title="Trending"
          itemIds={categories.Trending}
          showRanks
          cart={cart}
          setCart={setCart}
        />
        <CategorySection
          id="Dessert"
          title="DESSERT"
          itemIds={categories.Dessert}
          cart={cart}
          setCart={setCart}
        />
        <CategorySection
          id="Healthy"
          title="Healthy Option"
          itemIds={categories.Healthy}
          cart={cart}
          setCart={setCart}
        />
        <CategorySection
          id="Desi"
          title="Desi Foods"
          itemIds={categories.Desi}
          cart={cart}
          setCart={setCart}
        />
      </div>
    </div>
  );
}
