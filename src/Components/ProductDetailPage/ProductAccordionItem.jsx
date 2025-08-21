import React, { useState } from "react";
import { productDetails } from "./productAccordionItemData";
import { nanoid } from "nanoid";
import { CiCirclePlus } from "react-icons/ci";
import { CiCircleMinus } from "react-icons/ci";

const ProductAccordionItem = ({ title }) => {
  const [isOpened, setIsOpened] = useState(false);

  const handleClick = () => {
    setIsOpened(!isOpened);
  };
  return (
    <div className="border border-gray-400 px-6 pb-1">
      <div className="flex items-center justify-between py-1">
        <h2 className="text-2xl font-nata-sans uppercase">{title}</h2>
        <button className="cursor-pointer" onClick={handleClick}>
          {isOpened ? (
            <CiCircleMinus className="text-5xl text-gray-600" />
          ) : (
            <CiCirclePlus className="text-5xl text-gray-600" />
          )}
        </button>
      </div>

      {title === "product details" ? (
        <div
          className={`${
            isOpened ? "grid" : "hidden"
          } grid-cols-1 md:grid-cols-2 lg:grid-cols-3`}
        >
          {productDetails.map((detail) => {
            return (
              <div key={nanoid()} className="md:my-1">
                <h2 className="capitalize font-nata-sans text-gray-600">
                  {detail}
                </h2>
                <p>...</p>
              </div>
            );
          })}
        </div>
      ) : (
        <div className={`${isOpened ? "block" : "hidden"}`}>
          <p className="font-nata-sans mb-2">
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Molestias,
            quas voluptatum? Assumenda perspiciatis porro aut numquam, animi
            labore temporibus, commodi repellat repellendus nisi totam odit
            accusamus? Deserunt velit excepturi quam dolor nihil tempora,
            reiciendis aperiam debitis doloremque ad eos assumenda quo
            voluptatum eum rem expedita.
          </p>
        </div>
      )}
    </div>
  );
};

export default ProductAccordionItem;
