import test from 'node:test';
import assert from 'node:assert/strict';
import { readStored, writeStored } from './storage.js';

test('storage handles round trips, malformed JSON, and access failures', () => {
  const descriptor = Object.getOwnPropertyDescriptor(globalThis, 'localStorage');
  const values = new Map();
  try {
    Object.defineProperty(globalThis, 'localStorage', { configurable: true, value: { getItem: key => values.get(key) ?? null, setItem: (key, value) => values.set(key, value) } });
    writeStored('cart', [{ id: 1, quantity: 2 }]);
    assert.deepEqual(readStored('cart', []), [{ id: 1, quantity: 2 }]);
    values.set('cart', '{invalid');
    assert.deepEqual(readStored('cart', []), []);
    Object.defineProperty(globalThis, 'localStorage', { configurable: true, get() { throw new Error('Storage unavailable'); } });
    assert.deepEqual(readStored('cart', []), []);
    assert.doesNotThrow(() => writeStored('cart', []));
  } finally {
    if (descriptor) Object.defineProperty(globalThis, 'localStorage', descriptor);
    else delete globalThis.localStorage;
  }
});
