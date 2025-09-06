import React, { useState } from "react";
import { FaChevronDown, FaChevronUp } from "react-icons/fa";
import { CiCirclePlus, CiCircleMinus } from "react-icons/ci";
import useDeleteCartItem from "../../Custom Hooks/useDeleteCartItem";
import useUpdateCartItem from "../../Custom Hooks/useUpdateCartItem";

const CartItem = ({
  id,
  title,
  brand,
  imageUrl,
  size,
  price,
  discountedPrice,
  quantity,
}) => {
  const [sizeDropDown, setSizeDropDown] = useState(false);
  const [count, setCount] = useState(quantity);
  const deleteCartItemMutation = useDeleteCartItem();
  const updateCartItemMutation = useUpdateCartItem();

  const [selectedSize, setSelectedSize] = useState(size);

  const handleIncrease = () => {
    const newCount = count + 1;
    setCount(newCount);

    updateCartItemMutation.mutate({
      id,
      data: { size: selectedSize, quantity: newCount },
    });
  };

  const handleDecrease = () => {
    if (count === 1) return;

    const newCount = count - 1;
    setCount(newCount);

    updateCartItemMutation.mutate({
      id,
      data: { size: selectedSize, quantity: newCount },
    });
  };

  const handleRemove = (id) => {
    deleteCartItemMutation.mutate(id);
  };

  const handleClick = (e) => {
    const newSize = e.target.value;
    console.log(newSize);
    setSelectedSize(newSize);
    updateCartItemMutation.mutate({
      id,
      data: { size: newSize, quantity: count },
    });
    setSizeDropDown(false);
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
              Size : {selectedSize}{" "}
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
              } absolute  bg-white shadow-md flex flex-col gap-y-3 w-full mt-1 rounded-md`}
            >
              <div className="flex py-1 relative items-center hover:bg-gray-100 cursor-pointer">
                <input
                  type="radio"
                  name="size"
                  id=""
                  value="S"
                  className="w-full not-sr-only opacity-0"
                  onClick={handleClick}
                />
                <li className="font-nata-sans px-3 py-2 block absolute left-0">
                  S
                </li>
              </div>
              <div className="flex py-1 items-center relative hover:bg-gray-100 cursor-pointer">
                <input
                  type="radio"
                  name="size"
                  id=""
                  value="M"
                  className="w-full not-sr-only opacity-0"
                  onClick={handleClick}
                />
                <li className="font-nata-sans px-3 py-2 block absolute left-0">
                  M
                </li>
              </div>

              <div className="flex py-1 relative items-center hover:bg-gray-100 cursor-pointer">
                <input
                  type="radio"
                  name="size"
                  id=""
                  value="L"
                  className="w-full not-sr-only opacity-0"
                  onClick={handleClick}
                />
                <li className="font-nata-sans px-3 py-2 absolute left-0">L</li>
              </div>

              <div className="flex py-1 items-center relative hover:bg-gray-100 cursor-pointer">
                <input
                  type="radio"
                  className="w-full not-sr-only opacity-0"
                  onClick={handleClick}
                  name="size"
                  id=""
                  value="XL"
                />
                <li className="font-nata-sans px-3 py-2 block absolute left-0">
                  XL
                </li>
              </div>
              <div className="flex py-1 items-center relative hover:bg-gray-100 cursor-pointer">
                <input
                  type="radio"
                  name="size"
                  id=""
                  value="XXL"
                  className="w-full not-sr-only opacity-0"
                  onClick={handleClick}
                />
                <li className="font-nata-sans px-3 py-2 block absolute left-0">
                  XXL
                </li>
              </div>
            </ul>
          </div>

          <div className="flex  gap-x-3 items-center">
            <button
              className={`${
                count <= 1 ? "opacity-30" : "opacity-100"
              } text-3xl text-gray-600 cursor-pointer`}
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
          <p className="font-nata-sans">₹{discountedPrice}</p>
          <p className="font-nata-sans text-gray-600 line-through">₹{price}</p>
          <p className="font-nata-sans text-primary">50% OFF</p>
        </div>

        <button
          onClick={() => {
            handleRemove(id);
          }}
          className="block text-l hover:bg-primary hover:text-white font-semibold font-nata-sans text-primary cursor-pointer border px-2 mt-3 rounded"
        >
          REMOVE
        </button>
      </div>
    </div>
  );
};

export default CartItem;
