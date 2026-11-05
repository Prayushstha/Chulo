import { useState } from 'react';
import { NavLink, useNavigate } from 'react-router';
import './navbar.css';

export function Navbar({ quantity, onCart, onAccount, dark, onTheme }) {
  const [query, setQuery] = useState('');
  const navigate = useNavigate();
  return <header className="navbar">
    <NavLink to="/" className="logo-container" aria-label="Chulo home"><img className="logo" src="/logo.png" alt="" /><span className="logo-name">Chulo</span></NavLink>
    <nav aria-label="Main navigation">
      <ul>
        <li className="navbar-list search-nav-item" id="search"><form className="nav-search" role="search" onSubmit={e => { e.preventDefault(); navigate(`/dashboard?q=${encodeURIComponent(query.trim())}`); }}>
          <input aria-label="Search menu" placeholder="Search dishes" value={query} onChange={e => setQuery(e.target.value)} /><button aria-label="Submit search" type="submit">⌕</button>
        </form></li>
        <li className="navbar-list"><NavLink to="/dashboard">Menu</NavLink></li>
        <li className="navbar-list nav-about"><NavLink to="/aboutus">About</NavLink></li>
        <li className="navbar-list"><button className="nav-action" onClick={onTheme} aria-label={dark ? 'Switch to light theme' : 'Switch to dark theme'} aria-pressed={dark}>{dark ? '☀' : '☾'}</button></li>
        <li className="navbar-list" id="navcart"><button className="nav-action" onClick={onCart} aria-label={`Open cart, ${quantity} items`}>Cart<span id="cart-badge" aria-hidden="true">{quantity}</span></button></li>
        <li className="navbar-list"><button className="nav-action" onClick={onAccount}>Account</button></li>
      </ul>
    </nav>
  </header>;
}
