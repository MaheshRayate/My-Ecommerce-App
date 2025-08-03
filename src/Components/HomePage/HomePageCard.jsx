import React from "react";
import { FaRegHeart } from "react-icons/fa";
import { FaHeart } from "react-icons/fa6";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const HomePageCard = () => {
  return (
    <div className="relative mx-2 md:mx-1 border border-gray-200 shadow-lg text-center px-2 py-2">
      <img
        src="https://media.landmarkshops.in/cdn-cgi/image/h=1200,w=1200,q=85,fit=cover/lifestyle/1000015324615-Brown-Chocolate-1000015324615_01-2100.jpg"
        alt=""
        className="h-60 w-8/10 mx-auto"
      />
      <div>
        <h2 className="text-xl">₹2,399</h2>
        <h3 className="font-bold">U.S. POLO ASSN. Solid Tailored Fit Shirt</h3>
        <span></span>
        <span>
          <FaRegHeart className="text-2xl text-primary absolute top-3 right-2" />
          <FaHeart className="hidden text-2xl text-primary  absolute top-3 right-2" />
        </span>
      </div>
    </div>
  );
};

export default HomePageCard;
