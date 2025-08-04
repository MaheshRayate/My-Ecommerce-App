import React, { useState } from "react";

const FilterList = ({ filterList }) => {
  return (
    <div className="">
      {filterList.map((item) => {
        const { id, label, count } = item;
        return (
          <div key={id} className="flex text-gray-600 items-center relative">
            <span className="capitalize">{label}</span>
            <span className="ml-2">({count})</span>
            <input type="checkbox" className="absolute right-1 h-10 w-4" />
          </div>
        );
      })}
    </div>
  );
};

export default FilterList;
