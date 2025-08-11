import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { setFilter } from "../../Features/ProductFilter/productFilterSlice";

const FilterList = ({ filterList, category }) => {
  const dispatch = useDispatch();
  const selected = useSelector((state) => state.productFilter.value[category]);


  const handleChange = (label) => {
    const isSelected = selected.includes(label);
    const updated = isSelected
      ? selected.filter((item) => item !== label)
      : [...selected, label];
    dispatch(setFilter({ key: category, value: updated }));
  };

  return (
    <div className="">
      {filterList.map((item) => {
        const { id, label, count } = item;
        return (
          <div key={id} className="flex text-gray-600 items-center relative">
            <span className="capitalize font-inter text-md">{label}</span>
            <span className="ml-2">({count})</span>
            <input
              type="checkbox"
              checked={selected.includes(label)}
              onChange={() => handleChange(label)}
              className="absolute right-1 h-10 w-4"
            />
          </div>
        );
      })}
    </div>
  );
};

export default FilterList;
