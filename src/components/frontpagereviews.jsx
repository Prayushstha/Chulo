import { reviews } from "../assets/Backend/reviews";
import { useEffect, useRef } from "react";

export function ReviewsSection({ ShowReviewDialog, setShowReviewDialog }) {
  let dialogRef = useRef();

  useEffect(() => {
    let handler = (e) => {
      if (dialogRef.current.contains(e.target)) {
        setShowReviewDialog(false);
      }
    };
    document.addEventListener("mousedown", handler);
  });

  return (
    <div className="reviews-section">
      <h2>Customer Reviews</h2>

      <div
        className="review-card"
        id="review-section-link"
        onClick={() => OpenReviewsDialog(1)}
        ref={dialogRef}
      >
        <div className="review-header">
          <span className="review-tag">#General</span>
          <span className="review-time">2 hours ago</span>
        </div>
        <div className="review-title">Best momo I've ever had!</div>
        <div className="review-preview">
          The chicken momo at Chulo is absolutely incredible. The spices are
          perfectly balanced and the dipping sauce is to die for...
        </div>
        <div className="review-footer">
          <div className="review-avatar">R</div>
          <span className="review-author">Rajesh Kumar</span>
          <span className="review-comments">💬 15</span>
        </div>
      </div>

      <div className="review-card"
    //    onClick="openReview(2)"
      >
        <div className="review-header">
          <span className="review-tag">#Service</span>
          <span className="review-time">5 hours ago</span>
        </div>
        <div className="review-title">Quick delivery and amazing taste</div>
        <div className="review-preview">
          Ordered through their app and the food arrived in 20 minutes, still
          hot and fresh. The burger was juicy and the fries were crispy...
        </div>
        <div className="review-footer">
          <div className="review-avatar">P</div>
          <span className="review-author">Priya Sharma</span>
          <span className="review-comments">💬 23</span>
        </div>
      </div>

      <div className="review-card" onClick="openReview(3)">
        <div className="review-header">
          <span className="review-tag">#Food</span>
          <span className="review-time">1 day ago</span>
        </div>
        <div className="review-title">Finally, authentic Nepali fast food!</div>
        <div className="review-preview">
          Been waiting for something like this. The dal bhat combo is
          phenomenal, and they even have sekuwa wraps. Innovation at its best...
        </div>
        <div className="review-footer">
          <div className="review-avatar">S</div>
          <span className="review-author">Sujan Thapa</span>
          <span className="review-comments">💬 42</span>
        </div>
      </div>

      <div className="review-card" onClick="openReview(4)">
        <div className="review-header">
          <span className="review-tag">#Experience</span>
          <span className="review-time">2 days ago</span>
        </div>
        <div className="review-title">Clean, fast, and delicious!</div>
        <div className="review-preview">
          Visited the New Road outlet yesterday. The place is spotless, staff is
          super friendly, and the food quality is top-notch...
        </div>
        <div className="review-footer">
          <div className="review-avatar">A</div>
          <span className="review-author">Anita Gurung</span>
          <span className="review-comments">💬 18</span>
        </div>
      </div>

      <div className="review-card" onClick="openReview(5)">
        <div className="review-header">
          <span className="review-tag">#Value</span>
          <span className="review-time">3 days ago</span>
        </div>
        <div className="review-title">Great value for money</div>
        <div className="review-preview">
          The combo meals are huge and reasonably priced. You get quality food
          without breaking the bank. Will definitely come back...
        </div>
        <div className="review-footer">
          <div className="review-avatar">K</div>
          <span className="review-author">Kiran Rai</span>
          <span className="review-comments">💬 31</span>
        </div>
      </div>
    </div>
  );
}

// export function OpenReviewsDialog(
//   { ShowReviewDialog, setShowReviewDialog },
//   id,
// ) {
//   const review = reviews[id];
//   return (
//     <div
//       class="dialog-overlay"
//       id="dialogOverlay"
//       onclick="closeDialog(event)"

//     >
//       <div class="dialog" onclick="event.stopPropagation()">
//         <button
//           class="close-btn"
//           onclick="closeDialog()"
//           aria-label="Close dialog"
//         >
//           ×
//         </button>
//         <h3 id="dialogTitle">{review.title}</h3>
//         <div class="dialog-meta">
//           <span id="dialogTag">{review.tag}</span>
//           <span id="dialogTime">{review.time}</span>
//           <span class="rating" id="dialogRating">
//             {review.rating}
//           </span>
//         </div>
//         <div class="dialog-content" id="dialogContent">
//           {review.content}
//         </div>
//         <div class="dialog-author-info">
//           <div class="dialog-avatar" id="dialogAvatar">
//             {review.avatar}
//           </div>
//           <div>
//             <div id="dialogAuthor" style="font-weight: 600">
//               {review.author}
//             </div>
//             <div style="font-size: 13px; color: #888">Verified Customer</div>
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// }

function closeDialog(event) {
  if (event) {
    event.stopPropagation();
  }
  document.getElementById("dialogOverlay").classList.remove("active");
  document.body.style.overflow = "auto";
}
