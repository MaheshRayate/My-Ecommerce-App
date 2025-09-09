import React from "react";
import OrderCard from "../../Components/UserOrderPage/OrderCard";
import { useOutletContext } from "react-router-dom";
import useFetchOrderDetails from "../../Custom Hooks/useFetchOrderDetails";

const UserOrderPage = () => {
  const { data } = useFetchOrderDetails();
  console.log(data?.data?.orders);
  // const orders = data?.data?.orders;

  return (
    <div>
      <div className="px-10">
        <h1 className="text-2xl lg:text-3xl font-nata-sans mb-3">MY ORDERS</h1>
      </div>

      <div className="">
        {data?.data?.orders.map((order) => {
          return order.orderItems.map((orderItem) => {
            return (
              <OrderCard
                key={orderItem._id}
                {...orderItem}
                orderStatus={order.orderStatus}
              />
            );
          });
        })}

        {/* <OrderCard orderStatus={"Out For Delivery"} />
        <OrderCard orderStatus={"Delivered"} />
        <OrderCard orderStatus={"Delivered"} />
        <OrderCard orderStatus={"Delivered"} /> */}
      </div>
    </div>
  );
};

export default UserOrderPage;
