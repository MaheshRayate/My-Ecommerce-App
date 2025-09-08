import { useQuery } from "@tanstack/react-query";
import axios from "axios";
const API_URL = import.meta.env.VITE_API_URL;

const fetchUser = async () => {
  try {
    const res = await axios.get(`${API_URL}/users/profile`, {
      withCredentials: true,
    });

    console.log(res.data);

    return res.data.data.user;
  } catch (err) {
    if (err.response?.status === 401) {
      return null; // not logged in
    }
    throw err; // rethrow other errors
  }
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
    refetchOnWindowFocus: true,
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
