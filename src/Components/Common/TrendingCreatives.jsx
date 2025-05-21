import PlayIcon from "../../icons/play";
import { FaRegHeart } from "react-icons/fa";
import Masonry, { ResponsiveMasonry } from "react-responsive-masonry";
import { TrendingCreativesData } from "../../Data/AllData";
import { useRef } from "react";
import { LazyLoadComponent } from "react-lazy-load-image-component";

const TrendingCreatives = () => {
  // Using AI get on hover video and auto play video

  const videoRefs = useRef([null]);

  // Handler for mouse enter and leave to play/pause video
  const handleMouseEnter = (index) => {
    if (videoRefs.current[index]) {
      videoRefs.current[index].play();
    }
  };

  const handleMouseLeave = (index) => {
    if (videoRefs.current[index]) {
      videoRefs.current[index].pause();
    }
  };

  return (
    <div className="">
      <ResponsiveMasonry
        className="mt-3"
        columnsCountBreakPoints={{ 480: 2, 575: 3, 1025: 6 }}
      >
        <Masonry className="!m-auto">
          {TrendingCreativesData.map((item, index) => (
            <div
              key={index}
              className={`flex flex-col  cursor-pointer overflow-hidden rounded-xl relative group ${item.className}`}
              onMouseEnter={() => handleMouseEnter(index)}
              onMouseLeave={() => handleMouseLeave(index)}
            >
              <LazyLoadComponent>
                <div className="flex-1 shrink-0 w-full h-full">
                  <video
                    ref={(el) => (videoRefs.current[index] = el)}
                    loop
                    preload="auto"
                    disablePictureInPicture
                    playsInline
                    disableRemotePlayback
                    src={item.video}
                    className="object-fill"
                  ></video>
                </div>
              </LazyLoadComponent>
              <PlayIcon className="w-8 h-8 top-3 right-3 absolute" />
              <div className="absolute bottom-0 left-0 top-0 right-0 bg-creative rounded-md flex flex-row items-end p-4">
                <div className="inline-block w-full align-bottom ">
                  {/* <h4 className="text-base mb-1 text-white overflow-hidden opacity-0 group-hover:opacity-100 transition-opacity duration-300 whitespace-nowrap text-ellipsis">
                    {item.title}
                  </h4>
                  <p className="text-sm leading-6 mb-2 text-white opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    {item.subtitle}
                  </p>
                  <Button
                    className="bg-[linear-gradient(89.86deg,#a7ff1a,#82fac2,#47d4ff)] px-6 hover:!bg-[linear-gradient(89.86deg,#81d100,#56d69a,#1aaad6)] opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                    title="Clone & Try"
                  /> */}
                  <div className="flex items-center float-right text-white">
                    <FaRegHeart className="h-4 w-4 text-white mr-2" />
                    <span className="text-sm">{item.likes}</span>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </Masonry>
      </ResponsiveMasonry>
    </div>
  );
};

export default TrendingCreatives;
