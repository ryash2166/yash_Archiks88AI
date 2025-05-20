import React from "react";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Router from "./router/Router";
import Profile from "./Pages/Profile";
import Explore from "./Pages/Explore";
import ImageAI from "./Pages/ImageAI";
import VideoAI from "./Pages/VideoAI";
import Dashboard from "./Pages/Dashboard";
import LandingPage from "./Pages/LandingPage";
import ProtectedRoute from "./router/ProtectedRoute";
import Pricing from "./Pages/Pricing";

const App = () => {
  const router = createBrowserRouter([
    {
      path: "/",
      element: <Router />,
      children: [
        {
          path: "/",
          element: <LandingPage />,
        },
        {
          path: "/dashboard",
          element: (
            <ProtectedRoute>
              <Dashboard />
            </ProtectedRoute>
          ),
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
          path: "/pricing",
          element: <Pricing />,
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
