import React from "react";
import { Outlet } from "react-router-dom";

const CartPageLayout = () => {
  return (
    <section className="px-2 lg:px-20">
      <div className="">
        <div className="flex justify-between md:justify-center md:gap-30 fixed left-1/2 transform bg-gray-100 px-3 -translate-x-1/2 w-full py-5">
          <h1 className="text-2xl font-nata-sans">Bag</h1>
          <h1 className="text-2xl font-nata-sans">Address</h1>
          <h1 className="text-2xl font-nata-sans">Payment</h1>
        </div>
      </div>
      <Outlet />
    </section>
  );
};

export default CartPageLayout;
