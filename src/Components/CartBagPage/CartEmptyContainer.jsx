import empty_cart from "./../../assets/empty_cart.svg";
const CartEmptyContainer = () => {
  return (
    <div className="py-30 flex items-center justify-center">
      <div className="border border-gray-300 p-5 shadow-xl">
        <img
          src={empty_cart}
          alt="wishlist-img"
          className="max-h-40 block mx-auto"
        />
        <h1 className="text-4xl text-center my-2 font-nata-sans font-semibold">
          Your Cart is Empty
        </h1>
        <div>
          <p className="text-center font-nata-sans">
            Explore our stylish products
          </p>
          <button className="block text-primary my-2 border border-primary px-2 w-full hover:bg-primary hover:text-white cursor-pointer">
            Explore
          </button>
        </div>
      </div>
    </div>
  );
};

export default CartEmptyContainer;
