import test from 'node:test';
import assert from 'node:assert/strict';
import { filterMenu, sortMenu, categories } from './catalog.js';
import { foodItems } from './foodItems.js';

test('search ignores case and surrounding whitespace', () => {
  assert.deepEqual(filterMenu(foodItems, '  CHICKEN burger ').map(item => item.id), [1]);
});
test('diet and ingredient filters combine', () => {
  const result = filterMenu(foodItems, 'cheese', 'Veg');
  assert.ok(result.length > 0);
  assert.ok(result.every(item => item.type === 'Veg'));
  assert.equal(filterMenu(foodItems, 'chicken', 'Veg').length, 0);
});
test('empty filters restore all dishes and unknown searches are empty', () => {
  assert.equal(filterMenu(foodItems).length, foodItems.length);
  assert.deepEqual(filterMenu(foodItems, 'xyznonexistent'), []);
});
test('menu sorting orders by price without mutating the filtered results', () => {
  const items = filterMenu(foodItems, 'momo');
  const originalIds = items.map(item => item.id);
  assert.deepEqual(sortMenu(items, 'price-asc').map(item => item.price), [110, 120]);
  assert.deepEqual(sortMenu(items, 'price-desc').map(item => item.price), [120, 110]);
  assert.deepEqual(sortMenu(items).map(item => item.id), originalIds);
  assert.deepEqual(items.map(item => item.id), originalIds);
});
test('all categories reference valid unique catalog IDs', () => {
  assert.equal(new Set(foodItems.map(item => item.id)).size, foodItems.length);
  for (const category of categories) {
    assert.equal(new Set(category.itemIds).size, category.itemIds.length);
    assert.ok(category.itemIds.every(id => foodItems.some(item => item.id === id)));
  }
  assert.ok(foodItems.every(item => categories.some(category => category.itemIds.includes(item.id))));
});
