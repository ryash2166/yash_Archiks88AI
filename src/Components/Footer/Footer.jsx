import React from "react";
import logo from "../../assets/Main.svg"
import { FaAngleRight } from "react-icons/fa";
import discord from "../../assets/discord.svg";
import youtube from "../../assets/youtube.svg";
import twitter from "../../assets/twitter.svg";
import LazyLoadImg from "../Common/LazyLoadImg";

const Footer = ({margin = true}) => {
  return (
    <div className={`pt-10 pb-9 px-6  border-t border-[#333] relative h-full ${margin ? "lg:ml-64 lg:pr-11" : ""}`}>
      <div className="text-white flex flex-col md:flex-row flex-wrap md:justify-between gap-3">
        <div className="mb-6 lg:mb-0 w-full lg:w-auto flex items-start justify-center ">
          <img src={logo} alt="Logo" className="" />
        </div>

        <div className="mb-6 max-md:flex flex-col items-center">
          <p className="text-base font-medium mb-4">About</p>
          <div className="space-y-3">
            <span className="flex items-center max-md:justify-center gap-2">
              Terms of Service <FaAngleRight className="h-4 w-4" />
            </span>
            <span className="flex items-center max-md:justify-center gap-2">
              Privacy Policy <FaAngleRight className="h-4 w-4" />
            </span>
            <span className="flex items-center max-md:justify-center gap-2">
              Terms of Paid Service <FaAngleRight className="h-4 w-4" />
            </span>
            <span className="flex items-center max-md:justify-center gap-2">
              Credits Policy <FaAngleRight className="h-4 w-4" />
            </span>
            <span className="flex items-center max-md:justify-center gap-2">
              Community Guidelines <FaAngleRight className="h-4 w-4" />
            </span>
          </div>
        </div>

        <div className="mb-6 max-md:flex flex-col items-center">
          <p className="text-base font-medium mb-4">Contact Us</p>
          <span>Archiks88@kuaishou.com</span>
        </div>

        <div className="flex lg:hidden xl:flex justify-center lg:justify-end w-full md:w-auto space-x-6">
          <div className="flex flex-col items-center max-lg:mb-4">
            <LazyLoadImg src={discord} alt="" width={65} height={65} className="mb-1" />
            <p className="text-center">Discord</p>
          </div>
          <div className="flex flex-col items-center max-lg:mb-4">
            <LazyLoadImg src={youtube} alt="" width={65} height={65} className="mb-1" />
            <p>YouTube</p>
          </div>
          <div className="flex flex-col items-center">
            <LazyLoadImg src={twitter} alt="" width={65} height={65} className="mb-1" />
            <p>Twitter</p>
          </div>
        </div>
      </div>

      {/* Footer Bottom Section */}
      <div className={`text-xs text-center mt-12 ${margin ? "mb-12" : ""} text-[#4e495a]`}>
        <p>Archiks88ai.com 2024 © All rights Reserved</p>
      </div>
    </div>
  );
};

export default Footer;
