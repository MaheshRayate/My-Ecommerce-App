import React from "react";
import { Link } from "react-router-dom";

const CartSummaryContainer = ({ link }) => {
  return (
    <div className="border-gray-300 border">
      <div className="border-b border-gray-300">
        <h1 className="p-2 text-2xl font-nata-sans font-semibold">
          Cart Summary
        </h1>
      </div>
      <div>
        <ul>
          <div className="flex justify-between px-4 my-2 py-2 font-nata-sans border-b border-gray-300">
            <p className="text-gray-600">Total MRP</p>
            <p>₹4297</p>
          </div>
          <div className="flex justify-between px-4 my-2 py-2 font-nata-sans border-b border-gray-300">
            <p className="text-gray-600">Offer Discount</p>
            <p>₹4297</p>
          </div>
          <div className="flex justify-between px-4 my-2 py-2 font-nata-sans border-b border-gray-300">
            <p className="text-red-600">Your Total Savings</p>
            <p className="text-red-600">₹4297</p>
          </div>
          <div className="flex justify-between px-4 my-2 py-2 font-nata-sans border-b border-gray-300">
            <p className="text-gray-600">Delivery Fee</p>
            <p>Free</p>
          </div>
          <div className="flex justify-between px-4 my-2 py-2 font-nata-sans text-xl">
            <p className="">Total Amount Payable</p>
            <p className="font-semibold">₹2897</p>
          </div>
        </ul>
        <Link
          to={`/cart/${link}`}
          className="block bg-primary w-full py-2 text-center text-white text-2xl font-nata-sans cursor-pointer"
        >
          PLACE ORDER
        </Link>
      </div>
    </div>
  );
};

export default CartSummaryContainer;
