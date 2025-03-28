import React from "react";

const AspectRatioButton = ({ ratio, isSelected = false, onClick }) => {
  let buttonWidth = "w-7";
  let buttonHeight = "h-7";

  // Set exact dimensions based on ratio
  switch (ratio) {
    case "16:9":
      buttonHeight = "h-[15.75px]";
      break;
    case "4:3":
      buttonHeight = "h-[21px]";
      break;
    case "3:2":
      buttonHeight = "h-[18.6667px]";
      break;
    case "2:3":
      buttonWidth = "w-[18.6667px]";
      buttonHeight = "h-7";
      break;
    case "3:4":
      buttonWidth = "w-[21px]";
      buttonHeight = "h-7";
      break;
    case "9:16":
      buttonWidth = "w-[15.75px]";
      buttonHeight = "h-7";
      break;
    case "21:9":
      buttonHeight = "h-3";
      break;
    default: // 1:1
      buttonWidth = "w-7";
      buttonHeight = "h-7";
  }

  return (
    <div className="inline-block cursor-pointer group" onClick={onClick}>
      <div className="w-12 h-12 text-center">
        <div
          className={`border-2 rounded-md inline-block group-hover:border-[#5252e5] duration-200 ${
            isSelected ? "border-[#5252e5]" : "border-white"
          } ${buttonWidth} ${buttonHeight}`}
        ></div>
      </div>
      <div
        className={`text-center text-xs group-hover:text-[#6c6cf5] duration-200 ${
          isSelected ? "text-[#6c6cf5]" : "text-white"
        }`}
      >
        {ratio}
      </div>
    </div>
  );
};

export default AspectRatioButton;
