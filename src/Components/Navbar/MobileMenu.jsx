import React, { useState, useRef, useEffect } from "react";
import {
  FaArrowLeftLong,
  FaFolderClosed,
  FaImage,
  FaShield,
  FaVideo,
} from "react-icons/fa6";
import { PiLightbulbFilamentBold } from "react-icons/pi";
import { TbChartCandle, TbGift } from "react-icons/tb";
import { Link } from "react-router";

const MobileMenu = () => {
  const [isOpen, setIsOpen] = useState(false);
  const menuRef = useRef(null);
  
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

  return (
    <div className="relative" ref={menuRef}>
      <button
        className="focus:outline-none w-10 md:w-[50px] border-r-[1px] border-[rgb(36,40,44)] overflow-hidden"
        type="button"
        onClick={toggleMenu}
        onMouseEnter={() => setIsOpen(true)}
      >
        <svg
          width="24"
          height="24"
          viewBox="0 0 24 24"
          fill="currentColor"
          xmlns="http://www.w3.org/2000/svg"
          className="h-10 focus:text-[#72e528] focus:outline-none hover:text-[#72e528] text-white ml-2 cursor-pointer transition-colors"
          role="button"
          tabIndex="0"
          aria-expanded={isOpen}
          aria-haspopup="menu"
        >
          <path d="M4.26551 6.05665C4.96507 6.05665 5.53217 5.48954 5.53217 4.78998C5.53217 4.09042 4.96507 3.52332 4.26551 3.52332C3.56595 3.52332 2.99884 4.09042 2.99884 4.78998C2.99884 5.48954 3.56595 6.05665 4.26551 6.05665Z"></path>
          <path d="M8.26774 3.72332C7.67863 3.72332 7.20107 4.20088 7.20107 4.78998C7.20107 5.37909 7.67863 5.85665 8.26774 5.85665L19.9344 5.85665C20.5235 5.85665 21.0011 5.37909 21.0011 4.78998C21.0011 4.20088 20.5235 3.72332 19.9344 3.72332L8.26774 3.72332Z"></path>
          <path d="M7.20099 11.9999C7.20099 11.4108 7.67855 10.9333 8.26765 10.9333L19.9343 10.9333C20.5234 10.9333 21.001 11.4108 21.001 11.9999C21.001 12.589 20.5234 13.0666 19.9343 13.0666L8.26765 13.0666C7.67855 13.0666 7.20099 12.589 7.20099 11.9999Z"></path>
          <path d="M4.26551 13.2669C4.96507 13.2669 5.53217 12.6998 5.53217 12.0003C5.53217 11.3007 4.96507 10.7336 4.26551 10.7336C3.56595 10.7336 2.99884 11.3007 2.99884 12.0003C2.99884 12.6998 3.56595 13.2669 4.26551 13.2669Z"></path>
          <path d="M7.20099 19.2099C7.20099 18.6208 7.67855 18.1432 8.26765 18.1432L19.9343 18.1432C20.5234 18.1432 21.001 18.6208 21.001 19.2099C21.001 19.799 20.5234 20.2766 19.9343 20.2766H8.26765C7.67855 20.2766 7.20099 19.799 7.20099 19.2099Z"></path>
          <path d="M4.26551 20.4766C4.96507 20.4766 5.53217 19.9095 5.53217 19.2099C5.53217 18.5103 4.96507 17.9432 4.26551 17.9432C3.56595 17.9432 2.99884 18.5103 2.99884 19.2099C2.99884 19.9095 3.56595 20.4766 4.26551 20.4766Z"></path>
        </svg>
      </button>

      {isOpen && (
        <div 
          className="absolute z-10 top-[68px] overflow-auto bg-mobilemenu backdrop-blur-[10px] divide-y divide-gray-100 rounded-lg py-1 border-[1px] border-[#1e3139] mr-0 leading-[20px] text-xs w-[200px]"
          onMouseLeave={() => setIsOpen(false)}
        >
          <ul
            className="py-2 text-sm bg-transparent border-none outline-none rounded text-[#c5c7d5] dark:text-gray-200"
          >
            <Link to="/">
              <li className="text-[#eee] flex items-center gap-2 hover:text-white hover:bg-[#272d33] py-2  my-[2px] pl-[30px] -ml-3">
                <FaArrowLeftLong className="text-[18px]" />
                <span className="text-[16px] leading-6 p-1 ">
                  Back to Dashboard
                </span>
              </li>
            </Link>
            <Link to="/explore">
              <li className="text-[#eee] flex items-center gap-2 hover:text-white hover:bg-[#272d33] py-2  my-[2px] pl-[30px] -ml-3">
                <PiLightbulbFilamentBold className="text-[18px]" />
                <span className="text-[16px] leading-6 p-1 ">Explore</span>
              </li>
            </Link>
            <Link to="/events">
              <li className="text-[#eee] flex items-center gap-2 hover:text-white hover:bg-[#272d33] py-2  my-[2px] pl-[30px] -ml-3">
                <TbGift className="text-[18px]" />
                <span className="text-[16px] leading-6 p-1 ">Events</span>
              </li>
            </Link>
            <li className="gap-2 my-2 mx-[16px] border-t-[2px] border-[#242b35]  pl-[30px]"></li>
            <Link to="/ImageAI">
              <li className="text-[#eee] flex items-center gap-2 hover:text-white hover:bg-[#272d33] py-2  my-[2px] pl-[30px] -ml-3">
                <FaImage className="text-[18px]" />
                <span className="text-[16px] leading-6 p-1 ">AI Images</span>
              </li>
            </Link>
            <Link to="/VideoAI">
              <li className="text-[#eee] flex items-center gap-2 hover:text-white hover:bg-[#272d33] py-2  my-[2px] pl-[30px] -ml-3">
                <FaVideo className="text-[18px]" />
                <span className="text-[16px] leading-6 p-1 ">AI Videos</span>
              </li>
            </Link>
            <li className="text-[#aaa] cursor-not-allowed py-2  my-[2px] pl-[30px] -ml-3">
              <p className="flex items-center gap-2">
                <TbChartCandle className="text-[18px]" />
                <span className="text-[16px] leading-6 p-1 ">
                  AI Custom Model
                </span>
              </p>
            </li>
            <li className="gap-2 my-2 mx-[16px] border-t-[2px] border-[#242b35]  pl-[30px]"></li>
            <Link to="/profile" className="">
              <li className="text-[#eee] hover:text-white flex items-center gap-2 hover:bg-[#272d33] py-2  my-[2px] pl-[30px] -ml-3">
                <FaFolderClosed className="text-[18px]" />
                <span className="text-[16px] leading-6 p-1 ">My Creatives</span>
              </li>
            </Link>
            <li className="text-[#aaa] py-2  my-[2px] pl-[30px] -ml-3 cursor-not-allowed">
              <p className="flex items-center gap-2">
                <FaShield className="text-[18px]" />
                <span className="text-[16px] leading-6 p-1 ">My Model</span>
              </p>
            </li>
          </ul>
        </div>
      )}
    </div>
  );
};

export default MobileMenu;