import { addToCart } from "./cart";
import { useState } from "react";

export function CartItem({cart, setCart}) {

  const [quantity, setQuantity] = useState(cart.quantity || 1);

  return (
    <div className="cart-item" data-id={cart.id}>
      <img src={`/images/food-pictures/${cart.image}`} alt={cart.name} className="cart-item-image" />
      <div className="cart-item-details">
        <div className="cart-item-name">{cart.name}</div>
        <div className="cart-item-price">Rs. {cart.price * quantity}</div>
        <div className="cart-item-controls">
          <button
            className="qty-btn"
            onClick={() => quantity<=1 ? setQuantity(1) : setQuantity(quantity - 1)}
          >
            -
          </button>
          <span className="cart-item-quantity">{quantity}</span>
          <button
            className="qty-btn"
            onClick={() => setQuantity(quantity + 1)}
          >
            +
          </button>
          <button
            className="remove-item-btn"
            
          >
            <i className="fas fa-trash"></i>
          </button>
        </div>
      </div>
    </div>
  );
}
