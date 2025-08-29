import React from "react";
import { useNavigate } from "react-router-dom";

const NotLoggedIn = () => {
  const navigate = useNavigate();

  const handleClick = () => {
    navigate("/login");
  };
  return (
    <section className="py-30">
      <div className="border border-gray-300 shadow-xl lg:w-5/10 mx-3 px-4 lg:mx-auto text-center py-6 font-nata-sans">
        <h1 className="text-3xl mb-5 font-semibold">You are not Logged In!</h1>
        <h2 className="text-2xl my-5 font-semibold">
          Login to start shopping with us
        </h2>
        <button
          className="border hover:text-white hover:bg-primary border-primary px-2 text-primary cursor-pointer rounded"
          onClick={handleClick}
        >
          Login
        </button>
      </div>
    </section>
  );
};

export default NotLoggedIn;
