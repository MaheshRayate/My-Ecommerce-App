import { useState } from "react";
import { FaCircleUser } from "react-icons/fa6";
import { FaCirclePlus } from "react-icons/fa6";
import AddressCard from "../../Components/CartBagPage/AddressCard";
import CartAddressContainer from "../../Components/CartBagPage/CartAddressContainer";
import useDeleteAddress from "../../Custom Hooks/useDeleteAddress";

import { useOutletContext } from "react-router-dom";
import EditUserForm from "../../Components/UserProfilePage/EditUserForm";

const UserProfilePage = () => {
  const { user } = useOutletContext();
  const deleteAddressMutation = useDeleteAddress();

  const [addressContainerOpened, setAddressContainerOpened] = useState(false);
  const [editUserFormOpen, setEditUserFormOpen] = useState(false);

  const handleEditUser = () => {
    setEditUserFormOpen(true);

    document.body.style.overflow = "hidden";
  };

  const handleNewAddress = () => {
    setAddressContainerOpened(true);
    document.body.style.overflow = "hidden";
  };

  const handleDeleteAddress = (id) => {
    console.log(id);
    deleteAddressMutation.mutate(id);
  };

  return (
    <div>
      <div className="px-10 border-b border-gray-300">
        <h1 className="text-2xl lg:text-3xl font-nata-sans">My Profile</h1>

        <div className="flex text-3xl gap-x-2 text-gray-600 mt-5">
          <FaCircleUser />
          <h1 className="text-xl lg:text-2xl font-nata-sans">
            {user.firstName} {user.lastName}
          </h1>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-y-3 mt-3 font-nata-sans">
          <div className="flex gap-x-2">
            <p className="text-gray-600">Gender - </p>
            <p>{user?.gender}</p>
          </div>
          <div className="flex gap-x-2">
            <p className="text-gray-600">DOB - </p>
            <p>{user?.dob?.split("T")[0]}</p>
          </div>
          <div className="flex gap-x-2">
            <p className="text-gray-600">Age - </p>
            <p>25</p>
          </div>
          <div className="flex gap-x-2">
            <p className="text-gray-600">Mobile No - </p>
            <p>+91 {user?.phone}</p>
          </div>
          <div className="flex gap-x-2">
            <p className="text-gray-600">Email - </p>
            <p>{user.email}</p>
          </div>
          <div className="flex gap-x-2">
            <p className="text-gray-600"></p>
            <p></p>
          </div>
        </div>

        <div className="my-4">
          <button
            className="border font-semibold border-primary px-4 font-nata-sans text-primary block mx-auto cursor-pointer"
            onClick={handleEditUser}
          >
            Edit
          </button>
        </div>
      </div>

      <div className="px-10 py-5">
        <div className="flex items-center justify-between ">
          <h1 className="text-2xl lg:text-3xl font-nata-sans mb-2">
            My Addresses
          </h1>
          <button
            className="flex gap-x-2 items-center cursor-pointer text-primary"
            onClick={handleNewAddress}
          >
            {" "}
            <FaCirclePlus />
            Add Address
          </button>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-x-3">
          {user?.addresses?.map((address) => {
            return (
              <div
                key={address._id}
                className="border relative border-gray-300 px-3 py-4 my-2"
              >
                <span className="absolute right-2 text-primary font-semibold text-xl">
                  {address.addressType}
                </span>
                <h1 className="text-xl font-nata-sans">{address.fullName}</h1>
                <p className="text-gray-600 font-nata-sans">
                  {address.address}
                </p>
                <p>Phone - +91 {address.phone}</p>

                <div className="flex gap-x-5 font-nata-sans text-primary mt-5">
                  <button className="cursor-pointer">Edit</button>
                  <button
                    className="cursor-pointer"
                    onClick={() => handleDeleteAddress(address._id)}
                  >
                    Delete
                  </button>
                </div>
              </div>
            );
          })}
        </div>
        <CartAddressContainer
          addressContainerOpened={addressContainerOpened}
          setAddressContainerOpened={setAddressContainerOpened}
        />

        <EditUserForm
          editUserFormOpen={editUserFormOpen}
          setEditUserFormOpen={setEditUserFormOpen}
        />
      </div>
    </div>
  );
};

export default UserProfilePage;
