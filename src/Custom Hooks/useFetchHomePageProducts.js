import { useQuery } from "@tanstack/react-query";
import axios from "axios";
const API_URL = import.meta.env.VITE_API_URL;

const fetchProducts = async ({ topLavelCategory, thirdLavelCategory }) => {
  const res = await axios.get(`${API_URL}/products?limit=24`, {
    params: {
      topLavelCategory,
      thirdLavelCategory,
    },
  });
  return res.data;
};

const useFetchHomePageProducts = (topLavelCategory, thirdLavelCategory) => {
  return useQuery({
    queryKey: ["homeproducts", topLavelCategory, thirdLavelCategory],
    queryFn: () => fetchProducts({ topLavelCategory, thirdLavelCategory }),
    enabled: !!topLavelCategory && !!thirdLavelCategory, // fetch only if both are provided
    staleTime: 5 * 60 * 1000, // optional: cache for 5 minutes
  });
};

export default useFetchHomePageProducts;
