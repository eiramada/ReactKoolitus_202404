import React from "react";
import "./StarRating.css";

const StarRating = ({ rating }) => {
  const stars = [];
  for (let i = 1; i <= 5; i++) {
    if (i <= rating) {
      stars.push(
        <span key={i} className="star">
          &#9733;
        </span>
      );
    } else if (i - 1 < rating && i > rating) {
      stars.push(
        <span key={i} className="star half">
          &#9734;
        </span>
      );
    } else {
      stars.push(
        <span key={i} className="star">
          &#9734;
        </span>
      );
    }
  }

  return (
    <div className="star-rating" title={`Rating: ${rating.toFixed(1)}`}>
      {stars}
    </div>
  );
};

export default StarRating;
