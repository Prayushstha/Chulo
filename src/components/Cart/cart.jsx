import { CartItem } from "./Components/CartItem";
import {useState} from "react";
import "./Styles/cart.css";
export function Cart({ cartActive, setCartActive, cart, setCart,cartQuantity,setCartQuantity }) {
  const [quantity, setQuantity] = useState(cart.quantity || 1);
  return (
    <aside
      className={cartActive ? "cart-sidebar open" : "cart-sidebar"}
      id="cart-sidebar"
    >
      <div className="cart-header">
        <h2>
          <i className="fas fa-shopping-bag"></i> Your Cart
        </h2>
        <button className="clear-cart-btn">Clear</button>
        <button
          onClick={() => setCartActive(!cartActive)}
          className="close-cart-btn"
          id="close-cart-btn"
        >
          <i className="fas fa-times"></i>
        </button>
      </div>

      <div className="cart-items-container" id="cart-items-container">
        {cart.length > 0 ? (
          cart.map((item) => (
            <CartItem key={item.id} cart={item} quantity={quantity} setQuantity={setQuantity} setCart={setCart} cartQuantity={cartQuantity} setCartQuantity={setCartQuantity} />
          ))
        ) : (
          <div className="empty-cart-message">
            <i className="fas fa-shopping-basket"></i>
            <p>Your cart is empty</p>
          </div>
        )}
      </div>

      <div className="cart-footer">
        <div className="billing-summary">
          <div className="billing-row">
            <span>Subtotal</span>
            <span id="cart-subtotal">Rs. 0</span>
          </div>
          <div className="billing-row">
            <span>VAT (13%)</span>
            <span id="cart-tax">Rs. 0</span>
          </div>
          <div className="billing-row total">
            <span>Total</span>
            <span id="cart-total">Rs. 0</span>
          </div>
        </div>
        <button className="checkout-btn" onClick={() => {
          cart.map((item)=>{
            console.log(item.price)
          })
          }}>
          Proceed to Checkout
        </button>
      </div>
    </aside>
  );
}
