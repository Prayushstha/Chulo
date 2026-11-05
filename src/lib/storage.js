// Browsing and ordering still work when browser storage is unavailable.
export function readStored(key, fallback) {
  try { return JSON.parse(localStorage.getItem(key)) ?? fallback; }
  catch { return fallback; }
}

export function writeStored(key, value) {
  try { localStorage.setItem(key, JSON.stringify(value)); }
  catch { /* Private browsing or quota limits must not interrupt the UI. */ }
}
