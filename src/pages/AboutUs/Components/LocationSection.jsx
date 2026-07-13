export function LocationSection() {
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
