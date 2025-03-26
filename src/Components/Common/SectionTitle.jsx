import React from "react";
import RightArrowIcon from "../../icons/rightArrow";

const SectionTitle = ({ title }) => {
  return (
    <div className="flex items-center justify-between mx-5 mt-8 mb-4 text-white">
      {/* Title */}
      <span className="text-lg font-medium leading-[26px]">{title}</span>

      {/* More Button */}
      <button
        className="flex items-center px-4 py-2 text-sm leading-6 bg-[#1f2429] text-white rounded-full hover:bg-[#2b3035] transition duration-200"
        aria-label="View more"
      >
        More
       <RightArrowIcon />
      </button>
    </div>
  );
};

export default SectionTitle;
