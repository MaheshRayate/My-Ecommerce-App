import React from "react";
import HomeCarousel from "../../Components/HomePage/HomeCarousel";
import HomePageCardContainer from "../../Components/HomePage/HomePageCardContainer";
import HomePageCard from "../../Components/HomePage/HomePageCard";

const HomePage = () => {
  return (
    <div className="px-5">
      <HomeCarousel />
      <HomePageCardContainer
        categoryTitle="Men Shirts"
        topLavelCategory="men"
        thirdLavelCategory="shirt"
      />
      <HomePageCardContainer
        categoryTitle="Men Jeans"
        topLavelCategory="men"
        thirdLavelCategory="men_jeans"
      />
      <HomePageCardContainer
        categoryTitle="Men Kurtas"
        topLavelCategory="men"
        thirdLavelCategory="mens_kurta"
      />
      <HomePageCardContainer
        categoryTitle="Women Tops"
        topLavelCategory="women"
        thirdLavelCategory="top"
      />
      <HomePageCardContainer
        categoryTitle="Women Dresses"
        topLavelCategory="women"
        thirdLavelCategory="women_dress"
      />
      <HomePageCardContainer
        categoryTitle="Women Jeans"
        topLavelCategory="women"
        thirdLavelCategory="women_jeans"
      />
    </div>
  );
};

export default HomePage;
