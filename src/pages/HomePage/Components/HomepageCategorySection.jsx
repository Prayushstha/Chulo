import { foodItems } from "../../../assets/Backend/descriptions.js";
import { FoodItem } from "./foodItems.jsx";
export function CategorySection({ id, title, itemIds, showRanks = false }) {
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