import React, { useState } from "react";
import Slider from "@mui/material/Slider";
import sun from "../../assets/sun.svg";
import upload from "../../assets/upload.svg";
import motion from "../../assets/motion.svg";
import setting from "../../assets/setting.svg";
import Radio from "@mui/material/Radio";
import RadioGroup from "@mui/material/RadioGroup";
import FormControlLabel from "@mui/material/FormControlLabel";
import camera from "../../assets/camera.svg";
import camera2 from "../../assets/camera2.svg";
import negative from "../../assets/negative.svg";

const SectionHeader = ({ icon, title, subtitle }) => (
  <div className="flex items-center ">
    <img src={icon} alt={title} />
    <span className="text-[16px]  text-left pl-[6px] text-white">{title}</span>
    {subtitle && (
      <span className="text-sm text-[#999bac] text-left pl-[6px]">
        ({subtitle})
      </span>
    )}
  </div>
);

const Card = ({ children, className = "", disabled = false }) => (
  <div
    className={`bg-video rounded-2xl p-4 text-white backdrop-blur-sm w-full mb-3 overflow-hidden ${className} ${
      disabled ? "cursor-not-allowed" : ""
    }`}
  >
    {children}
  </div>
);

const ImageAI = () => {
  const [mainTab, setMainTab] = useState("Text to Image");
  const [opacity, setOpacity] = useState(1);

  const handleScroll = (e) => {
    const scrollTop = e.target.scrollTop;
    const maxScroll = 75;
    const newOpacity = Math.max(1 - scrollTop / maxScroll, 0);
    setOpacity(newOpacity);
  };

  return (
    <div className="bg-[#0d1116]">
      <video
        src="https://s1-def.ap4r.com/kos/s101/nlav112154/aiwp/assets/videos/main-image-DBbp02YB.mp4"
        autoPlay
        loop
        muted
        disablePictureInPicture
        disableRemotePlayback
        playsInline
        className="sm:absolute sm:-top-[5px] md:left-[150px] sm:max-w-[450px] pointer-events-none hidden md:!block"
      />
      <p className="absolute md:left-3 top-[88px] md:top-[130px] text-center w-[320px] tracking-wider font-bold text-4xl text-transparent bg-clip-text bg-gradient-to-r from-[#fff] via-[#fff] to-[#0af] hidden md:!block">
        Creative Space
      </p>

      <main
        className="w-full md:max-w-[450px] absolute md:float-left overflow-y-scroll md:pt-[125px] pr-4 pl-5 pb-0 h-[calc(100%-68px)]"
        onScroll={handleScroll}
      >
        <nav
          className="flex flex-wrap items-center justify-between sm:justify-normal transition-opacity duration-300"
          style={{ opacity }}
        >
          {["Text to Image", "AI Virtual Try-On"].map((tab) => (
            <button
              key={tab}
              className={`md:px-3 px-2 py-2 text-[20px] leading-7 md:font-semibold transition-transform ${
                mainTab === tab
                  ? "bg-[#191d21] text-transparent bg-clip-text bg-gradient-to-r from-[#52ffba] via-[#23faec] to-[#0af] border-b-2 border-teal-400 !ml-0"
                  : "text-white hover:text-[#c5c7d5] !ml-0"
              }`}
              onClick={() => setMainTab(tab)}
            >
              {tab}
            </button>
          ))}
        </nav>

        <section className="lg:max-w-[404px] relative mt-6 ">
          <Card>
            <SectionHeader icon={sun} title="Start / End Frame and Prompt" />
            <div className="text-sm text-[#727485] mt-4">
              <div className="bg-[#0d1116] rounded-[12px] h-[158px] relative">
                <div className="ml-5 mt-[13px] absolute">
                  <p>
                    Please describe your creative ideas for the video, or view
                    <span className="text-[#82fac2]"> Help Center</span> for a
                    quick start.
                  </p>
                  <input
                    type="text"
                    className="w-full absolute bg-transparent outline-none"
                  />
                </div>
              </div>
            </div>
            <div className="flex w-full  items-center justify-between rounded-b-[12px] p-2">
              <div>
                <span className="text-[#999bac] text-sm mr-1">Hints:</span>
                <div className="inline-flex bg-[#ffffff0f] text-sm items-center rounded-lg mr-1 text-[#f5f8fa] p-2">
                  Chinese style CG
                </div>
                <div className="inline-flex bg-[#ffffff0f] text-sm items-center rounded-lg text-[#f5f8fa] p-2">
                  Blue melancholy
                </div>
              </div>
              <div className="inline-flex items-center">
                <button className="text-white">
                  <svg
                    data-v-b7911999=""
                    width="20"
                    height="20"
                    viewBox="0 0 20 20"
                    fill="currentColor"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      fill-rule="evenodd"
                      clip-rule="evenodd"
                      d="M10.1216 2.08568C11.7518 2.11105 13.3344 2.63922 14.6531 3.59799C15.9717 4.55676 16.9621 5.89936 17.4889 7.44227C18.0158 8.98519 18.0532 10.6531 17.5963 12.2182C17.4673 12.66 17.0046 12.9135 16.5628 12.7846C16.121 12.6556 15.8674 12.1928 15.9964 11.7511C16.3572 10.5156 16.3276 9.19884 15.9117 7.98081C15.4958 6.76278 14.7139 5.70289 13.6729 4.94601C12.6319 4.18912 11.3826 3.77217 10.0957 3.75214C8.80879 3.73211 7.54709 4.10997 6.48304 4.83409C6.10255 5.09302 5.5842 4.99449 5.32526 4.614C5.06633 4.23351 5.16487 3.71515 5.54536 3.45622C6.89322 2.53896 8.49147 2.0603 10.1216 2.08568Z"
                    ></path>
                    <path
                      fill-rule="evenodd"
                      clip-rule="evenodd"
                      d="M14.1706 8.99924C14.516 8.69512 15.0426 8.72863 15.3467 9.07407L17.4218 11.4312C17.726 11.7766 17.6925 12.3032 17.347 12.6073C17.0016 12.9114 16.475 12.8779 16.1709 12.5325L14.0957 10.1754C13.7916 9.82993 13.8251 9.30335 14.1706 8.99924Z"
                    ></path>
                    <path
                      fill-rule="evenodd"
                      clip-rule="evenodd"
                      d="M10.0153 17.9148C8.38493 17.9183 6.79326 17.4183 5.45782 16.483C4.12238 15.5477 3.10834 14.2229 2.5543 12.6895C2.00025 11.1562 1.93323 9.48916 2.36239 7.91628C2.48354 7.47228 2.94169 7.21055 3.3857 7.3317C3.8297 7.45285 4.09143 7.911 3.97028 8.355C3.63149 9.59668 3.68439 10.9127 4.12178 12.1232C4.55916 13.3336 5.35967 14.3795 6.41391 15.1178C7.46814 15.8562 8.72466 16.2509 10.0117 16.2482C11.2988 16.2454 12.5536 15.8453 13.6047 15.1024C13.9805 14.8368 14.5005 14.9261 14.7662 15.302C15.0318 15.6778 14.9424 16.1978 14.5666 16.4635C13.2352 17.4045 11.6457 17.9113 10.0153 17.9148Z"
                    ></path>
                    <path
                      fill-rule="evenodd"
                      clip-rule="evenodd"
                      d="M5.84467 11.0742C5.50466 11.3844 4.97758 11.3602 4.66739 11.0202L2.55085 8.70022C2.24067 8.36022 2.26484 7.83314 2.60485 7.52295C2.94485 7.21276 3.47193 7.23694 3.78212 7.57694L5.89866 9.89696C6.20885 10.237 6.18467 10.764 5.84467 11.0742Z"
                    ></path>
                  </svg>
                </button>
              </div>
            </div>
          </Card>

          <Card className="mb-32">
            <SectionHeader icon={setting} title="Settings" />
            <div className="mb-5 text-[#999bac] flex justify-start items-start">
              <div className="text-sm leading-8">
                <div className="flex items-center">Aspect Ratio:</div>
                <div className="flex flex-wrap gap-y-2 gap-x-4">
                  <div className="inline-block cursor-pointer">
                    <div className="w-12 h-12 text-center">
                      <div className="border-[#72e528] border-2 rounded-md inline-block w-7 h-7"></div>
                    </div>
                    <div className="text-center text-xs text-[#72e528]">
                      1:1
                    </div>
                  </div>
                  <div className="inline-block cursor-pointer">
                    <div className="w-12 h-12 text-center">
                      <div className="border-white border-2 rounded-md inline-block w-7 h-[15.75px]"></div>
                    </div>
                    <div className="text-center text-xs text-white">16:9</div>
                  </div>
                  <div className="inline-block cursor-pointer">
                    <div className="w-12 h-12 text-center">
                      <div className="border-white border-2 rounded-md inline-block w-7 h-[21px]"></div>
                    </div>
                    <div className="text-center text-xs text-white">4:3</div>
                  </div>
                  <div className="inline-block cursor-pointer">
                    <div className="w-12 h-12 text-center">
                      <div className="border-white border-2 rounded-md inline-block w-7 h-[18.6667px]"></div>
                    </div>
                    <div className="text-center text-xs text-white">3:2</div>
                  </div>
                  <div className="inline-block cursor-pointer">
                    <div className="w-12 h-12 text-center">
                      <div className="border-white border-2 rounded-md inline-block w-[18.6667px] h-7"></div>
                    </div>
                    <div className="text-center text-xs text-white">2:3</div>
                  </div>
                  <div className="inline-block cursor-pointer">
                    <div className="w-12 h-12 text-center">
                      <div className="border-white border-2 rounded-md inline-block w-[21px] h-7"></div>
                    </div>
                    <div className="text-center text-xs text-white">3:4</div>
                  </div>
                  <div className="inline-block cursor-pointer">
                    <div className="w-12 h-12 text-center">
                      <div className="border-white border-2 rounded-md inline-block w-[5.75px] h-7"></div>
                    </div>
                    <div className="text-center text-xs text-white">9:16</div>
                  </div>
                  <div className="inline-block cursor-pointer">
                    <div className="w-12 h-12 text-center">
                      <div className="border-white border-2 rounded-md inline-block w-7 h-3"></div>
                    </div>
                    <div className="text-center text-xs text-white">21:9</div>
                  </div>
                </div>
              </div>
            </div>
            <div className="mt-5 block cursor-not-allowed">
              <label className="pr-3 mb-2 text-[#999bac] ">
                Generating Count:
                <span className="text-white"> 4</span>
              </label>
              <Slider defaultValue={4} step={1} marks min={0} max={9} />
            </div>
          </Card>
        </section>
      </main>

      <footer className="flex items-center justify-center md:block">
        <div
          className="fixed bottom-0 left-0 w-full h-[118px] pt-1 md:px-12 z-[3]"
          style={{ background: "linear-gradient(0deg,#0d1116 40%,#0d111600)" }}
        />
        <div className="fixed bottom-0 left-0 w-full h-[118px] pt-1 px-4 md:px-12 z-[3]">
          <div className="inline-block md:ml-[10px]">
            <button className="bg-[#333a45] text-[#727485] px-4 py-[6px] rounded-full w-[calc(100vw-32px)]  md:w-[344px]  h-12">
              Generate
            </button>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default ImageAI;
