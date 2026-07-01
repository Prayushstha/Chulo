   export function Cart(){
     <aside className="cart-sidebar" id="cart-sidebar">
      <div className="cart-header">
        <h2><i className="fas fa-shopping-bag"></i> Your Cart</h2>
        <button className="clear-cart-btn" onclick="clearCart()">Clear</button>
        <button className="close-cart-btn" id="close-cart-btn">
          <i className="fas fa-times"></i>
        </button>
      </div>

      <div className="cart-items-container" id="cart-items-container">

        <div className="empty-cart-message">
          <i className="fas fa-shopping-basket"></i>
          <p>Your cart is empty</p>
        </div>
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
        <button className="checkout-btn" onclick="checkout()">
          Proceed to Checkout
        </button>
      </div>
    </aside>
   }
  