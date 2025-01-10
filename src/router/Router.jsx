import React from "react";
import Navbar from "../Components/Navbar/Navbar";
import Sidebar from "../Components/Sidebar/Sidebar";
import { Outlet } from "react-router";
import NavbarAI from "../Components/Navbar/NavbarAI";

const Router = () => {
  return (
    <>
      <NavbarAI />
      <Sidebar />
      <Outlet />
    </>
  );
};

export default Router;
