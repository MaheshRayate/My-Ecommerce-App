import React from "react";

const AddressCard = ({
  _id,
  fullName,
  address,
  addressType,
  phone,
  selectedAddressId,
  setSelectedAddressId,
}) => {
  return (
    <div className="flex items-center gap-x-2">
      <input
        type="radio"
        className="size-4"
        name="delivery-address"
        id="delivery-address"
        value={_id}
        checked={selectedAddressId === _id}
        onChange={() => setSelectedAddressId(_id)}
      />
      <div className="border relative border-gray-300 px-3 py-1 my-2 w-full">
        <span className="absolute right-2 text-primary font-semibold text-xl">
          {addressType}
        </span>
        <h1 className="text-xl font-nata-sans">{fullName}</h1>
        <p className="text-gray-600 font-nata-sans">{address}</p>
        <p>Phone - +91 {phone}</p>
      </div>
    </div>
  );
};

export default AddressCard;
