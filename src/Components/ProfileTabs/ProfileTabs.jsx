import React, { useEffect, useState } from "react";
import { DateRangePicker } from "@nextui-org/react";
import nowork from "../../assets/nowork.svg";
import Button from "../Common/Button";
const ProfileTabs = () => {
  const [mainTab, setMainTab] = useState("Assets");
  const [assetsSubTab, setAssetsSubTab] = useState("All");

  // Effect to set default sub-tab when mainTab changes
  useEffect(() => {
    if (mainTab === "Assets") {
      setAssetsSubTab("All");
    } else if (mainTab === "Published" || mainTab === "Likes") {
      setAssetsSubTab("Creatives");
    }
  }, [mainTab]);

  return (
    <div className="flex flex-col space-y-4  p-4 rounded-lg shadow-md ">
      {/* Main Tabs */}
      <div className="flex items-center space-x-4 ">
        {["Published", "Assets", "Likes"].map((tab) => (
          <button
            key={tab}
            className={`px-4 py-2 text-[20px] leading-7 font-medium transition-transform ${
              mainTab === tab
                ? "bg-[#191d21] text-transparent bg-clip-text bg-gradient-to-r from-[#52ffba] via-[#23faec] to-[#0af] border-b-2 border-teal-400"
                : "text-[#c5c7d5] hover:text-white"
            }`}
            onClick={() => setMainTab(tab)}
          >
            {tab}
          </button>
        ))}
      </div>

      {/* Sub Tabs for "Assets" */}
      {mainTab === "Assets" && (
        <div className="flex justify-between items-center max-md:hidden">
          {/* Left: Sub Tabs */}
          <div className="flex items-center p-1 rounded-full bg-[#ffffff0a] border-[1px] border-[#ffffff1f]">
            {["All", "Images", "Videos"].map((subTab) => (
              <button
                key={subTab}
                className={`py-[6px] px-6 text-sm leading-6 font-medium rounded-full transition  ${
                  assetsSubTab === subTab
                    ? "bg-[#191d21]  bg-gradient-to-r focus:outline-none from-[#52ffba] via-[#23faec] to-[#0af] "
                    : "text-white"
                }`}
                onClick={() => setAssetsSubTab(subTab)}
              >
                {subTab}
              </button>
            ))}
          </div>

          {/* Right: Action Buttons and Date Picker */}
          <div className="flex items-center space-x-4">
            <button className="px-4 py-2 bg-gray-800 text-white text-sm rounded-lg hover:bg-gray-700 transition">
              Select
            </button>
            <button className="px-4 py-2 bg-gray-800 text-white text-sm rounded-lg hover:bg-gray-700 transition">
              Hierarchy
            </button>
            <DateRangePicker variant="" />
          </div>
        </div>
      )}

      {mainTab !== "Assets" && (
        <div className="flex justify-between items-center max-md:hidden">
          {/* Left: Sub Tabs */}
          <div className="flex items-center p-1 rounded-full bg-[#ffffff0a] border-[1px] border-[#ffffff1f]">
            {["Creatives", "Shorts"].map((subTab) => (
              <button
                key={subTab}
                className={`py-[6px] px-6 text-sm leading-6 font-medium rounded-full transition  ${
                  assetsSubTab === subTab
                    ? "bg-[#191d21]  bg-gradient-to-r focus:outline-none from-[#52ffba] via-[#23faec] to-[#0af] "
                    : "text-white"
                }`}
                onClick={() => setAssetsSubTab(subTab)}
              >
                {subTab}
              </button>
            ))}
          </div>

          <Button
            className="bg-[linear-gradient(89.86deg,#a7ff1a,#82fac2,#47d4ff)] !px-5 !py-2 "
            title="Publish"
          />
        </div>
      )}

      {/* Content for Other Main Tabs */}
      {mainTab === "Assets" && (
        <div className="text-center">
          <div className="pt-[80px] mb-5">
            <div className="w-full text-center flex flex-col justify-center items-center">
              <img src={nowork} alt="No_Work" width={120} height={120} />
              <p className="text-[#c5c7d5] text-sm">
                Release your creative potential. Experience the magic of
                Archiks88 AI.
              </p>
              <div className="mt-3 space-x-3">
              <Button
                className="bg-[linear-gradient(89.86deg,#a7ff1a,#82fac2,#47d4ff)] !px-5 !py-2 "
                title="Generate Images"
              />
              <Button
                className="bg-[linear-gradient(89.86deg,#a7ff1a,#82fac2,#47d4ff)] !px-5 !py-2 "
                title="Generate Videos"
              />
              </div>
            </div>
          </div>
        </div>
      )}
      {mainTab !== "Assets" && (
        <div className="text-center flex justify-center">
          <div className="pt-[80px] mb-5">
            <div>
              <img src={nowork} alt="No_Work" width={120} height={120} />
              <p className="text-[#c5c7d5] text-sm">No Works</p>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default ProfileTabs;
