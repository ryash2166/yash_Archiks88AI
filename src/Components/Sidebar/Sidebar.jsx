import React from "react";
import { Link } from "react-router-dom";
import insta from "../../assets/insta.svg";
import discord from "../../assets/discord.svg";
import twitter from "../../assets/twitter.svg";
import youtube from "../../assets/youtube.svg";
import { PiLightbulbFilamentBold } from "react-icons/pi";
import { GoHomeFill } from "react-icons/go";
import { FaImage, FaVideo } from "react-icons/fa";
import { TbChartCandle } from "react-icons/tb";
import { FaFolderClosed, FaShield } from "react-icons/fa6";
import { useNavigation } from "../../Context/NavigationContext";
import LazyLoadImg from "../Common/LazyLoadImg";
import { useNavigate } from "react-router-dom";
import Button from "../Common/Button";

const Sidebar = () => {
  const { activeTab, setActiveTab } = useNavigation();
  const navigate = useNavigate();

  const handlePrice = () => {
    navigate("/pricing");
  };
  // Generalized tab link renderer
  const renderTabLink = (to, tab, icon, label, extraContent = null) => {
    const isActive = activeTab === tab;
    return (
      <div
        className={` ${
          isActive
            ? "bg-gray-800 rounded-full"
            : "hover:bg-gray-700 rounded-full"
        }`}
      >
        <Link
          to={to}
          onClick={() => setActiveTab(tab)}
          className={`w-[234px] h-[46px] text-[16px] px-[16px] py-[11px] mb-1 leading-[22px] gap-[0.5em] relative rounded-full duration-100 ease-linear flex items-center cursor-pointer ${
            isActive ? "text-secondary" : "text-[#c5c7d5]"
          }`}
        >
          <div
            className={`w-[18px] h-[18px] flex items-center align-top ${
              isActive ? "text-secondary" : "text-[#c5c7d5]"
            }`}
          >
            {React.cloneElement(icon, {
              color: isActive ? "#5252e5" : "#c5c7d5",
            })}
          </div>
          <span className="align-middle">{label}</span>
          {extraContent}
          {isActive && (
            <div className="h-[16px] absolute rounded-full top-[9px] -left-3 w-1 bg-secondary mt-[6px]" />
          )}
        </Link>
      </div>
    );
  };

  return (
    <aside className="max-h-[calc(100vh-68px)] overflow-y-auto h-full max-w-[260px] bg-primary overflow-auto antialiased bg-grid-white/[0.02] absolute float-left z-[2] max-lg:hidden">
      <div className="h-full pt-[16px] px-3 pb-[32px] flex flex-col gap-[16px]">
        <div className="grow">
          <ul className="p-0">
            {/* Home */}
            {renderTabLink("/dashboard", "Home", <GoHomeFill />, "Home")}

            {/* Explore */}
            {renderTabLink(
              "/explore",
              "Explore",
              <PiLightbulbFilamentBold />,
              "Explore"
            )}

            {/* Divider and Section Heading */}
            <div>
              <li className="!h-[16px] mt-0 mb-0 pb-0 text-[#727485] text-[14px] pt-[27px]">
                <hr className="border-t-[1px] w-[200px] border-[#24282c] !mb-2 !mt-[-19px]" />
              </li>
              <li className="h-10 text-[#727485] font-[14px] cursor-default px-[16px] py-[11px] mb-1 mt-3 w-[234px] leading-[22px] relative">
                AI Assets
              </li>
            </div>

            {/* AI Images */}
            {renderTabLink("/ImageAI", "ImageAI", <FaImage />, "AI Images")}

            {/* AI Videos */}
            {renderTabLink(
              "/VideoAI",
              "VideoAI",
              <FaVideo />,
              "AI Videos",
              <div className="h-[20px] p-1 bg-[#ffffff14] rounded flex items-center">
                <span className="text-[10px] font-normal align-middle text-blue">
                  Try Archiks88 1.6
                </span>
              </div>
            )}

            {/* AI Custom Model - Disabled State */}
            <div className="relative group">
              <li
                className={`w-[234px] h-[46px] text-[16px] px-[16px] py-[11px] mb-1 leading-[22px] gap-[0.5em] relative rounded-full flex items-center cursor-not-allowed text-[#727485]`}
              >
                <div className="w-[18px] h-[18px] flex items-center align-top">
                  <TbChartCandle />
                </div>
                <span className="align-middle">AI Custom Model</span>
              </li>
            </div>

            {/* Divider */}
            <div>
              <li className="!h-[16px] mt-0 mb-0 pb-0 text-[#727485] text-[14px] pt-[27px]">
                <hr className="border-t-[1px] w-[200px] border-[#24282c] !mb-2 !mt-[-19px]" />
              </li>
              <li className="h-10 text-[#727485] font-[14px] cursor-default px-[16px] py-[11px] mb-1 mt-3 w-[234px] leading-[22px] relative">
                My Space
              </li>
            </div>

            {/* My Creatives */}
            {renderTabLink(
              "/profile",
              "My Creatives",
              <FaFolderClosed />,
              "My Creatives"
            )}

            {/* My Models - Disabled State */}
            <div className="relative group">
              <li
                className={`w-[234px] h-[46px] text-[16px] px-[16px] py-[11px] mb-1 leading-[22px] gap-[0.5em] relative rounded-full flex items-center cursor-not-allowed text-[#727485]`}
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
          <div className="relative flex">
            <div className="p-[2px] bg-gradient-to-r from-purple-700 to-sky-600 group  rounded-full transition-all duration-300 group-hover:shadow-lg">
              <Button
                onClick={handlePrice}
                title="Upgrade Now"
                // icon={<ImageToVideoIcon className="w-6 h-6" />}
                className="bg-black text-white sm:!text-base !py-2.5 !px-8 rounded-full w-full h-full transition-all duration-300 group-hover:bg-gradient-to-l group-hover:from-purple-900 group-hover:to-sky-700 font-medium"
              />
            </div>
          </div>
        </div>

        {/* Social Media Icons */}
        <div className="px-3 flex flex-row gap-[16px]">
          <LazyLoadImg src={discord} alt="Discord" width={28} height={28} />
          <LazyLoadImg src={twitter} alt="Twitter" width={28} height={28} />
          <LazyLoadImg src={youtube} alt="YouTube" width={28} height={28} />
          <LazyLoadImg src={insta} alt="Instagram" width={28} height={28} />
        </div>

        {/* Release Notes */}
        <div className="gap-2 flex flex-row pr-0 pl-3">
          <div className="text-sm font-normal cursor-pointer text-white">
            Release Notes
          </div>
        </div>
      </div>
    </aside>
  );
};

export default Sidebar;
