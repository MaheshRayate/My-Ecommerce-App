import React from "react";
import { Link, Outlet, useLocation } from "react-router-dom";

import { NotLoggedIn, UserProfilePage } from "../Pages";
import ScrollToTop from "../Components/ScrollToTop";
import useAuthUser from "../Custom Hooks/useAuthUser";

const UserProfilePageLayout = () => {
  const location = useLocation();
  console.log(location);
  const currentActivePage = location?.pathname?.split("/")?.[2];
  console.log(currentActivePage);
  const name = true;

  const { user, isAuthenticated } = useAuthUser();

  return (
    <section className="lg:px-10 px-3 mb-10 mt-10">
      <ScrollToTop />
      {isAuthenticated ? (
        <div className="flex flex-col lg:flex-row   gap-x-10 gap-y-2">
          <div className="flex gap-x-2 h-fit   justify-center lg:flex-col border border-gray-300 ">
            <div className="py-2 lg:border-b border-gray-300 lg:px-10">
              <Link
                to="/account/profile"
                className={`${
                  currentActivePage === "profile"
                    ? "text-primary font-semibold"
                    : "text-black font-normal"
                } lg:text-xl`}
              >
                Profile
              </Link>
            </div>
            <div className="py-2 lg:border-b border-gray-300 lg:px-10">
              <Link
                to="/account/orders"
                className={`${
                  currentActivePage === "orders"
                    ? "text-primary font-semibold"
                    : "text-black font-normal"
                } lg:text-xl`}
              >
                Orders
              </Link>
            </div>

            <div className="py-2 lg:border-b border-gray-300 lg:px-10">
              <Link
                to="/account/wallet"
                className={`${
                  currentActivePage === "wallet"
                    ? "text-primary font-semibold"
                    : "text-black font-normal"
                } lg:text-xl`}
              >
                Wallet
              </Link>
            </div>

            <div className="py-2 lg:border-b border-gray-300 lg:px-10">
              <Link
                to="/account/wishlist"
                className={`${
                  currentActivePage === "wishlist"
                    ? "text-primary font-semibold"
                    : "text-black font-normal"
                } lg:text-xl`}
              >
                Wishlist
              </Link>
            </div>

            <div className="py-2 lg:border-b border-gray-300 lg:px-10">
              <Link
                to="/account/logout"
                className={`${
                  currentActivePage === "logout"
                    ? "text-primary font-semibold"
                    : "text-black font-normal"
                } lg:text-xl`}
              >
                Logout
              </Link>
            </div>
          </div>
          <div className="border border-gray-300  py-3 lg:min-w-[80%]">
            <Outlet />
          </div>
        </div>
      ) : (
        <NotLoggedIn />
      )}
    </section>
  );
};

export default UserProfilePageLayout;
