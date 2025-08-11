import React from "react";
import { filterData } from "./filterData";

import FilterCategory from "./FilterCategory";

const ProductPageFilter = () => {
  return (
    <div className="hidden md:block md:w-[40%] lg:w-[40%]">
      <h1 className="text-xl font-bold md:w-8/10 lg:w-6/10 mx-auto">FILTERS</h1>

      <div>
        {filterData.map((filterCategory) => {
          const { id, label, list } = filterCategory;
          return <FilterCategory key={id} label={label} list={list} />;
        })}
      </div>
    </div>
  );
};

export default ProductPageFilter;
