import React from "react";
import "../css/StarRating.css";

const StarRating = ({ rating }) => {
  const stars = [];
  for (let i = 1; i <= 5; i++) {
    if (i <= parseFloat(rating)) {
      stars.push(
        <span key={i} className="star">
          &#9733;
        </span>
      );
    } else if (i - 1 < parseFloat(rating) && i > parseFloat(rating)) {
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
    <div className="star-rating" title={`Rating: ${parseFloat(rating.toFixed(1))}`}>
      {stars}
    </div>
  );
};

export default StarRating;
