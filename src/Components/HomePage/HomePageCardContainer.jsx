import React from "react";
import Slider from "react-slick";
import HomePageCard from "./HomePageCard";

const HomePageCardContainer = () => {
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
      <h2 className="px-2 text-2xl font-inter  font-bold">Men Shirts</h2>
      <div className="slider-container mt-2">
        <Slider className=" home-card-container" {...settings}>
          {Array.from({ length: 9 }).map((_, i) => (
            <HomePageCard key={i} />
          ))}
        </Slider>
      </div>
    </div>
  );
};

export default HomePageCardContainer;
