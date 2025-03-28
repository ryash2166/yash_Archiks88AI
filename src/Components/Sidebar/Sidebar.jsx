// import React from "react";
// import { Link } from "react-router-dom";
// import insta from "../../assets/insta.svg";
// import discord from "../../assets/discord.svg";
// import twitter from "../../assets/twitter.svg";
// import youtube from "../../assets/youtube.svg";
// import { PiLightbulbFilamentBold } from "react-icons/pi";
// import { GoHomeFill } from "react-icons/go";
// import { FaImage, FaVideo } from "react-icons/fa";
// import { TbChartCandle } from "react-icons/tb";
// import { FaFolderClosed, FaShield } from "react-icons/fa6";
// import { useNavigation } from "../../Context/NavigationContext";

// // Gradient SVG Component
// const GradientSVG = () => (
//   <svg width="0" height="0">
//     <defs>
//       <linearGradient id="navigationGradient" x1="0%" y1="0%" x2="100%" y2="0%">
//         <stop offset="0%" stopColor="#52ffba" />
//         <stop offset="50%" stopColor="#23faec" />
//         <stop offset="100%" stopColor="#0af" />
//       </linearGradient>
//     </defs>
//   </svg>
// );

// const Sidebar = () => {
//   const { activeTab, setActiveTab } = useNavigation();

//   // Generalized gradient style function
//   const getGradientStyle = (tab) => ({
//     fill: activeTab === tab ? "url(#navigationGradient)" : "#c5c7d5",
//   });

//   // Generalized tab link renderer
//   const renderTabLink = (to, tab, icon, label, extraContent = null) => {
//     const isActive = activeTab === tab;
//     return (
//       <div
//         className={`${
//           isActive
//             ? "bg-[#191d21] rounded-full"
//             : "hover:bg-[#24282c] rounded-full"
//         }`}
//       >
//         <Link
//           to={to}
//           onClick={() => setActiveTab(tab)}
//           className={`w-[234px] h-[46px] text-[16px] px-[16px] py-[11px] mb-1 leading-[22px] gap-[0.5em] relative rounded-full duration-100 ease-linear flex items-center cursor-pointer ${
//             isActive
//               ? "bg-[#1d232c] text-transparent bg-clip-text bg-gradient-to-r from-[#52ffba] via-[#23faec] to-[#0af]"
//               : "text-[#c5c7d5]"
//           }`}
//         >
//           <div
//             className={`w-[18px] h-[18px] flex items-center align-top ${
//               isActive
//                 ? "text-transparent bg-clip-text bg-gradient-to-r from-[#52ffba] via-[#23faec] to-[#0af]"
//                 : "text-[#c5c7d5]"
//             }`}
//           >
//             {React.cloneElement(icon, {
//               style: getGradientStyle(tab),
//             })}
//           </div>
//           <span className="align-middle">{label}</span>
//           {extraContent}
//           {isActive && (
//             <div className="h-[16px] absolute rounded-full top-[9px] -left-3 w-1 bg-gradient-to-r from-[#52ffba] via-[#23faec] to-[#0af] mt-[6px]" />
//           )}
//         </Link>
//       </div>
//     );
//   };

//   return (
//     <aside className="max-h-[calc(100vh-68px)] overflow-y-auto h-full max-w-[260px] bg-[#0b1116] absolute float-left z-[2] max-lg:hidden">
//       <GradientSVG />
//       <div className="h-full pt-[16px] px-3 pb-[32px] flex flex-col gap-[16px]">
//         <div className="grow">
//           <ul className="p-0">
//             {/* Home */}
//             {renderTabLink("/", "Home", <GoHomeFill />, "Home")}

//             {/* Explore */}
//             {renderTabLink(
//               "/explore",
//               "Explore",
//               <PiLightbulbFilamentBold />,
//               "Explore"
//             )}

//             {/* Divider and Section Heading */}
//             <div>
//               <li className="!h-[16px] mt-0 mb-0 pb-0 text-[#727485] text-[14px] pt-[27px]">
//                 <hr className="border-t-[1px] w-[200px] border-[#24282c] !mb-2 !mt-[-19px]" />
//               </li>
//               <li className="h-10 text-[#727485] font-[14px] cursor-default px-[16px] py-[11px] mb-1 mt-3 w-[234px] leading-[22px] relative">
//                 AI Assets
//               </li>
//             </div>

//             {/* AI Images */}
//             {renderTabLink("/ImageAI", "ImageAI", <FaImage />, "AI Images")}

//             {/* AI Videos */}
//             {renderTabLink(
//               "/VideoAI",
//               "VideoAI",
//               <FaVideo />,
//               "AI Videos",
//               <div className="h-[20px] p-1 bg-[#ffffff14] rounded flex items-center">
//                 <span className="text-[10px] font-normal align-middle side-tag">
//                   Try Archiks88 1.6
//                 </span>
//               </div>
//             )}

