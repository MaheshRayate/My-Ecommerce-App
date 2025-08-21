import { useLocation, useParams } from "react-router-dom";
import { useState } from "react";
import { useQuery } from "@tanstack/react-query";
import { PiKeyReturn } from "react-icons/pi";
import { BsFillCartFill } from "react-icons/bs";
import { FaRegHeart } from "react-icons/fa";

import axios from "axios";
import ProductReviewContainer from "../../Components/ProductDetailPage/ProductReviewContainer";
import ProductDetailsAccordion from "../../Components/ProductDetailPage/ProductDetailsAccordion";
import SimilarProductContainer from "../../Components/ProductDetailPage/SimilarProductContainer";

const ProductDetailsPage = () => {
  const [selectedSize, setSelectedSize] = useState(null);

  const location = useLocation();
  const id = location.pathname.split("/")[1];
  // const { id } = useParams();

  const { data, isLoading } = useQuery({
    queryKey: ["productDetails", id],

    queryFn: async () =>
      axios.get(
        `https://my-ecommerce-app-backend-ttn6.onrender.com/api/v1/products/${id}`
      ),
  });

  const handleSize = (size) => {
    setSelectedSize(size);
  };

  if (isLoading) {
    return (
      <div className="flex justify-center">
        <h1 className="text-3xl">Loading...</h1>
      </div>
    );
  }

  return (
    <div className="border lg:px-10 px-2">
      <div className="flex  flex-col md:flex-row my-5 md:gap-x-2 lg:gap-x-10">
        <div className="min-w-[40%]">
          <img
            src={data?.data?.data?.product?.imageUrl}
            alt={data?.data?.data?.product?.title}
            className="h-130 md:h-110 lg:h-140 block mx-auto"
          />
        </div>

        {/* Product Info */}

        <div className="py-5 md:min-w-[55%]">
          <h1 className="text-4xl font-inter font-semibold">
            {data?.data?.data?.product?.brand}
          </h1>
          <h3 className="text-xl font-semibold text-gray-500">
            {data?.data?.data?.product?.title}
          </h3>
          <div className="">
            <div className="flex gap-2">
              <p className="text-2xl">
                ₹{data?.data?.data?.product?.discountedPrice}
              </p>
              <p className="line-through text-2xl text-gray-400">
                ₹{data?.data?.data?.product?.price}
              </p>
              <p className="text-2xl text-primary">
                {data?.data?.data?.product?.discountPersent}% OFF
              </p>
            </div>
            <span className="text-blue-700 opacity-70 font-semibold block mb-3">
              inclusive of all taxes
            </span>
          </div>
          <div>
            <label className="font-light">Select Size</label>
            <div className="flex gap-x-2">
              {["S", "M", "L", "XL", "XXL"].map((size) => {
                return (
                  <button
                    onClick={() => handleSize(size)}
                    className={`${
                      selectedSize === size ? "bg-gray-400" : "bg-gray-200"
                    } bg-gray-200 size-10 cursor-pointer font-inter rounded-full`}
                  >
                    {size}
                  </button>
                );
              })}
            </div>
          </div>

          <div className="flex gap-x-2 items-center mt-2">
            <PiKeyReturn className="text-2xl" />
            <p className="md:text-xl font-light font-nata-sans">
              14 Days Easy Return and Exchange
            </p>
          </div>

          <div className="flex gap-x-4 mt-4">
            <button className="bg-primary text-white flex gap-x-1 items-center px-8 cursor-pointer py-1 rounded">
              <BsFillCartFill className="text-xl" />
              <span className="text-xl">Add to Bag</span>
            </button>
            <button className=" text-primary border border-primary flex items-center gap-x-1 px-8 cursor-pointer py-1 rounded">
              <FaRegHeart className="text-xl" />
              <span className="text-xl">Wishlist</span>
            </button>
          </div>

          {/* Product Meta Data like Info details*/}
          <div className="my-5">
            <ProductDetailsAccordion />
          </div>

          <ProductReviewContainer />
        </div>
      </div>
      <SimilarProductContainer
        topLavelCategory={data?.data?.data?.product?.topLavelCategory}
        thirdLavelCategory={data?.data?.data?.product?.thirdLavelCategory}
      />
    </div>
  );
};

export default ProductDetailsPage;

{
  /* <ul>
              <div className="border border-gray-400 px-6">
                <div className="flex items-center justify-between py-1">
                  <h2 className="text-2xl font-light font-nata-sans">
                    PRODUCT DETAILS
                  </h2>
                  <button className="cursor-pointer">
                    <CiCirclePlus className="text-5xl text-gray-600" />
                  </button>
                </div>
                <p className="hidden">
                  Lorem ipsum dolor sit, amet consectetur adipisicing elit. A,
                  maiores adipisci? Ut dolorem dolores possimus corrupti unde
                  perspiciatis autem facilis quae consequatur natus, aperiam
                  magnam tempora, illum maiores laborum quis iure ullam
                  voluptatibus a ipsam eius aut omnis. Cum repudiandae nulla
                  assumenda corrupti id nam itaque officia sapiente qui
                  consequatur maxime, eaque nobis dolore sed optio, nihil
                  quisquam eius. Dolore impedit doloribus odio perspiciatis ut
                  iste aliquam earum labore expedita, amet quibusdam, eveniet
                  quidem ducimus reprehenderit quaerat quo qui recusandae
                  repellendus placeat accusantium et. Facere adipisci assumenda,
                  asperiores deserunt officia libero quisquam quibusdam
                  doloremque explicabo modi, accusamus temporibus! Minus,
                  excepturi.
                </p>
              </div>
              <div className="border border-gray-400 px-6">
                <div className="flex items-center justify-between py-1">
                  <h2 className="text-2xl font-light font-nata-sans">
                    ABOUT THE BRAND
                  </h2>
                  <button className="cursor-pointer">
                    <CiCircleMinus className="text-5xl text-gray-600" />
                  </button>
                </div>
                <p className="hidden">
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. Alias
                  aliquid quos tenetur iusto possimus quo architecto
                  dignissimos, a earum cupiditate, voluptas vel? Illo rem cumque
                  atque quidem placeat quibusdam, aliquam nobis qui, est modi
                  debitis, iusto blanditiis quasi rerum magnam vel neque
                  suscipit! Dolor maiores aliquam illo eveniet dolore sapiente
                  nulla, fugiat consectetur repudiandae animi quia possimus
                  commodi dicta pariatur magni vitae ex? Facere qui, neque
                  aperiam a est quis unde ipsa veniam deleniti voluptas harum
                  magnam aliquam illum animi similique praesentium dignissimos
                  ab, hic amet possimus consectetur magni nesciunt nobis
                  excepturi. Numquam architecto odit exercitationem aliquid
                  repudiandae reprehenderit eos.
                </p>
              </div>
            </ul> */
}
