import { useQuery } from "@tanstack/react-query";
import axios from "axios";

const fetchUser = async () => {
  const res = await axios.get(
    "https://my-ecommerce-app-backend-ttn6.onrender.com/api/v1/users/profile",
    { withCredentials: true }
  );

  return res.data.user;
};

export const useAuthUser = () => {
  const {
    data: user,
    isLoading,
    isError,
  } = useQuery(["authUser"], fetchUser, {
    retry: false, // don’t retry if unauthorized
  });

  return {
    user,
    isLoading,
    isError,
    isAuthenticated: !!user,
  };

  
};
