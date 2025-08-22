import React, { useState } from "react";
import CartItem from "../../Components/CartBagPage/CartItem";
import CartSummaryContainer from "../../Components/CartBagPage/CartSummaryContainer";
import OtherProductsContainer from "../../Components/CartBagPage/OtherProductsContainer";

const CartBagPage = () => {
  return (
    <div className="py-20">
      <div className="flex flex-col lg:flex-row gap-6">
        <div className="lg:min-w-5/10 flex flex-col gap-y-3">
          <CartItem />
          <CartItem />
          <CartItem />
        </div>
        <div className="h-fit lg:w-4/10">
          <CartSummaryContainer />
        </div>
      </div>

      <div>
        <OtherProductsContainer />
      </div>
    </div>
  );
};

export default CartBagPage;
