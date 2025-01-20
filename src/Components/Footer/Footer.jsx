import React from "react";
import logo from "../../assets/logo.svg";
import { FaAngleRight } from "react-icons/fa";
import discord from "../../assets/discord.svg";
import youtube from "../../assets/youtube.svg";
import twitter from "../../assets/twitter.svg";

const Footer = () => {
  return (
    <div className="pt-10 pb-9 px-6 lg:ml-[260px] lg:pr-[42px] border-t-[1px] border-[#333]">
      <div className="text-white flex flex-wrap justify-between gap-3">
        <div className="mb-6 lg:mb-0 w-full lg:w-auto flex items-start justify-center ">
          <img src={logo} alt="Logo" className="" />
        </div>

        <div className="mb-6 ">
          <p className="text-[15px] font-medium leading-6 mb-4">About</p>
          <div className="space-y-3">
            <span className="flex items-center gap-2">
              Terms of Service <FaAngleRight className="h-4 w-4" />
            </span>
            <span className="flex items-center gap-2">
              Privacy Policy <FaAngleRight className="h-4 w-4" />
            </span>
            <span className="flex items-center gap-2">
              Terms of Paid Service <FaAngleRight className="h-4 w-4" />
            </span>
            <span className="flex items-center gap-2">
              Credits Policy <FaAngleRight className="h-4 w-4" />
            </span>
            <span className="flex items-center gap-2">
              Community Guidelines <FaAngleRight className="h-4 w-4" />
            </span>
          </div>
        </div>

        <div className="mb-6">
          <p className="text-[15px] font-medium leading-6 mb-4">Contact Us</p>
          <span>Archiks88@kuaishou.com</span>
        </div>

        <div className="block lg:flex justify-center lg:justify-end w-full lg:w-auto lg:space-x-6">
          <div className="flex flex-col items-center max-lg:mb-4">
            <img src={discord} alt="" width={65} height={65} className="mb-1" />
            <p className="text-center">Discord</p>
          </div>
          <div className="flex flex-col items-center max-lg:mb-4">
            <img src={youtube} alt="" width={65} height={65} className="mb-1" />
            <p>YouTube</p>
          </div>
          <div className="flex flex-col items-center">
            <img src={twitter} alt="" width={65} height={65} className="mb-1" />
            <p>Twitter</p>
          </div>
        </div>
      </div>

      {/* Footer Bottom Section */}
      <div className="text-xs text-center mt-12 mb-20 text-[#4e495a]">
        <p>Archiks88ai.com 2024 © All rights Reserved</p>
      </div>
    </div>
  );
};

export default Footer;
