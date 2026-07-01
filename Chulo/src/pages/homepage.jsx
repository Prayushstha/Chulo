import { NavBar } from "../components/navbar";
import { ImageSlider } from "../components/imageslider";
import { SideBar } from "../components/sidebar";
import { foodItems } from "../assets/Backend/descriptions.js";
import '../assets/CSS/homepage.css'
// Food Categories Configuration (order within each list is preserved)
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

function CategorySection({ id, title, itemIds, showRanks = false }) {
  // Preserve the exact order given in itemIds, looking each id up in foodItems
  const items = itemIds
    .map((itemId) => foodItems.find((food) => food.id === itemId))
    .filter(Boolean);

  return (
    <>
      <div className="food-item-list" id={id}>
        <br />
        <div className="food-type-name">{title}</div>
      </div>
      <div className="food-1-preview">
        {items.map((item, index) => (
          <FoodItem
            key={item.id}
            item={item}
            rank={showRanks ? index + 1 : null}
          />
        ))}
      </div>
    </>
  );
}

function FoodItem({ item, rank }) {
  const rating = item.rating || 4.5;
  const fullStars = Math.floor(rating);
  const emptyStars = 5 - fullStars;

  function handleOpen() {

    console.log("open food dialog for", item.id);
  }

  function handleBuy(e) {
    
    e.stopPropagation();
    console.log("add to cart", item.id);
  }

  return (
    <div className="food-preview" data-id={item.id}>
      <a onClick={handleOpen}>
        {rank !== null && <span className="food-rank">{rank}</span>}
        <div className="food-image-wrapper">
          <img
            className="food-picture"
            src={`/images/food-pictures/${item.image}`}
            alt={item.name}
          />
        </div>
        <div className="food-description">
          <p className="food-name">{item.name}</p>
          <div className="food-rating">
            {Array.from({ length: fullStars }).map((_, i) => (
              <span key={`full-${i}`} className="fa fa-star checked"></span>
            ))}
            {Array.from({ length: emptyStars }).map((_, i) => (
              <span key={`empty-${i}`} className="fa fa-star"></span>
            ))}
          </div>
          <div className="food-item-description">
            {item.shortDescription || "Delicious food item prepared with fresh ingredients"}
          </div>
          <div className="food-sub-description">
            <span className="food-price">&#x20B9; {item.price}</span>
            <button className="buy-button" onClick={handleBuy}>
              Buy
            </button>
          </div>
        </div>
      </a>
    </div>
  );
}