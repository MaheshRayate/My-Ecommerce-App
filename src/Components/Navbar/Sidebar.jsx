import React from "react";
import { IoClose } from "react-icons/io5";
import navbarData from "./navbarData";
import { useGlobalContext } from "../../Context/Context";
import { Link } from "react-router-dom";

const Sidebar = () => {
  const { sidebarOpen, closeSidebar } = useGlobalContext();

  return (
    <div
      className={`${
        sidebarOpen ? `visible opacity-100` : `invisible opacity-0`
      } transition-all h-screen overflow-y-scroll duration-1000 z-25 fixed top-0 left-0 w-screen bg-white border linear lg:hidden py-5 px-4`}
    >
      <button
        className="absolute top-2 right-2 cursor-pointer"
        onClick={closeSidebar}
      >
        <IoClose className="text-4xl text-primary" />
      </button>
      <div>
        {navbarData.categories.map((category) => {
          const { id, name, sections } = category;
          return (
            <div key={id} className="my-2">
              <h1 className="text-2xl text-primary font-inter">{name}</h1>
              <div className="grid grid-cols-2 md:grid-cols-3 justify-center">
                {sections.map((section) => {
                  const { id, name, items } = section;
                  return (
                    <div key={id} className="">
                      <h1 className="font-bold">{name}</h1>
                      <div>
                        {items.map((item) => {
                          const { name, href } = item;
                          return (
                            <Link
                              to="/products"
                              className="block hover:bg-blue-100 hover:rounded transition-all duration-400 hover:pl-2"
                              key={name}
                            >
                              {name}
                            </Link>
                          );
                        })}
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Sidebar;
