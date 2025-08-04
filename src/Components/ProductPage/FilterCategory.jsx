import React, { useState } from "react";
import { IoIosArrowDown } from "react-icons/io";
import { IoIosArrowUp } from "react-icons/io";
import FilterList from "./FilterList";

const FilterCategory = ({ label, list }) => {
  const [clicked, setClicked] = useState(false);

  return (
    <div className="relative py-2 md:w-8/10 lg:w-6/10 mx-auto">
      <div className="flex items-center">
        <h1 className="text-xl">{label}</h1>

        <button
          className="absolute right-1"
          onClick={() => {
            setClicked(!clicked);
          }}
        >
          {clicked ? (
            <IoIosArrowUp className="text-gray-500 text-xl  cursor-pointer" />
          ) : (
            <IoIosArrowDown className="text-gray-500 text-xl  cursor-pointer" />
          )}
        </button>
      </div>
      {clicked && <FilterList filterList={list} />}
    </div>
  );
};

export default FilterCategory;
