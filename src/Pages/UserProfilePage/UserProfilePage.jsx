import React from "react";
import { FaCircleUser } from "react-icons/fa6";
import AddressCard from "../../Components/CartBagPage/AddressCard";

const UserProfilePage = () => {
  return (
    <div>
      <div className="px-10 border-b border-gray-300">
        <h1 className="text-2xl lg:text-3xl font-nata-sans">My Profile</h1>
        <div className="flex text-3xl gap-x-2 text-gray-600 mt-2">
          <FaCircleUser />
          <h1 className="text-xl lg:text-2xl font-nata-sans">Mahesh Rayate</h1>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-y-3 mt-3 font-nata-sans">
          <div className="flex gap-x-2">
            <p className="text-gray-600">Gender - </p>
            <p>Male</p>
          </div>
          <div className="flex gap-x-2">
            <p className="text-gray-600">DOB - </p>
            <p>13/04/2000</p>
          </div>
          <div className="flex gap-x-2">
            <p className="text-gray-600">Age - </p>
            <p>25</p>
          </div>
          <div className="flex gap-x-2">
            <p className="text-gray-600">Mobile No - </p>
            <p>+91 9307438889</p>
          </div>
          <div className="flex gap-x-2">
            <p className="text-gray-600">Email - </p>
            <p>maheshrayate8742@gmail.com</p>
          </div>
          <div className="flex gap-x-2">
            <p className="text-gray-600"></p>
            <p></p>
          </div>
        </div>

        <div className="my-4">
          <button className="border font-semibold border-primary px-4 font-nata-sans text-primary block mx-auto cursor-pointer">
            Edit
          </button>
        </div>
      </div>

      <div className="px-10 py-5">
        <h1 className="text-2xl lg:text-3xl font-nata-sans mb-2">
          My Addresses
        </h1>
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-x-3">
          <div className="border relative border-gray-300 px-3 py-4 my-2">
            <span className="absolute right-2 text-primary font-semibold text-xl">
              home
            </span>
            <h1 className="text-xl font-nata-sans">Mahesh Rayate</h1>
            <p className="text-gray-600 font-nata-sans">
              A-603, Ashok Smruthi CHS, Ghodbunder Road, Kasarvadavali Thane
              West 400615
            </p>
            <p>Phone - +91 9307438889</p>

            <div className="flex gap-x-5 font-nata-sans text-primary mt-5">
              <button>Edit</button>
              <button>Delete</button>
            </div>
          </div>
          <div className="border relative border-gray-300 px-3 py-4 my-2">
            <span className="absolute right-2 text-primary font-semibold text-xl">
              work
            </span>
            <h1 className="text-xl font-nata-sans">Mahesh Rayate</h1>
            <p className="text-gray-600 font-nata-sans">
              A-603, Ashok Smruthi CHS, Ghodbunder Road, Kasarvadavali Thane
              West 400615
            </p>
            <p>Phone - +91 9307438889</p>
            <div className="flex gap-x-5 font-nata-sans text-primary mt-5">
              <button>Edit</button>
              <button>Delete</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default UserProfilePage;
