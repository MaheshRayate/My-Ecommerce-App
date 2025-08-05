import React from "react";
import Product from "./../../Components/ProductPage/Product";
import SortAndResultContainer from "../../Components/ProductPage/SortAndResultContainer";
const ProductPage = () => {
  return (
    <div>
      <SortAndResultContainer />
      <Product />
    </div>
  );
};

export default ProductPage;
