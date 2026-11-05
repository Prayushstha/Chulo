import { useState } from 'react';
import { Modal } from '../../components/ui/Modal.jsx';
import { CartItem } from './CartItem.jsx';
import { formatPrice } from './cartModel.js';
import './cart.css';

export function CartDrawer({ cart, onClose }) {
  const [reviewing, setReviewing] = useState(false);
  return <Modal titleId="cart-title" className="cart-dialog" onClose={onClose}>
    <div className="modal-heading">
      <h2 id="cart-title">{reviewing ? 'Order summary' : 'Your Cart'}</h2>
      <button className="modal-close" onClick={onClose} aria-label="Close cart">×</button>
    </div>
    {cart.items.length ? <>
      <div className="cart-items-container">
        {cart.items.map(item => <CartItem key={item.id} item={item} dispatch={cart.dispatch} />)}
      </div>
      <div className="cart-footer">
        <div className="billing-summary" aria-live="polite">
          <div className="billing-row"><span>Subtotal</span><span>{formatPrice(cart.subtotal)}</span></div>
          <div className="billing-row"><span>VAT (13%)</span><span>{formatPrice(cart.tax)}</span></div>
          <div className="billing-row total"><span>Total</span><span>{formatPrice(cart.total)}</span></div>
        </div>
        {reviewing && <p className="order-note" role="status">This is an estimate. Online ordering and payment are not available yet; no order has been placed. Call the restaurant to confirm availability and pricing.</p>}
        <button className="checkout-btn" onClick={() => setReviewing(!reviewing)}>{reviewing ? 'Back to cart' : 'Review order'}</button>
        {reviewing && <a className="contact-order" href="tel:+97716611234">Call +977 1-6611234</a>}
        <button className="clear-cart-btn" onClick={() => { cart.dispatch({ type: 'clear' }); setReviewing(false); }}>Clear cart</button>
      </div>
    </> : <div className="empty-cart-message"><p>Your cart is empty</p><button className="checkout-btn" onClick={onClose}>Continue browsing</button></div>}
  </Modal>;
}
