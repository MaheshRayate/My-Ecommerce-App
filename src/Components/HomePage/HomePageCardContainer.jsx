import React from "react";
import Slider from "react-slick";
import HomePageCard from "./HomePageCard";
import { nanoid } from "nanoid";
import ProductCard from "../ProductPage/ProductCard";
import useFetchHomePageProducts from "../../Custom Hooks/useFetchHomePageProducts";

const HomePageCardContainer = ({
  categoryTitle,
  topLavelCategory,
  thirdLavelCategory,
}) => {
  const { data, isLoadingmisError } = useFetchHomePageProducts(
    topLavelCategory,
    thirdLavelCategory
  );

  console.log(data);
  const settings = {
    dots: true,
    infinite: false,
    speed: 1000,
    slidesToShow: 4,
    slidesToScroll: 4,
    arrows: true,
    initialSlide: 0,

    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3,
          infinite: true,
          dots: true,
        },
      },
      {
        breakpoint: 780,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          initialSlide: 2,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };
  return (
    <div className="mx-auto w-[90%] my-10">
      <h2 className="px-2 text-2xl font-inter  font-bold">{categoryTitle}</h2>
      <div className="slider-container mt-2">
        <Slider className=" home-card-container" {...settings}>
          {data?.data?.products.map((product) => {
            const id = nanoid();
            return <ProductCard key={id} {...product} />;
          })}
        </Slider>
      </div>
    </div>
  );
};

export default HomePageCardContainer;
