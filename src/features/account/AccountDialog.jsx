import { useState } from 'react';
import { Modal } from '../../components/ui/Modal.jsx';
import './account.css';

export function AccountDialog({ onClose }) {
  const [signUp, setSignUp] = useState(true);
  return <Modal titleId="account-title" className="account-dialog" onClose={onClose}>
    <div className="modal-heading"><h2 id="account-title">{signUp ? 'Create an account' : 'Sign in'}</h2><button className="modal-close" aria-label="Close account" onClick={onClose}>×</button></div>
    <p className="account-note" role="status">Accounts are not available yet. You can browse the menu and save a cart on this device without signing in.</p>
    <form onSubmit={event => event.preventDefault()}>
      <fieldset disabled aria-describedby="account-help">
        {signUp && <div className="login-page-input-box"><label htmlFor="account-name">Name</label><input id="account-name" autoComplete="name" placeholder="Enter your name" /></div>}
        <div className="login-page-input-box"><label htmlFor="account-email">Email address</label><input id="account-email" type="email" autoComplete="email" placeholder="Enter your email" /></div>
        <div className="login-page-input-box"><label htmlFor="account-password">Password</label><input id="account-password" type="password" autoComplete={signUp ? 'new-password' : 'current-password'} placeholder="Enter your password" /></div>
        <button className="login-page-btn" disabled>{signUp ? 'Sign up' : 'Sign in'} — coming soon</button>
      </fieldset>
      <p id="account-help">No account details are collected or stored.</p>
    </form>
    <button className="text-button" onClick={() => setSignUp(!signUp)}>{signUp ? 'Already have an account? Sign in' : 'Create an account'}</button>
    <button className="login-page-btn" onClick={onClose}>Continue as guest</button>
  </Modal>;
}
