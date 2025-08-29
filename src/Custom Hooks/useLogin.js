// hooks/useLogin.js
import { useMutation } from "@tanstack/react-query";
import axios from "axios";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import { useGlobalContext } from "../Context/Context";
// import { setUser } from "../redux/slices/userSlice";

const useLogin = () => {
  //   const dispatch = useDispatch();
  const navigate = useNavigate();
  const { setIsLoggedIn } = useGlobalContext();

  return useMutation({
    mutationFn: async (data) => {
      const res = await axios.post(
        "https://my-ecommerce-app-backend-ttn6.onrender.com/api/v1/users/login",
        data,
        { withCredentials: true }
      );

      return res.data?.data?.user;
    },

    onSuccess: (user) => {
      //   dispatch(setUser(user));
      //   localStorage.setItem("user", JSON.stringify(user));
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
