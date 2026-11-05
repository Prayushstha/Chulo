import { MAX_QUANTITY, formatPrice } from './cartModel.js';

export function CartItem({ item, dispatch }) {
  return <div className="cart-item">
    <img src={`/images/food-pictures/${item.image}`} alt={item.name} className="cart-item-image" />
    <div className="cart-item-details">
      <div className="cart-item-name">{item.name}</div>
      <div className="cart-item-price">{formatPrice(item.price * item.quantity)}</div>
      <div className="cart-item-controls">
        <button className="qty-btn" aria-label={`Decrease ${item.name}`} disabled={item.quantity === 1} onClick={() => dispatch({ type: 'quantity', id: item.id, quantity: item.quantity - 1 })}>−</button>
        <span className="cart-item-quantity" aria-label={`${item.name} quantity`}>{item.quantity}</span>
        <button className="qty-btn" aria-label={`Increase ${item.name}`} disabled={item.quantity === MAX_QUANTITY} onClick={() => dispatch({ type: 'quantity', id: item.id, quantity: item.quantity + 1 })}>+</button>
        <button className="remove-item-btn" aria-label={`Remove ${item.name}`} onClick={() => dispatch({ type: 'remove', id: item.id })}>Remove</button>
      </div>
    </div>
  </div>;
}
