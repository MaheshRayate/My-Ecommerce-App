import { useQuery } from "@tanstack/react-query";
import axios from "axios";
import { useSelector } from "react-redux";

const appendArrayParams = (params, key, values) => {
  if (Array.isArray(values) && values.length > 0) {
    params.append(key, values.join(","));
  }
};

const fetchProducts = async ({ queryKey }) => {
  const [_key, { filters }] = queryKey;

  const params = new URLSearchParams();

  // Append multi-select arrays from Redux
  appendArrayParams(params, "categories", filters.categories);
  appendArrayParams(params, "subcategories", filters.subcategories);
  appendArrayParams(params, "brand", filters.brand);
  appendArrayParams(params, "gender", filters.gender);
  appendArrayParams(params, "size", filters.size);
  appendArrayParams(params, "price", filters.price);
  appendArrayParams(params, "color", filters.color);
  appendArrayParams(params, "discount", filters.discount);
  appendArrayParams(params, "fabric", filters.fabric);

  // Single values
  //   if (sort) params.append("sort", sort);
  //   if (page) params.append("page", page);

  // console.log(`http://localhost:3000/api/v1/products?${params.toString()}`);
  console.log(location);
  const res = await axios.get(
    `https://my-ecommerce-app-backend-ttn6.onrender.com/api/v1/products?${params.toString()}`
  );
  return res.data;
};

export const useProducts = () => {
  // Read filters from Redux
  const filters = useSelector((state) => state.productFilter.value);
  // console.log(filters);

  return useQuery({
    queryKey: ["products", { filters }],
    queryFn: fetchProducts,
    keepPreviousData: true,
    enabled: filters && Object.keys(filters).length > 0,
  });
};
