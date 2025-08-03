import { useState } from "react";
import { useGlobalContext } from "./Context/Context";

import Navbar from "./Components/Navbar/Navbar";
import Sidebar from "./Components/Navbar/Sidebar";
import Submenu from "./Components/Navbar/Submenu";
import HomePage from "./Pages/HomePage/HomePage";
import Footer from "./Components/Footer/Footer";

function App() {
  const { sidebarOpen } = useGlobalContext();
  console.log(sidebarOpen);

  return (
    <>
      <Navbar />
      <Sidebar />
      <Submenu />
      <HomePage />
      <Footer />
    </>
  );
}

export default App;
