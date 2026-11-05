import { useEffect, useState } from 'react';
import { HashRouter, Link, Navigate, Route, Routes, useLocation } from 'react-router';
import { AboutPage } from './pages/about/AboutPage.jsx';
import { MenuPage } from './pages/menu/MenuPage.jsx';
import { LandingPage } from './pages/landing/LandingPage.jsx';
import { ProductPage } from './pages/product/ProductPage.jsx';
import { Navbar } from './components/layout/Navbar.jsx';
import { Footer } from './components/layout/Footer.jsx';
import { CartDrawer } from './features/cart/CartDrawer.jsx';
import { AccountDialog } from './features/account/AccountDialog.jsx';
import { useCart } from './features/cart/useCart.js';
import { readStored, writeStored } from './lib/storage.js';
import './styles/app.css';

function RouteScroll() {
  const { pathname, search } = useLocation();
  const section = new URLSearchParams(search).get('section');
  useEffect(() => {
    const target = section && document.getElementById(section);
    if (target) target.scrollIntoView({ block: 'start' });
    else window.scrollTo(0, 0);
  }, [pathname, section]);
  return null;
}

export default function App() {
  const cart = useCart();
  const [panel, setPanel] = useState(null);
  const [announcement, setAnnouncement] = useState('');
  const [dark, setDark] = useState(() => readStored('chulo.theme', null) === 'dark');
  useEffect(() => {
    document.body.classList.toggle('dark-theme', dark);
    writeStored('chulo.theme', dark ? 'dark' : 'light');
  }, [dark]);
  function addToCart(item) {
    cart.dispatch({ type: 'add', id: item.id });
    setAnnouncement(`${item.name} added to cart.`);
  }
  return <HashRouter>
    <a className="skip-link" href="#main" onClick={event => { event.preventDefault(); document.getElementById('main').focus(); }}>Skip to content</a>
    <Navbar quantity={cart.quantity} onCart={() => setPanel('cart')} onAccount={() => setPanel('account')} dark={dark} onTheme={() => setDark(!dark)} />
    <RouteScroll />
    <main id="main" tabIndex={-1} className="app-content">
      <Routes>
        <Route path="/" element={<LandingPage onAccount={() => setPanel('account')} />} />
        <Route path="/dashboard" element={<MenuPage onAdd={addToCart} />} />
        <Route path="/menu" element={<Navigate to="/dashboard" replace />} />
        <Route path="/aboutus" element={<AboutPage />} />
        <Route path="/product/:id" element={<ProductPage onAdd={addToCart} />} />
        <Route path="*" element={<section className="not-found"><h1>Page not found</h1><Link to="/dashboard">Browse the menu</Link></section>} />
      </Routes>
    </main>
    <Footer />
    <div className="cart-notice" role="status" aria-live="polite">{announcement && <><span>{announcement}</span><button onClick={() => { setPanel('cart'); setAnnouncement(''); }}>View cart</button><button aria-label="Dismiss notification" onClick={() => setAnnouncement('')}>×</button></>}</div>
    {panel === 'cart' && <CartDrawer cart={cart} onClose={() => setPanel(null)} />}
    {panel === 'account' && <AccountDialog onClose={() => setPanel(null)} />}
  </HashRouter>;
}
