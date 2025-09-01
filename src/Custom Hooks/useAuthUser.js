import { useQuery } from "@tanstack/react-query";
import axios from "axios";

const fetchUser = async () => {
  const res = await axios.get("http://localhost:3000/api/v1/users/profile", {
    withCredentials: true,
  });

  console.log(res.data);

  return res.data.data.user;
};

const useAuthUser = () => {
  const {
    data: user,
    isLoading,
    isError,
  } = useQuery({
    queryKey: ["authUser"],
    queryFn: fetchUser,
    retry: false,
  });

  console.log("HELLOs", user);

  return {
    user,
    isLoading,
    isError,
    isAuthenticated: !!user,
  };
};

export default useAuthUser;
