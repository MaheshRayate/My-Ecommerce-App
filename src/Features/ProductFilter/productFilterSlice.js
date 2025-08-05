import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  value: {
    categories: [],
    subcategories: [],
    brands: [],
    gender: [],
    size: [],
    price: [],
    color: [],
    discount: [],
    fabric: [],
  },
};

export const productFilterSlice = createSlice({
  name: "productFilter",
  initialState,

  reducers: {
    setFilter: (state, action) => {
      const { key, value } = action.payload;
      state.value[key] = value;
    },

    clearAllFilters: (state) => {
      state.value = {
        categories: [],
        subcategories: [],
        brands: [],
        gender: [],
        size: [],
        price: [],
        color: [],
        discount: [],
        fabric: [],
      };
    },
  },
});

export const { setFilter, clearAllFilters } = productFilterSlice.actions;
export default productFilterSlice.reducer;
