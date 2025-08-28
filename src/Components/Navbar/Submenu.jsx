import React, { useRef } from "react";
import { useGlobalContext } from "../../Context/Context";
import navbarData from "./navbarData";
import { Link } from "react-router-dom";

const Submenu = () => {
  const { navId, setNavId } = useGlobalContext();
  const subMenuContainer = useRef(null);

  const displayCategory = navbarData.categories.find((category) => {
    return navId === category.id;
  });

  console.log(displayCategory);

  const handleMouseLeave = (e) => {
    console.log(e);
    if (e.clientY < 83) {
      return;
    }

    setNavId(null);
    console.log(subMenuContainer.current.getBoundingClientRect());
    const { top, left, right, bottom } =
      subMenuContainer.current.getBoundingClientRect();
    console.log(top);
  };

  return (
    <div
      ref={subMenuContainer}
      onMouseLeave={handleMouseLeave}
      className={` ${
        displayCategory ? `visible opacity-100` : `invisible opacity-0`
      } hidden z-10 fixed left-1/2 -translate-x-1/2  transition-all duration-500  bg-light-theme lg:grid grid-cols-3 px-10 py-15 border  w-9/10`}
    >
      {displayCategory?.sections?.map((section) => {
        const { id, name, items } = section;
        return (
          <div key={id}>
            <h1 className="text-primary font-inter text-2xl">{name}</h1>
            <div>
              {items?.map((item) => {
                const { name, href } = item;
                return (
                  <Link
                    to={href}
                    className="block hover:px-2 hover:bg-blue-100 hover:rounded transition-all duration-500"
                    onClick={() => setNavId(null)}
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
  );
};

export default Submenu;
