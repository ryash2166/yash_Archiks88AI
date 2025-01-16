import React, { useState } from "react";
import Slider from "@mui/material/Slider";
import sun from "../../assets/sun.svg";
import setting from "../../assets/setting.svg";
import AspectRatioSelector from "../../Components/AspectRatio/AspectRatioSelector";
import AssetsPanel from "../../Components/Common/AssetsPanel";

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
  const [inputText, setInputText] = useState("");
  const [selectedRatio, setSelectedRatio] = useState("1:1");

  const handleScroll = (e) => {
    const scrollTop = e.target.scrollTop;
    const maxScroll = 75;
    const newOpacity = Math.max(1 - scrollTop / maxScroll, 0);
    setOpacity(newOpacity);
  };

  const handleClear = () => {
    setInputText("");
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
        className="sm:absolute sm:-top-[5px] md:left-[200px] sm:max-w-[380px] pointer-events-none hidden md:!block"
      />
      <p className="absolute md:left-3 top-[80px] md:top-[110px] text-center w-[320px] tracking-wider font-bold text-4xl text-transparent bg-clip-text bg-gradient-to-r from-[#fff] via-[#fff] to-[#0af] hidden md:!block">
        Creative Space
      </p>
      <main
        className="w-full md:max-w-[450px] absolute md:float-left overflow-y-scroll md:pt-[125px] pr-4 pl-5 pb-0 h-[calc(100%-68px)]"
        onScroll={handleScroll}
      >
        <nav
          className="flex flex-wrap items-center transition-opacity duration-300"
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

        <section className="lg:max-w-[460px] relative mt-6 ">
          <Card>
            <SectionHeader icon={sun} title="Start / End Frame and Prompt" />
            <div className="text-sm text-[#727485] mt-4">
              <div className="bg-[#0d1116] rounded-[12px] h-[158px] relative">
                <div className="mx-5 mt-[13px] absolute">
                  {!inputText && (
                    <p className="text-[#727485] leading-7">
                      Please describe your creative ideas for the video, or view
                      <span className="text-[#82fac2]"> Help Center</span> for a
                      quick start.
                    </p>
                  )}
                </div>
                <input
                  type="text"
                  value={inputText}
                  onChange={(e) => setInputText(e.target.value)}
                  className="w-full absolute mx-5 top-[27px] text-ellipsis bg-transparent outline-none z-10 text-white pr-8 "
                />
                {inputText && (
                  <button
                    onClick={handleClear}
                    className="absolute right-4 bottom-2 text-white hover:text-white"
                  >
                    <svg
                      data-v-9e64a36d=""
                      width="20"
                      height="20"
                      viewBox="0 0 20 20"
                      fill="currentColor"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        fill-rule="evenodd"
                        clip-rule="evenodd"
                        d="M5.55005 6.10856V14.4419C5.55005 15.209 6.17188 15.8308 6.93894 15.8308H13.05C13.8171 15.8308 14.4389 15.209 14.4389 14.4419V6.10856H16.1056V14.4419C16.1056 16.1294 14.7376 17.4974 13.05 17.4974H6.93894C5.2514 17.4974 3.88338 16.1294 3.88338 14.4419V6.10856H5.55005Z"
                      ></path>
                      <path
                        fill-rule="evenodd"
                        clip-rule="evenodd"
                        d="M2.49512 6.46038C2.49512 6.00015 2.86821 5.62705 3.32845 5.62705H16.6618C17.122 5.62705 17.4951 6.00015 17.4951 6.46038C17.4951 6.92062 17.122 7.29372 16.6618 7.29372H3.32845C2.86821 7.29372 2.49512 6.92062 2.49512 6.46038Z"
                      ></path>
                      <path
                        fill-rule="evenodd"
                        clip-rule="evenodd"
                        d="M6.38401 4.44689C6.38401 3.373 7.25456 2.50244 8.32845 2.50244H11.6618C12.7357 2.50244 13.6062 3.373 13.6062 4.44689V5.79133C13.6062 6.25157 13.2331 6.62466 12.7729 6.62466C12.3127 6.62466 11.9396 6.25157 11.9396 5.79133V4.44689C11.9396 4.29347 11.8152 4.16911 11.6618 4.16911H8.32845C8.17504 4.16911 8.05067 4.29347 8.05067 4.44689V5.79133C8.05067 6.25157 7.67758 6.62466 7.21734 6.62466C6.7571 6.62466 6.38401 6.25157 6.38401 5.79133V4.44689Z"
                      ></path>
                      <path
                        fill-rule="evenodd"
                        clip-rule="evenodd"
                        d="M7.71734 13.3331C7.71734 12.8421 8.11531 12.4442 8.60623 12.4442H11.384C11.8749 12.4442 12.2729 12.8421 12.2729 13.3331C12.2729 13.824 11.8749 14.222 11.384 14.222H8.60623C8.11531 14.222 7.71734 13.824 7.71734 13.3331Z"
                      ></path>
                    </svg>
                  </button>
                )}
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

          <Card className="mb-[85px] md:mb-32">
            <SectionHeader icon={setting} title="Settings" />
            <div className="mb-5 text-[#999bac] flex justify-start items-start">
              <div className="text-sm leading-8">
                <div className="mb-2">Aspect Ratio:</div>
                <AspectRatioSelector
                  selectedRatio={selectedRatio}
                  onRatioChange={setSelectedRatio}
                />
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
      <AssetsPanel />
      <footer className="flex items-center justify-center md:block">
        <div
          className="fixed bottom-0 left-0 w-full h-[118px] md:block hidden pt-1 md:px-12 z-[3]"
          style={{ background: "linear-gradient(0deg,#0d1116 40%,#0d111600)" }}
        />
        <div className="fixed bottom-0 left-0 w-full max-md:mb-4 md:h-[118px] pt-1 px-4 md:px-12 z-[3]">
          <div className="inline-block md:ml-[10px]">
            <button className="bg-[#333a45] text-[#727485] px-4 py-[6px] rounded-full w-[calc(100vw-32px)]  md:w-[344px]  h-12">
              Generate
            </button>
          </div>
        </div>
        <p className="text-[#727485] text-sm mb-3 hidden md:block fixed bottom-0 w-full  pt-1 px-4 lg:px-12 z-[3] text-center">
          The generated contents do not represent the views, positions or
          attitudes of KLING AI. Please use them responsibly and kindly.
        </p>
      </footer>
    </div>
  );
};

export default ImageAI;
