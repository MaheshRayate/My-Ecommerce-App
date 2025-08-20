import { useLocation } from "react-router-dom";
import { useState } from "react";
import { useQuery } from "@tanstack/react-query";
import { PiKeyReturn } from "react-icons/pi";
import { BsFillCartFill } from "react-icons/bs";
import { FaRegHeart } from "react-icons/fa";

import axios from "axios";

const ProductDetailsPage = () => {
  const [selectedSize, setSelectedSize] = useState(null);

  const location = useLocation();
  const id = location.pathname.split("/")[1];

  const { data, isLoading } = useQuery({
    queryKey: ["productDetails"],

    queryFn: async () =>
      axios.get(
        `https://my-ecommerce-app-backend-ttn6.onrender.com/api/v1/products/${id}`
      ),
  });

  const handleSize = (size) => {
    setSelectedSize(size);
  };

  if (isLoading) {
    return (
      <div className="flex justify-center">
        <h1 className="text-3xl">Loading...</h1>
      </div>
    );
  }

  return (
    <div className="border lg:px-10 px-2">
      <div className="flex  flex-col md:flex-row my-5 md:gap-x-2 lg:gap-x-10">
        <div className=" ">
          <img
            src={data?.data?.data?.product?.imageUrl}
            alt={data?.data?.data?.product?.title}
            className="h-130 md:h-110 lg:h-140"
          />
        </div>
        {/* Product Info */}
        <div className="py-5">
          <h1 className="text-4xl font-inter font-semibold">
            {data?.data?.data?.product?.brand}
          </h1>
          <h3 className="text-xl font-semibold text-gray-500">
            {data?.data?.data?.product?.title}
          </h3>
          <div className="">
            <div className="flex gap-2">
              <p className="text-2xl">
                ₹{data?.data?.data?.product?.discountedPrice}
              </p>
              <p className="line-through text-2xl text-gray-400">
                ₹{data?.data?.data?.product?.price}
              </p>
              <p className="text-2xl text-primary">
                {data?.data?.data?.product?.discountPersent}% OFF
              </p>
            </div>
            <span className="text-blue-700 opacity-70 font-semibold block mb-3">
              inclusive of all taxes
            </span>
          </div>
          <div>
            <label className="font-light">Select Size</label>
            <div className="flex gap-x-2">
              {["S", "M", "L", "XL", "XXL"].map((size) => {
                return (
                  <button
                    onClick={() => handleSize(size)}
                    className={`${
                      selectedSize === size ? "bg-gray-400" : "bg-gray-200"
                    } bg-gray-200 size-10 cursor-pointer font-inter rounded-full`}
                  >
                    {size}
                  </button>
                );
              })}
            </div>
          </div>

          <div className="flex gap-x-2 items-center mt-2">
            <PiKeyReturn className="text-2xl" />
            <p className="md:text-xl font-light font-nata-sans">
              14 Days Easy Return and Exchange
            </p>
          </div>

          <div className="flex gap-x-4 mt-4">
            <button className="bg-primary text-white flex gap-x-1 items-center px-8 cursor-pointer py-1 rounded">
              <BsFillCartFill className="text-xl" />
              <span className="text-xl">Add to Bag</span>
            </button>
            <button className=" text-primary border border-primary flex items-center gap-x-1 px-8 cursor-pointer py-1 rounded">
              <FaRegHeart className="text-xl" />
              <span className="text-xl">Wishlist</span>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductDetailsPage;
