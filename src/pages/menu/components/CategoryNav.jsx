import { Link } from 'react-router';
import { categories } from '../../../features/menu/catalog.js';
import '../sidebar.css';

export function CategoryNav() {
  return <nav className="sidebar" aria-label="Menu categories"><ul>{categories.map(category => <li className="sidebar-list" key={category.id}><Link to={`/dashboard?section=${category.id}`}>{category.title}</Link></li>)}</ul></nav>;
}
