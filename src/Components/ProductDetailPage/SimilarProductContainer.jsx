import React from "react";
import { useQuery } from "@tanstack/react-query";
import axios from "axios";
import { nanoid } from "nanoid";
import ProductCard from "../ProductPage/ProductCard";

const SimilarProductContainer = ({ topLavelCategory, thirdLavelCategory }) => {
  const { data, isLoading } = useQuery({
    queryKey: ["similarproducts"],
    queryFn: async () => {
      const res = await axios.get(
        `https://my-ecommerce-app-backend-ttn6.onrender.com/api/v1/products?topLavelCategory=${topLavelCategory}&thirdLavelCategory=${thirdLavelCategory}&limit=8`
      );
      return res.data;
    },
  });
  return (
    <section>
      <h1 className="text-3xl font-semibold uppercase text-center">
        SIMILAR PRODUCTS
      </h1>
      <div className="py-5">
        <div className="min-w-full">
          <div className="w-full px-3 grid grid-cols-2 gap-x-1 gap-y-1 lg:grid-cols-4 lg:gap-x-4 lg:gap-y-5">
            {isLoading ? (
              <h1 className="text-3xl">Loading...</h1>
            ) : (
              data?.data?.products.map((product) => {
                const id = nanoid();
                return <ProductCard key={id} {...product} />;
              })
            )}
          </div>
        </div>
      </div>
    </section>
  );
};

export default SimilarProductContainer;
