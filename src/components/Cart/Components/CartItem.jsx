import { foodItems } from "../../../assets/Backend/descriptions";
import { addToCart } from "./cart";
import { useEffect } from "react";

let cartItems = [];


// const items = useEffect(()=>{
//     console.log(item)
// },[])


export function CartItem({itemId, cart, setCart}) {
  console.log('Cart Items in CartItem Component:', cart);
  if(cartItems.length === 0) return;
  return (
    <div className="cart-item"> 
      <img src={item.image} alt={item.name} className="cart-item-image" />
      <div className="cart-item-details">
        <div className="cart-item-name">${item.name}</div>
        <div className="cart-item-price">Rs. ${item.price * item.quantity}</div>
        <div className="cart-item-controls">
          <button
            className="qty-btn"
            onclick="event.stopPropagation(); updateQuantity(${item.id}, -1)"
          >
            -
          </button>
          <span className="cart-item-quantity">${item.quantity}</span>
          <button
            className="qty-btn"
            onclick="event.stopPropagation(); updateQuantity(${item.id}, 1)"
          >
            +
          </button>
          <button
            className="remove-item-btn"
            onclick="event.stopPropagation(); removeFromCart(${item.id})"
          >
            <i className="fas fa-trash"></i>
          </button>
        </div>
      </div>
    </div>
  );
}
