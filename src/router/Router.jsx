import React from "react";
import Navbar from "../Components/Navbar/Navbar";
import Sidebar from "../Components/Sidebar/Sidebar";
import { Outlet, useLocation } from "react-router-dom";
import NavbarAI from "../Components/Navbar/NavbarAI";

const Router = () => {
  const location = useLocation();

  const shouldShowSidebar = !["/", "/ImageAI", "/VideoAI"].includes(location.pathname);
  const shouldShowNavbar = !["/ImageAI", "/VideoAI"].includes(location.pathname);

  return (
    <>
      {shouldShowNavbar ? <Navbar /> : <NavbarAI /> }

      {shouldShowSidebar && <Sidebar />}
      <Outlet />
    </>
  );
};

export default Router;
