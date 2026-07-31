import { addToCart } from "./cart";
import { useEffect } from "react";


export function CartItem({cart, setCart}) {
  console.log('Cart Items in CartItem Component:', cart);
  if(cart.length === 0) return;
  return (
    <div className="cart-cart"> 
      <img src={cart.image} alt={cart.name} className="cart-item-image" />
      <div className="cart-item-details">
        <div className="cart-item-name">{cart.name}</div>
        <div className="cart-item-price">Rs. {cart.price * cart.quantity}</div>
        <div className="cart-item-controls">
          <button
            className="qty-btn"
            onclick="event.stopPropagation(); updateQuantity(${item.id}, -1)"
          >
            -
          </button>
          <span className="cart-item-quantity">{cart.quantity}</span>
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
