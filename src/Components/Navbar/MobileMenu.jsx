import React, { useState, useRef, useEffect } from "react";
import {
  FaArrowLeftLong,
  FaFolderClosed,
  FaImage,
  FaVideo,
} from "react-icons/fa6";
import { PiLightbulbFilamentBold } from "react-icons/pi";
import { TbGift } from "react-icons/tb";
import { Link } from "react-router-dom";
import MenuIcon from "../../icons/menu";
import { useNavigation } from "../../Context/NavigationContext"; // Import this

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

  return (
    <div className="relative" ref={menuRef}>
      <button
        className="focus:outline-none sm:w-10 max-sm:pr-2 sm:mr-1 text-white hover:text-blue border-r-[1px] border-[rgb(36,40,44)] overflow-hidden"
        type="button"
        onClick={toggleMenu}
        onMouseEnter={() => setIsOpen(true)}
      >
        <MenuIcon
          ariaExpanded={isOpen}
          className="h-10 focus:text-blue focus:outline-none ml-2 cursor-pointer transition-colors"
        />
      </button>

      {isOpen && (
        <div
          className="absolute z-10 top-[50px] overflow-auto bg-primary backdrop-blur-[10px] divide-y divide-gray-100 rounded-lg py-1 border-[1px] border-[#1e3139] mr-0 leading-[20px] text-xs w-[200px]"
          onMouseLeave={() => setIsOpen(false)}
        >
          <ul className="py-2 text-sm bg-transparent border-none outline-none rounded text-[#c5c7d5] dark:text-gray-200">
            <Link
              to={token ? "/dashboard" : "/"}
              onClick={() => handleTabSelect("Home")}
            >
              <li className="text-[#eee] flex items-center gap-2 hover:text-white hover:bg-[#272d33] py-2  my-[2px] pl-[30px] -ml-3">
                <FaArrowLeftLong className="text-[18px]" />
                <span className="text-[16px] leading-6 p-1 ">
                  {token ? "Back to Dashboard" : "Back to Home"}
                </span>
              </li>
            </Link>
            <Link to="/explore" onClick={() => handleTabSelect("Explore")}>
              <li className="text-[#eee] flex items-center gap-2 hover:text-white hover:bg-[#272d33] py-2  my-[2px] pl-[30px] -ml-3">
                <PiLightbulbFilamentBold className="text-[18px]" />
                <span className="text-[16px] leading-6 p-1 ">Explore</span>
              </li>
            </Link>
            {/* <Link to="/events" onClick={() => handleTabSelect("Events")}>
              <li className="text-[#eee] flex items-center gap-2 hover:text-white hover:bg-[#272d33] py-2  my-[2px] pl-[30px] -ml-3">
                <TbGift className="text-[18px]" />
                <span className="text-[16px] leading-6 p-1 ">Events</span>
              </li>
            </Link> */}
            <li className="gap-2 my-2 mx-[16px] border-t-[2px] border-[#242b35]  pl-[30px]"></li>
            <Link to="/ImageAI" onClick={() => handleTabSelect("ImageAI")}>
              <li className="text-[#eee] flex items-center gap-2 hover:text-white hover:bg-[#272d33] py-2  my-[2px] pl-[30px] -ml-3">
                <FaImage className="text-[18px]" />
                <span className="text-[16px] leading-6 p-1 ">AI Images</span>
              </li>
            </Link>
            <Link to="/VideoAI" onClick={() => handleTabSelect("VideoAI")}>
              <li className="text-[#eee] flex items-center gap-2 hover:text-white hover:bg-[#272d33] py-2  my-[2px] pl-[30px] -ml-3">
                <FaVideo className="text-[18px]" />
                <span className="text-[16px] leading-6 p-1 ">AI Videos</span>
              </li>
            </Link>
            <Link to="/profile" onClick={() => handleTabSelect("My Creatives")}>
              <li className="text-[#eee] hover:text-white flex items-center gap-2 hover:bg-[#272d33] py-2  my-[2px] pl-[30px] -ml-3">
                <FaFolderClosed className="text-[18px]" />
                <span className="text-[16px] leading-6 p-1 ">My Creatives</span>
              </li>
            </Link>
          </ul>
        </div>
      )}
    </div>
  );
};

export default MobileMenu;
