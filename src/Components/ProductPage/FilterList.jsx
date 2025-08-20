import { useDispatch, useSelector } from "react-redux";
import { setFilter } from "../../Features/ProductFilter/productFilterSlice";

import * as React from "react";
import Box from "@mui/material/Box";
import Slider from "@mui/material/Slider";

const FilterList = ({ filterList, category }) => {
  const dispatch = useDispatch();
  const [value, setValue] = React.useState([0, 10000]);
  const selected = useSelector((state) => state.productFilter.value[category]);

  console.log(selected);

  const handleChange = (label) => {
    const isSelected = selected.includes(label);
    const updated = isSelected
      ? selected.filter((item) => item !== label)
      : [...selected, label];
    dispatch(setFilter({ key: category, value: updated }));
  };

  const handlePriceFilter = (event, newValue) => {
    setValue(newValue);
    console.log(value);
    const updatedValue = [`${newValue[0]} - ${newValue[1]}`];

    dispatch(setFilter({ key: "price", value: updatedValue }));
  };

  if (category === "price") {
    return (
      <Box sx={{}}>
        <Slider
          value={value}
          onChange={handlePriceFilter}
          valueLabelDisplay="auto"
          min={0}
          max={10000}
        />
        <p>
          {value[0]} - {value[1]}
        </p>
      </Box>
    );
  }

  return (
    <div className="">
      {filterList.map((item) => {
        const { id, label } = item;
        return (
          <div key={id} className="flex text-gray-600 items-center relative">
            <span className="capitalize font-inter text-md">{label}</span>

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
