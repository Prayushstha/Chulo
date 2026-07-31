import { foodItems } from "../../../assets/Backend/descriptions";
export function addToCart({ cart, setCart, itemId}) {
  const item = foodItems.find((food) => {
    return itemId === food.id;
  });
  setCart([...cart , item]);
}