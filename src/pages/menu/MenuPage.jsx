import { useSearchParams } from 'react-router';
import { foodItems } from '../../features/menu/foodItems.js';
import { categories, filterMenu, sortMenu } from '../../features/menu/catalog.js';
import { CategorySection } from './components/CategorySection.jsx';
import { CategoryNav } from './components/CategoryNav.jsx';
import { ImageSlider } from './components/ImageSlider.jsx';
import { FoodCard } from './components/FoodCard.jsx';
import './menu.css';

export function MenuPage({ onAdd }) {
  const [params, setParams] = useSearchParams();
  const query = params.get('q') || '';
  const diet = ['Veg', 'Non-veg'].includes(params.get('diet')) ? params.get('diet') : 'all';
  const sort = ['price-asc', 'price-desc'].includes(params.get('sort')) ? params.get('sort') : 'featured';
  const filtered = query.trim() || diet !== 'all' || sort !== 'featured';
  const results = sortMenu(filterMenu(foodItems, query, diet), sort);
  function update(key, value) {
    setParams(previous => { const next = new URLSearchParams(previous); next.delete('section'); if (value && value !== 'all') next.set(key, value); else next.delete(key); return next; }, { replace: true });
  }
  return <>
    <ImageSlider />
    <div className="name"><h1 className="menu-title">Explore our menu</h1></div>
    <div className="menu-tools">
      <label htmlFor="menu-query">Search dishes<input id="menu-query" type="search" value={query} onChange={e => update('q', e.target.value)} placeholder="Name or ingredient" /></label>
      <label htmlFor="menu-diet">Dietary preference<select id="menu-diet" value={diet} onChange={e => update('diet', e.target.value)}><option value="all">All dishes</option><option value="Veg">Vegetarian</option><option value="Non-veg">Non-vegetarian</option></select></label>
      <label htmlFor="menu-sort">Sort by<select id="menu-sort" value={sort} onChange={e => update('sort', e.target.value)}><option value="featured">Featured</option><option value="price-asc">Price: low to high</option><option value="price-desc">Price: high to low</option></select></label>
      {filtered && <button className="text-button" onClick={() => setParams({})}>Clear filters</button>}
    </div>
    <div className="food-preview-container">
      <CategoryNav />
      <div className="menu-content">
        {filtered ? <>
          <p className="results-count" role="status">{results.length} {results.length === 1 ? 'dish' : 'dishes'} found</p>
          {results.length ? <div className="food-1-preview">{results.map(item => <FoodCard key={item.id} item={item} onAdd={onAdd} />)}</div> : <div className="empty-results"><h2>No dishes found</h2><p>Try another name or ingredient, or clear your filters.</p></div>}
        </> : categories.map(category => <CategorySection key={category.id} {...category} onAdd={onAdd} />)}
      </div>
    </div>
  </>;
}
