import React from "react";
import { GiHamburgerMenu } from "react-icons/gi";
import { useGlobalContext } from "../../Context/Context";
import Navlinks from "./Navlinks";

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
      className="border-b border-gray-100 shadow-lg flex justify-between lg:justify-start lg:gap-10 items-center px-4 lg:px-10"
    >
      <div>
        <img
          src="https://tailwindcss.com/plus-assets/img/logos/mark.svg?color=indigo&shade=600"
          alt="logo"
          className="h-10"
        />
      </div>

      <Navlinks />

      <div>
        <button className="lg:hidden cursor-pointer" onClick={openSidebar}>
          <GiHamburgerMenu className="text-2xl text-blue-700" />
        </button>
      </div>
    </nav>
  );
};

export default Navbar;
