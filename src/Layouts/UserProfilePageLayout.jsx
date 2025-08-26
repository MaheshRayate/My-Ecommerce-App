import React from "react";
import { Link, Outlet } from "react-router-dom";

import { UserProfilePage } from "../Pages";

const UserProfilePageLayout = () => {
  return (
    <section className="lg:px-10 px-3 mb-10 mt-10">
      <div className="flex flex-col lg:flex-row   gap-x-10 gap-y-2">
        <div className="flex gap-x-2   justify-center lg:flex-col border border-gray-300 ">
          <div className="py-2 lg:border-b border-gray-300 lg:px-10">
            <Link to="/account/profile" className="lg:text-xl">
              Profile
            </Link>
          </div>
          <div className="py-2 lg:border-b border-gray-300 lg:px-10">
            <Link to="/account/orders" className="lg:text-xl">
              Orders
            </Link>
          </div>

          <div className="py-2 lg:border-b border-gray-300 lg:px-10">
            <Link to="/account/wallet" className="lg:text-xl">
              Wallet
            </Link>
          </div>

          <div className="py-2 lg:border-b border-gray-300 lg:px-10">
            <Link to="/" className="lg:text-xl">
              Wishlist
            </Link>
          </div>

          <div className="py-2 lg:border-b border-gray-300 lg:px-10">
            <Link to="/" className="lg:text-xl">
              Logout
            </Link>
          </div>
        </div>
        <div className="border border-gray-300 px-10 py-10 lg:min-w-[80%]">
          <Outlet />
        </div>
      </div>
    </section>
  );
};

export default UserProfilePageLayout;
