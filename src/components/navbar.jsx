import "../assets/CSS/navbar.css";
import { NavLink } from "react-router";

export function NavBar() {
  return (
    <>
      <div className="navbar">
        <NavLink to="/">
          <div className="logo-container">
            <img className="logo" src="logo.png" />
            <p className="logo-name">Chulo</p>
          </div>
        </NavLink>{" "}
        <ul>
          <li className="navbar-list search-nav-item" id="search">
            <div className="search-container">
              <input
                type="text"
                name="text"
                className="input"
                id="navSearchInput"
                required=""
                placeholder="Type to search..."
              />
              <div className="icon">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="ionicon"
                  viewBox="0 0 512 512"
                >
                  <title>Search</title>
                  <path
                    d="M221.09 64a157.09 157.09 0 10157.09 157.09A157.1 157.1 0 00221.09 64z"
                    fill="none"
                    stroke="currentColor"
                    strokeMiterlimit="10"
                    strokeWidth="32"
                  ></path>
                  <path
                    fill="none"
                    stroke="currentColor"
                    strokeLinecap="round"
                    strokeMiterlimit="10"
                    strokeWidth="32"
                    d="M338.29 338.29L448 448"
                  ></path>
                </svg>
              </div>
            </div>
          </li>
          <li className="navbar-list" id="navhome">
            <NavLink to="/dashboard">Home</NavLink>
          </li>
          <li className="navbar-list" id="navtrending">
            <a href="#Trending">Trending</a>
          </li>
          <li className="navbar-list" id="navabout">
            <NavLink to="/aboutus">About Us</NavLink>
          </li>

          <li className="navbar-list" id="navcart">
            <a href="#" id="cart-toggle-btn">
              <i className="fas fa-shopping-cart"></i>
              <span id="cart-badge">0</span>
            </a>
          </li>
          <li className="navbar-list" id="navprofile">
            <a href="signup.html">
              <i className="fas fa-user-alt"></i>
            </a>
          </li>
        </ul>
      </div>
    </>
  );
}
