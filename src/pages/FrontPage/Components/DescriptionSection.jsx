
import { ReviewsSection } from "./ReviewSection";
export function DescriptionAndReviewSection({ ShowReview, setShowReview }) {
  return (
    <div className="about-container">
      <div className="about-section">
        <h1>Chulo - Nepal's Best Fast-Food Chain</h1>
        <p>
          Do you know that according to recent surveys, the demand for authentic
          Nepali fast food has grown exponentially? Chulo is the answer to this
          growing appetite, bringing together bold Nepali flavors and modern
          fast-food convenience.
        </p>

        <p>
          Just like premium restaurant chains, fast-food experiences are not
          created equally. Some are better than the rest, so we've decided to
          build Chulo to be one of the best fast-food chains for all food lovers
          in Nepal.
        </p>

        <h2>1. What is Chulo?</h2>
        <p>
          Chulo is a fast-food restaurant chain that serves authentic Nepali
          cuisine with a modern twist. You can enjoy freshly prepared meals in
          ultra-quality without any compromise. By having multiple outlets
          across Nepal, we are trying to make authentic Nepali fast food
          accessible to everyone.
        </p>

        <h2>2. Is Chulo safe and hygienic?</h2>
        <p>
          Yes, we are! We maintain the highest standards of hygiene and food
          safety. Our kitchens are regularly inspected, and we use only fresh,
          quality ingredients. We keep our preparation areas spotless 24/7 to
          make sure all food served is clean and safe.
        </p>

        <h2>3. What makes Chulo the best fast-food chain in Nepal?</h2>
        <p>
          Before building Chulo, we researched many other fast-food chains and
          learned from them. We only keep the good things and improve upon the
          competitors. Here's why we're confident about being the best:
        </p>

        <ul>
          <li>
            <strong>Quality:</strong> We never compromise on ingredient quality
            or taste.
          </li>
          <li>
            <strong>Speed:</strong> Fast service without sacrificing food
            quality.
          </li>
          <li>
            <strong>Authenticity:</strong> Genuine Nepali flavors with modern
            presentation.
          </li>
          <li>
            <strong>Hygiene:</strong> Spotless kitchens and strict food safety
            protocols.
          </li>
          <li>
            <strong>Value:</strong> Affordable prices for premium quality food.
          </li>
          <li>
            <strong>Service:</strong> Friendly staff trained to serve with a
            smile.
          </li>
        </ul>

        <h2>4. Our Mission</h2>
        <p>
          At Chulo, our mission is simple: to celebrate Nepali cuisine and make
          it accessible as fast food. We want every Nepali to feel proud of our
          food culture while enjoying the convenience of modern dining. Whether
          you're dining in or taking away, Chulo is where taste, speed, and
          authenticity meet.
        </p>
      </div>

      <ReviewsSection ShowReview={ShowReview} setShowReview={setShowReview} />
    </div>
  );
}
