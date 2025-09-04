import React, { useState } from "react";
import { FaChevronDown, FaChevronUp } from "react-icons/fa";
import { CiCirclePlus, CiCircleMinus } from "react-icons/ci";

const CartItem = ({
  title,
  brand,
  imageUrl,
  size,
  price,
  discountedPrice,
  quantity,
}) => {
  const [sizeDropDown, setSizeDropDown] = useState(false);
  const [count, setCount] = useState(1);

  const [selectedSized, setSelectedSize] = useState("M");

  const handleIncrease = () => {
    setCount(count + 1);
  };

  const handleDecrease = () => {
    if (count === 0) {
      return setCount(0);
    }
    setCount(count - 1);
  };

  return (
    <div className="flex justify-start border border-gray-300 gap-x-5 py-4">
      <div className="md:w-2/10 w-3/10">
        <img
          src={imageUrl}
          alt="product-img"
          className="w-8/10 block mx-auto"
        />
      </div>

      <div className="">
        <div>
          <h1 className="font-nata-sans font-semibold">{brand}</h1>
          <p className="text-gray-600 font-nata-sans">{title}</p>
        </div>

        <div className=" my-3 flex flex-col items-start gap-y-2 md:flex-row md:items-center lg:gap-x-4">
          {/* <p className="font-nata-sans">White</p> */}
          <div className="relative w-48">
            <button className="font-nata-sans w-full border border-gray-200  px-3 py-2 rounded-md">
              Size:{size}{" "}
              {sizeDropDown ? (
                <FaChevronUp
                  className="absolute left-34 top-3 text-gray-600 cursor-pointer"
                  onClick={() => {
                    setSizeDropDown(false);
                  }}
                />
              ) : (
                <FaChevronDown
                  className="absolute left-34 top-4 text-gray-600 cursor-pointer"
                  onClick={() => {
                    setSizeDropDown(true);
                  }}
                />
              )}
            </button>
            <ul
              className={`${
                sizeDropDown ? "block" : "hidden"
              } absolute  bg-white shadow-md w-full mt-1 rounded-md`}
            >
              <li className="font-nata-sans px-3 py-2 hover:bg-gray-100">S</li>
              <li className="font-nata-sans px-3 py-2 hover:bg-gray-100">M</li>
              <li className="font-nata-sans px-3 py-2 hover:bg-gray-100">L</li>
              <li className="font-nata-sans px-3 py-2 hover:bg-gray-100">XL</li>
              <li className="font-nata-sans px-3 py-2 hover:bg-gray-100">
                XXL
              </li>
            </ul>
          </div>

          <div className="flex  gap-x-3 items-center">
            <button
              className="text-3xl text-gray-600 cursor-pointer"
              onClick={handleDecrease}
            >
              <CiCircleMinus />
            </button>
            <p className="font-nata-sans">{quantity}</p>
            <button
              className=" text-3xl  text-gray-600 cursor-pointer"
              onClick={handleIncrease}
            >
              <CiCirclePlus />
            </button>
          </div>
        </div>

        <div className="flex gap-x-2">
          <p className="font-nata-sans">₹{discountedPrice}</p>
          <p className="font-nata-sans text-gray-600">₹{price}</p>
          <p className="font-nata-sans text-primary">50% OFF</p>
        </div>

        <button className="block text-l font-semibold font-nata-sans text-primary cursor-pointer border px-2 mt-3 rounded">
          REMOVE
        </button>
      </div>
    </div>
  );
};

export default CartItem;