//             {/* AI Custom Model - Disabled State */}
//             <div className="relative group">
//               <li
//                 className={`w-[234px] h-[46px] text-[16px] px-[16px] py-[11px] mb-1 leading-[22px] gap-[0.5em] relative rounded-full flex items-center cursor-not-allowed text-[#727485]`}
//               >
//                 <div className="w-[18px] h-[18px] flex items-center align-top">
//                   <TbChartCandle />
//                 </div>
//                 <span className="align-middle">AI Custom Model</span>
//               </li>
//             </div>

//             {/* Divider */}
//             <div>
//               <li className="!h-[16px] mt-0 mb-0 pb-0 text-[#727485] text-[14px] pt-[27px]">
//                 <hr className="border-t-[1px] w-[200px] border-[#24282c] !mb-2 !mt-[-19px]" />
//               </li>
//               <li className="h-10 text-[#727485] font-[14px] cursor-default px-[16px] py-[11px] mb-1 mt-3 w-[234px] leading-[22px] relative">
//                 My Space
//               </li>
//             </div>

//             {/* My Creatives */}
//             {renderTabLink(
//               "/profile",
//               "My Creatives",
//               <FaFolderClosed />,
//               "My Creatives"
//             )}

//             {/* My Models - Disabled State */}
//             <div className="relative group">
//               <li
//                 className={`w-[234px] h-[46px] text-[16px] px-[16px] py-[11px] mb-1 leading-[22px] gap-[0.5em] relative rounded-full flex items-center cursor-not-allowed text-[#727485]`}
//               >
//                 <div className="w-[18px] h-[18px] flex items-center align-top">
//                   <FaShield />
//                 </div>
//                 <span className="align-middle">My Models</span>
//               </li>
//             </div>

//             {/* Divider */}
//             <div className="!h-[16px] mt-0 mb-0 pb-0 text-[#727485] text-[14px] pt-[27px]">
//               <hr className="border-t-[1px] w-[200px] border-[#24282c] !mb-2 !mt-[-19px]" />
//             </div>
//           </ul>
//         </div>

//         {/* Social Media Icons */}
//         <div className="px-3 flex flex-row gap-[16px]">
//           <img src={discord} alt="Discord" width={28} height={28} />
//           <img src={twitter} alt="Twitter" width={28} height={28} />
//           <img src={youtube} alt="YouTube" width={28} height={28} />
//           <img src={insta} alt="Instagram" width={28} height={28} />
//         </div>

//         {/* Release Notes */}
//         <div className="gap-2 flex flex-row pr-0 pl-3">
//           <div className="text-sm font-normal cursor-pointer text-white">
//             Release Notes
//           </div>
//         </div>
//       </div>
//     </aside>
//   );
// };

// export default Sidebar;


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

const Sidebar = () => {
  const { activeTab, setActiveTab } = useNavigation();

  // Generalized tab link renderer
  const renderTabLink = (to, tab, icon, label, extraContent = null) => {
    const isActive = activeTab === tab;
    return (
      <div
        className={`${
          isActive
            ? "bg-gray-800 rounded-full"
            : "hover:bg-gray-700 rounded-full"
        }`}
      >
        <Link
          to={to}
          onClick={() => setActiveTab(tab)}
          className={`w-[234px] h-[46px] text-[16px] px-[16px] py-[11px] mb-1 leading-[22px] gap-[0.5em] relative rounded-full duration-100 ease-linear flex items-center cursor-pointer ${
            isActive
              ? "text-[#5252e5]"
              : "text-[#c5c7d5]"
          }`}
        >
          <div
            className={`w-[18px] h-[18px] flex items-center align-top ${
              isActive ? "text-[#5252e5]" : "text-[#c5c7d5]"
            }`}
          >
            {React.cloneElement(icon, {
              color: isActive ? "#5252e5" : "#c5c7d5",
            })}
          </div>
          <span className="align-middle">{label}</span>
          {extraContent}
          {isActive && (
            <div className="h-[16px] absolute rounded-full top-[9px] -left-3 w-1 bg-[#5252e5] mt-[6px]" />
          )}
        </Link>
      </div>
    );
  };

  return (
    <aside className="max-h-[calc(100vh-68px)] overflow-y-auto h-full max-w-[260px] bg-[#0b1116] absolute float-left z-[2] max-lg:hidden">
      <div className="h-full pt-[16px] px-3 pb-[32px] flex flex-col gap-[16px]">
        <div className="grow">
          <ul className="p-0">
            {/* Home */}
            {renderTabLink("/", "Home", <GoHomeFill />, "Home")}

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
                <span className="text-[10px] font-normal align-middle text-[#6c6cf5]">
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
        </div>

        {/* Social Media Icons */}
        <div className="px-3 flex flex-row gap-[16px]">
          <img src={discord} alt="Discord" width={28} height={28} />
          <img src={twitter} alt="Twitter" width={28} height={28} />
          <img src={youtube} alt="YouTube" width={28} height={28} />
          <img src={insta} alt="Instagram" width={28} height={28} />
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