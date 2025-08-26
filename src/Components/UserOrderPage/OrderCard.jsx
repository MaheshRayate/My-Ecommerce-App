import React from "react";
import { FaRegCircleCheck } from "react-icons/fa6";
import { Link } from "react-router-dom";

const OrderCard = () => {
  return (
    <Link to="/account/orders/1">
      <div className="border  mb-5 border-gray-300 lg:px-10 px-6 font-nata-sans py-3 mx-3">
        <div className="flex items-center gap-x-2 ">
          <FaRegCircleCheck className="text-green-700 text-2xl" />
          <div>
            <h1 className="text-xl">Delivered</h1>
            <p className="text-gray-600">On Mon, 2nd Jun</p>
          </div>
        </div>

        <div className="flex border border-gray-300 bg-gray-100 lg:px-10 px-3 py-3 lg:gap-x-10 gap-x-5 items-center lg:items-start">
          <div className="h-fit w-[20%] lg:w-[15%] ">
            <img
              src="https://images-magento.shoppersstop.com/pub/media/catalog/product/S25326752YACWHI/S25326752YACWHI_WHITE/S25326752YACWHI_WHITE.jpg"
              alt=""
              className="object-cover"
            />
          </div>
          <div>
            <h1 className="font-semibold lg:text-xl">Calvin Kelvin</h1>
            <p className="text-gray-600">
              Solid Blended Fabric Round Neck Men's T-Shirt
            </p>
            <p>Size : M</p>
          </div>
        </div>
      </div>
    </Link>
  );
};

export default OrderCard;
