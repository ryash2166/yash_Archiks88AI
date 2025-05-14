import React, { useState } from "react";
import AssetIcon from "../../icons/assetIcon";
import SelectIcon from "../../icons/select";
import ExpandIcon from "../../icons/expand";

const AssetsPanel = () => {
  const [isExpanded, setIsExpanded] = useState(false);

  return (
    <div
      className={`h-full border-primary-border  bg-primary border rounded-xl pt-4 pb-0 px-3.5  absolute right-5 transition-all duration-300 ease-in-out  ${
        isExpanded ? "w-[548px]" : "w-40"
      } `}
    >
      {/* Header */}
      <div className="flex items-center justify-between overflow-hidden">
        <div className="flex flex-row items-center justify-between w-full gap-2">
          <h2 className="text-white leading-6 text-left flex-1 text-base font-semibold">
            Assets
          </h2>
          <p className="text-white flex  hover:text-blue-light cursor-pointer transition duration-200">
            <AssetIcon />
            {isExpanded && <span className="ml-1 align-middle">Hierarchy</span>}
          </p>
          <p className="text-white flex  hover:text-blue-light cursor-pointer transition duration-200">
            <SelectIcon />
            {isExpanded && <span className="ml-1 align-middle">Select</span>}
          </p>
        </div>
      </div>

      {/* Toggle Button */}
      <button
        onClick={() => setIsExpanded(!isExpanded)}
        className="absolute w-6 h-9 mt-[calc((100vh-200px)/2)] -ml-7 border border-r-none  border-primary-border  bg-primary rounded-l-full transform -translate-y-1/2 -translate-x-1/2 pl-1.5 text-blue-light"
      >
        <ExpandIcon
          className={`transform transition-transform ${
            isExpanded ? "rotate-180 duration-300 ease-linear" : ""
          }`}
        />
      </button>

      {/* Content */}
      <div className="mt-2.5">
        <div className="bg-primary rounded-lg w-32 h-32 flex items-center justify-center">
          <span className="text-gray-500">Empty</span>
        </div>
      </div>
    </div>
  );
};

export default AssetsPanel;
