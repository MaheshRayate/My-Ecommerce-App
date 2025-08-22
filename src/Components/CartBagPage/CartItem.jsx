import React, { useState } from "react";
import { FaChevronDown, FaChevronUp } from "react-icons/fa";
import { CiCirclePlus, CiCircleMinus } from "react-icons/ci";

const CartItem = () => {
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
    <div className="flex justify-start border gap-x-5 py-4">
      <div className="md:w-2/10 w-3/10">
        <img
          src="https://images-magento.shoppersstop.com/pub/media/catalog/product/S24GEWAFFLE2OLI/S24GEWAFFLE2OLI_GREEN/S24GEWAFFLE2OLI_GREEN.jpg_2000Wx3000H"
          alt=""
          className="w-8/10 block mx-auto"
        />
      </div>

      <div className="">
        <div>
          <h1 className="font-nata-sans font-semibold">JACK&JONES</h1>
          <p className="text-gray-600 font-nata-sans">
            Printed Cotton Polo Men's Tshirt
          </p>
        </div>

        <div className=" my-3 flex flex-col items-start gap-y-2 md:flex-row md:items-center lg:gap-x-4">
          <p className="font-nata-sans">White</p>
          <div class="relative w-48">
            <button class="font-nata-sans w-full border border-gray-200  px-3 py-2 rounded-md">
              Size:M{" "}
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
              class={`${
                sizeDropDown ? "block" : "hidden"
              } absolute  bg-white shadow-md w-full mt-1 rounded-md`}
            >
              <li class="font-nata-sans px-3 py-2 hover:bg-gray-100">S</li>
              <li class="font-nata-sans px-3 py-2 hover:bg-gray-100">M</li>
              <li class="font-nata-sans px-3 py-2 hover:bg-gray-100">L</li>
              <li class="font-nata-sans px-3 py-2 hover:bg-gray-100">XL</li>
              <li class="font-nata-sans px-3 py-2 hover:bg-gray-100">XXL</li>
            </ul>
          </div>

          <div className="flex  gap-x-3 items-center">
            <button
              className="text-3xl text-gray-600 cursor-pointer"
              onClick={handleDecrease}
            >
              <CiCircleMinus />
            </button>
            <p className="font-nata-sans">{count}</p>
            <button
              className=" text-3xl  text-gray-600 cursor-pointer"
              onClick={handleIncrease}
            >
              <CiCirclePlus />
            </button>
          </div>
        </div>

        <div className="flex gap-x-2">
          <p className="font-nata-sans">₹1400</p>
          <p className="font-nata-sans text-gray-600">₹2799</p>
          <p className="font-nata-sans text-primary">50% OFF</p>
        </div>
      </div>
    </div>
  );
};

export default CartItem;
