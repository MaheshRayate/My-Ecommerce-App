import { useQuery } from "@tanstack/react-query";
import axios from "axios";
const API_URL = import.meta.env.VITE_API_URL;

const fetchCartSummary = async () => {
  const res = await axios.get(`${API_URL}/users/getCart`, {
    withCredentials: true,
  });

  // console.log(res.data.data.cart);

  return res.data.data.cart;
};

const useGetCartSummary = () => {
  const {
    data: cart,
    isLoading,
    isError,
  } = useQuery({
    queryKey: ["cart"],
    queryFn: fetchCartSummary,
    retry: false,
  });

  return {
    cart,
    isLoading,
    isError,
  };
};

export default useGetCartSummary;
