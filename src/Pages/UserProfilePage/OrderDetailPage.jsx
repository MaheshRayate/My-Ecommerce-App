import React from "react";
import { FaRegCircleCheck } from "react-icons/fa6";
import AddressCard from "../../Components/CartBagPage/AddressCard";

import OrderHorizontalStepper from "../../Components/OrderDetailsPage/OrderHorizontalStepper";
import OrderVerticalStepper from "../../Components/OrderDetailsPage/OrderVerticalStepper";

const OrderDetailPage = () => {
  return (
    <section className="">
      <div>
        <img
          src="https://images-magento.shoppersstop.com/pub/media/catalog/product/S25326752YACWHI/S25326752YACWHI_WHITE/S25326752YACWHI_WHITE.jpg"
          alt=""
          className="w-[20%] block mx-auto"
        />

        <div className="text-center font-nata-sans">
          <h1 className="lg:text-2xl font-bold">Calvin Kelvin</h1>
          <p className="font-semibold lg:text-xl text-gray-600">
            Solid Blended Fabric Round Neck Men's T-Shirt
          </p>
          <p>Size : M</p>
        </div>

        <div>
          <div className="lg:hidden">
            <OrderVerticalStepper />
          </div>

          <div className="hidden lg:block">
            <OrderHorizontalStepper />
          </div>
        </div>

        <div className="px-2 lg:px-10 flex gap-x-4 py-2 items-center mx-2 lg:mx-10 bg-primary text-white">
          <FaRegCircleCheck className="size-10" />
          <div>
            <h1>Delivered</h1>
            <p>On Mon, 2nd Jun 2025</p>
          </div>
        </div>

        <div className="px-2 lg:px-10 my-4">
          <p className="text-gray-500 text-sm ">
            Exchange/Return Not available now. Window Closed on Mon, 16 Jun 2025
          </p>
          <button className="hidden">Exchange/Return</button>
        </div>

        <div className="my-3 text-primary py-1 text-center border border-gray-300">
          Review Container
        </div>

        <div className="lg:px-10 px-2 border py-5 border-gray-300 font-nata-sans mb-3">
          <h1 className="text-2xl font-semibold">Delivery Address</h1>
          <div>
            <h1 className="font-semibold">Mahesh Rayate | 9307438889</h1>
            <p>
              Flat A-603, Ashok Smruthi CHS, Ghodbunder Road, Kasarvadavali,
              Thane West - 400615
            </p>
          </div>
        </div>

        <div className="lg:px-10 px-2 border py-5 border-gray-300 font-nata-sans mb-3">
          <h1 className="text-2xl font-semibold">Payment Summary</h1>
          <div className="w-full md:w-[50%] lg:w-[30%] ">
            <div className="flex justify-between">
              <p>Original Price</p>
              <p>₹ 4999</p>
            </div>
            <div className="flex justify-between">
              <p>Discount</p>
              <p>- ₹3100</p>
            </div>
            <div className="flex justify-between">
              <p>Discounted Price</p>
              <p>₹ 1899 </p>
            </div>
            <div className="flex justify-between">
              <p>Platform Fee</p>
              <p>₹ 20</p>
            </div>
            <div className="font-bold flex justify-between">
              <p>Total Paid</p>
              <p>₹ 1919</p>
            </div>
          </div>
        </div>

        <div className="lg:px-10 px-2 border py-5 border-gray-300 font-nata-sans">
          <p className="text-gray-600">Order Id - #123434762364263409</p>
        </div>
      </div>
    </section>
  );
};

export default OrderDetailPage;
