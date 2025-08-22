import React from "react";
import { useQuery } from "@tanstack/react-query";
import axios from "axios";
import { nanoid } from "nanoid";
import ProductCard from "../ProductPage/ProductCard";

const OtherProductsContainer = () => {
  const { data, isLoading } = useQuery({
    queryKey: ["otherProducts"],
    queryFn: async () => {
      const res = await axios.get(
        `https://my-ecommerce-app-backend-ttn6.onrender.com/api/v1/products?topLavelCategory=Men&thirdLavelCategory=shirt&limit=20`
      );

      return res.data;
    },
  });

  return (
    <section className="my-10">
      <h1 className="font-nata-sans text-3xl text-center font-semibold">
        Other Products You May Like
      </h1>
      <div className="mt-6">
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
    </section>
  );
};

export default OtherProductsContainer;
