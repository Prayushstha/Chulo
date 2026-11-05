import { useEffect, useReducer } from 'react';
import { readStored, writeStored } from '../../lib/storage.js';
import { CART_KEY, cartReducer, normalizeCart, getCartSummary } from './cartModel.js';

export function useCart() {
  const [cart, dispatch] = useReducer(cartReducer, undefined, () => normalizeCart(readStored(CART_KEY, [])));
  useEffect(() => { writeStored(CART_KEY, cart); }, [cart]);
  return { ...getCartSummary(cart), dispatch };
}
