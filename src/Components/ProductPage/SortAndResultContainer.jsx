import React from "react";

const SortAndResultContainer = () => {
  return (
    <div className="flex w-9/10 mx-auto justify-between my-4">
      <div>
        <h1 className="md:text-xl font-inter">CATEGORY</h1>
        <p className="text-gray-600">(1000 Items)</p>
      </div>
      <div className="border hidden md:block border-gray-400 px-4 h-fit">
        <label htmlFor="sort">Sort By</label>
        <select
          name="sort"
          id="sort"
          className="outline-none font-bold py-1 font-inter"
        >
          <option
            value="popularity"
            className="bg-gray-100 my-2 focus:bg-gray-200"
          >
            Popularity
          </option>
          <option value="new" className="bg-gray-100 my-2  focus:bg-gray-200">
            New
          </option>
          <option
            value="discount"
            className="bg-gray-100 my-2 focus:bg-gray-200"
          >
            Discount
          </option>
          <option
            value="price low to high"
            className="bg-gray-100 my-2  focus:bg-gray-200"
          >
            Price Low to High
          </option>
          <option
            value="price high to low"
            className="bg-gray-100 my-2  focus:bg-gray-200"
          >
            Price High to Low
          </option>
        </select>
      </div>
    </div>
  );
};

export default SortAndResultContainer;
