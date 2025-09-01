// hooks/useLogin.js
import { useMutation } from "@tanstack/react-query";
import axios from "axios";

import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import { useGlobalContext } from "../Context/Context";

const useLogin = () => {
  const navigate = useNavigate();
  const { setIsLoggedIn } = useGlobalContext();

  return useMutation({
    mutationFn: async (data) => {
      const res = await axios.post(
        "http://localhost:3000/api/v1/users/login",
        data,
        { withCredentials: true }
      );

      return res.data?.data?.user;
    },

    onSuccess: (user) => {
      toast.success(`${user.firstName} Logged  in successfully`);
      setIsLoggedIn(true);

      setTimeout(() => {
        navigate("/");
      }, 2000);
    },
    onError: (err) => {
      const message =
        err.response?.data?.message ||
        "We encountered an issue while logging in! Try Again!";
      toast.error(message);
    },
  });
};

export default useLogin;
