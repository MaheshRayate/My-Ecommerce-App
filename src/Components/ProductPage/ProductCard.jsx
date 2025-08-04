import React from "react";

const ProductCard = () => {
  return (
    <div className="border-gray-300 cursor-pointer lg:block">
      <img
        src="https://images-magento.shoppersstop.com/pub/media/catalog/product/AW24TF24HMKT016/AW24TF24HMKT016_BLUE/AW24TF24HMKT016_BLUE.jpg_2000Wx3000H"
        alt="t-shirt"
        className="h-80 rounded object-cover sm:object-cover sm:object-left-top w-full"
      />
      <div>
        <h3 className="font-inter my-1">TOMMY HILFIGER</h3>
        <p className="text-gray-700 font-light">
          Solid Cotton Polo Men's T-shirt
        </p>
        <h2 className="mt-2">
          ₹2599{" "}
          <span className="text-gray-700 font-extralight mx-2 line-through">
            ₹4999
          </span>
          <span className="text-primary mx-2">40% off</span>
        </h2>
      </div>
    </div>
  );
};

export default ProductCard;
