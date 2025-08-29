import { useState, useContext, createContext } from "react";

const AppContext = createContext();

const AppProvider = ({ children }) => {
  const [sidebarOpen, setSidebarOpen] = useState(false);
  const [navId, setNavId] = useState(null);

  // Checking if user Logged In
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  const openSidebar = () => {
    setSidebarOpen(true);
  };

  const closeSidebar = () => {
    setSidebarOpen(false);
  };

  return (
    <AppContext.Provider
      value={{
        sidebarOpen,
        setSidebarOpen,
        openSidebar,
        closeSidebar,
        navId,
        setNavId,
        isLoggedIn,
        setIsLoggedIn,
      }}
    >
      {children}
    </AppContext.Provider>
  );
};

export default AppProvider;

export const useGlobalContext = () => {
  return useContext(AppContext);
};
