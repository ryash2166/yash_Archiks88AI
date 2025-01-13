import React from "react";
import Navbar from "../Components/Navbar/Navbar";
import Sidebar from "../Components/Sidebar/Sidebar";
import { Outlet, useLocation } from "react-router";

const Router = () => {
  return (
    <>
      <Navbar />
      {/* <Sidebar /> */}
      <Outlet />
    </>
  );
};

export default Router;
