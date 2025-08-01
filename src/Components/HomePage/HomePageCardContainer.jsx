import React from "react";
import Slider from "react-slick";
import HomePageCard from "./HomePageCard";

const HomePageCardContainer = () => {
  const settings = {
    dots: true,
    infinite: true,
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
    <div className="border w-[90%] mx-auto mt-10 ">
      <Slider className="slider-container home-card-container" {...settings}>
        {Array.from({ length: 9 }).map((_, i) => (
          <HomePageCard key={i} />
        ))}
      </Slider>
    </div>
  );
};

export default HomePageCardContainer;
