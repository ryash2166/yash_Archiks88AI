import React, { useState } from "react";
import insta from "../../assets/insta.svg";
import discord from "../../assets/discord.svg";
import twitter from "../../assets/twitter.svg";
import youtube from "../../assets/youtube.svg";
import { PiLightbulbFilamentBold } from "react-icons/pi";
import { GoHomeFill } from "react-icons/go";
import { FaImage, FaVideo } from "react-icons/fa";
import { TbChartCandle } from "react-icons/tb";
import { FaFolderClosed, FaShield } from "react-icons/fa6";
import { Link } from "react-router";

const Sidebar = () => {
  const [active, setActive] = useState("");

  return (
    <header className="max-h-[calc(100vh-68px)] h-full max-w-[260px] bg-[#0b1116] absolute float-left z-[2] max-lg:hidden">
      {/* Logo */}
      <div className="h-full pt-[16px] px-3 pb-[32px] flex flex-col gap-[16px]">
        <div className="grow ">
          <ul className="p-0">
            {/* Home */}
            <div
              className={`${
                active === "Home" ? "bg-[#191d21] rounded-full" : ""
              }`}
            >
              <Link
                to="/"
                onClick={() => setActive("Home")}
                className={`w-[234px] h-[46px] text-[16px] px-[16px] py-[11px] mb-1 leading-[22px] gap-[0.5em] relative rounded-full  duration-100 ease-linear flex items-center cursor-pointer ${
                  active === "Home"
                    ? "bg-[#191d21] rounded-full text-transparent bg-clip-text bg-gradient-to-r from-[#52ffba] via-[#23faec] to-[#0af] "
                    : "text-[#c5c7d5]"
                }`}
              >
                <div
                  className={`w-[18px] h-[18px] flex items-center align-top ${
                    active === "Home"
                      ? "text-transparent bg-clip-text bg-gradient-to-r from-[#52ffba] via-[#23faec] to-[#0af]"
                      : "text-[#c5c7d5]"
                  }`}
                >
                  <GoHomeFill
                    style={{
                      fill:
                        active === "Home" ? "url(#homeGradient)" : "#c5c7d5",
                    }}
                  />
                </div>
                <svg width="0" height="0">
                  <defs>
                    <linearGradient
                      id="homeGradient"
                      x1="0%"
                      y1="0%"
                      x2="100%"
                      y2="0%"
                    >
                      <stop offset="0%" stopColor="#52ffba" />
                      <stop offset="50%" stopColor="#23faec" />
                      <stop offset="100%" stopColor="#0af" />
                    </linearGradient>
                  </defs>
                </svg>
                <span className="align-middle">Home</span>
                {active === "Home" && (
                  <div className="h-[16px] absolute rounded-full top-[9px] -left-3 w-1 bg-gradient-to-r from-[#52ffba] via-[#23faec] to-[#0af] mt-[6px]" />
                )}
              </Link>
            </div>

            {/* Explore */}
            <div
              className={`${
                active === "Explore" ? "bg-[#191d21] rounded-full" : ""
              }`}
            >
              <li
                onClick={() => setActive("Explore")}
                className={`w-[234px] h-[46px] text-[16px] px-[16px] py-[11px] mb-1 leading-[22px] gap-[0.5em] relative rounded-full  duration-100 ease-linear flex items-center cursor-pointer ${
                  active === "Explore"
                    ? "bg-[#1d232c] text-transparent bg-clip-text bg-gradient-to-r from-[#52ffba] via-[#23faec] to-[#0af]"
                    : "text-[#c5c7d5]"
                }`}
              >
                <div
                  className={`w-[18px] h-[18px] flex items-center align-top ${
                    active === "Home"
                      ? "text-transparent bg-clip-text bg-gradient-to-r from-[#52ffba] via-[#23faec] to-[#0af]"
                      : "text-[#c5c7d5]"
                  }`}
                >
                  <PiLightbulbFilamentBold
                    style={{
                      fill:
                        active === "Explore" ? "url(#homeGradient)" : "#c5c7d5",
                    }}
                  />
                </div>
                <svg width="0" height="0">
                  <defs>
                    <linearGradient
                      id="homeGradient"
                      x1="0%"
                      y1="0%"
                      x2="100%"
                      y2="0%"
                    >
                      <stop offset="0%" stopColor="#52ffba" />
                      <stop offset="50%" stopColor="#23faec" />
                      <stop offset="100%" stopColor="#0af" />
                    </linearGradient>
                  </defs>
                </svg>
                <span className="align-middle">Explore</span>
                {active === "Explore" && (
                  <div className="h-[16px] absolute rounded-full top-[9px] -left-3 w-1 bg-gradient-to-r from-[#52ffba] via-[#23faec] to-[#0af] mt-[6px]" />
                )}
              </li>
            </div>
            <div>
              <li className="!h-[16px] mt-0 mb-0 pb-0 text-[#727485] text-[14px] pt-[27px]">
                <hr className="border-t-[1px] w-[200px] border-[#24282c] !mb-2 !mt-[-19px]" />
              </li>
            </div>
            <div>
              <li className="h-10 text-[#727485] font-[14px] cursor-default px-[16px] py-[11px] mb-1 mt-3 w-[234px] leading-[22px] relative">
                AI Assets
              </li>
            </div>

            {/* AI Images */}
            <div
              className={`${
                active === "AI Images" ? "bg-[#191d21] rounded-full" : ""
              }`}
            >
              <li
                onClick={() => setActive("AI Images")}
                className={`w-[234px] h-[46px] text-[16px] px-[16px] py-[11px] mb-1 leading-[22px] gap-[0.5em] relative rounded-full  duration-100 ease-linear flex items-center cursor-pointer ${
                  active === "AI Images"
                    ? "bg-[#1d232c] text-transparent bg-clip-text bg-gradient-to-r from-[#52ffba] via-[#23faec] to-[#0af]"
                    : "text-[#c5c7d5]"
                }`}
              >
                <div
                  className={`w-[18px] h-[18px] flex items-center align-top ${
                    active === "Home"
                      ? "text-transparent bg-clip-text bg-gradient-to-r from-[#52ffba] via-[#23faec] to-[#0af]"
                      : "text-[#c5c7d5]"
                  }`}
                >
                  <FaImage
                    style={{
                      fill:
                        active === "AI Images"
                          ? "url(#homeGradient)"
                          : "#c5c7d5",
                    }}
                  />
                </div>
                <svg width="0" height="0">
                  <defs>
                    <linearGradient
                      id="homeGradient"
                      x1="0%"
                      y1="0%"
                      x2="100%"
                      y2="0%"
                    >
                      <stop offset="0%" stopColor="#52ffba" />
                      <stop offset="50%" stopColor="#23faec" />
                      <stop offset="100%" stopColor="#0af" />
                    </linearGradient>
                  </defs>
                </svg>
                <span className="align-middle">AI Images</span>
                {active === "AI Images" && (
                  <div className="h-[16px] absolute rounded-full top-[9px] -left-3 w-1 bg-gradient-to-r from-[#52ffba] via-[#23faec] to-[#0af] mt-[6px]" />
                )}
              </li>
            </div>

            {/* AI Videos */}
            <div
              className={`${
                active === "AI Videos" ? "bg-[#191d21] rounded-full" : ""
              }`}
            >
              <li
                onClick={() => setActive("AI Videos")}
                className={`w-[234px] h-[46px] text-[16px] px-[16px] py-[11px] mb-1 leading-[22px] gap-[0.5em] relative rounded-full  duration-100 ease-linear flex items-center cursor-pointer ${
                  active === "AI Videos"
                    ? "bg-[#1d232c] text-transparent bg-clip-text bg-gradient-to-r from-[#52ffba] via-[#23faec] to-[#0af]"
                    : "text-[#c5c7d5]"
                }`}
              >
                <div
                  className={`w-[18px] h-[18px] flex items-center align-top ${
                    active === "Home"
                      ? "text-transparent bg-clip-text bg-gradient-to-r from-[#52ffba] via-[#23faec] to-[#0af]"
                      : "text-[#c5c7d5]"
                  }`}
                >
                  <FaVideo
                    style={{
                      fill:
                        active === "AI Videos"
                          ? "url(#homeGradient)"
                          : "#c5c7d5",
                    }}
                  />
                </div>
                <svg width="0" height="0">
                  <defs>
                    <linearGradient
                      id="homeGradient"
                      x1="0%"
                      y1="0%"
                      x2="100%"
                      y2="0%"
                    >
                      <stop offset="0%" stopColor="#52ffba" />
                      <stop offset="50%" stopColor="#23faec" />
                      <stop offset="100%" stopColor="#0af" />
                    </linearGradient>
                  </defs>
                </svg>
                <span className="align-middle">AI Videos</span>
                <div className="h-[20px] p-1 bg-[#ffffff14] rounded flex items-center">
                  <span className="text-[10px] font-normal align-middle side-tag">
                    Try Archiks88 1.6
                  </span>
                </div>
                {active === "AI Videos" && (
                  <div className="h-[16px] absolute rounded-full top-[9px] -left-3 w-1 bg-gradient-to-r from-[#52ffba] via-[#23faec] to-[#0af] mt-[6px]" />
                )}
              </li>
            </div>
            <div className="relative group">
              <li
                className={`w-[234px] h-[46px] text-[16px] px-[16px] py-[11px] mb-1 leading-[22px] gap-[0.5em] relative rounded-full flex items-center cursor-pointer text-[#727485]`}
              >
                <div className="w-[18px] h-[18px] flex items-center align-top">
                  <TbChartCandle />
                </div>
                <span className="align-middle">AI Custom Model</span>
              </li>
            </div>

            <div>
              <li className="!h-[16px] mt-0 mb-0 pb-0 text-[#727485] text-[14px] pt-[27px]">
                <hr className="border-t-[1px] w-[200px] border-[#24282c] !mb-2 !mt-[-19px]" />
              </li>
            </div>
            <div>
              <li className="h-10 text-[#727485] font-[14px] cursor-default px-[16px] py-[11px] mb-1 mt-3 w-[234px] leading-[22px] relative">
                My Space
              </li>
            </div>
            {/* My Creatives */}
            <div
              className={`${
                active === "My Creatives" ? "bg-[#191d21] rounded-full" : ""
              }`}
            >
              <Link
                to="/profile"
                onClick={() => setActive("My Creatives")}
                className={`w-[234px] h-[46px] text-[16px] px-[16px] py-[11px] mb-1 leading-[22px] gap-[0.5em] relative rounded-full  duration-100 ease-linear flex items-center cursor-pointer ${
                  active === "My Creatives"
                    ? "text-transparent bg-clip-text bg-gradient-to-r from-[#52ffba] via-[#23faec] to-[#0af]"
                    : "text-[#c5c7d5]"
                }`}
              >
                <div
                  className={`w-[18px] h-[18px] flex items-center align-top ${
                    active === "Home"
                      ? "text-transparent bg-clip-text bg-gradient-to-r from-[#52ffba] via-[#23faec] to-[#0af]"
                      : "text-[#c5c7d5]"
                  }`}
                >
                  <FaFolderClosed
                    style={{
                      fill:
                        active === "My Creatives"
                          ? "url(#homeGradient)"
                          : "#c5c7d5",
                    }}
                  />
                </div>
                <svg width="0" height="0">
                  <defs>
                    <linearGradient
                      id="homeGradient"
                      x1="0%"
                      y1="0%"
                      x2="100%"
                      y2="0%"
                    >
                      <stop offset="0%" stopColor="#52ffba" />
                      <stop offset="50%" stopColor="#23faec" />
                      <stop offset="100%" stopColor="#0af" />
                    </linearGradient>
                  </defs>
                </svg>
                <span className="align-middle">My Creatives</span>
                {active === "My Creatives" && (
                  <div className="h-[16px] absolute rounded-full top-[9px] -left-3 w-1 bg-gradient-to-r from-[#52ffba] via-[#23faec] to-[#0af] mt-[6px]" />
                )}
              </Link>
            </div>

            {/* My Models */}
            <div className="relative group">
              <li
                className={`w-[234px] h-[46px] text-[16px] px-[16px] py-[11px] mb-1 leading-[22px] gap-[0.5em] relative rounded-full flex items-center cursor-pointer text-[#727485]`}
              >
                <div className="w-[18px] h-[18px] flex items-center align-top">
                  <FaShield />
                </div>
                <span className="align-middle">My Models</span>
              </li>
            </div>

            {/* Divider */}
            <div className="!h-[16px] mt-0 mb-0 pb-0 text-[#727485] text-[14px] pt-[27px]">
              <hr className="border-t-[1px] w-[200px] border-[#24282c] !mb-2 !mt-[-19px]" />
            </div>
          </ul>
        </div>

        {/* Social Media Icons */}
        <div className="px-3 flex flex-row gap-[16px] ">
          <img src={discord} alt="" width={28} height={28} />
          <img src={twitter} alt="" width={28} height={28} />
          <img src={youtube} alt="" width={28} height={28} />
          <img src={insta} alt="" width={28} height={28} />
        </div>

        {/* Release Notes */}
        <div className="gap-2 flex flex-row pr-0 pl-3">
          <div className="text-sm font-normal cursor-pointer text-white">
            Release Notes
          </div>
        </div>
      </div>
    </header>
  );
};

export default Sidebar;
