import { configureStore } from "@reduxjs/toolkit";
import productFilterReducer from "../Features/ProductFilter/productFilterSlice";

export const store = configureStore({
  reducer: { productFilter: productFilterReducer },
});
