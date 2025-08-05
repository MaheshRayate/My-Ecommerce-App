import React from "react";
import { IoCloseOutline } from "react-icons/io5";

const MobileSortBy = ({ setMobileSort }) => {
  return (
    <div className="min-h-500 border-gray-400 border bg-white rounded-2xl px-2 py-2">
      <div className="flex items-center gap-2 border-b border-gray-300 py-2">
        <button
          onClick={() => {
            setMobileSort(false);
          }}
        >
          <IoCloseOutline className="text-xl text-gray-700" />
        </button>
        <h1 className="font-inter">SORT BY</h1>
      </div>
      <div className="flex flex-col gap-y-3">
        <h1 className="font-inter pt-2">Popularity</h1>
        <h1 className="font-inter pt-2">New</h1>
        <h1 className="font-inter pt-2">Discount</h1>
        <h1 className="font-inter pt-2">Price Low to High</h1>
        <h1 className="font-inter pt-2">Price High to Low</h1>
      </div>
    </div>
  );
};

export default MobileSortBy;
