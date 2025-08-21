import React from "react";
import { FaPencil } from "react-icons/fa6";

const ProductReviewContainer = ({ reviews }) => {
  return (
    <div className="border border-gray-400">
      <h1 className="px-6 py-2 border-b border-gray-400 text-2xl font-nata-sans uppercase">
        Ratings and Reviews
      </h1>
      {reviews ? (
        <div>
          {reviews.map((review) => {
            <ReviewCard key={review.id} {...review} />;
          })}
        </div>
      ) : (
        <a className="px-2 cursor-pointer flex py-2 items-center text-primary text-sm font-nata-sans gap-1">
          Be the first one to review this product
          <FaPencil />
        </a>
      )}
    </div>
  );
};

export default ProductReviewContainer;
