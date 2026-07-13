import { NavBar } from "../../components/navbar.jsx";
import { Footer } from "../../components/footer.jsx";
import { Cart } from "../../components/cart.jsx";
import "./Styles/aboutus.css";
export function AboutUs() {
  return (
    <>
      <NavBar />
      <div className="main-container">
        <HeroSection />
        <OurStorySection />
        <StatsSection />
        <AwardSection />
        <LocationSection />
        <Cart />
        <Footer />
      </div>
    </>
  );
}

function HeroSection() {
  return (
    <section className="hero">
      <div className="hero-content">
        <h1>About Chulo</h1>
        <p>Serving Authentic Nepali Flavors Since 2018</p>
      </div>
    </section>
  );
}

function OurStorySection() {
  return (
    <section className="our-story">
      <div className="story-image">
        <img src="assets/images/Team/ourStory.png" alt="Our Story" />
      </div>
      <div className="story-content">
        <h2>Our Story</h2>
        <p>
          Founded in the heart of Bhaktapur in 2018, KhajaTime began with a
          simple mission: to bring the authentic taste of Nepali cuisine to food
          lovers across the valley.
        </p>
        <p>
          Our name "KhajaTime" reflects our philosophy that every meal should be
          a celebration. We combine traditional Newari cooking techniques with
          modern culinary innovation to create dishes that honor our heritage
          while delighting contemporary palates.
        </p>
        <p>
          Today, we proudly serve over 500 customers daily, offering both
          dine-in experiences and convenient online ordering.
        </p>
      </div>
    </section>
  );
}

function StatsSection() {
  return (
    <section className="stats">
      <div className="stats-container">
        <div className="stat-item">
          <h3>50,000+</h3>
          <p>Happy Customers</p>
        </div>
        <div className="stat-item">
          <h3>150+</h3>
          <p>Menu Items</p>
        </div>
        <div className="stat-item">
          <h3>5 Years</h3>
          <p>Of Excellence</p>
        </div>
        <div className="stat-item">
          <h3>4.8★</h3>
          <p>Average Rating</p>
        </div>
      </div>
    </section>
  );
}
function AwardSection() {
  return (
    <section className="awards">
      <div className="awards-container">
        <h2>Awards & Recognition</h2>
        <div className="awards-grid">
          <div className="award-card">
            <div className="trophy-icon">🏆</div>
            <h3>Best Restaurant in Bhaktapur</h3>
            <p>Nepal Food Awards 2023</p>
          </div>
          <div className="award-card">
            <div className="trophy-icon">⭐</div>
            <h3>Excellence in Service</h3>
            <p>Customer Choice Awards 2022</p>
          </div>
          <div className="award-card">
            <div className="trophy-icon">🥇</div>
            <h3>Top Online Food Platform</h3>
            <p>Digital Nepal Awards 2023</p>
          </div>
          <div className="award-card">
            <div className="trophy-icon">🌟</div>
            <h3>Best Momo in Town</h3>
            <p>Valley Food Festival 2022</p>
          </div>
          <div className="award-card">
            <div className="trophy-icon">🎖️</div>
            <h3>Hygiene Excellence</h3>
            <p>Nepal Health Ministry 2023</p>
          </div>
          <div className="award-card">
            <div className="trophy-icon">💎</div>
            <h3>Rising Star Restaurant</h3>
            <p>Nepal Restaurant Association 2021</p>
          </div>
        </div>
      </div>
    </section>
  );
}

function LocationSection() {
  return (
    <section className="location">
      <div className="location-container">
        <div className="location-content">
          <h2>Visit Us</h2>
          <p>
            Experience the warmth of Nepali hospitality at our restaurant in the
            historic city of Bhaktapur.
          </p>
          <div className="location-details">
            <div className="location-item">
              <div className="location-item-icon">📍</div>
              <div className="location-item-text">
                <h4>Address</h4>
                <p>Durbar Square Road, Bhaktapur 44800, Nepal</p>
              </div>
            </div>
            <div className="location-item">
              <div className="location-item-icon">⏰</div>
              <div className="location-item-text">
                <h4>Opening Hours</h4>
                <p>Mon-Sun: 10:00 AM - 10:00 PM</p>
              </div>
            </div>
            <div className="location-item">
              <div className="location-item-icon">📞</div>
              <div className="location-item-text">
                <h4>Contact</h4>
                <p>+977 1-6611234 | khajatime.fastfood@gmail.com</p>
              </div>
            </div>
          </div>
        </div>
        <div className="location-map">
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d606978.4108893261!2d85.16250306700935!3d27.441099087799614!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x39eb098624d23e27%3A0xc18f7c08b356ed70!2sRajesh%20dai%20ko%20Daura%20Chulo!5e0!3m2!1sen!2snp!4v1766403073703!5m2!1sen!2snp"
            width="100%"
            height="400"
            allowFullScreen=""
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
          ></iframe>
        </div>
      </div>
    </section>
  );
}
