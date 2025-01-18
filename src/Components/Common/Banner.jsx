import React, { useState, useEffect, useRef } from "react";
import arrow from "../../assets/arrow.svg";
import { Link } from "react-router";

const Banner = ({
  title,
  subtitle,
  showSVG = true,
  className,
  showR = true,
  to,
}) => {
  const isDisabled = !to;
  const Component = isDisabled ? "div" : Link;
  const hoverClasses = isDisabled
    ? ""
    : "hover:shadow-[#1be5ec33] hover:border-[#1be5ec3f] group";

  const bannerRef = useRef(null);
  const [rotation, setRotation] = useState({ x: 0, y: 0 });
  const [mousePosition, setMousePosition] = useState({ x: 50, y: 50 });
  const [isHovered, setIsHovered] = useState(false);

  useEffect(() => {
    const banner = bannerRef.current;
    if (!banner || isDisabled) return;

    const handleMouseMove = (e) => {
      if (!isHovered) return;

      const rect = banner.getBoundingClientRect();

      // Calculate relative mouse position for background effect
      const x = ((e.clientX - rect.left) / rect.width) * 100;
      const y = ((e.clientY - rect.top) / rect.height) * 100;
      setMousePosition({ x, y });

      // Enhanced movement calculation
      const centerX = rect.left + rect.width / 2;
      const centerY = rect.top + rect.height / 2;

      const mouseX = e.clientX - centerX;
      const mouseY = e.clientY - centerY;

      // Increased rotation effect
      const rotateY = mouseX * 0.025;
      const rotateX = -mouseY * 0.025;

      setRotation({ x: rotateX, y: rotateY });
    };

    const handleMouseLeave = () => {
      setIsHovered(false);
      setRotation({ x: 0, y: 0 });
      setMousePosition({ x: 50, y: 50 });
    };

    const handleMouseEnter = () => {
      setIsHovered(true);
    };

    banner.addEventListener("mousemove", handleMouseMove);
    banner.addEventListener("mouseleave", handleMouseLeave);
    banner.addEventListener("mouseenter", handleMouseEnter);

    return () => {
      banner.removeEventListener("mousemove", handleMouseMove);
      banner.removeEventListener("mouseleave", handleMouseLeave);
      banner.removeEventListener("mouseenter", handleMouseEnter);
    };
  }, [isDisabled, isHovered]);

  const style = {
    transform: `perspective(1000px) rotateX(${rotation.x}deg) rotateY(${rotation.y}deg)`,
    transition: isHovered ? "transform 0.1s" : "transform 0.3s ease-out",
  };

  const gradientStyle = {
    background: `radial-gradient(circle at ${mousePosition.x}% ${mousePosition.y}%, rgba(27, 229, 236, 0.08), transparent 40%)`,
    transition: isHovered ? "none" : "background 0.3s ease-out",
  };

  return (
    <Link
      {...(!isDisabled && { to })}
      ref={bannerRef}
      style={style}
      className={`${className} h-[127px] w-full lg:w-[calc((100%-48px)/3)] rounded-xl border border-[#1be5ec1f] text-[#e5e6ee] text-sm sm:text-base md:text-lg leading-6 inline-block pt-8 pl-8 backdrop-blur-[5px] bg-custom-gradient transition-all duration-300 ease-in-out relative overflow-hidden ${hoverClasses} ${
        isDisabled ? "opacity-70 cursor-not-allowed" : ""
      }`}
    >
      {/* Interactive background gradient */}
      {!isDisabled && (
        <div
          className="absolute inset-0 pointer-events-none transition-opacity duration-300 ease-linear opacity-0 group-hover:opacity-100"
          style={gradientStyle}
        ></div>
      )}

      {/* SVG Icon */}
      {showSVG && (
        <img
          src={arrow}
          alt="Arrow"
          className={`float-right mt-3 mr-6 sm:w-10 sm:h-10 md:w-12 md:h-12 transition-transform duration-300 ${
            !isDisabled ? "" : ""
          }`}
        />
      )}

      {/* Title */}
      <h2 className="mb-3 relative">
        <span
          className={`bg-[#191d21] text-[22px] sm:text-[24px] md:text-[28px] lg:text-[32px] leading-7 text-transparent bg-clip-text bg-gradient-to-r from-[#52ffba] via-[#23faec] to-[#0af] transition-all duration-300 ease-in-out ${
            !isDisabled
              ? "group-hover:bg-gradient-to-l duration-300 ease-linear"
              : ""
          }`}
        >
          {title}
        </span>
      </h2>

      {/* Subtitle */}
      <span className="block text-xs sm:text-sm md:text-base relative">
        {subtitle}
        {showR && (
          <span className="relative ml-[3px] text-[10px] sm:text-[12px] md:text-[14px]">
            ®
          </span>
        )}
      </span>
    </Link>
  );
};

export default Banner;
