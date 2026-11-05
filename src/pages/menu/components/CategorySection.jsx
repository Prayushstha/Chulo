import { foodItems } from '../../../features/menu/foodItems.js';
import { FoodCard } from './FoodCard.jsx';

export function CategorySection({ id, title, itemIds, onAdd }) {
  const items = itemIds.map(id => foodItems.find(item => item.id === id)).filter(Boolean);
  return <section className="food-item-list" id={id} aria-labelledby={`${id}-title`}>
    <h2 className="food-type-name" id={`${id}-title`}>{title}</h2>
    <div className="food-1-preview">{items.map(item => <FoodCard key={item.id} item={item} onAdd={onAdd} />)}</div>
  </section>;
}
