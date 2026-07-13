import { reviews } from "../../../assets/Backend/reviews";

export function ReviewsSection({ ShowReview, setShowReview }) {
  const reviewsArray = Object.values(reviews);
  return (
    <div className="reviews-section">
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
      
              <a
                onClick={() => {
                  if (ShowReview === review.id) {
                    setShowReview(null);
                  } else {
                    setShowReview(review.id);
                  }
                }}
              >
                {ShowReview === review.id ? " See Less" : "... See more"}
              </a>
            </div>
            <div className="review-footer">
              <div className="review-avatar">{review.avatar}</div>
              <span className="review-author">{review.author}</span>
              <span className="review-comments">💬 {review.comments}</span>
            </div>
          </div>
        );
      })}
    </div>
  );
}
