import PaginationContainer from "./../../Components/ProductPage/PaginationContainer";
import useGetWishList from "../../Custom Hooks/useGetWishList";
import ProductCard from "./../../Components/ProductPage/ProductCard";
import useAuthUser from "../../Custom Hooks/useAuthUser";
import NotLoggedIn from "../NotLoggedInPage/NotLoggedIn";

const WishListPage = () => {
  const { wishListItems } = useGetWishList();
  const { isAuthenticated } = useAuthUser();
  console.log(wishListItems);

  return (
    <section className="px-2 lg:px-20 mt-5">
      {isAuthenticated ? (
        <div>
          {wishListItems?.length > 0 ? (
            <div>
              <h1 className="font-nata-sans text-3xl font-semibold mb-5">
                Your Wishlist
              </h1>
              <div className="min-w-full md:min-w-[75%]">
                <div className="w-full px-3 grid grid-cols-2 gap-x-1 gap-y-1 lg:grid-cols-4 lg:gap-x-4 lg:gap-y-5">
                  {wishListItems?.map((product) => {
                    return <ProductCard {...product} />;
                  })}
                </div>
                <PaginationContainer />
              </div>
            </div>
          ) : (
            <div>
              <h1 className="text-3xl">Your Wishlist is Empty</h1>
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
