const API_URL = import.meta.env.VITE_API_URL;
import { useMutation } from "@tanstack/react-query";
import axios from "axios";
import { toast } from "react-toastify";

const useAddToCart = () => {
  return useMutation({
    mutationFn: async (data) => {
      const res = await axios.post(`${API_URL}/users/cartItem`, data, {
        withCredentials: true,
      });

      console.log(res?.data?.data);

      return res.data?.data;
    },

    onSuccess: () => {
      toast.success(`Item Added to Bag`);
    },
    onError: (err) => {
      console.log(err.response?.data?.message);
      const message =
        err.response?.data?.message ||
        "We encountered an issue while adding the item to Bag";
      toast.error(message);
    },
  });
};

export default useAddToCart;
