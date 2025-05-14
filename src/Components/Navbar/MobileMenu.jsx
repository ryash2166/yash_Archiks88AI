import React, { useState, useRef, useEffect } from "react";
import {
  FaArrowLeftLong,
  FaFolderClosed,
  FaImage,
  FaVideo,
} from "react-icons/fa6";
import { PiLightbulbFilamentBold } from "react-icons/pi";
import { TbGift } from "react-icons/tb";
import { Link, Navigate } from "react-router-dom";
import MenuIcon from "../../icons/menu";
import { useNavigation } from "../../Context/NavigationContext"; // Import this
import Button from "../Common/Button";

const MobileMenu = () => {
  const [isOpen, setIsOpen] = useState(false);
  const menuRef = useRef(null);
  const { setActiveTab, token } = useNavigation(); // Add this line

  // Toggle menu function
  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  // Close menu when clicking outside
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (menuRef.current && !menuRef.current.contains(event.target)) {
        setIsOpen(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  // Function to handle tab selection and close menu
  const handleTabSelect = (tabName) => {
    setIsOpen(false);
    setActiveTab(tabName);
  };

  const handlePrice = () => {
    Navigate("/pricing");
  };

  return (
    <div className="relative" ref={menuRef}>
      <button
        className="focus:outline-none sm:w-10 max-sm:pr-2 sm:mr-1 text-white hover:text-blue-light border-r border-primary-border overflow-hidden"
        type="button"
        onClick={toggleMenu}
        onMouseEnter={() => setIsOpen(true)}
      >
        <MenuIcon
          ariaExpanded={isOpen}
          className="h-10 focus:text-blue-light focus:outline-none ml-2 cursor-pointer transition-colors"
        />
      </button>

      {isOpen && (
        <div
          className="absolute z-10 top-12 overflow-auto bg-primary backdrop-blur-md divide-y divide-gray-100 rounded-lg py-1 border border-primary-border mr-0 text-xs w-56"
          onMouseLeave={() => setIsOpen(false)}
        >
          <ul className="py-2 text-sm bg-transparent border-none outline-none rounded text-gray-150 dark:text-gray-200">
            <Link
              to={token ? "/dashboard" : "/"}
              onClick={() => handleTabSelect("Home")}
            >
              <li className="text-gray flex items-center gap-2 hover:text-blue-light hover:bg-primary-light py-2 pl-8 -ml-3">
                <FaArrowLeftLong className="text-lg" />
                <span className="text-base p-1">
                  {token ? "Back to Dashboard" : "Back to Home"}
                </span>
              </li>
            </Link>
            <Link to="/explore" onClick={() => handleTabSelect("Explore")}>
              <li className="text-gray flex items-center gap-2 hover:text-blue-light hover:bg-primary-light py-2 pl-8 -ml-3">
                <PiLightbulbFilamentBold className="text-lg" />
                <span className="text-base p-1">Explore</span>
              </li>
            </Link>
            {/* <Link to="/events" onClick={() => handleTabSelect("Events")}>
              <li className="text-gray-400 flex items-center gap-2 hover:text-white hover:bg-primary-light py-2 pl-8 -ml-3">
                <TbGift className="text-lg" />
                <span className="text-base p-1">Events</span>
              </li>
            </Link> */}
            <li className="gap-2 my-2 mx-4 border-t-2 border-primary-border pl-8"></li>
            <Link to="/ImageAI" onClick={() => handleTabSelect("ImageAI")}>
              <li className="text-gray flex items-center gap-2 hover:text-blue-light hover:bg-primary-light py-2 pl-8 -ml-3">
                <FaImage className="text-lg" />
                <span className="text-base p-1">AI Images</span>
              </li>
            </Link>
            <Link to="/VideoAI" onClick={() => handleTabSelect("VideoAI")}>
              <li className="text-gray flex items-center gap-2 hover:text-blue-light hover:bg-primary-light py-2 pl-8 -ml-3">
                <FaVideo className="text-lg" />
                <span className="text-base p-1">AI Videos</span>
              </li>
            </Link>
            <Link to="/profile" onClick={() => handleTabSelect("My Creatives")}>
              <li className="text-gray flex items-center gap-2 hover:text-blue-light hover:bg-primary-light py-2 pl-8 -ml-3">
                <FaFolderClosed className="text-lg" />
                <span className="text-base p-1">My Creatives</span>
              </li>
            </Link>
            <li className="gap-2 my-2 mx-4 border-t-2 border-primary-border pl-8"></li>

            <div className="mt-3 flex justify-center items-center">
              <div className="p-0.5 bg-gradient-to-r from-purple-700 to-sky-600 group rounded-full transition-all duration-300 group-hover:shadow-lg">
                <Button
                  onClick={handlePrice}
                  title="Upgrade Now"
                  // icon={<ImageToVideoIcon className="w-6 h-6" />}
                  className="bg-black text-white sm:!text-base !py-2.5 !px-8 rounded-full w-full h-full transition-all duration-300 group-hover:bg-gradient-to-l group-hover:from-purple-900 group-hover:to-sky-700 font-medium"
                />
              </div>
            </div>
          </ul>
        </div>
      )}
    </div>
  );
};

export default MobileMenu;
