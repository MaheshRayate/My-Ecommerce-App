import React from "react";
import { Link } from "react-router-dom";


const ProductCard = ({
  _id,
  title,
  brand,
  imageUrl,
  price,
  discountedPrice,
  discountPersent,
}) => {
  return (
    <div className="border-gray-300 cursor-pointer lg:block">
      <Link to={`/${_id}`}>
        <img
          src={imageUrl}
          alt="t-shirt"
          className="h-80 rounded object-cover sm:object-cover sm:object-left-top w-full"
        />
        <div>
          <h3 className="font-inter my-1">{brand}</h3>
          <p className="text-gray-700 font-light">{title}</p>
          <h2 className="mt-2">
            ₹{discountedPrice}{" "}
            <span className="text-gray-700 font-extralight mx-2 line-through">
              ₹{price}
            </span>
            <span className="text-primary mx-2">{discountPersent}% off</span>
          </h2>
        </div>
      </Link>
    </div>
  );
};

export default ProductCard;
