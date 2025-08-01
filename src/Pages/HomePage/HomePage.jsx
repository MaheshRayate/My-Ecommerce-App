import React from "react";
import HomeCarousel from "../../Components/HomePage/HomeCarousel";
import HomePageCardContainer from "../../Components/HomePage/HomePageCardContainer";
import HomePageCard from "../../Components/HomePage/HomePageCard";

const HomePage = () => {
  return (
    <div className="px-5">
      <HomeCarousel />
      <HomePageCardContainer />
      {/* <HomePageCard /> */}
    </div>
  );
};

export default HomePage;
