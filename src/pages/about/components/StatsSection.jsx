
import { foodItems } from '../../../features/menu/foodItems.js';

export function StatsSection() {
  return (
    <section className="stats">
      <div className="stats-container">
        <div className="stat-item">
          <h3>50,000+</h3>
          <p>Happy Customers</p>
        </div>
        <div className="stat-item">
          <h3>{foodItems.length}</h3>
          <p>Menu Items</p>
        </div>
        <div className="stat-item">
          <h3>Since 2018</h3>
          <p>Serving Nepali flavors</p>
        </div>
        <div className="stat-item">
          <h3>4.8★</h3>
          <p>Average Rating</p>
        </div>
      </div>
    </section>
  );
}