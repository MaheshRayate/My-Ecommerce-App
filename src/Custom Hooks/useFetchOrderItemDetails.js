import { useQuery } from "@tanstack/react-query";
import axios from "axios";
const API_URL = import.meta.env.VITE_API_URL;

const fetchOrderItemDetails = async (id) => {
  const res = await axios.get(
    `${API_URL}/orderItems/getOrderDetailsFromOrderItem/${id}`,
    {
      withCredentials: true,
    }
  );
  return res.data;
};

const useFetchOrderItemDetails = (id) => {
  return useQuery({
    queryKey: ["orderItemDetails", id],
    queryFn: () => fetchOrderItemDetails(id),
  });
};

export default useFetchOrderItemDetails;
