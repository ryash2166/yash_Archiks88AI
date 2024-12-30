import React from "react";
import arrow from "../../assets/arrow.svg";

const Banner = ({
  title,
  subtitle,
  showSVG = true,
  className,
  showR = true,
}) => {
  return (
    <div
      className={`${className} h-[127px]  w-full lg:w-[calc((100%-48px)/3)] rounded-xl border border-[#1be5ec1f] text-[#e5e6ee] text-sm sm:text-base md:text-lg leading-6 inline-block pt-8 pl-8 backdrop-blur-[5px] bg-custom-gradient`}
    >
      {/* SVG Icon */}
      {showSVG && (
        <img
          src={arrow}
          alt="Arrow"
          className="float-right mt-3 mr-6 sm:w-10 sm:h-10 md:w-12 md:h-12"
        />
      )}

      {/* Title */}
      <h2 className="mb-3">
        <span className="bg-[#191d21] text-[22px] sm:text-[24px] md:text-[28px] lg:text-[32px] leading-7 text-transparent bg-clip-text bg-gradient-to-r from-[#52ffba] via-[#23faec] to-[#0af]">
          {title}
        </span>
      </h2>

      {/* Subtitle */}
      <span className="block text-xs sm:text-sm md:text-base">
        {subtitle}
        {showR && (
          <span className="relative ml-[3px] text-[10px] sm:text-[12px] md:text-[14px]">
            ®
          </span>
        )}
      </span>
    </div>
  );
};

export default Banner;
