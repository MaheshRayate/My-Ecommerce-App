import { useQuery } from "@tanstack/react-query";
import axios from "axios";
const API_URL = import.meta.env.VITE_API_URL;

const fetchOrder = async () => {
  const res = await axios.get(`${API_URL}/orders`, { withCredentials: true });
  return res.data;
};

const useFetchOrderDetails = () => {
  return useQuery({
    queryKey: ["orderDetails"],
    queryFn: fetchOrder,
  });
};


export default useFetchOrderDetails;
