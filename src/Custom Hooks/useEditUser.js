import { useMutation } from "@tanstack/react-query";
import axios from "axios";
import { toast } from "react-toastify";
import { useQueryClient } from "@tanstack/react-query";

const useEditUser = () => {
  const queryClient = useQueryClient();
  return useMutation({
    mutationFn: async (data) => {
      const res = await axios.patch(
        "http://localhost:3000/api/v1/users",
        data,
        { withCredentials: true }
      );

      return res.data?.data?.user;
    },

    onSuccess: (user) => {
      toast.success(`Profile Updated Successfully`);
      queryClient.invalidateQueries(["authUser"]);
    },

    onError: (err) => {
      const message =
        err.response?.data?.message ||
        "We encountered an issue while updating profile! Try Again!";
      toast.error(message);
    },
  });
};

export default useEditUser;
