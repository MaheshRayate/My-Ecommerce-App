import React, { useState, useEffect } from "react";
import ProductCard from "./ProductCard";
import ProductPageFilter from "./ProductPageFilter";
import { GoSortAsc } from "react-icons/go";
import { CiFilter } from "react-icons/ci";
import MobileFilter from "./MobileFilter";
import MobileSortBy from "./MobileSortBy";

const Product = () => {
  const [showBox, setShowBox] = useState(true);
  const [mobileFilter, setMobileFilter] = useState(false);
  const [mobileSort, setMobileSort] = useState(false);

  // useEffect(() => {
  //   const handleScroll = () => {
  //     const scrollTop = window.scrollY;
  //     const windowHeight = window.innerHeight;
  //     const docHeight = document.documentElement.scrollHeight;

  //     const isAtBottom = scrollTop + windowHeight >= docHeight - 800;

  //     setShowBox(!isAtBottom);
  //   };

  //   window.addEventListener("scroll", handleScroll);

  //   return () => window.removeEventListener("scroll", handleScroll);
  // }, []);

  const handleMobileFilter = () => {
    setMobileFilter(!mobileFilter);
  };

  const handleMobileSortBy = () => {
    // alert("Hello");
    setMobileSort(!mobileSort);
  };

  return (
    <div>
      <div className="flex items-start product-container">
        <ProductPageFilter />
        <div className="w-full px-3 grid grid-cols-2 gap-x-1 gap-y-1 lg:grid-cols-4 lg:gap-x-4 lg:gap-y-5">
          <ProductCard />
          <ProductCard />
          <ProductCard />
          <ProductCard />
          <ProductCard />
          <ProductCard />
          <ProductCard />
          <ProductCard />
          <ProductCard />
          <ProductCard />
          <ProductCard />
          <ProductCard />
          <ProductCard />
          <ProductCard />
          <ProductCard />
          <ProductCard />
          <ProductCard />
          <ProductCard />
        </div>
      </div>
      {/* Mobile Filter and Sort By */}
      {showBox && (
        <div>
          <div className="flex md:hidden w-9/10 mx-auto bg-white text-xl my-5 fixed bottom-0 left-1/2 transform -translate-x-1/2">
            <button
              className="flex items-center justify-center  border py-1 border-gray-200 w-[50%]"
              onClick={handleMobileSortBy}
            >
              <GoSortAsc className="size-8 text-gray-600 text-bold" />
              Sort By
            </button>
            <button
              className="border items-center justify-center flex py-1 border-gray-200 w-[50%]"
              onClick={handleMobileFilter}
            >
              <CiFilter className="size-8 text-gray-600 text-bold" />
              Filter
            </button>
          </div>

          <div
            className={`${
              mobileFilter ? "translate-y-0" : "translate-y-[200%]"
            } transition-all duration-500 w-full fixed top-20 `}
          >
            <MobileFilter setMobileFilter={setMobileFilter} />
          </div>

          <div
            className={`${
              mobileSort ? "translate-y-0" : "translate-y-[200%]"
            } transition-all duration-500 w-full fixed top-60 `}
          >
            <MobileSortBy setMobileSort={setMobileSort} />
          </div>
        </div>
      )}
    </div>
  );
};

export default Product;
