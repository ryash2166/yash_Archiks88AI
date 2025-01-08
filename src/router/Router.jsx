import React from "react";
import Navbar from "../Components/Navbar.jsx/Navbar";
import Sidebar from "../Components/Sidebar/Sidebar";
import { Outlet } from "react-router";

const Router = () => {
  return (
    <>
      <Navbar />
      <Sidebar />
      <Outlet />
    </>
  );
};

export default Router;
