import React, { useRef } from "react";
import { FaRegHeart } from "react-icons/fa";

const TrendingCard = ({
  title,
  subtitle,
  videoSrc,
  posterSrc,
  likes,
  time,
  author,
}) => {
  // Using AI get on hover video and auto play video

  const videoRef = useRef(null);

  const handleMouseEnter = () => {
    if (videoRef.current) {
      videoRef.current.play();
    }
  };

  const handleMouseLeave = () => {
    if (videoRef.current) {
      videoRef.current.pause();
    }
  };

  return (
    <div
      className="relative cursor-pointer rounded-xl w-full h-[204px] inline-block lg:w-[calc((100%-64.1px)/4)] bg-[#111] bg-cover lg:mr-[16px] mb-[16px] overflow-hidden group"
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
    >
      {/* Video Section */}
      <div className="absolute w-full h-full bg-[#222] ">
        <video
          ref={videoRef}
          loop
          disablePictureInPicture
          playsInline
          preload="auto"
          disableRemotePlayback
          muted
          poster={posterSrc}
          src={videoSrc}
          className="block w-full h-full object-cover"
        ></video>
      </div>

      {/* Content Section */}
      <div className="absolute w-full h-full bg-creative to-transparent  flex flex-col justify-end p-4">
        <h4 className="text-base leading-[22.4px] mb-[2px] text-white overflow-hidden opacity-0 group-hover:opacity-100 transition-opacity duration-300 whitespace-nowrap text-ellipsis">
          {title}
        </h4>
        <p className="text-sm leading-6 mb-2 text-white opacity-0 group-hover:opacity-100 transition-opacity duration-300">
          {subtitle}
        </p>
        <div className="flex justify-between items-center text-white">
          <div className="text-sm opacity-90">{author}</div>
          <div className="flex items-center">
            <FaRegHeart className="h-4 w-4 text-white mr-2" />
            <span className="text-sm">{likes}</span>
            <div className="mx-4 border-l-[1px] border-[#bdbdbd] h-3"></div>
            <span className="text-sm">{time}</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TrendingCard;
