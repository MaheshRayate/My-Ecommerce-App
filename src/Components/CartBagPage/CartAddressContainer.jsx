import React, { useState } from "react";
import { useQueryClient, useMutation } from "@tanstack/react-query";
import axios from "axios";
import { IoMdClose } from "react-icons/io";
import { toast } from "react-toastify";

const CartAddressContainer = ({
  addressContainerOpened,
  setAddressContainerOpened,
}) => {
  const queryClient = useQueryClient();

  const [address, setAddress] = useState({
    fullName: "",
    phone: "",
    postalCode: "",
    city: "",
    address: "",
    addressType: "",
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

  const addAddressMutation = useMutation({
    mutationFn: (newAddress) =>
      axios.post("http://localhost:3000/api/v1/addresses", newAddress, {
        withCredentials: true,
      }),
    onSuccess: () => {
      toast.success("Address Added Successfully");

      // refresh authenticated user query
      queryClient.invalidateQueries(["authUser"]);

      // close modal & reset form
      setAddressContainerOpened(false);
      document.body.style.overflow = "auto";
      setAddress({
        fullName: "",
        phone: "",
        postalCode: "",
        city: "",
        address: "",
        addressType: "",
      });
    },
    onError: (err) => {
      toast.error(err.response?.data?.message || err.message);
    },
  });

  const handleSubmit = async (e) => {
    e.preventDefault();
    addAddressMutation.mutate(address); // trigger mutation
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
          setAddress({
            fullName: "",
            phone: "",
            postalCode: "",
            city: "",
            address: "",
            addressType: "",
          });
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
          <input
            type="text"
            name="fullName"
            id="fullName"
            required
            className="border border-gray-300 rounded w-full font-nata-sans py-1 px-2"
            placeholder="Full Name"
            value={address.fullName}
            onChange={handleFormInputsChange}
          />
        </div>
        <div className="my-4">
          {/* <label htmlFor="mobile">Mobile No.</label> */}
          <input
            type="text"
            name="phone"
            required
            id="phone"
            className="border border-gray-300 rounded w-full font-nata-sans py-1 px-2"
            placeholder="Contact No."
            value={address.phone}
            onChange={handleFormInputsChange}
          />
        </div>
        <div className="my-4">
          <input
            type="text"
            name="postalCode"
            required
            id="postalCode"
            className="border border-gray-300 rounded w-full font-nata-sans py-1 px-2"
            placeholder="Pin Code"
            value={address.postalCode}
            onChange={handleFormInputsChange}
          />
        </div>
        <div className="my-4">
          <input
            type="text"
            name="city"
            id="city"
            required
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
            required
            className="border border-gray-300 rounded w-full font-nata-sans py-1 px-2"
            placeholder="Address"
            value={address.address}
            onChange={handleFormInputsChange}
          />
        </div>

        <div className="flex gap-x-4 border border-gray-300 rounded font-nata-sans py-1 px-2">
          <input
            type="radio"
            name="addressType"
            id=""
            value="Home"
            defaultChecked
            onChange={handleFormInputsChange}
          />
          Home
          <input
            type="radio"
            name="addressType"
            id=""
            value="Work"
            onChange={handleFormInputsChange}
          />
          Work
          <input
            type="radio"
            name="addressType"
            id=""
            value="Other"
            onChange={handleFormInputsChange}
          />
          Other
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
