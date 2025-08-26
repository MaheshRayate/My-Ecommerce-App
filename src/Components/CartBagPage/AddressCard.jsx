import React from "react";

const AddressCard = ({ name, city, address, addresstype, mobile, pin }) => {
  return (
    <div className="flex items-center gap-x-2 justify-center">
      <input type="radio" name="delivery-address" id="delivery-address" />
      <div className="border relative border-gray-300 px-3 py-1 my-2">
        <span className="absolute right-2 text-primary font-semibold text-xl">
          {addresstype}
        </span>
        <h1 className="text-xl font-nata-sans">{name}</h1>
        <p className="text-gray-600 font-nata-sans">
          {address} {city} {pin}
        </p>
        <p>Phone - +91 {mobile}</p>
      </div>
    </div>
  );
};

export default AddressCard;
