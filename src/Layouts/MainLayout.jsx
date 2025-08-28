import Navbar from "../Components/Navbar/Navbar";
import Footer from "../Components/Footer/Footer";
import Sidebar from "../Components/Navbar/Sidebar";
import Submenu from "../Components/Navbar/Submenu";
import { Outlet } from "react-router-dom";
import FilterWatcher from "../Components/ProductPage/FilterWatcher";
import ScrollToTop from "../Components/ScrollToTop";

const MainLayout = () => {
  return (
    <>
      <ScrollToTop />
      <Navbar />
      <Sidebar />
      <Submenu />
      <FilterWatcher />
      <main className="pt-12">
        <Outlet />
      </main>
      <Footer />
    </>
  );
};

export default MainLayout;
