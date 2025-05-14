import React, { useState } from "react";
import Slider from "@mui/material/Slider";
// import promt from "../../assets/prompt.svg";
// import upload from "../../assets/upload.svg";
// import motion from "../../assets/motion.svg";
import sun from "../assets/sun.svg";
import setting from "../assets/setting.svg";
import Radio from "@mui/material/Radio";
import RadioGroup from "@mui/material/RadioGroup";
import FormControlLabel from "@mui/material/FormControlLabel";
import camera from "../assets/camera.svg";
import camera2 from "../assets/camera2.svg";
import negative from "../assets/negative.svg";
// import AssetsPanel from "../Components/Common/AssetsPanel";
import nowork from "../assets/nowork.svg";
import { useNavigation } from "../Context/NavigationContext";
import LazyLoadImg from "../Components/Common/LazyLoadImg";

const SectionHeader = ({ icon, title, subtitle }) => (
  <div className="flex items-center ">
    <LazyLoadImg src={icon} alt={title} />
    <span className="text-base  text-left pl-1.5 text-white">{title}</span>
    {subtitle && (
      <span className="text-sm text-gray text-left pl-1.5">
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

const VideoAI = () => {
  const [mainTab, setMainTab] = useState("Text to Video");
  const [opacity, setOpacity] = useState(1);
  // const [inputText, setInputText] = useState("");
  const { generateAIVideo, generatedVideos } = useNavigation();
  const [prompt, setPrompt] = useState("");

  const handleScroll = (e) => {
    const scrollTop = e.target.scrollTop;
    const maxScroll = 75;
    const newOpacity = Math.max(1 - scrollTop / maxScroll, 0);
    setOpacity(newOpacity);
  };

  const handleClear = () => {
    setPrompt("");
  };

  const handleGenerateVideo = () => {
    generateAIVideo(prompt);
    setPrompt("");
  };

  return (
    <div className="bg-primary">
      <video
        src="https://s1-def.ap4r.com/kos/s101/nlav112154/aiwp/assets/videos/main-video-DTZJwE9v.mp4"
        autoPlay
        loop
        muted
        disablePictureInPicture
        disableRemotePlayback
        playsInline
        className="sm:absolute sm:-top-1.5 md:left-40 sm:max-w-md pointer-events-none hidden lg:!block"
      />
      <p className="absolute md:left-3 top-20 md:top-28 text-center w-80 tracking-wider font-bold text-4xl bg-gradient-to-r from-purple-700 to-blue-500 bg-clip-text text-transparent hidden lg:!block">
        Creative Space
      </p>
      <div className="pb-28 xl:pr-52 absolute w-full pl-[444px] flex justify-center items-center overflow-hidden h-[calc(100%-68px)] max-lg:hidden">
        <div className="flex flex-col items-center">
          <LazyLoadImg src={nowork} alt="" width={120} height={120} />
          <p className="text-gray text-sm">
            Release your creative potential. Experience the magic of Archiks88
            AI.
          </p>
        </div>
      </div>
      <main
        className="w-full lg:max-w-md absolute lg:float-left overflow-y-scroll lg:pt-32 pr-4 pl-5 pb-0 h-[calc(100%-68px)]"
        onScroll={handleScroll}
      >
        <nav
          className="flex flex-wrap items-center justify-between sm:justify-normal transition-opacity duration-300"
          style={{ opacity }}
        >
          {["Text to Video"].map(
            (
              tab //, "Image to Video", "Lip Sync"
            ) => (
              <button
                key={tab}
                className={`md:px-3 px-2 py-2 text-xl md:font-semibold transition-transform ${
                  mainTab === tab
                    ? "text-secondary border-b-2 border-blue-light !ml-0"
                    : "text-white hover:text-gray !ml-0"
                }`}
                onClick={() => setMainTab(tab)}
              >
                {tab}
              </button>
            )
          )}
        </nav>

        <section className="lg:max-w-md relative mt-6">
          {/* <Card>
            <SectionHeader icon={promt} title="Start / End Frame and Prompt" />
            <div className="text-sm text-gray-150  mt-4">
              <p className="mb-3 text-xs text-gray-200">
                JPG / PNG files up to 10MB with minimum dimensions of 300px
              </p>

              <div className="bg-primary rounded-t-xl">
                <div className="relative p-4">
                  <div className="flex items-center justify-center h-44">
                    <div className="text-center">
                      <div className="text-gray text-lg flex items-center justify-center">
                        <LazyLoadImg
                          src={upload}
                          alt="Upload Icon"
                          width={20}
                          height={20}
                          className="mr-2"
                        />
                        <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#52ffba] via-[#23faec] to-[#0af]">
                          Click / Drop / Paste
                        </span>
                      </div>
                      <input
                        type="file"
                        className="opacity-0 absolute inset-0 w-full h-full cursor-pointer"
                        name="file"
                        accept=".jpg, .jpeg, .png"
                      />
                      <div className="absolute left-1/2 transform -translate-x-1/2">
                        <span className="text-white">Select from</span>
                        <button className="text-gray mx-[0.5em] hover:!text-white duration-250 ease-linear">
                          History
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              <div className="border-t bg-primary border-primary-border  flex w-full items-center justify-between rounded-b-xl p-2">
                Hints
                <div className="cursor-pointer h-12">
                  <LazyLoadImg
                    src="https://s15-def.ap4r.com/bs2/upload-ylab-stunt-sgp/kling/prompt-library-resources/image-to-video_1.6_en_examples_Real_Woman_400.jpeg?x-oss-process=image%2Fresize%2Cw_48%2Ch_48%2Cm_mfit"
                    alt="video_hints_img"
                    className="rounded-lg object-fill w-12 h-12"
                  />
                </div>
                <div className="cursor-pointer h-12">
                  <LazyLoadImg
                    src="https://s15-def.ap4r.com/bs2/upload-ylab-stunt-sgp/kling/prompt-library-resources/image-to-video_1.6_en_examples_Real_Woman_400.jpeg?x-oss-process=image%2Fresize%2Cw_48%2Ch_48%2Cm_mfit"
                    alt="video_hints_img"
                    className="rounded-lg object-fill w-12 h-12"
                  />
                </div>
                <div className="cursor-pointer h-12">
                  <LazyLoadImg
                    src="https://s15-def.ap4r.com/bs2/upload-ylab-stunt-sgp/kling/prompt-library-resources/image-to-video_1.6_en_examples_Real_Woman_400.jpeg?x-oss-process=image%2Fresize%2Cw_48%2Ch_48%2Cm_mfit"
                    alt="video_hints_img"
                    className="rounded-lg object-fill w-12 h-12"
                  />
                </div>
                <div className="cursor-pointer h-12">
                  <LazyLoadImg
                    src="https://s15-def.ap4r.com/bs2/upload-ylab-stunt-sgp/kling/prompt-library-resources/image-to-video_1.6_en_examples_Real_Woman_400.jpeg?x-oss-process=image%2Fresize%2Cw_48%2Ch_48%2Cm_mfit"
                    alt="video_hints_img"
                    className="rounded-lg object-fill w-12 h-12"
                  />
                </div>
                <div className="cursor-pointer h-12">
                  <LazyLoadImg
                    src="https://s15-def.ap4r.com/bs2/upload-ylab-stunt-sgp/kling/prompt-library-resources/image-to-video_1.6_en_examples_Real_Woman_400.jpeg?x-oss-process=image%2Fresize%2Cw_48%2Ch_48%2Cm_mfit"
                    alt="video_hints_img"
                    className="rounded-lg object-fill w-12 h-12"
                  />
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
                        fillRule="evenodd"
                        clipRule="evenodd"
                        d="M10.1216 2.08568C11.7518 2.11105 13.3344 2.63922 14.6531 3.59799C15.9717 4.55676 16.9621 5.89936 17.4889 7.44227C18.0158 8.98519 18.0532 10.6531 17.5963 12.2182C17.4673 12.66 17.0046 12.9135 16.5628 12.7846C16.121 12.6556 15.8674 12.1928 15.9964 11.7511C16.3572 10.5156 16.3276 9.19884 15.9117 7.98081C15.4958 6.76278 14.7139 5.70289 13.6729 4.94601C12.6319 4.18912 11.3826 3.77217 10.0957 3.75214C8.80879 3.73211 7.54709 4.10997 6.48304 4.83409C6.10255 5.09302 5.5842 4.99449 5.32526 4.614C5.06633 4.23351 5.16487 3.71515 5.54536 3.45622C6.89322 2.53896 8.49147 2.0603 10.1216 2.08568Z"
                      ></path>
                      <path
                        fillRule="evenodd"
                        clipRule="evenodd"
                        d="M14.1706 8.99924C14.516 8.69512 15.0426 8.72863 15.3467 9.07407L17.4218 11.4312C17.726 11.7766 17.6925 12.3032 17.347 12.6073C17.0016 12.9114 16.475 12.8779 16.1709 12.5325L14.0957 10.1754C13.7916 9.82993 13.8251 9.30335 14.1706 8.99924Z"
                      ></path>
                      <path
                        fillRule="evenodd"
                        clipRule="evenodd"
                        d="M10.0153 17.9148C8.38493 17.9183 6.79326 17.4183 5.45782 16.483C4.12238 15.5477 3.10834 14.2229 2.5543 12.6895C2.00025 11.1562 1.93323 9.48916 2.36239 7.91628C2.48354 7.47228 2.94169 7.21055 3.3857 7.3317C3.8297 7.45285 4.09143 7.911 3.97028 8.355C3.63149 9.59668 3.68439 10.9127 4.12178 12.1232C4.55916 13.3336 5.35967 14.3795 6.41391 15.1178C7.46814 15.8562 8.72466 16.2509 10.0117 16.2482C11.2988 16.2454 12.5536 15.8453 13.6047 15.1024C13.9805 14.8368 14.5005 14.9261 14.7662 15.302C15.0318 15.6778 14.9424 16.1978 14.5666 16.4635C13.2352 17.4045 11.6457 17.9113 10.0153 17.9148Z"
                      ></path>
                      <path
                        fillRule="evenodd"
                        clipRule="evenodd"
                        d="M5.84467 11.0742C5.50466 11.3844 4.97758 11.3602 4.66739 11.0202L2.55085 8.70022C2.24067 8.36022 2.26484 7.83314 2.60485 7.52295C2.94485 7.21276 3.47193 7.23694 3.78212 7.57694L5.89866 9.89696C6.20885 10.237 6.18467 10.764 5.84467 11.0742Z"
                      ></path>
                    </svg>
                  </button>
                </div>
              </div>
              <div className="mt-[1.5em] mb-3 flex justify-between">
                <div>
                  <span className="text-gray-150">Prompt</span>
                  <span> (Optional)</span>
                </div>
                <div className="flex items-center text-sm leading-6 cursor-pointer text-white hover:text-[#82fac2] ease-linear duration-200">
                  <svg
                    data-v-bef361bb=""
                    fill="currentColor"
                    height="20"
                    viewBox="0 0 20 20"
                    width="20"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      clipRule="evenodd"
                      d="m3.64062 8.35897c0-3.50359 2.85539-6.35897 6.35898-6.35897 3.5036 0 6.359 2.85538 6.359 6.35897-.0027 1.10593-.2921 2.19223-.84 3.15293-.548.9606-1.3356 1.7628-2.2862 2.3281-.0984.0574-.1559.1395-.1559.2297v.8534c0 .7877-.6482 1.4359-1.4359 1.4359h-3.28203c-.78769 0-1.43589-.6482-1.43589-1.4359v-.8534c0-.082-.05744-.1723-.1559-.2297-1.92821-1.1405-3.12616-3.241-3.12616-5.48103zm8.20518 5.70253c0-.5169.2953-1.0092.763-1.2882 1.5508-.9189 2.519-2.6092 2.519-4.41433 0-2.83076-2.2974-5.1282-5.1282-5.1282-2.83077 0-5.12821 2.29744-5.12821 5.1282.00105.89107.23382 1.76653.67544 2.54043.44163.774 1.07693 1.4197 1.84354 1.8739.4759.2708.76308.7713.76308 1.2882v.8534c0 .1148.09025.2051.20512.2051h3.28203c.1149 0 .2052-.0903.2052-.2051zm-3.33953 2.7077h3.28203c.3364 0 .6154.279.6154.6154s-.279.6154-.6154.6154h-3.28203c-.33641 0-.61539-.279-.61539-.6154s.27898-.6154.61539-.6154zm1.38666-8.60715 1.59997-.40205c.1235-.0308.2535-.02293.3724.02257.1188.04549.2209.12641.2922.23179.1477.22154.1395.50872-.0164.71385l-2.4615 3.28209c-.09793.1305-.24371.2168-.40528.2399s-.32569-.0189-.45626-.1169c-.13057-.0979-.21689-.2437-.23997-.4052-.02308-.1616.01897-.3257.11689-.4563l1.41952-1.89539-1.60003.40205c-.25436.06565-.51692-.04102-.66462-.25435-.14769-.22154-.13948-.50872.01641-.71385l2.46154-3.28205c.0979-.13057.2437-.21689.4053-.23997.08-.01143.1615-.00699.2397.01307.0783.02005.1519.05533.2165.10382.1306.09793.2169.24371.24.40528s-.019.32569-.1169.45626z"
                      fill="currentColor"
                      fillRule="evenodd"
                    ></path>
                  </svg>
                  <span>Get Inspiration</span>
                </div>
              </div>
              <div className="bg-primary rounded-xl h-40 relative">
                <div className="bg-primary rounded-xl h-40 relative">
                  <div className="mx-5 mt-3 absolute">
                    {!inputText && (
                      <p className="text-gray-100  leading-7">
                        Please describe your creative ideas for the video, or
                        view
                        <span className="text-gray-150"> Help Center</span> for
                        a quick start.
                      </p>
                    )}
                  </div>
                  <input
                    type="text"
                    value={inputText}
                    onChange={(e) => setInputText(e.target.value)}
                    className="w-full absolute mx-5 top-7 text-ellipsis bg-transparent outline-none z-10 text-white pr-8 "
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
                          fillRule="evenodd"
                          clipRule="evenodd"
                          d="M5.55005 6.10856V14.4419C5.55005 15.209 6.17188 15.8308 6.93894 15.8308H13.05C13.8171 15.8308 14.4389 15.209 14.4389 14.4419V6.10856H16.1056V14.4419C16.1056 16.1294 14.7376 17.4974 13.05 17.4974H6.93894C5.2514 17.4974 3.88338 16.1294 3.88338 14.4419V6.10856H5.55005Z"
                        ></path>
                        <path
                          fillRule="evenodd"
                          clipRule="evenodd"
                          d="M2.49512 6.46038C2.49512 6.00015 2.86821 5.62705 3.32845 5.62705H16.6618C17.122 5.62705 17.4951 6.00015 17.4951 6.46038C17.4951 6.92062 17.122 7.29372 16.6618 7.29372H3.32845C2.86821 7.29372 2.49512 6.92062 2.49512 6.46038Z"
                        ></path>
                        <path
                          fillRule="evenodd"
                          clipRule="evenodd"
                          d="M6.38401 4.44689C6.38401 3.373 7.25456 2.50244 8.32845 2.50244H11.6618C12.7357 2.50244 13.6062 3.373 13.6062 4.44689V5.79133C13.6062 6.25157 13.2331 6.62466 12.7729 6.62466C12.3127 6.62466 11.9396 6.25157 11.9396 5.79133V4.44689C11.9396 4.29347 11.8152 4.16911 11.6618 4.16911H8.32845C8.17504 4.16911 8.05067 4.29347 8.05067 4.44689V5.79133C8.05067 6.25157 7.67758 6.62466 7.21734 6.62466C6.7571 6.62466 6.38401 6.25157 6.38401 5.79133V4.44689Z"
                        ></path>
                        <path
                          fillRule="evenodd"
                          clipRule="evenodd"
                          d="M7.71734 13.3331C7.71734 12.8421 8.11531 12.4442 8.60623 12.4442H11.384C11.8749 12.4442 12.2729 12.8421 12.2729 13.3331C12.2729 13.824 11.8749 14.222 11.384 14.222H8.60623C8.11531 14.222 7.71734 13.824 7.71734 13.3331Z"
                        ></path>
                      </svg>
                    </button>
                  )}
                </div>
              </div>
            </div>
          </Card> */}

          <Card>
            <div className="flex items-center justify-between">
              <SectionHeader icon={sun} title="Prompt" />
            </div>
            <div className="text-sm text-gray-150  mt-4">
              <div className="bg-primary rounded-xl h-52 relative">
                <div className="mx-5 mt-7 lg:mt-3 absolute">
                  {!prompt && (
                    <p className="text-gray-100  leading-7">
                      Please describe your creative ideas for the video, or view
                      <span className="text-blue"> Help Center</span> for a
                      quick start.
                    </p>
                  )}
                </div>
                <textarea
                  type="text"
                  value={prompt}
                  onChange={(e) => setPrompt(e.target.value)}
                  rows={5}
                  cols={38}
                  className=" absolute ml-5 max-lg:w-5/6  bg-transparent top-8 text-ellipsis outline-none overflow-y-hidden resize-none text-white"
                />
                {prompt && (
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
                        fillRule="evenodd"
                        clipRule="evenodd"
                        d="M5.55005 6.10856V14.4419C5.55005 15.209 6.17188 15.8308 6.93894 15.8308H13.05C13.8171 15.8308 14.4389 15.209 14.4389 14.4419V6.10856H16.1056V14.4419C16.1056 16.1294 14.7376 17.4974 13.05 17.4974H6.93894C5.2514 17.4974 3.88338 16.1294 3.88338 14.4419V6.10856H5.55005Z"
                      ></path>
                      <path
                        fillRule="evenodd"
                        clipRule="evenodd"
                        d="M2.49512 6.46038C2.49512 6.00015 2.86821 5.62705 3.32845 5.62705H16.6618C17.122 5.62705 17.4951 6.00015 17.4951 6.46038C17.4951 6.92062 17.122 7.29372 16.6618 7.29372H3.32845C2.86821 7.29372 2.49512 6.92062 2.49512 6.46038Z"
                      ></path>
                      <path
                        fillRule="evenodd"
                        clipRule="evenodd"
                        d="M6.38401 4.44689C6.38401 3.373 7.25456 2.50244 8.32845 2.50244H11.6618C12.7357 2.50244 13.6062 3.373 13.6062 4.44689V5.79133C13.6062 6.25157 13.2331 6.62466 12.7729 6.62466C12.3127 6.62466 11.9396 6.25157 11.9396 5.79133V4.44689C11.9396 4.29347 11.8152 4.16911 11.6618 4.16911H8.32845C8.17504 4.16911 8.05067 4.29347 8.05067 4.44689V5.79133C8.05067 6.25157 7.67758 6.62466 7.21734 6.62466C6.7571 6.62466 6.38401 6.25157 6.38401 5.79133V4.44689Z"
                      ></path>
                      <path
                        fillRule="evenodd"
                        clipRule="evenodd"
                        d="M7.71734 13.3331C7.71734 12.8421 8.11531 12.4442 8.60623 12.4442H11.384C11.8749 12.4442 12.2729 12.8421 12.2729 13.3331C12.2729 13.824 11.8749 14.222 11.384 14.222H8.60623C8.11531 14.222 7.71734 13.824 7.71734 13.3331Z"
                      ></path>
                    </svg>
                  </button>
                )}
              </div>
            </div>
            <div className="flex w-full  items-center justify-between mt-4 rounded-b-xl p-2">
              <div>
                <span className="text-gray-200 text-sm mr-1">Hints:</span>
                <div className="inline-flex bg-primary text-sm items-center rounded-lg mr-1 text-white p-2">
                  Neon Car
                </div>
                <div className="inline-flex bg-primary text-sm items-center rounded-lg text-white p-2">
                  Dancing Panda
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
                      fillRule="evenodd"
                      clipRule="evenodd"
                      d="M10.1216 2.08568C11.7518 2.11105 13.3344 2.63922 14.6531 3.59799C15.9717 4.55676 16.9621 5.89936 17.4889 7.44227C18.0158 8.98519 18.0532 10.6531 17.5963 12.2182C17.4673 12.66 17.0046 12.9135 16.5628 12.7846C16.121 12.6556 15.8674 12.1928 15.9964 11.7511C16.3572 10.5156 16.3276 9.19884 15.9117 7.98081C15.4958 6.76278 14.7139 5.70289 13.6729 4.94601C12.6319 4.18912 11.3826 3.77217 10.0957 3.75214C8.80879 3.73211 7.54709 4.10997 6.48304 4.83409C6.10255 5.09302 5.5842 4.99449 5.32526 4.614C5.06633 4.23351 5.16487 3.71515 5.54536 3.45622C6.89322 2.53896 8.49147 2.0603 10.1216 2.08568Z"
                    ></path>
                    <path
                      fillRule="evenodd"
                      clipRule="evenodd"
                      d="M14.1706 8.99924C14.516 8.69512 15.0426 8.72863 15.3467 9.07407L17.4218 11.4312C17.726 11.7766 17.6925 12.3032 17.347 12.6073C17.0016 12.9114 16.475 12.8779 16.1709 12.5325L14.0957 10.1754C13.7916 9.82993 13.8251 9.30335 14.1706 8.99924Z"
                    ></path>
                    <path
                      fillRule="evenodd"
                      clipRule="evenodd"
                      d="M10.0153 17.9148C8.38493 17.9183 6.79326 17.4183 5.45782 16.483C4.12238 15.5477 3.10834 14.2229 2.5543 12.6895C2.00025 11.1562 1.93323 9.48916 2.36239 7.91628C2.48354 7.47228 2.94169 7.21055 3.3857 7.3317C3.8297 7.45285 4.09143 7.911 3.97028 8.355C3.63149 9.59668 3.68439 10.9127 4.12178 12.1232C4.55916 13.3336 5.35967 14.3795 6.41391 15.1178C7.46814 15.8562 8.72466 16.2509 10.0117 16.2482C11.2988 16.2454 12.5536 15.8453 13.6047 15.1024C13.9805 14.8368 14.5005 14.9261 14.7662 15.302C15.0318 15.6778 14.9424 16.1978 14.5666 16.4635C13.2352 17.4045 11.6457 17.9113 10.0153 17.9148Z"
                    ></path>
                    <path
                      fillRule="evenodd"
                      clipRule="evenodd"
                      d="M5.84467 11.0742C5.50466 11.3844 4.97758 11.3602 4.66739 11.0202L2.55085 8.70022C2.24067 8.36022 2.26484 7.83314 2.60485 7.52295C2.94485 7.21276 3.47193 7.23694 3.78212 7.57694L5.89866 9.89696C6.20885 10.237 6.18467 10.764 5.84467 11.0742Z"
                    ></path>
                  </svg>
                </button>
              </div>
            </div>
          </Card>

          {/* <Card disabled>
            <SectionHeader
              icon={motion}
              title="Motion Brush"
              subtitle="Control the Movement of Objects"
            />
            <div className="text-[#3b3c4d] py-3 px-4 rounded-[10px] bg-primary flex flex-row-reverse mt-4">
              <svg
                width="20"
                height="20"
                viewBox="0 0 20 20"
                fill="currentColor"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path d="M5.00011 2.5C5.46035 2.5 5.83344 2.8731 5.83344 3.33333V5C5.83344 5.46024 5.46035 5.83333 5.00011 5.83333C4.53987 5.83333 4.16678 5.46024 4.16678 5V3.33333C4.16678 2.8731 4.53987 2.5 5.00011 2.5Z"></path>
                <path d="M15.0001 2.5C15.4603 2.5 15.8334 2.8731 15.8334 3.33333V6.66667C15.8334 7.1269 15.4603 7.5 15.0001 7.5C14.5399 7.5 14.1668 7.1269 14.1668 6.66667V3.33333C14.1668 2.8731 14.5399 2.5 15.0001 2.5Z"></path>
                <path d="M9.16678 14.7222H8.889C8.42876 14.7222 8.05566 14.3491 8.05566 13.8889C8.05566 13.4287 8.42876 13.0556 8.889 13.0556H11.1112C11.5715 13.0556 11.9446 13.4287 11.9446 13.8889C11.9446 14.3491 11.5715 14.7222 11.1112 14.7222H10.8334V16.6667C10.8334 17.1269 10.4603 17.5 10.0001 17.5C9.53987 17.5 9.16678 17.1269 9.16678 16.6667V14.7222Z"></path>
                <path d="M5.83344 8.61111H6.11122C6.57146 8.61111 6.94455 8.23802 6.94455 7.77778C6.94455 7.31754 6.57146 6.94444 6.11122 6.94444H3.889C3.42876 6.94444 3.05566 7.31754 3.05566 7.77778C3.05566 8.23802 3.42876 8.61111 3.889 8.61111H4.16678V16.6667C4.16678 17.1269 4.53987 17.5 5.00011 17.5C5.46035 17.5 5.83344 17.1269 5.83344 16.6667V8.61111Z"></path>
                <path d="M16.1112 10.2778H15.8334V16.6667C15.8334 17.1269 15.4603 17.5 15.0001 17.5C14.5399 17.5 14.1668 17.1269 14.1668 16.6667V10.2778H13.889C13.4288 10.2778 13.0557 9.90468 13.0557 9.44444C13.0557 8.98421 13.4288 8.61111 13.889 8.61111H16.1112C16.5715 8.61111 16.9446 8.98421 16.9446 9.44444C16.9446 9.90468 16.5715 10.2778 16.1112 10.2778Z"></path>
                <path d="M10.0001 2.5C10.4603 2.5 10.8334 2.8731 10.8334 3.33333V11.1111C10.8334 11.5713 10.4603 11.9444 10.0001 11.9444C9.53987 11.9444 9.16678 11.5713 9.16678 11.1111V3.33333C9.16678 2.8731 9.53987 2.5 10.0001 2.5Z"></path>
              </svg>
              <span className="">
                Currently unavailable on Archiks88 1.6, please switch to
                Archiks88 1.5
              </span>
            </div>
          </Card> */}

          <Card>
            <SectionHeader icon={setting} title="Settings" />
            <form action="" className="text-gray-100  text-sm leading-6 mt-4">
              <div className="mb-5 text-gray-200 flex">
                <div className="flex w-full items-center">
                  <label className="pr-3 text-sm ">Creativity</label>
                  <Slider
                    aria-label="Small steps"
                    defaultValue={0.5}
                    step={0.05}
                    min={0}
                    max={1}
                    valueLabelDisplay="auto"
                  />
                  <label className="pl-3 text-sm ">Relevance</label>
                </div>
              </div>
              <div className="mb-5 text-gray-200 flex justify-start items-start">
                <div className="w-20 inline-flex justify-start items-start h-8 text-sm leading-8">
                  <div className="flex items-center">
                    Mode
                    <svg
                      className="ml-1"
                      width="16"
                      height="16"
                      viewBox="0 0 16 16"
                      fill="currentColor"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        fillRule="evenodd"
                        clipRule="evenodd"
                        d="M7.99992 2.66659C5.0544 2.66659 2.66659 5.0544 2.66659 7.99992C2.66659 10.9454 5.0544 13.3333 7.99992 13.3333C10.9454 13.3333 13.3333 10.9454 13.3333 7.99992C13.3333 5.0544 10.9454 2.66659 7.99992 2.66659ZM1.33325 7.99992C1.33325 4.31802 4.31802 1.33325 7.99992 1.33325C11.6818 1.33325 14.6666 4.31802 14.6666 7.99992C14.6666 11.6818 11.6818 14.6666 7.99992 14.6666C4.31802 14.6666 1.33325 11.6818 1.33325 7.99992Z"
                      ></path>
                      <path d="M8.75582 5.49044C8.75582 5.90772 8.41755 6.24599 8.00027 6.24599C7.58298 6.24599 7.24471 5.90772 7.24471 5.49044C7.24471 5.07315 7.58298 4.73488 8.00027 4.73488C8.41755 4.73488 8.75582 5.07315 8.75582 5.49044Z"></path>
                      <path
                        fillRule="evenodd"
                        clipRule="evenodd"
                        d="M7.99992 7.17933C8.36811 7.17933 8.66659 7.4778 8.66659 7.84599V10.9571C8.66659 11.3253 8.36811 11.6238 7.99992 11.6238C7.63173 11.6238 7.33325 11.3253 7.33325 10.9571V7.84599C7.33325 7.4778 7.63173 7.17933 7.99992 7.17933Z"
                      ></path>
                    </svg>
                  </div>
                </div>
                <div className="flex items-center flex-1 flex-wrap relative leading-8 text-sm">
                  <RadioGroup
                    aria-labelledby="demo-radio-buttons-group-label"
                    defaultValue="Standard Mode"
                    name="radio-buttons-group"
                  >
                    <FormControlLabel
                      value="Standard Mode"
                      control={<Radio />}
                      label="Standard Mode"
                    />
                    <FormControlLabel
                      value="Professional Mode (5 trial uses)"
                      control={<Radio />}
                      label="Professional Mode (5 trial uses)"
                    />
                  </RadioGroup>
                </div>
              </div>
              <div className="mb-5 text-gray-200 flex justify-start items-start">
                <div className="w-20 inline-flex justify-start items-start h-8 text-sm leading-8">
                  <div className="flex items-center">Duration:</div>
                </div>
                <div className="flex items-center flex-1 flex-wrap relative leading-8 text-sm">
                  <RadioGroup
                    aria-labelledby="demo-radio-buttons-group-label"
                    defaultValue="5s"
                    name="radio-buttons-group"
                  >
                    <div className="flex">
                      <FormControlLabel
                        value="5s"
                        control={<Radio />}
                        label="5s"
                      />
                      <FormControlLabel
                        value="10s"
                        control={<Radio />}
                        label="10s"
                      />
                    </div>
                  </RadioGroup>
                </div>
              </div>
            </form>
            <div className="mt-5 block cursor-not-allowed">
              <label className="pr-3 mb-2 text-gray-200 ">
                Generating Count:
                <span className="text-white"> 1</span>
              </label>
              <Slider
                defaultValue={2}
                step={2}
                marks
                min={0}
                max={8}
                disabled
              />
            </div>
          </Card>

          <Card disabled>
            <SectionHeader icon={camera} title="Camera Movement" />
            <div className="text-gray-200 text-sm leading-6 mt-4">
              Currently unavailable on Archiks88 1.6, please switch to Archiks88
              1.5
            </div>
            <div className="mt-4">
              <div className="relative opacity-30 h-56 w-full rounded-xl bg-primary">
                <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 bg-primary-light rounded-xl h-40 w-72">
                  <LazyLoadImg
                    src={camera2}
                    alt="Movement"
                    className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 "
                  />
                </div>
              </div>
              <div className="opacity-30 flex items-center justify-between mt-2 h-8 w-full  px-3">
                <div className="text-gray-200 flex items-center ">
                  <span className="pr-1">Camera Controls</span>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="16"
                    height="16"
                    viewBox="0 0 1024 1024"
                  >
                    <path
                      fill="currentColor"
                      d="M831.872 340.864 512 652.672 192.128 340.864a30.592 30.592 0 0 0-42.752 0 29.12 29.12 0 0 0 0 41.6L489.664 714.24a32 32 0 0 0 44.672 0l340.288-331.712a29.12 29.12 0 0 0 0-41.728 30.592 30.592 0 0 0-42.752 0z"
                    ></path>
                  </svg>
                </div>
                <div className="flex justify-end">
                  <div className="w-full align-bottom">
                    <div className="bg-primary border border-gray-200 rounded-lg flex items-center justify-between gap-4 px-3 h-8">
                      <span className="">Camera Movement</span>
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="16"
                        height="16"
                        viewBox="0 0 1024 1024"
                      >
                        <path
                          fill="currentColor"
                          d="M831.872 340.864 512 652.672 192.128 340.864a30.592 30.592 0 0 0-42.752 0 29.12 29.12 0 0 0 0 41.6L489.664 714.24a32 32 0 0 0 44.672 0l340.288-331.712a29.12 29.12 0 0 0 0-41.728 30.592 30.592 0 0 0-42.752 0z"
                        ></path>
                      </svg>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </Card>

          <Card className="mb-24 md:mb-32" disabled>
            <SectionHeader
              icon={negative}
              title="Negative Prompt"
              subtitle="Optional"
            />
            <div className="text-gray-200  mt-4 text-sm leading-6">
              <div className="bg-primary rounded-xl h-40">
                <div className="grow-1 pt-3 px-4 pb-0  whitespace-pre-wrap">
                  List the types of content you don't want to see in the video.
                  Examples: animation, blur, distortion, disfigurement, low
                  quality, collage, grainy, logos, abstract, illustrations,
                  computer-generated, warped...
                </div>
              </div>
            </div>
          </Card>
        </section>
      </main>
      {/* <AssetsPanel /> */}
      <footer className="flex items-center justify-center md:block">
        <div
          className="fixed bottom-0 left-0 w-full h-28 md:block hidden pt-1 md:px-12 z-10"
          style={{ background: "linear-gradient(0deg,#0d1116 40%,#0d111600)" }}
        />
        <div className="fixed bottom-0 left-0 w-full max-md:mb-4 md:h-28 pt-1 px-4 md:px-12 z-10">
          <div className="inline-flex items-center justify-center md:ml-2.5 max-lg:w-full">
            <button
              onClick={handleGenerateVideo}
              className="bg-primary-light text-gray-150  px-4 py-1.5 rounded-full w-full md:w-80 h-12"
            >
              Generate
            </button>
          </div>
        </div>
        <p className="text-gray-100  text-sm mb-3 hidden md:block fixed bottom-0 w-full  pt-1 px-4 lg:px-12 z-10 text-center">
          The generated contents do not represent the views, positions or
          attitudes of KLING AI. Please use them responsibly and kindly.
        </p>
      </footer>
    </div>
  );
};

export default VideoAI;
