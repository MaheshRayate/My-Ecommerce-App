import { useState } from "react";
import { useGlobalContext } from "./Context/Context";

import { createBrowserRouter, RouterProvider } from "react-router-dom";

import MainLayout from "./Layouts/MainLayout";

import { HomePage, ProductPage, ErrorPage } from "./Pages";

const router = createBrowserRouter([
  {
    path: "/",
    element: <MainLayout />,
    children: [
      { index: true, element: <HomePage /> },

      {
        path: "/products",
        element: <ProductPage />,
      },
      
    ],
  },
  {
    path: "/about",
    element: <h2>About Page</h2>,
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
      <RouterProvider router={router} />
    </>
  );
}

export default App;
