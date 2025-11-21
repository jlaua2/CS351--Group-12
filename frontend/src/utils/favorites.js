// frontend/src/utils/favorites.js

const STORAGE_KEY = "favorites_v1";

export function getFavorites() {
  try {
    const raw = localStorage.getItem(STORAGE_KEY);
    return raw ? JSON.parse(raw) : [];
  } catch {
    return [];
  }
}

export function saveFavorites(list) {
  localStorage.setItem(STORAGE_KEY, JSON.stringify(list));
}

export function addFavorite(product) {
  const current = getFavorites();
  if (current.some((p) => p.id === product.id)) return; // avoid duplicates
  current.push(product);
  saveFavorites(current);
}

export function removeFavorite(id) {
  const updated = getFavorites().filter((p) => p.id !== id);
  saveFavorites(updated);
}

