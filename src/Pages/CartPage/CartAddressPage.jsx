import React, { useState } from "react";
import CartSummaryContainer from "../../Components/CartBagPage/CartSummaryContainer";
import CartAddressContainer from "../../Components/CartBagPage/CartAddressContainer";
import AddressCard from "../../Components/CartBagPage/AddressCard";
import { nanoid } from "nanoid";
import { useOutletContext } from "react-router-dom";

const CartAddressPage = () => {
  const [addressContainerOpened, setAddressContainerOpened] = useState(false);
  const { user, cart } = useOutletContext();

  const handleNewAddress = () => {
    setAddressContainerOpened(true);
    document.body.style.overflow = "hidden";
  };

  return (
    <div
      className={`py-20 ${addressContainerOpened ? "min-h-fit" : "min-h-160"}`}
    >
      <div
        className={`${
          addressContainerOpened
            ? "bg-gray-600 opacity-0"
            : "bg-none opacity-100 "
        } flex  flex-col lg:flex-row gap-10`}
      >
        <div className="border-gray-300 lg:min-w-7/10 border py-4  font-nata-sans">
          {user?.addresses?.length > 0 ? (
            <div className="py-2 border-b border-gray-300 px-4">
              <h1 className="text-xl font-semibold px-1">
                Select delivery Address
              </h1>
              {user?.addresses?.map((item) => {
                return <AddressCard key={nanoid()} {...item} />;
              })}
            </div>
          ) : (
            <div className="py-2 border-b border-gray-300 px-4">
              <h1 className="text-2xl">You have no saved addresses.</h1>
              <h2 className="text-xl text-gray-500">
                Please add an address to continue shopping!
              </h2>
            </div>
          )}

          <div className="py-2 pt-6">
            <button
              className="px-4 cursor-pointer py-1 block text-primary  mx-auto border-primary border"
              onClick={handleNewAddress}
            >
              Add New Address
            </button>
          </div>
        </div>
        <div className="lg:min-w-3/10">
          <CartSummaryContainer link="payment" cart={cart} />
        </div>
      </div>

      <CartAddressContainer
        addressContainerOpened={addressContainerOpened}
        setAddressContainerOpened={setAddressContainerOpened}
      />
    </div>
  );
};

export default CartAddressPage;
