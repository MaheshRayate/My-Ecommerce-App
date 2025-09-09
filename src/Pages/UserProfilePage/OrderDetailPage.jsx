import React from "react";
import { FaRegCircleCheck } from "react-icons/fa6";
import AddressCard from "../../Components/CartBagPage/AddressCard";
import { useParams } from "react-router-dom";
import useFetchOrderItemDetails from "../../Custom Hooks/useFetchOrderItemDetails";

import OrderHorizontalStepper from "../../Components/OrderDetailsPage/OrderHorizontalStepper";
import OrderVerticalStepper from "../../Components/OrderDetailsPage/OrderVerticalStepper";

const OrderDetailPage = () => {
  const params = useParams();
  console.log(params.id);

  const { data } = useFetchOrderItemDetails(params.id);
  console.log(data?.data?.order);
  console.log(data?.data?.orderItem);

  return (
    <section className="">
      <div>
        <img
          src={data?.data?.orderItem?.product?.imageUrl}
          alt={data?.data?.orderItem?.product?.title}
          className="w-[20%] block mx-auto"
        />

        <div className="text-center font-nata-sans">
          <h1 className="lg:text-2xl font-bold">
            {data?.data?.orderItem?.product?.brand}
          </h1>
          <p className="font-semibold lg:text-xl text-gray-600">
            {data?.data?.orderItem?.product?.title}
          </p>
          <p>Size : {data?.data?.orderItem?.size}</p>
        </div>

        <div>
          <div className="lg:hidden">
            <OrderVerticalStepper
              orderStatus={data?.data?.order?.orderStatus}
            />
          </div>

          <div className="hidden lg:block">
            <OrderHorizontalStepper
              orderStatus={data?.data?.order?.orderStatus}
            />
          </div>
        </div>

        <div className="px-2 lg:px-10 flex gap-x-4 py-2 items-center mx-2 lg:mx-10 bg-primary text-white">
          <FaRegCircleCheck className="size-10" />
          <div>
            <h1>{data?.data?.order?.orderStatus}</h1>
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
            <h1 className="font-semibold">
              {data?.data?.order?.shippingAddress?.fullName} |{" "}
              {data?.data?.order?.shippingAddress?.phone}
            </h1>
            <p>{data?.data?.order?.shippingAddress?.address}</p>
          </div>
        </div>

        <div className="lg:px-10 px-2 border py-5 border-gray-300 font-nata-sans mb-3">
          <h1 className="text-2xl font-semibold">Payment Summary</h1>
          <div className="w-full md:w-[50%] lg:w-[30%] ">
            <div className="flex justify-between">
              <p>Original Price</p>
              <p>₹ {data?.data?.orderItem?.price}</p>
            </div>

            <div className="flex justify-between">
              <p>Discount</p>
              <p>
                - ₹
                {data?.data?.orderItem?.price -
                  data?.data?.orderItem?.discountedPrice}
              </p>
            </div>
            <div className="flex justify-between">
              <p>Discounted Price</p>
              <p>₹ {data?.data?.orderItem?.discountedPrice} </p>
            </div>
            <div className="flex justify-between">
              <p>Platform Fee</p>
              <p>₹ Free</p>
            </div>
            <div className="font-bold flex justify-between">
              <p>Total Paid</p>
              <p>₹ {data?.data?.orderItem?.discountedPrice}</p>
            </div>
          </div>
        </div>

        <div className="lg:px-10 px-2 border py-5 border-gray-300 font-nata-sans">
          <p className="text-gray-600">
            Order Id - {data?.data?.order?.paymentDetails?.transactionId}
          </p>
        </div>
      </div>
    </section>
  );
};

export default OrderDetailPage;
