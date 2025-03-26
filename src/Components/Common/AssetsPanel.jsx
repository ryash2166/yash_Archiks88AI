import React, { useState } from "react";
import AssetIcon from "../../icons/assetIcon";
import SelectIcon from "../../icons/select";
import ExpandIcon from "../../icons/expand";

const AssetsPanel = () => {
  const [isExpanded, setIsExpanded] = useState(false);

  return (
    <div
      className={`h-full border-[#2e3136] bg-[#0d1116] border-[1px] rounded-xl pt-[16px] pb-0 px-[15px] absolute right-5 transition-all duration-300 ease-in-out  ${
        isExpanded ? "w-[548px]" : "w-[152px]"
      } `}
    >
      {/* Header */}
      <div className="flex items-center justify-between overflow-hidden">
        <div className="flex flex-row items-center justify-between w-full gap-2">
          <h2 className="text-white leading-6 text-left flex-1 text-[16px] font-semibold">
            Assets
          </h2>
          <p className="text-white flex  hover:text-[#9ffd38] cursor-pointer transition duration-200">
            <AssetIcon />
            {isExpanded && <span className="ml-1 align-middle">Hierarchy</span>}
          </p>
          <p className="text-white flex  hover:text-[#9ffd38] cursor-pointer transition duration-200">
            <SelectIcon />
            {isExpanded && <span className="ml-1 align-middle">Select</span>}
          </p>
        </div>
      </div>

      {/* Toggle Button */}
      <button
        onClick={() => setIsExpanded(!isExpanded)}
        className="absolute w-6 h-[37px] mt-[calc((100vh-200px)/2)] -ml-[27px] border-[1px] border-r-[0px]  border-[#2e3136] bg-[#0d1116] rounded-l-full transform -translate-y-1/2 -translate-x-1/2 pl-[6px] text-[#72e528]"
      >
        <ExpandIcon
          className={`transform transition-transform ${
            isExpanded ? "rotate-180 duration-300 ease-linear" : ""
          }`}
        />
      </button>

      {/* Content */}
      <div className="mt-[10px]">
        <div className="bg-[#191d21] rounded-lg w-[120px] h-[120px] flex items-center justify-center">
          <span className="text-gray-500">Empty</span>
        </div>
      </div>
    </div>
  );
};

export default AssetsPanel;
