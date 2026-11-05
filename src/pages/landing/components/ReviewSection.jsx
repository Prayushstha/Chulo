import { reviews } from "../reviews.js";

export function ReviewsSection({ ShowReview, setShowReview }) {
  const reviewsArray = Object.values(reviews);
  return (
    <section className="reviews-section" id="reviews">
      <h2>Customer Reviews</h2>
      {reviewsArray.map((review) => {
        return (
          <div className="review-card" key={review.id}>
            <div className="review-header">
              <span className="review-tag">{review.tag}</span>
              <span className="review-time">{review.time}</span>
            </div>
            <div className="review-title">{review.title}</div>
            <div className="review-preview">
              {ShowReview === review.id
                ? review.content
                : review.content.slice(0, 150)}
      
              <button type="button" className="text-button" aria-expanded={ShowReview === review.id}
                onClick={() => {
                  if (ShowReview === review.id) {
                    setShowReview(null);
                  } else {
                    setShowReview(review.id);
                  }
                }}
              >
                {ShowReview === review.id ? " See Less" : "... See more"}
              </button>
            </div>
            <div className="review-footer">
              <div className="review-avatar">{review.author[0]}</div>
              <span className="review-author">{review.author}</span>
              <span className="review-comments">💬 {review.comments}</span>
            </div>
          </div>
        );
      })}
    </section>
  );
}
