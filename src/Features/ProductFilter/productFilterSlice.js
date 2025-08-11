import { createSlice } from "@reduxjs/toolkit";

const savedFilters = localStorage.getItem("filters")
  ? JSON.parse(localStorage.getItem("filters"))
  : {
      categories: [],
      brand: [],
      gender: [],
      size: [],
      price: [],
      color: [],
      discount: [],
      fabric: [],
    };

export const productFilterSlice = createSlice({
  name: "productFilter",
  initialState: {
    value: savedFilters,
  },

  reducers: {
    setFilter: (state, action) => {
      const { key, value } = action.payload;
      state.value[key] = value;
      localStorage.setItem("filters", JSON.stringify(state.value)); // save to localStorage
    },

    clearAllFilters: (state) => {
      state.value = {
        categories: [],
        brand: [],
        gender: [],
        size: [],
        price: [],
        discount: [],
        color: [],
      };

      localStorage.removeItem("filters");
    },
  },
});

export const { setFilter, clearAllFilters } = productFilterSlice.actions;
export default productFilterSlice.reducer;
