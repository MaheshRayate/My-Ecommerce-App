import PaginationContainer from "./../../Components/ProductPage/PaginationContainer";
import useGetWishList from "../../Custom Hooks/useGetWishList";
import ProductCard from "./../../Components/ProductPage/ProductCard";
import useAuthUser from "../../Custom Hooks/useAuthUser";
import NotLoggedIn from "../NotLoggedInPage/NotLoggedIn";
import WishListEmptyContainer from "../../Components/WishListPage/WishListEmptyContainer";
import { FaRegHeart, FaHeart } from "react-icons/fa";
import { IoIosCloseCircleOutline } from "react-icons/io";
import useToggleWishList from "./../../Custom Hooks/useToggleWishList";

const WishListPage = () => {
  const { wishListItems } = useGetWishList();
  const { isAuthenticated } = useAuthUser();
  const wishlistMutation = useToggleWishList();
  console.log(wishListItems);

  const handleRemoveFromWishlist = (id) => {
    wishlistMutation.mutate(id);
  };

  return (
    <section className="px-2 lg:px-20 mt-5">
      {isAuthenticated ? (
        <div>
          {wishListItems?.length > 0 ? (
            <div>
              <h1 className="ml-2 font-nata-sans text-3xl font-semibold mb-5">
                Your Wishlist
              </h1>
              <div className="min-w-full md:min-w-[75%]">
                <div className="w-full px-3 grid grid-cols-2 gap-x-1 gap-y-1 lg:grid-cols-4 lg:gap-x-4 lg:gap-y-5">
                  {wishListItems?.map((product) => {
                    return (
                      <div className="relative">
                        <ProductCard key={product._id} {...product} />
                        <button
                          onClick={() => {
                            handleRemoveFromWishlist(product._id);
                          }}
                          className=" text-primary cursor-pointer absolute top-1 right-0"
                        >
                          <IoIosCloseCircleOutline className="size-8" />
                        </button>
                      </div>
                    );
                  })}
                </div>
                <PaginationContainer />
              </div>
            </div>
          ) : (
            <div>
              <WishListEmptyContainer />
            </div>
          )}
        </div>
      ) : (
        <NotLoggedIn />
      )}
    </section>
  );
};

export default WishListPage;
