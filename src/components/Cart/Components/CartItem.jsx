import { foodItems } from "../../../assets/Backend/descriptions";
export function CartItem(itemId) {
  // if (!container) return;

  // if (cart.length === 0) {
  //     container.innerHTML = `
  //         <div className="empty-cart-message">
  //             <i className="fas fa-shopping-basket"></i>
  //             <p>Your cart is empty</p>
  //             <button className="buy-button" onclick="toggleCart(false)" style="margin-top:20px; width:auto; padding: 10px 20px;"><a href="homepage.html#Around-The-Globe">Start Shopping</a></button>
  //         </div>
  //     `;
  //     return;
  // }

  return (
    <div className="cart-item">
      {() => {
        const item = FoodItems.find(() => {
          return itemId === foodItems.id;
        });
      }}
    </div>
  );
}

<>
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
</>;
