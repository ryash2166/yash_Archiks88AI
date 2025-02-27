import React from "react";
import Main from "./Pages/Main/Main";
import { createBrowserRouter, RouterProvider } from "react-router";
import Router from "./router/Router";
import Profile from "./Pages/Profile/Profile";
import Explore from "./Pages/Explore/Explore";
import ImageAI from "./Pages/ImageAI/ImageAI";
import VideoAI from "./Pages/VideoAI/VideoAI";
import ProtectedRoute from "./router/ProtectedRoute";

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
          element: (
            <ProtectedRoute>
              <Profile />
            </ProtectedRoute>
          ),
        },
        {
          path: "/explore",
          element: <Explore />,
        },
        {
          path: "/ImageAI",
          element: (
            <ProtectedRoute>
              <ImageAI />
            </ProtectedRoute>
          ),
        },
        {
          path: "/VideoAI",
          element: (
            <ProtectedRoute>
              <VideoAI />
            </ProtectedRoute>
          ),
        },
      ],
    },
  ]);
  return <RouterProvider router={router} />;
};

export default App;
