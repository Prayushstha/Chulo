export const categories = [
  { id: 'Around-The-Globe', title: 'Around the globe', itemIds: [1, 2, 3, 4, 5] },
  { id: 'Trending', title: 'Trending', itemIds: [4, 2, 3, 1, 6] },
  { id: 'Dessert', title: 'Dessert', itemIds: [7, 8, 9, 10] },
  { id: 'Healthy', title: 'Healthy options', itemIds: [11, 12, 13, 14, 15] },
  { id: 'Desi', title: 'Desi foods', itemIds: [16, 17, 18] },
  { id: 'drinks', title: 'Drinks', itemIds: [6, 19] },
];

export function filterMenu(items, query = '', diet = 'all') {
  const terms = query.trim().toLowerCase().split(/\s+/).filter(Boolean);
  return items.filter(item => (diet === 'all' || item.type === diet) && terms.every(term => `${item.name} ${item.shortDescription} ${item.ingredients}`.toLowerCase().includes(term)));
}

export function sortMenu(items, sortBy = 'featured') {
  if (sortBy === 'price-asc') return [...items].sort((a, b) => a.price - b.price);
  if (sortBy === 'price-desc') return [...items].sort((a, b) => b.price - a.price);
  return items;
}
