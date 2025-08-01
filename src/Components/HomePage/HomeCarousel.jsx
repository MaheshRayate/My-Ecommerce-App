import React, { useRef, useState } from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import homeCarouselData from "./homeCarouselData";

const HomeCarousel = () => {
  const settings = {
    dots: true,
    infinite: true,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    // speed: 2000,
    autoplaySpeed: 3000,
    cssEase: "linear",
  };
  return (
    <div className="w-9/10 mx-auto mt-5 bg-black">
      <div className="slider-container">
        <Slider {...settings}>
          {homeCarouselData.map((item) => {
            const { id, url } = item;
            return (
              <div>
                <img className="md:w-full" src={url} alt={`carousel-${id}`} />
              </div>
            );
          })}
        </Slider>
      </div>
    </div>
  );
};

export default HomeCarousel;
