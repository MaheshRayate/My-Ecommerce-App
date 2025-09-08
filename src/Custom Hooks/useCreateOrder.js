const API_URL = import.meta.env.VITE_API_URL;
import { useMutation } from "@tanstack/react-query";
import axios from "axios";

import { toast } from "react-toastify";

// const useCreateOrder = () => {
//   return useMutation({
//     mutationFn: async (data) => {
//       const res = await axios.post(`${API_URL}/orders/payment`, data, {
//         withCredentials: true,
//       });

//       console.log(res?.data?.data);

//       return res.data?.data?.order;
//     },

//     onSuccess: () => {
//       toast.success(`Payment Successfull`);
//     },
//     onError: (err) => {
//       console.log(err.response?.data?.message);
//       const message =
//         err.response?.data?.message ||
//         "We encountered an issue in the payment gateway! Try Again!";
//       toast.error(message);
//     },
//   });
// };

// useCreateOrder.js

const useCreateOrder = () => {
  return useMutation({
    mutationFn: async ({ amount, addressId }) => {
      const res = await axios.post(
        `${API_URL}/orders/payment`,
        { amount, addressId }, // ✅ send addressId
        { withCredentials: true }
      );
      return res.data.data.order;
    },
  });
};

export default useCreateOrder;
