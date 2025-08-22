import React from "react";
import { GiHamburgerMenu } from "react-icons/gi";
import { useGlobalContext } from "../../Context/Context";
import Navlinks from "./Navlinks";
import logo1 from "../../assets/logo1.png";
import { IoCartSharp } from "react-icons/io5";
import { IoHeartOutline } from "react-icons/io5";
import { IoPersonCircleOutline } from "react-icons/io5";
import { IoSearch } from "react-icons/io5";
import { Link } from "react-router-dom";

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
      className="fixed z-20 w-full bg-white border-b border-gray-100 shadow-lg flex justify-between  lg:gap-10 items-center px-4 lg:px-10"
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
        <Link to="/cart/bag" className="lg:hidden cursor-pointer">
          <IoCartSharp className="text-3xl text-primary" />
        </Link>
        <button className="lg:hidden cursor-pointer">
          <IoHeartOutline className=" text-3xl text-primary" />
        </button>
        <button className="lg:hidden cursor-pointer" onClick={openSidebar}>
          <IoPersonCircleOutline className="text-3xl text-blue-700" />
        </button>
        <button className="lg:hidden cursor-pointer" onClick={openSidebar}>
          <GiHamburgerMenu className="text-2xl text-blue-700" />
        </button>
      </div>

      <div className="hidden lg:flex items-center gap-x-5 relative">
        <div>
          <input
            type="text"
            name=""
            id=""
            placeholder="Search for products,brands and more"
            className="border py-1 w-[21em] border-gray-500 rounded-xl px-2 bg-gray-100"
          />
        </div>

        <div className="flex gap-x-2">
          <span className="absolute right-39 top-2">
            <IoSearch className="text-primary font-bold text-xl" />
          </span>
          <Link to="/cart/bag" className="cursor-pointer">
            <IoCartSharp className=" text-4xl text-primary" />
          </Link>
          <button className="cursor-pointer">
            <IoHeartOutline className=" text-4xl text-primary" />
          </button>
          <button className="cursor-pointer">
            <IoPersonCircleOutline className=" text-4xl text-primary" />
          </button>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
