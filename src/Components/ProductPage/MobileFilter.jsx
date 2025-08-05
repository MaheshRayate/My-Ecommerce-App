import React from "react";
import { IoCloseOutline } from "react-icons/io5";

const MobileFilter = ({ setMobileFilter }) => {
  return (
    <div className="min-h-500 border-gray-400 border bg-white rounded-2xl px-2 py-2">
      <div className="flex items-center gap-x-2 ">
        <button
          onClick={() => {
            setMobileFilter(false);
          }}
        >
          <IoCloseOutline className="text-xl text-gray-700" />
        </button>

        <h1>FILTER</h1>
      </div>
    </div>
  );
};

export default MobileFilter;
