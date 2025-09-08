import { useQuery } from "@tanstack/react-query";
import axios from "axios";
const API_URL = import.meta.env.VITE_API_URL;

const fetchCartItems = async () => {
  const res = await axios.get(`${API_URL}/users/cartItem`, {
    withCredentials: true,
  });

  // console.log(res.data.data.cartItems);

  return res.data.data.cartItems;
};

const useGetCartItems = () => {
  const {
    data: cartItems,
    isLoading,
    isError,
  } = useQuery({
    queryKey: ["cartItems"],
    queryFn: fetchCartItems,
    retry: false,
  });

  return {
    cartItems,
    isLoading,
    isError,
  };
};

export default useGetCartItems;
