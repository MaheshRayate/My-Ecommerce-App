import { useQuery } from "@tanstack/react-query";
import axios from "axios";
const API_URL = import.meta.env.VITE_API_URL;

const fetchWishListItems = async () => {
  const res = await axios.get(`${API_URL}/users/wishlist`, {
    withCredentials: true,
  });

  console.log(res.data);

  return res.data.data.wishList;
};

const useGetWishList = () => {
  const {
    data: wishListItems,
    isLoading,
    isError,
  } = useQuery({
    queryKey: ["wishlistItems"],
    queryFn: fetchWishListItems,
    retry: false,
  });

  return {
    wishListItems,
    isLoading,
    isError,
  };
};

export default useGetWishList;
