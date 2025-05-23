import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import logo from "../../assets/Main.svg";
import Button from "../Common/Button";
import Login from "../Login/Login";
import personPlaceholder from "../../assets/person.png";
import { FaCoins, FaFolderClosed, FaUser } from "react-icons/fa6";
import { FaSignOutAlt } from "react-icons/fa";
import MobileMenu from "./MobileMenu";
import useNavbar from "../../hooks/useNavbar";
import { useNavigation } from "../../Context/NavigationContext";
import LazyLoadImg from "../Common/LazyLoadImg";

const Navbar = ({ container = false }) => {
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
    handleMyCreativesClick,
    handleLogout,
    togglePopup,
  } = useNavbar();

  const { token } = useNavigation();
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50); // Adjust scrollY threshold as needed
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div
      className={`sticky top-0 w-full z-20 transition-all duration-500 ${
        scrolled ? "bg-primary/95" : "bg-primary"
      }`}
    >
      <header
        className={`h-16 w-full px-4 backdrop-blur-sm shadow-md ${
          container ? "container mx-auto" : ""
        } `}
      >
        <div className="flex h-full justify-between items-center gap-2.5">
          <div className="flex items-center">
            <div className="lg:hidden mt-1.5">
              <MobileMenu />
            </div>
            <div className="flex items-center h-full">
              <Link
                to={token ? "/dashboard" : "/"}
                className="flex h-full ml-1 items-center"
                onClick={handleLogoClick}
              >
                <img src={logo} alt="Logo" />
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
                  <LazyLoadImg
                    onClick={() => setShowProfileDropdown(!showProfileDropdown)}
                    src={profile.avatar || personPlaceholder}
                    alt="User Avatar"
                    className="w-12 h-12 hidden sm:block rounded-full object-cover cursor-pointer"
                  />

                  <FaUser
                    onClick={() => setShowProfileDropdown(!showProfileDropdown)}
                    className="max-sm:block hidden w-5 h-5 text-gray-200"
                  />
                </div>

                {/* Profile Dropdown */}
                {showProfileDropdown && (
                  <div
                    className="absolute top-full right-0 mt-2 w-48 bg-primary rounded-lg shadow-lg border border-primary-border"
                    onClick={(e) => e.stopPropagation()} // Prevent dropdown from closing on click
                  >
                    <div className="py-2 px-4">
                      <p className="text-sm md:hidden py-2 px-4 text-gray-400 flex items-center">
                        <FaCoins className="mr-1 text-yellow-500" />
                        Credits: {profile.credits || 0}
                      </p>
                      <Link
                        to="/profile"
                        onClick={handleMyCreativesClick}
                        className="flex items-center px-4 py-2 text-sm text-gray-300 hover:bg-primary/20 hover:text-white"
                      >
                        <FaFolderClosed className="mr-3" />
                        My Creatives
                      </Link>
                      <button
                        onClick={handleLogout}
                        className="w-full flex items-center px-4 py-2 text-sm text-gray-300 hover:bg-primary/20 hover:text-red-500"
                      >
                        <FaSignOutAlt className="mr-3" />
                        Logout
                      </button>
                    </div>
                  </div>
                )}
              </div>
            ) : (
              <div className="flex items-center gap-4">
                <Link to="/pricing">
                  <p className="text-blue-light text-base hover:underline">
                    Pricing
                  </p>
                </Link>
                <Button
                  className="bg-blue-light hover:!bg-secondary !px-3 sm:!px-6"
                  title="Sign In"
                  onClick={togglePopup}
                />
              </div>
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
