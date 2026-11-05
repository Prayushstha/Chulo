import "./footer.css";
  
  export function Footer(){
    return (
      <footer className="footer">
      <div className="footer-grid">
        <div className="footer-brand">
          <h2>Chulo</h2>
          <p>Bold flavors and fast bites served fresh every day.</p>
          <p>
            Founded in the heart of Bhaktapur in 2018, KhajaTime began with a
            simple mission: to bring the authentic taste of Nepali cuisine to
            food lovers across the valley.
          </p>
        </div>

        <div className="footer-links">
          <h4>Quick Links</h4>
          <a href="#/">Home</a>
          <a href="#/dashboard?section=Trending">Trending</a>
          <a href="#/?section=reviews">Reviews</a>
          <a href="#/aboutus">About</a>
        </div>

        <div className="footer-contact">
          <h4>Contact</h4>
          <p>📍 Durbar Square Road, Bhaktapur 44800, Nepal</p>
          <p>📞 +977 1-6611234</p>
          <p>📧 khajatime.fastfood@gmail.com</p>

          <div className="social-icons">
            <a href="https://www.facebook.com/prayush.stha.56"
              ><img src="/images/others/facebook-logo.png" alt="Prayush"
            /></a>
            <a href="https://www.facebook.com/krishna.neupane.408127"
              ><img src="/images/others/facebook-logo.png" alt="Krishna"
            /></a>
            <a href="https://www.facebook.com/prashil.baidhya.2025"
              ><img src="/images/others/facebook-logo.png" alt="Prashil"
            /></a>
          </div>
        </div>
      </div>

      <div className="footer-bottom">
        <p>© 2026 Chulo Fast Food. All rights reserved.</p>
      </div>
    </footer>
      );
}
