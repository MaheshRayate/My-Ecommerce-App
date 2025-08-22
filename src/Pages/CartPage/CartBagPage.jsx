import React, { useState } from "react";
import CartItem from "../../Components/CartBagPage/CartItem";

const CartBagPage = () => {
  return (
    <div className="py-20 h-400 ">
      <div className="flex flex-col lg:flex-row">
        <div className="lg:min-w-6/10 border">
          <CartItem />
          <CartItem />
          <CartItem />
        </div>
        <div className="h-40 lg:w-4/10 border"></div>
      </div>
    </div>
  );
};

export default CartBagPage;
