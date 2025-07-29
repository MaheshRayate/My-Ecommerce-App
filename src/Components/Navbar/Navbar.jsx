import React from "react";
import { GiHamburgerMenu } from "react-icons/gi";
import { useGlobalContext } from "../../Context/Context";

const Navbar = () => {
  const { sidebarOpen, openSidebar } = useGlobalContext();

  return (
    <nav className="border flex justify-between items-center px-4 lg:px-10">
      <div>
        <img
          src="https://tailwindcss.com/plus-assets/img/logos/mark.svg?color=indigo&shade=600"
          alt="logo"
          className="h-10"
        />
      </div>

      {/* Navlinks */}

      <div>
        <button className="lg:hidden cursor-pointer" onClick={openSidebar}>
          <GiHamburgerMenu className="text-2xl text-blue-700" />
        </button>
      </div>
    </nav>
  );
};

export default Navbar;
