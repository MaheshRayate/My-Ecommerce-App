import React from "react";

const PaginationContainer = ({ totalPages, currentPage, onPageChange }) => {
  const pages = [...Array(totalPages).keys()].map((n) => n + 1);

  return (
    <div className="flex gap-2 my-10 justify-center w-9/10">
      {pages.map((page) => (
        <button
          key={page}
          className={`px-2 rounded ${
            page === currentPage ? "font-inter font-bold bg-gray-200" : ""
          } cursor-pointer`}
          onClick={() => onPageChange(page)}
        >
          {page}
        </button>
      ))}
    </div>
  );
};

export default PaginationContainer;
