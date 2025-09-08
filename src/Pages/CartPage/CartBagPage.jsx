import CartItem from "../../Components/CartBagPage/CartItem";
import CartSummaryContainer from "../../Components/CartBagPage/CartSummaryContainer";
import OtherProductsContainer from "../../Components/CartBagPage/OtherProductsContainer";

import useGetCartItems from "./../../Custom Hooks/useGetCartItems";
import { useOutletContext } from "react-router-dom";

const CartBagPage = () => {
  const { cartItems } = useGetCartItems();

  const { cart } = useOutletContext();

  return (
    <div className="py-20">
      <div>
        <div className="flex flex-col lg:flex-row gap-6">
          <div className="lg:min-w-5/10 flex flex-col gap-y-3">
            {cartItems?.map((cartItem) => {
              return (
                <CartItem
                  key={cartItem._id}
                  id={cartItem._id}
                  title={cartItem.product.title}
                  imageUrl={cartItem.product.imageUrl}
                  brand={cartItem.product.brand}
                  size={cartItem.size}
                  price={cartItem.price}
                  discountedPrice={cartItem.discountedPrice}
                  quantity={cartItem.quantity}
                />
              );
            })}
          </div>
          <div className="h-fit lg:w-4/10">
            <CartSummaryContainer link="address" cart={cart} />
          </div>
        </div>

        <div>
          <OtherProductsContainer />
        </div>
      </div>
    </div>
  );
};

export default CartBagPage;
