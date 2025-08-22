import React from "react";
import { IoMdClose } from "react-icons/io";

const CartAddressContainer = ({
  addressContainerOpened,
  setAddressContainerOpened,
}) => {
  return (
    <div
      className={`${
        addressContainerOpened ? "translate-y-0" : "translate-y-full"
      } fixed bottom-0 left-1/2 -translate-x-1/2 transform
     transition-transform duration-1000 ease-linear
     lg:w-6/10 w-full z-[100] mx-auto border bg-white rounded-md`}
    >
      <button
        className="cursor-pointer"
        onClick={() => {
          setAddressContainerOpened(false);
        }}
      >
        <IoMdClose className="size-8" />
      </button>
      <h1 className="text-3xl font-semibold font-nata-sans text-center">
        New Address
      </h1>
      <form>
        <div className="my-4">
          {/* <label htmlFor="name">Name</label> */}
          <input
            type="text"
            name="name"
            id="name"
            className="border border-gray-300 rounded w-full font-nata-sans py-1 px-2"
            placeholder="Name"
          />
        </div>
        <div className="my-4">
          {/* <label htmlFor="mobile">Mobile No.</label> */}
          <input
            type="text"
            name="mobile"
            id="mobile"
            className="border border-gray-300 rounded w-full font-nata-sans py-1 px-2"
            placeholder="Contact No."
          />
        </div>
        <div className="my-4">
          {/* <label htmlFor="pin">Pincode</label> */}
          <input
            type="text"
            name="pin"
            id="pin"
            className="border border-gray-300 rounded w-full font-nata-sans py-1 px-2"
            placeholder="Pin Code"
          />
        </div>
        <div className="my-4">
          {/* <label htmlFor="city">City</label> */}
          <input
            type="text"
            name="city"
            id="city"
            className="border border-gray-300 rounded w-full font-nata-sans py-1 px-2"
            placeholder="City"
          />
        </div>
        <div className="my-4">
          {/* <label htmlFor="address">Address</label> */}
          <input
            type="text"
            name="address"
            id="address"
            className="border border-gray-300 rounded w-full font-nata-sans py-1 px-2"
            placeholder="Address"
          />
        </div>
      </form>
    </div>
  );
};

export default CartAddressContainer;
