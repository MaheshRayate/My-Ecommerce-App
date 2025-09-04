import { useMutation } from "@tanstack/react-query";
import axios from "axios";
import { useQueryClient } from "@tanstack/react-query";
const API_URL = import.meta.env.VITE_API_URL;

import { toast } from "react-toastify";

const useToggleWishList = () => {
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: async (id) => {
      const res = await axios.post(
        `${API_URL}/users/wishlist/${id}`,
        {}, // no body needed
        { withCredentials: true }
      );

      return res.data;
    },

    onSuccess: (data) => {
      if (data.action === "added") {
        toast.success(data.message);
      } else if (data.action === "removed") {
        toast.info(data.message);
      }
      queryClient.invalidateQueries(["authUser"]);
    },

    onError: (err) => {
      const message =
        err.response?.data?.message ||
        "We encountered an issue while adding the item to wishlist! Try Again!";
      toast.error(message);
    },
  });
};

export default useToggleWishList;
