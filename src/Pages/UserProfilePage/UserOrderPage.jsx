import React from "react";
import OrderCard from "../../Components/UserOrderPage/OrderCard";

const UserOrderPage = () => {
  return (
    <div>
      <div className="px-10">
        <h1 className="text-2xl lg:text-3xl font-nata-sans mb-3">MY ORDERS</h1>
      </div>

      <div className="">
        <OrderCard />
        <OrderCard />
        <OrderCard />
        <OrderCard />
        <OrderCard />
      </div>
    </div>
  );
};

export default UserOrderPage;
