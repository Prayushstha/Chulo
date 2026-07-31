import { useNavigate } from "react-router";
import { addToCart } from "../../../components/Cart/Components/cart";
import {useRef} from "react";

export function FoodItem({ item, cart, setCart }) {
 let buyButtonRef = useRef(null);
  let navToProducts = useNavigate();
  const rating = item.rating || 4.5;
  const fullStars = Math.floor(rating);
  const emptyStars = 5 - fullStars;

  function handleBuy(e) { 
    e.stopPropagation();
    addToCart({ cart, setCart, itemId: item.id });
  }

  return (
    <div className="food-preview" data-id={item.id}>
      <a onClick={()=>{
        navToProducts(`/product/${item.id}`);
      }}>
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
            <button className="buy-button" onClick={handleBuy} ref={buyButtonRef}>
              Buy
            </button>
          </div>
        </div>
      </a>
    </div>
  );
}