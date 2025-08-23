import React, { useState } from "react";
import { IoMdClose } from "react-icons/io";

const CartAddressContainer = ({
  addressContainerOpened,
  setAddressContainerOpened,
  setAddressList,
}) => {
  const [address, setAddress] = useState({
    name: "",
    mobile: "",
    pin: "",
    city: "",
    address: "",
    addresstype: "",
  });

  const handleFormInputsChange = (e) => {
    const { name, value } = e.target;
    setAddress((prevValue) => {
      return {
        ...prevValue,
        [name]: value,
      };
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setAddressList((prevValue) => {
      return [...prevValue, address];
    });
    setAddressContainerOpened(false);
    document.body.style.overflow = "auto";

    setAddress({
      name: "",
      mobile: "",
      pin: "",
      city: "",
      address: "",
      addresstype: "",
    });
  };

  return (
    <div
      id="address-container"
      className={`${
        addressContainerOpened ? "translate-y-0" : "translate-y-full"
      } fixed bottom-0 left-1/2 -translate-x-1/2 transform
     transition-transform duration-1000 ease-linear
     lg:w-6/10 w-full z-[100] mx-auto border bg-white rounded-md lg:px-10 px-3`}
    >
      <button
        className="cursor-pointer relative top-4"
        onClick={() => {
          setAddressContainerOpened(false);
          document.body.style.overflow = "auto";
        }}
      >
        <IoMdClose className="size-8" />
      </button>
      <h1 className="text-3xl font-semibold font-nata-sans text-center">
        New Address
      </h1>
      <form onSubmit={handleSubmit}>
        <div className="my-4">
          {/* <label htmlFor="name">Name</label> */}
          <input
            type="text"
            name="name"
            id="name"
            className="border border-gray-300 rounded w-full font-nata-sans py-1 px-2"
            placeholder="Name"
            value={address.name}
            onChange={handleFormInputsChange}
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
            value={address.mobile}
            onChange={handleFormInputsChange}
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
            value={address.pin}
            onChange={handleFormInputsChange}
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
            value={address.city}
            onChange={handleFormInputsChange}
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
            value={address.address}
            onChange={handleFormInputsChange}
          />
        </div>

        <div className="flex gap-x-4 border border-gray-300 rounded font-nata-sans py-1 px-2">
          <input
            type="radio"
            name="addresstype"
            id=""
            value="Default"
            onChange={handleFormInputsChange}
          />
          Default
          <input
            type="radio"
            name="addresstype"
            id=""
            value="Work"
            onChange={handleFormInputsChange}
          />
          Work
          <input
            type="radio"
            name="addresstype"
            id=""
            value="Office"
            onChange={handleFormInputsChange}
          />
          Office
        </div>

        <div className="my-5">
          <button className="border block w-full py-1 border-primary font-semibold text-xl text-primary cursor-pointer hover:bg-primary hover:text-white">
            Submit
          </button>
        </div>
      </form>
    </div>
  );
};

export default CartAddressContainer;
