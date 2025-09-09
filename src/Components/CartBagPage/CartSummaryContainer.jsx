import React from "react";
import { Link } from "react-router-dom";
import useCreateOrder from "./../../Custom Hooks/useCreateOrder";
import axios from "axios";
import useGetRazorpayKey from "../../Custom Hooks/useGetRazorpayKey";

const API_URL = import.meta.env.VITE_API_URL;

const CartSummaryContainer = ({ link, cart, disabled, selectedAddressId }) => {
  const createOrderMutation = useCreateOrder();
  const { key } = useGetRazorpayKey();

  const handleCheckout = async () => {
    try {
      const order = await createOrderMutation.mutateAsync({
        amount: cart.totalDiscountedPrice,
        addressId: selectedAddressId,
      });

      console.log("Order created:", order);

      // const options = {
      //   key, // Replace with your Razorpay key_id
      //   amount: cart.totalDiscountedPrice, // Amount is in currency subunits. Default currency is INR. Hence, 50000 refers to 50000 paise
      //   currency: "INR",
      //   name: "The Trendy Store",
      //   description: "The Trendy Store",
      //   order_id: order.id, // This is the order_id created in the backend
      //   callback_url: `${API_URL}/orders/paymentVerification`, // Your success URL
      //   prefill: {
      //     name: "Mahesh Rayate",
      //     email: "mahesh123@example.com",
      //     contact: "9999999999",
      //   },
      //   theme: {
      //     color: "#F37254",
      //   },
      // };

      const options = {
        key,
        amount: cart.totalDiscountedPrice * 100, // Razorpay expects paise
        currency: "INR",
        name: "The Trendy Store",
        description: "The Trendy Store",
        order_id: order.id, // backend order_id
        callback_url: `${API_URL}/orders/paymentVerification?addressId=${selectedAddressId}`,
        notes: { addressId: selectedAddressId }, // ✅ pass addressId correctly
        prefill: {
          name: "Mahesh Rayate", // replace with logged-in user data if available
          email: "mahesh123@example.com",
          contact: "9999999999",
        },
        theme: { color: "#F37254" },
      };

      const rzp = new window.Razorpay(options);
      rzp.open();
    } catch (err) {
      console.error("Error creating order:", err);
    }
  };

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
            <p>₹{cart?.totalPrice}</p>
          </div>
          <div className="flex justify-between px-4 my-2 py-2 font-nata-sans border-b border-gray-300">
            <p className="text-gray-600">Offer Discount</p>
            <p>₹{cart?.totalDiscountedPrice}</p>
          </div>
          <div className="flex justify-between px-4 my-2 py-2 font-nata-sans border-b border-gray-300">
            <p className="text-red-600">Your Total Savings</p>
            <p className="text-red-600">₹{cart?.discount}</p>
          </div>
          <div className="flex justify-between px-4 my-2 py-2 font-nata-sans border-b border-gray-300">
            <p className="text-gray-600">Delivery Fee</p>
            <p>Free</p>
          </div>
          <div className="flex justify-between px-4 my-2 py-2 font-nata-sans text-xl">
            <p className="">Total Amount Payable</p>
            <p className="font-semibold">₹{cart?.totalDiscountedPrice}</p>
          </div>
        </ul>

        {link === "payment" ? (
          <button
            onClick={handleCheckout}
            className={`${
              disabled ? "opacity-40" : "opacity-100"
            } block bg-primary w-full py-2 text-center text-white text-2xl font-nata-sans cursor-pointer`}
          >
            PROCEED TO PAYMENT
          </button>
        ) : (
          <Link
            to={disabled ? "#" : `/cart/${link}`}
            className={`${
              disabled ? "opacity-40" : "opacity-100"
            } block bg-primary w-full py-2 text-center text-white text-2xl font-nata-sans cursor-pointer`}
          >
            PLACE ORDER
          </Link>
        )}
      </div>
    </div>
  );
};

export default CartSummaryContainer;
