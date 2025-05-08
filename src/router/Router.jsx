// import React from "react";
// import Navbar from "../Components/Navbar/Navbar";
// import Sidebar from "../Components/Sidebar/Sidebar";
// import { Outlet, useLocation } from "react-router-dom";
// import NavbarAI from "../Components/Navbar/NavbarAI";

// const Router = () => {
//   const location = useLocation();

//   const shouldShowSidebar = !["/", "/ImageAI", "/VideoAI"].includes(location.pathname);
//   const shouldShowNavbar = !["/ImageAI", "/VideoAI"].includes(location.pathname);

//   return (
//     <div className="relative w-full overflow-auto overflow-x-hidden">
//       {shouldShowNavbar ? <Navbar /> : <NavbarAI /> }

//       {shouldShowSidebar && <Sidebar />}
//       <Outlet />
//     </div>
//   );
// };

// export default Router;

import React from "react";
import Navbar from "../Components/Navbar/Navbar";
import Sidebar from "../Components/Sidebar/Sidebar";
import { Outlet, useLocation } from "react-router-dom";
import NavbarAI from "../Components/Navbar/NavbarAI";

const Router = () => {
  const location = useLocation();

  const shouldShowSidebar = !["/", "/ImageAI", "/VideoAI"].includes(
    location.pathname
  );
  const shouldShowNavbar = !["/ImageAI", "/VideoAI"].includes(
    location.pathname
  );

  // Determine if we're on the landing page to apply special classes
  const isLandingPage = location.pathname === "/";

  // Determine if we're on dashboard to apply special classes
  const isDashboard =
    location.pathname === "/dashboard" || location.pathname === "/home";

  return (
    <div
      className={`relative w-full ${
        isLandingPage ? "overflow-" : "h-dvh overflow-hidden"
      }`}
    >
      {shouldShowNavbar ? <Navbar container={isLandingPage} /> : <NavbarAI />}

      <div
        className={`${shouldShowSidebar ? "" : ""} ${
          !isLandingPage ? "h-full" : ""
        }`}
      >
        {shouldShowSidebar && <Sidebar />}

        <div
          className={`${
            !isLandingPage && !isDashboard ? "h-full overflow-y-auto" : ""
          } 
          ${isDashboard ? "h-full overflow-y-auto" : ""}`}
        >
          <Outlet />
        </div>
      </div>
    </div>
  );
};

export default Router;
