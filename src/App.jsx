import { useState } from "react";
import { useGlobalContext } from "./Context/Context";
import Navbar from "./Components/Navbar/Navbar";
import Sidebar from "./Components/Navbar/Sidebar";

function App() {
  const { sidebarOpen } = useGlobalContext();
  console.log(sidebarOpen);

  return (
    <>
      <Navbar />
      <Sidebar />
    </>
  );
}

export default App;
