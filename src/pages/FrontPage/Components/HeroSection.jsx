import { NavLink } from "react-router";
export function HeroSection({ setShowLoginPanel }) {
  return (
    <section className="home-page">
      <div className="container">
        <div className="info-section">
          <div className="tags">
            <span className="original-tag">Original Taste</span>
            <span className="authentic-tag">Authentic</span>
          </div>

          <h1>
            NEPAL's <span className="no-1">#1</span>
            <br />
            Fast-Growing
            <br />
            <span className="highlight-fast">Fast</span>
            <span className="highlight-food">-Food</span> Chain
          </h1>

          <p className="subtitle">
            Chulo brings bold Nepali flavors and modern fast food together in
            one unforgettable experience. From freshly prepared meals to quick,
            friendly service, we're dedicated to serving quality food that
            satisfies every craving. Whether you're dining in or taking away,
            Chulo is where taste, speed, and authenticity meet.
          </p>

          <div className="buttons">
            <button
              className="button order-now-button"
              onClick={() => {
                setShowLoginPanel(true);
              }}
              id="sign-up-btn"
            >
              Sign Up
            </button>
            <NavLink to="/dashboard">
              {" "}
              <button className="button menu-button">View Menu</button>
            </NavLink>
          </div>

          <div className="stats-bar">
            <div className="stat-item">
              <div className="stat-number">4.8</div>
              <div className="stat-label">⭐ Rating</div>
            </div>
            <div className="stat-divider"></div>
            <div className="stat-item">
              <div className="stat-number">50K+</div>
              <div className="stat-label">🍔 Customers</div>
            </div>
            <div className="stat-divider"></div>
            <div className="stat-item">
              <div className="stat-number">25+</div>
              <div className="stat-label">📍 Outlets</div>
            </div>
          </div>
        </div>

        <div className="burger-section">
          <div className="feature-card card-1">
            <span className="emoji">🚚</span>Fast Delivery
          </div>
          <div className="feature-card card-2">
            <span className="emoji">🥩</span>Fresh Ingredients
          </div>
          <div className="feature-card card-3">
            <span className="emoji">🇳🇵</span>Nepali Taste
          </div>

          <img
            src="images/others/meat-chunks.png"
            className="meat-chunks-image"
            alt="Fresh meat chunks"
          />
          <img
            src="images/others/fries-photo.png"
            className="fries-image"
            alt="Crispy fries"
          />

          <div className="burger-wrapper">
            <img
              src="images/others/burger.png"
              className="burger-image"
              alt="Delicious burger"
            />
          </div>

          <div className="burger-price-badge" aria-label="Burger price">
            <span className="currency">&#8377;</span>
            <span className="amount">350</span>
          </div>

          <div className="fries-wrapper">
            <img
              src="images/others/fries-bag.png"
              className="fries-bag-image"
              alt="Fries bag"
            />
          </div>

          <div className="fries-price-badge" aria-label="Fries price">
            <span className="currency">&#8377;</span>
            <span className="amount">110</span>
          </div>
        </div>
      </div>
    </section>
  );
}
