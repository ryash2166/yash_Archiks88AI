import React from "react";
import { Link } from "react-router-dom";
import logo from "../../assets/logo.svg";
import Button from "../Common/Button";
import Login from "../Login/Login";
import personPlaceholder from "../../assets/person.png";
import { FaCoins, FaFolderClosed, FaUser } from "react-icons/fa6";
import { FaSignOutAlt } from "react-icons/fa";
import MobileMenu from "./MobileMenu";
import useNavbar from "../../hooks/useNavbar";

const Navbar = () => {
  const {
    showLoginPopup,
    setShowLoginPopup,
    showProfileDropdown,
    setShowProfileDropdown,
    profileDropdownRef,
    profile,
    isAuthenticated,
    authLoading,
    handleLogoClick,
    handleLogout,
    togglePopup,
  } = useNavbar();

  return (
    <div className="bg-[#0d1116] sticky top-0 z-20">
      <header className="h-[68px] w-full px-1 sm:px-5">
        <div className="flex h-full justify-between items-center px-2">
          <div className="flex items-center">
            <div className="md:hidden">
              <MobileMenu />
            </div>
            <div className="flex items-center h-full">
              <Link
                to="/"
                className="flex h-full max-sm:ml-[2px] items-center"
                onClick={handleLogoClick}
              >
                <img src={logo} alt="Logo" className="max-sm:px-4" />
              </Link>
            </div>
          </div>

          <div className="flex items-center h-full">
            {!authLoading && isAuthenticated && profile ? (
              <div
                className="relative flex items-center space-x-4 h-full"
                ref={profileDropdownRef}
              >
                {/* Profile Section */}
                <div className="flex items-center gap-3 h-full ">
                  <p className="font-semibold text-white hidden md:block">
                    Welcome Back, {profile.name || "User"}
                  </p>
                  <div className="text-white text-base hidden md:block">
                    <p className="text-sm text-gray-400 flex items-center bg-gray-800 rounded-xl p-2">
                      <FaCoins className="mr-1.5 w-5 h-5 text-yellow-500" />
                      {profile.credits || 0}
                    </p>
                  </div>
                  <img
                    onClick={() => setShowProfileDropdown(!showProfileDropdown)}
                    src={profile.avatar || personPlaceholder}
                    alt="User Avatar"
                    className="w-12 h-12 hidden sm:block rounded-full object-cover cursor-pointer"
                  />

                  <FaUser
                    onClick={() => setShowProfileDropdown(!showProfileDropdown)}
                    className="max-sm:block hidden w-6 h-6 text-gray-200"
                  />
                </div>

                {/* Profile Dropdown */}
                {showProfileDropdown && (
                  <div
                    className="absolute top-full right-0 mt-2 w-48 bg-[#1a1f27] rounded-lg shadow-lg border border-[#2d333b]"
                    onClick={(e) => e.stopPropagation()} // Prevent dropdown from closing on click
                  >
                    <div className="py-2 px-4">
                      <p className="text-sm md:hidden py-2 px-4 text-gray-400 flex items-center">
                        <FaCoins className="mr-1 text-yellow-500" />
                        Credits: {profile.credits || 0}
                      </p>
                      <Link
                        to="/profile"
                        className="flex items-center px-4 py-2 text-sm text-gray-300 hover:bg-[#272d33] hover:text-white"
                      >
                        <FaFolderClosed className="mr-3" />
                        My Creatives
                      </Link>
                      <button
                        onClick={handleLogout}
                        className="w-full flex items-center px-4 py-2 text-sm text-gray-300 hover:bg-[#272d33] hover:text-red-500"
                      >
                        <FaSignOutAlt className="mr-3" />
                        Logout
                      </button>
                    </div>
                  </div>
                )}
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
