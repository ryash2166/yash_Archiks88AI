import React, { useState } from "react";
import { Link } from "react-router";
import logo from "../../assets/logo.svg";
import Button from "../Common/Button";
import Login from "../Login/Login";
import { useNavigation } from "../../Context/NavigationContext";
import personPlaceholder from "../../assets/person.png";

const Navbar = () => {
  const [showLoginPopup, setShowLoginPopup] = useState(false);
  const { 
    setActiveTab, 
    profile, 
    isAuthenticated,
    authLoading,
    logout
  } = useNavigation();

  const togglePopup = () => setShowLoginPopup(!showLoginPopup);

  const handleLogoClick = () => {
    setActiveTab("Home");
  };

  const handleLogout = () => {
    const result = logout();
    if (result.success) {
      window.location.href = "/";
    }
  };

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
            {!authLoading && isAuthenticated && profile ? (
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
                  onClick={handleLogout}
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