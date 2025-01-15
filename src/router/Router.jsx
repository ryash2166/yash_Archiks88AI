import React from "react";
import Navbar from "../Components/Navbar/Navbar";
import Sidebar from "../Components/Sidebar/Sidebar";
import { Outlet, useLocation } from "react-router-dom";

const Router = () => {
  const location = useLocation();

  const shouldShowSidebar = !["/ImageAI", "/VideoAI"].includes(location.pathname);

  return (
    <>
      <Navbar />
      {shouldShowSidebar && <Sidebar />}
      <Outlet />
    </>
  );
};

export default Router;
