import { useGlobalContext } from "./Context/Context";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import MainLayout from "./Layouts/MainLayout";
import { ToastContainer } from "react-toastify";
import CartPageLayout from "./Layouts/CartPageLayout";
import {
  HomePage,
  ProductPage,
  ErrorPage,
  CartBagPage,
  CartAddressPage,
  CartPaymentPage,
  UserProfilePage,
  UserWelcomePage,
  UserOrderPage,
  UserWalletPage,
  OrderDetailPage,
  NotLoggedIn,
  LoginPage,
  RegisterPage,
} from "./Pages";
import ProductDetailsPage from "./Pages/ProductDetailsPage.jsx/ProductDetailsPage";
import UserProfilePageLayout from "./Layouts/UserProfilePageLayout";
import Navbar from "./Components/Navbar/Navbar";
import Footer from "./Components/Footer/Footer";

const router = createBrowserRouter([
  {
    path: "/",
    element: <MainLayout />,
    children: [
      { index: true, element: <HomePage /> },

      {
        path: "/:gender/:categorySlug",
        element: <ProductPage />,
      },

      {
        path: "/:itemId",
        element: <ProductDetailsPage />,
      },
      {
        path: "/cart",
        element: <CartPageLayout />,
        children: [
          {
            path: "/cart/bag",
            element: <CartBagPage />,
          },
          {
            path: "/cart/address",
            element: <CartAddressPage />,
          },
          {
            path: "/cart/payment",
            element: <CartPaymentPage />,
          },
        ],
      },

      {
        path: "/account",
        element: <UserProfilePageLayout />,
        children: [
          { index: true, element: <UserWelcomePage /> },
          { path: "/account/profile", element: <UserProfilePage /> },
          { path: "/account/orders", element: <UserOrderPage /> },
          { path: "/account/orders/:id", element: <OrderDetailPage /> },
          { path: "/account/wallet", element: <UserWalletPage /> },
        ],
      },
    ],
  },

  {
    path: "/about",
    element: <h2>About Page</h2>,
  },

  {
    path: "/login",
    element: <LoginPage />,
  },
  {
    path: "/contact",
    element: <h2>Contact Page</h2>,
  },
]);

function App() {
  const { sidebarOpen } = useGlobalContext();
  console.log(sidebarOpen);

  return (
    <>
      <ToastContainer />
      <RouterProvider router={router} />
    </>
  );
}

export default App;
