import { foodItems } from '../menu/foodItems.js';

export const CART_KEY = 'chulo.cart.v1';
export const MAX_QUANTITY = 99;

export function normalizeCart(value) {
  if (!Array.isArray(value)) return [];
  const quantities = new Map();
  for (const entry of value) {
    if (!entry || !foodItems.some(item => item.id === entry.id) || !Number.isInteger(entry.quantity) || entry.quantity < 1) continue;
    quantities.set(entry.id, Math.min(MAX_QUANTITY, (quantities.get(entry.id) || 0) + entry.quantity));
  }
  return [...quantities].map(([id, quantity]) => ({ id, quantity }));
}

export function cartReducer(cart, action) {
  switch (action.type) {
    case 'add': return normalizeCart([...cart, { id: action.id, quantity: 1 }]);
    case 'quantity': return normalizeCart(cart.map(item => item.id === action.id ? { ...item, quantity: action.quantity } : item));
    case 'remove': return cart.filter(item => item.id !== action.id);
    case 'clear': return [];
    default: return cart;
  }
}

export function getCartSummary(cart) {
  const items = normalizeCart(cart).map(entry => ({ ...foodItems.find(item => item.id === entry.id), quantity: entry.quantity }));
  const subtotal = items.reduce((sum, item) => sum + item.price * item.quantity, 0);
  // Preserve the app's existing displayed 13% VAT calculation; round to paisa.
  const tax = Math.round(subtotal * 13) / 100;
  return { items, quantity: items.reduce((sum, item) => sum + item.quantity, 0), subtotal, tax, total: subtotal + tax };
}

export function formatPrice(value) {
  return `Rs. ${value.toFixed(2)}`;
}
