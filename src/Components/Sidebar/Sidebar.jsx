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
          className={`w-56 h-12 text-base px-4 py-2.5 mb-1 gap-[0.5em] relative rounded-full duration-100 ease-linear flex items-center cursor-pointer ${
            isActive ? "text-secondary" : "text-gray"
          }`}
        >
          <div
            className={`w-[18px] h-[18px] flex items-center align-top ${
              isActive ? "text-secondary" : "text-gray"
            }`}
          >
            {React.cloneElement(icon, {
              color: isActive ? "#5252e5" : "#c5c7d5",
            })}
          </div>
          <span className="align-middle">{label}</span>
          {extraContent}
          {isActive && (
            <div className="h-4 absolute rounded-full top-2.5 -left-3 w-1 bg-secondary mt-1.5" />
          )}
        </Link>
      </div>
    );
  };

  return (
    <aside className="max-h-[calc(100vh-68px)] overflow-y-auto h-full max-w-64 bg-primar overflow-auto absolute float-left z-10 max-lg:hidden">
      <div className="h-full pt-4 px-3 pb-8 flex flex-col gap-4">
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
              <li className="!h-4 mt-0 mb-0 pb-0 text-gray-150  text-sm pt-7">
                <hr className="border-t w-[200px] border-primary-border !mb-2 !mt-[-19px]" />
              </li>
              <li className="h-10 text-gray-150 cursor-default px-4 py-[11px] mb-1 mt-3 w-[234px] text-base relative">
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
              <div className="h-5 p-0.5 px-1 bg-primary-light rounded flex items-center">
                <span className="text-[10px] font-normal align-middle text-blue-light">
                  Try Archiks88 1.6
                </span>
              </div>
            )}

            {/* AI Custom Model - Disabled State */}
            <div className="relative group">
              <li
                className={`w-[234px] h-12 text-base px-4 py-[11px] mb-1 gap-[0.5em] relative rounded-full flex items-center cursor-not-allowed text-gray-150 `}
              >
                <div className="w-[18px] h-[18px] flex items-center align-top">
                  <TbChartCandle />
                </div>
                <span className="align-middle">AI Custom Model</span>
              </li>
            </div>

            {/* Divider */}
            <div>
              <li className="!h-4 mt-0 mb-0 pb-0 text-gray-150  text-sm pt-[27px]">
                <hr className="border-t w-[200px] border-primary-border !mb-2 !mt-[-19px]" />
              </li>
              <li className="h-10 text-gray-150 cursor-default px-4 py-[11px] mb-1 mt-3 w-[234px] text-base relative">
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
                className={`w-[234px] h-12 text-base px-4 py-[11px] mb-1 gap-[0.5em] relative rounded-full flex items-center cursor-not-allowed text-gray-150 `}
              >
                <div className="w-[18px] h-[18px] flex items-center align-top">
                  <FaShield />
                </div>
                <span className="align-middle">My Models</span>
              </li>
            </div>

            {/* Divider */}
            <div className="!h-4 mt-0 mb-0 pb-0 text-gray-150  text-sm pt-[27px]">
              <hr className="border-t w-[200px] border-primary-border !mb-2 !mt-[-19px]" />
            </div>
          </ul>
          <div className="relative flex">
            <div className="p-0.5 bg-gradient-to-r from-purple-700 to-sky-600 group  rounded-full transition-all duration-300 group-hover:shadow-lg">
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
        <div className="px-3 flex flex-row gap-4">
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
