const API_URL = import.meta.env.VITE_API_URL;

import { useMutation } from "@tanstack/react-query";
import axios from "axios";

import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import { useGlobalContext } from "../Context/Context";

const useRegister = () => {
  const navigate = useNavigate();
  const { setIsLoggedIn } = useGlobalContext();

  return useMutation({
    mutationFn: async (data) => {
      const res = await axios.post(`${API_URL}/users/signup`, data, {
        withCredentials: true,
      });

      return res.data?.data?.user;
    },

    onSuccess: (user) => {
      toast.success(`${user.firstName} Registered successfully`);
      setIsLoggedIn(true);

      setTimeout(() => {
        navigate("/");
      }, 2000);
    },
    onError: (err) => {
      const message =
        err.response?.data?.message ||
        "We encountered an issue while registering user! Try Again!";
      toast.error(message);
    },
  });
};

export default useRegister;
