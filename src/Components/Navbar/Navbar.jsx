import React from "react";
import { GiHamburgerMenu } from "react-icons/gi";
import { useGlobalContext } from "../../Context/Context";
import Navlinks from "./Navlinks";
import logo1 from "../../assets/logo1.png";
import { IoCartSharp } from "react-icons/io5";
import { IoHeartOutline } from "react-icons/io5";
import { IoPersonCircleOutline } from "react-icons/io5";
import { IoSearch } from "react-icons/io5";
import { Link, NavLink } from "react-router-dom";

const Navbar = () => {
  const { setNavId, sidebarOpen, openSidebar } = useGlobalContext();

  const handleMouseOver = (e) => {
    if (!e.target.classList.contains("nav-link-btn")) {
      return setNavId(null);
    }
  };

  return (
    <nav
      onMouseOver={handleMouseOver}
      className="fixed z-20 w-full bg-white border-b border-gray-100 shadow-lg flex justify-between  lg:gap-10 items-center px-4 lg:px-10 font-nata-sans"
    >
      <div className="flex items-center gap-10">
        <div>
          <a href="/">
            <img src={logo1} alt="logo" className="h-10" />
          </a>
        </div>

        <Navlinks />
      </div>

      <div className="flex items-center gap-x-1">
        <NavLink
          to="/cart/bag"
          className={
            ({ isActive }) =>
              isActive
                ? "lg:hidden border-b-3 border-primary font-bold cursor-pointer" // active styles
                : "lg:hidden cursor-pointer" // inactive styles
          }
        >
          <IoCartSharp className="text-3xl text-primary" />
        </NavLink>
        <NavLink
          to="/wishlist"
          className={
            ({ isActive }) =>
              isActive
                ? "lg:hidden border-b-3 border-primary font-bold cursor-pointer" // active styles
                : "lg:hidden cursor-pointer" // inactive styles
          }
        >
          <IoHeartOutline className=" text-3xl text-primary" />
        </NavLink>
        <NavLink
          to="/account"
          className={
            ({ isActive }) =>
              isActive
                ? "lg:hidden border-b-3 border-primary font-bold cursor-pointer" // active styles
                : "lg:hidden cursor-pointer" // inactive styles
          }
        >
          <IoPersonCircleOutline className="text-3xl text-primary" />
        </NavLink>
        <button className="lg:hidden cursor-pointer" onClick={openSidebar}>
          <GiHamburgerMenu className="text-2xl text-primary" />
        </button>
      </div>

      <div className="hidden lg:flex items-center gap-x-5 relative">
        <div>
          <input
            type="text"
            name=""
            id=""
            placeholder="Search for products, brands and more"
            className="border py-1 w-[21em] border-gray-300  px-2"
          />
        </div>

        <div className="flex gap-x-2">
          <span className="absolute right-39 top-2">
            <IoSearch className="text-primary font-bold text-xl" />
          </span>
          <NavLink
            to="/cart/bag"
            className={
              ({ isActive }) =>
                isActive
                  ? "border-b-4 border-primary font-bold cursor-pointer" // active styles
                  : " cursor-pointer" // inactive styles
            }
          >
            <IoCartSharp className=" text-4xl text-primary" />
          </NavLink>
          <NavLink
            to="/wishlist"
            className={
              ({ isActive }) =>
                isActive
                  ? "border-b-4 border-primary font-bold cursor-pointer" // active styles
                  : " cursor-pointer" // inactive styles
            }
          >
            <IoHeartOutline className=" text-4xl text-primary" />
          </NavLink>
          <NavLink
            to="/account"
            className={
              ({ isActive }) =>
                isActive
                  ? "border-b-4 border-primary font-bold cursor-pointer" // active styles
                  : " cursor-pointer" // inactive styles
            }
          >
            <IoPersonCircleOutline className=" text-4xl text-primary" />
          </NavLink>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
