import React from "react";
import Main from "./Pages/Main/Main";
import { createBrowserRouter, RouterProvider } from "react-router";
import Router from "./router/Router";
import Profile from "./Pages/Profile/Profile";
import Explore from "./Pages/Explore/Explore";

const App = () => {
  const router = createBrowserRouter([
    {
      path: "/",
      element: <Router />,
      children: [
        {
          path: "/",
          element: <Main />,
        },
        {
          path: "/profile",
          element: <Profile />,
        },
        {
          path: "/explore",
          element: <Explore />,
        },
      ],
    },
  ]);
  return <RouterProvider router={router} />;
};

export default App;
