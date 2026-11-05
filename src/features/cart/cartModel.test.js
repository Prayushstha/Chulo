import test from 'node:test';
import assert from 'node:assert/strict';
import { cartReducer, normalizeCart, getCartSummary, MAX_QUANTITY } from './cartModel.js';

test('adding the same dish increments a single row without mutating prior state', () => {
  const before = [{ id: 1, quantity: 1 }];
  const after = cartReducer(before, { type: 'add', id: 1 });
  assert.deepEqual(after, [{ id: 1, quantity: 2 }]);
  assert.deepEqual(before, [{ id: 1, quantity: 1 }]);
});
test('quantities belong to individual dishes', () => {
  const cart = [{ id: 1, quantity: 1 }, { id: 2, quantity: 1 }];
  assert.deepEqual(cartReducer(cart, { type: 'quantity', id: 1, quantity: 3 }), [{ id: 1, quantity: 3 }, { id: 2, quantity: 1 }]);
});
test('remove and clear leave a consistent cart', () => {
  const cart = [{ id: 1, quantity: 2 }, { id: 2, quantity: 1 }];
  assert.deepEqual(cartReducer(cart, { type: 'remove', id: 1 }), [{ id: 2, quantity: 1 }]);
  assert.deepEqual(cartReducer(cart, { type: 'clear' }), []);
});
test('restored carts reject invalid entries and consolidate duplicates', () => {
  assert.deepEqual(normalizeCart(null), []);
  assert.deepEqual(normalizeCart([null, { id: 999, quantity: 1 }, { id: 1, quantity: -2 }, { id: 2, quantity: 1.5 }, { id: 1, quantity: 2 }, { id: 1, quantity: 3 }]), [{ id: 1, quantity: 5 }]);
});
test('quantities are capped and invalid additions are ignored', () => {
  assert.deepEqual(cartReducer([{ id: 1, quantity: MAX_QUANTITY }], { type: 'add', id: 1 }), [{ id: 1, quantity: MAX_QUANTITY }]);
  assert.deepEqual(cartReducer([], { type: 'add', id: 9000 }), []);
});
test('totals use catalog prices and round tax to two decimals', () => {
  const summary = getCartSummary([{ id: 1, quantity: 2, price: 1 }, { id: 2, quantity: 1 }]);
  assert.equal(summary.quantity, 3);
  assert.equal(summary.subtotal, 400);
  assert.equal(summary.tax, 52);
  assert.equal(summary.total, 452);
  assert.equal(getCartSummary([]).total, 0);
});
