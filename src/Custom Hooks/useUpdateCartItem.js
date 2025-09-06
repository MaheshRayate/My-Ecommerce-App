import { useMutation } from "@tanstack/react-query";
import axios from "axios";
import { toast } from "react-toastify";
import { useQueryClient } from "@tanstack/react-query";
const API_URL = import.meta.env.VITE_API_URL;

const useUpdateCartItem = () => {
  const queryClient = useQueryClient();
  return useMutation({
    mutationFn: async ({ id, data }) => {
      const res = await axios.patch(`${API_URL}/users/cartItem/${id}`, data, {
        withCredentials: true,
      });

      return res.data?.data;
    },

    onSuccess: () => {
      queryClient.invalidateQueries(["authUser"]);
    },

    onError: (err) => {
      const message =
        err.response?.data?.message ||
        "We encountered an issue while updating the cartItem ! Try Again!";
      toast.error(message);
    },
  });
};

export default useUpdateCartItem;
