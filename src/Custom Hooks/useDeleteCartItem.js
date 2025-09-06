// hooks/useLogin.js
import { useMutation } from "@tanstack/react-query";
import axios from "axios";
import { useQueryClient } from "@tanstack/react-query";
const API_URL = import.meta.env.VITE_API_URL;

import { toast } from "react-toastify";

const useDeleteCartItem = () => {
  const queryClient = useQueryClient();
  return useMutation({
    mutationFn: async (id) => {
      await axios.delete(`${API_URL}/users/cartItem/${id}`, {
        withCredentials: true,
      });
    },

    onSuccess: () => {
      toast.success(`CartItem removed successfully`);
      queryClient.invalidateQueries(["authUser"]);
    },
    onError: (err) => {
      const message =
        err.response?.data?.message ||
        "We encountered an issue while removing the cartItem! Try Again!";
      toast.error(message);
    },
  });
};

export default useDeleteCartItem;
