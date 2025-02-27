// import React, { useState } from "react";
// import logo from "../../assets/logo.svg";
// // import creadits from "../../assets/credits.png";
// import Button from "../Common/Button";
// // import New from "../../assets/new.png";
// import Login from "../Login/Login";
// import { Link } from "react-router";
// import { useNavigation } from "../../Context/NavigationContext";
// import MobileMenu from "./MobileMenu";

// const Navbar = () => {
//   const [showLoginPopup, setShowLoginPopup] = useState(false);
//   const { setActiveTab } = useNavigation();
//   const [user, setUser] = useState(null);
//   const togglePopup = () => setShowLoginPopup(!showLoginPopup);

//   const handleLogoClick = () => {
//     setActiveTab("Home");
//   };

//   return (
//     <div className="bg-[#0d1116] sticky top-0 z-20">
//       <header className="h-[68px] w-full px-1 sm:px-5">
//         <div className="flex h-full justify-between items-center">
//           <div className="flex items-center  h-full ">
//             {/* <div className="md:hidden ">
//             <MobileMenu  />
//             </div> */}
//           <Link to="/" className="flex h-full max-sm:ml-[2px] items-center" onClick={handleLogoClick}>
//             <img src={logo} alt="Logo" className="" />
//           </Link>
//           </div>
//           <div className="flex items-center h-full">
//             {/* <div className="flex cursor-pointer justify-center items-center flex-row rounded-full h-9 px-5 bg-[#ffffff14] text-sm mr-5 max-md:hidden">
//               <img src={creadits} alt="" width={16} height={16} />
//               <span className="ml-1 gradient-text text-transparent align-middle">
//                 Sign in for free credits
//               </span>
//             </div>
//             <div className="mr-5 relative max-sm:hidden">
//               <Button
//                 className="bg-[linear-gradient(135deg,#52ffba_9.27%,#23faec_46.96%,#0af_88.5%)]"
//                 title="API Calls"
//               />
//               <img
//                 src={New}
//                 alt=""
//                 className="w-[27px] h-4 absolute -top-[6px] -right-[15px] new-tag"
//               />
//             </div> */}

//             <Button
//               className="bg-[#6c6cf5] hover:!bg-[#5252e5] !px-3 sm:!px-6 "
//               title="Sign In"
//               onClick={togglePopup}
//             />
//           </div>
//         </div>
//       </header>

//       {/* Import and Use Login Popup */}

//       <Login isVisible={showLoginPopup} onClose={() => setShowLoginPopup(false)} />
//     </div>
//   );
// };

// export default Navbar;

import React, { useEffect, useState } from "react";
import { Link } from "react-router";
import logo from "../../assets/logo.svg";
import Button from "../Common/Button";
import Login from "../Login/Login";
import { useNavigation } from "../../Context/NavigationContext";
// import MobileMenu from "./MobileMenu";
import personPlaceholder from "../../assets/person.png"; // Placeholder image for avatar

const Navbar = () => {
  const [showLoginPopup, setShowLoginPopup] = useState(false);
  const { setActiveTab } = useNavigation();
  const [profile, setProfile] = useState(null);
  const togglePopup = () => setShowLoginPopup(!showLoginPopup);

  const handleLogoClick = () => {
    setActiveTab("Home");
  };
  const logout = () => {
    localStorage.removeItem("token");
    setProfile(null);
    console.log("Logout successful");
    // window.location.reload();
    window.location.href = "/";
  };

  const url = "http://localhost:3000";
  // Fetch profile data when the component mounts
  useEffect(() => {
    const fetchProfile = async () => {
      try {
        const token = localStorage.getItem("token");
        const res = await fetch(`${url}/api/profile`, {
          method: "GET",
          headers: {
            "Content-Type": "application/json",
            Authorization: `Bearer ${token}`,
          },
        });
        if (res.ok) {
          const data = await res.json();
          // console.log("Fetched profile data:", data);
          setProfile(data);
        } else {
          console.error("Failed to fetch profile");
        }
      } catch (error) {
        console.error("Error fetching profile:", error);
      }
    };
    fetchProfile();
  }, []);

  return (
    <div className="bg-[#0d1116] sticky top-0 z-20">
      <header className="h-[68px] w-full px-1 sm:px-5">
        <div className="flex h-full justify-between items-center">
          <div className="flex items-center h-full">
            <Link
              to="/"
              className="flex h-full max-sm:ml-[2px] items-center"
              onClick={handleLogoClick}
            >
              <img src={logo} alt="Logo" className="" />
            </Link>
          </div>

          <div className="flex items-center h-full">
            {profile ? (
              <div className="flex items-center space-x-4 h-full">
                {/* User avatar and name */}
                <div className="flex items-center space-x-2 h-full max-md:hidden">
                  <img
                    src={profile.avatar || personPlaceholder}
                    alt="User Avatar"
                    className="w-12 h-12 rounded-full object-cover"
                  />
                  <span className="text-white text-sm">
                    {profile.name || "User"}
                  </span>
                </div>
                {/* Remaining credits */}
                <div className="text-white text-sm hidden md:block">
                  Credits: {profile.credits || 0}
                </div>
                {/* Logout Button */}
                <Button
                  className="bg-[#ff5e57] hover:bg-[#ff2f1b] px-3 sm:px-6"
                  title="Logout"
                  onClick={logout}
                />
              </div>
            ) : (
              <Button
                className="bg-[#6c6cf5] hover:!bg-[#5252e5] !px-3 sm:!px-6"
                title="Sign In"
                onClick={togglePopup}
              />
            )}
          </div>
        </div>
      </header>

      {/* Login Popup */}
      <Login
        isVisible={showLoginPopup}
        onClose={() => setShowLoginPopup(false)}
      />
    </div>
  );
};

export default Navbar;
