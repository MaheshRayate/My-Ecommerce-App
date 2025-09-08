import { useQuery } from "@tanstack/react-query";
import axios from "axios";
const API_URL = import.meta.env.VITE_API_URL;

const useGetRazorpayKey = () => {
  const {
    data: key,
    isLoading,
    isError,
  } = useQuery({
    queryKey: ["razorpayKey"],
    queryFn: async () => {
      const res = await axios.get(`${API_URL}/orders/getKey`, {
        withCredentials: true,
      });
      return res?.data?.data?.key;
    },
  });

  return {
    key,
    isLoading,
    isError,
  };
};

export default useGetRazorpayKey;
