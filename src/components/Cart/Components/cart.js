import { foodItems } from "../../../assets/Backend/descriptions";
export function addToCart(itemId) {
  const item = foodItems.find((food) => {
    return itemId === food.id;
  });
  return item;
}