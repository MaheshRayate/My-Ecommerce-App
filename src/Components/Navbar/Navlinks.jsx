import React from "react";
import navbarData from "./navbarData";
import { useGlobalContext } from "../../Context/Context";

const Navlinks = () => {
  const { navId, setNavId } = useGlobalContext();

  return (
    <div className="hidden lg:flex gap-10 self-stretch">
      <div className="flex gap-10 self-stretch">
        {navbarData.categories.map((category) => {
          const { id, name } = category;
          return (
            <button
              onMouseEnter={() => {
                setNavId(id);
                console.log(navId);
              }}
              className="cursor-pointer self-stretch nav-link-btn"
              style={{
                borderBottom: navId === id ? "3px solid #4f39f6" : "none",
              }}
              key={id}
            >
              {name}
            </button>
          );
        })}
      </div>

      <div className="flex gap-10 self-stretch">
        {navbarData.pages.map((page) => {
          const { id, name, href } = page;
          return (
            <button
              onMouseEnter={() => {
                setNavId(id);
                console.log(navId);
              }}
              key={id}
              self-stretch
              className="cursor-pointer self-stretch nav-link-btn"
            >
              {name}
            </button>
          );
        })}
      </div>
    </div>
  );
};

export default Navlinks;
