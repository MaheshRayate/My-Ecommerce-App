// hooks/useLogin.js
import { useMutation } from "@tanstack/react-query";
import axios from "axios";
import { useQueryClient } from "@tanstack/react-query";
const API_URL = import.meta.env.VITE_API_URL;

import { toast } from "react-toastify";

const useDeleteAddress = () => {
  const queryClient = useQueryClient();
  return useMutation({
    mutationFn: async (id) => {
      await axios.delete(`${API_URL}/addresses/${id}`, {
        withCredentials: true,
      });
    },

    onSuccess: () => {
      toast.success(`Address Deleted successfully`);
      queryClient.invalidateQueries(["authUser"]);
    },
    onError: (err) => {
      const message =
        err.response?.data?.message ||
        "We encountered an issue while deleting the address! Try Again!";
      toast.error(message);
    },
  });
};

export default useDeleteAddress;
