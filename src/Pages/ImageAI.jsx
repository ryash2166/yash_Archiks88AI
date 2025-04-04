import React from "react";
import Slider from "@mui/material/Slider";
import sun from "../assets/sun.svg";
import refresh from "../assets/refresh.svg";
import deleteIcon from "../assets/delete.svg";
import setting from "../assets/setting.svg";
import AspectRatioSelector from "../Components/AspectRatio/AspectRatioSelector";
// import AssetsPanel from "../../Components/Common/AssetsPanel";
import nowork from "../assets/nowork.svg";
import { useNavigation } from "../Context/NavigationContext";
import useImageAI from "../hooks/useImageAI";

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

// Skeleton Loader Component
const SkeletonLoader = ({ count = 4, selectedRatio }) => (
  <div className="grid grid-cols-1 gap-4 w-full h-[300px]">
    {Array.from({ length: count }).map((_, index) => (
      <div key={index} className="relative">
        <div
          className={`rounded-lg bg-gray-400/20 animate-pulse w-full h-full ${
            selectedRatio === "1:1"
              ? "aspect-square"
              : selectedRatio === "16:9"
              ? "aspect-video"
              : selectedRatio === "4:3"
              ? "aspect-[4/3]"
              : "aspect-square"
          }`}
        />
        <div className="absolute bottom-0 left-0 right-0 h-8 bg-gray-400/25 w-full animate-pulse rounded-b-lg" />
      </div>
    ))}
  </div>
);

const ImageAI = () => {
  const {
    mainTab,
    setMainTab,
    opacity,
    handleScroll,
    formState,
    setFormState,
    handleSubmit,
    results,
    error,
    selectedRatio,
    setSelectedRatio,
  } = useImageAI();

  const { loading } = useNavigation();

  return (
    <div className="bg-[#0d1116]">
      <form onSubmit={handleSubmit}>
        <video
          src="https://s1-def.ap4r.com/kos/s101/nlav112154/aiwp/assets/videos/main-image-DBbp02YB.mp4"
          autoPlay
          loop
          muted
          disablePictureInPicture
          disableRemotePlayback
          playsInline
          className="sm:absolute sm:-top-[5px] md:left-[200px] sm:max-w-[380px] pointer-events-none hidden lg:!block"
        />
        <p className="absolute md:left-3 top-[80px] md:top-[110px] text-center w-[320px] tracking-wider font-bold text-4xl bg-gradient-to-r from-[rgb(135,83,249)] to-[rgba(6,227,171,0.9)] bg-clip-text text-transparent hidden lg:!block">
          Creative Space
        </p>
        <div className="pb-[118px] xl:pr-[200px] absolute w-full pl-[444px] flex justify-center items-center overflow-hidden h-[calc(100%-68px)] max-lg:hidden">
          {loading ? (
            <div className="xl:ml-32 flex flex-col h-full justify-center items-center">
              <SkeletonLoader
                count={formState.count}
                selectedRatio={selectedRatio}
              />
              <p className="text-[#727485] text-center text-md mt-3">
                Generating {formState.count} images...
              </p>
            </div>
          ) : results.length > 0 ? (
            <div className="ml-32 flex flex-col h-full justify-center items-center">
              <div className="grid grid-cols-auto gap-4">
                {results.map((result, index) => (
                  <div key={index} className="relative">
                    <img
                      src={result.url}
                      alt={result.prompt || "Generated image"}
                      className={`rounded-lg w-96 object-cover ${
                        selectedRatio === "1:1"
                          ? "aspect-square"
                          : selectedRatio === "16:9"
                          ? "aspect-video"
                          : selectedRatio === "4:3"
                          ? "aspect-[4/3]"
                          : "aspect-square"
                      }`}
                    />
                    <div className="absolute bottom-0 left-0 right-0 bg-black/50 text-white p-2 text-sm truncate">
                      Your Prompt: {result.prompt || "Generated image"}
                    </div>
                  </div>
                ))}
              </div>
              <p className="text-[#727485] text-center text-md mt-3">
                Generated {results.length} images
              </p>
            </div>
          ) : (
            <div className="flex flex-col items-center">
              <img src={nowork} alt="" />
              <p className="text-[#c5c7d5] text-sm">
                {error || "Release your creative potential..."}
              </p>
            </div>
          )}
        </div>
        <main
          className="w-full lg:max-w-[450px] absolute md:float-left overflow-y-scroll lg:pt-[125px] pr-4 pl-5 pb-0 h-[calc(100%-68px)]"
          onScroll={handleScroll}
        >
          <nav
            className="flex flex-wrap items-center transition-opacity duration-300"
            style={{ opacity }}
          >
            {["Text to Image"].map(
              (
                tab // , "AI Virtual Try-On"
              ) => (
                <button
                  key={tab}
                  className={`md:px-3 px-2 py-2 text-[20px] leading-7 md:font-semibold transition-transform ${
                    mainTab === tab
                      ? "text-[#6c6cf5]  border-b-2 border-[#5252e5] !ml-0"
                      : "text-white hover:text-[#c5c7d5] !ml-0"
                  }`}
                  onClick={() => setMainTab(tab)}
                >
                  {tab}
                </button>
              )
            )}
          </nav>

          <section className="lg:max-w-[460px] relative mt-6 ">
            <Card>
              <SectionHeader icon={sun} title="Start / End Frame and Prompt" />
              <div className="text-sm text-[#727485] mt-4">
                <div className="bg-[#0d1116] rounded-[12px] h-[158px] relative">
                  <div className="mx-5 mt-7 lg:mt-[13px] absolute">
                    {!formState.prompt && (
                      <p className="text-[#727485] leading-7">
                        Please describe your creative ideas for the video, or
                        view
                        <span className="text-[#6c6cf5]"> Help Center</span> for
                        a quick start.
                      </p>
                    )}
                  </div>
                  <label htmlFor="prompt" />
                  <textarea
                    type="text"
                    id="prompt"
                    name="prompt"
                    value={formState.prompt}
                    rows={5}
                    cols={38}
                    onChange={(e) =>
                      setFormState({ ...formState, prompt: e.target.value })
                    }
                    className=" absolute ml-5 max-lg:w-5/6 bg-transparent top-[30px] text-ellipsis outline-none overflow-y-hidden resize-none text-white"
                  />
                  {formState.prompt && (
                    <button
                      onClick={() => setFormState({ ...formState, prompt: "" })}
                      className="absolute right-4 bottom-2 text-white hover:text-white"
                    >
                      <img src={deleteIcon} alt="" />
                    </button>
                  )}
                </div>
              </div>
              <div className="flex w-full  items-center justify-between rounded-b-[12px] p-2">
                <div className="hidden">
                  <span className="text-[#999bac] text-sm mr-1">Hints:</span>
                  <div className="inline-flex bg-[#ffffff0f] text-sm items-center rounded-lg mr-1 text-[#f5f8fa] p-2">
                    Chinese style CG
                  </div>
                  <div className="inline-flex bg-[#ffffff0f] text-sm items-center rounded-lg text-[#f5f8fa] p-2">
                    Blue melancholy
                  </div>
                </div>
                <div className="inline-flex hidden items-center">
                  <button className="text-white">
                    <img src={refresh} alt="" />
                  </button>
                </div>
              </div>
            </Card>

            <Card className="mb-[15px] lg:mb-32">
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
              <div className="mt-5 block">
                <label className="pr-3 mb-2 text-[#999bac] ">
                  Generating Count:
                  <span className="text-white"> {formState.count}</span>
                </label>
                <Slider
                  value={formState.count}
                  onChange={(e, newValue) =>
                    setFormState((prev) => ({ ...prev, count: newValue }))
                  }
                  step={1}
                  marks
                  min={1}
                  max={4}
                />
              </div>
            </Card>
          </section>

          <section>
            <div className="w-full flex justify-center items-center overflow-hidden lg:hidden">
              {loading ? (
                <div className="flex flex-col mb-24 justify-center items-center">
                  <SkeletonLoader
                    count={formState.count}
                    selectedRatio={selectedRatio}
                  />
                  <p className="text-[#727485] text-center text-md mt-3">
                    Generating {formState.count} images...
                  </p>
                </div>
              ) : results.length > 0 ? (
                <div className="flex flex-col mb-32 w-full justify-center items-center">
                  <div className="grid grid-cols-auto gap-4">
                    {results.map((result, index) => (
                      <div key={index} className="relative">
                        <img
                          src={result.url}
                          alt={result.prompt || "Generated image"}
                          className={`rounded-lg object-cover  ${
                            selectedRatio === "1:1"
                              ? "aspect-square"
                              : selectedRatio === "16:9"
                              ? "aspect-video"
                              : selectedRatio === "4:3"
                              ? "aspect-[4/3]"
                              : "aspect-square"
                          }`}
                        />
                        <div className="absolute bottom-0 left-0 right-0 bg-black/50 text-white p-2 text-sm truncate">
                          Your Prompt: {result.prompt || "Generated image"}
                        </div>
                      </div>
                    ))}
                  </div>
                  <p className="text-[#727485] text-center text-md mt-3">
                    Generated {results.length} images
                  </p>
                </div>
              ) : (
                <div className="flex flex-col items-center">
                  <img src={nowork} alt="" />
                  <p className="text-[#c5c7d5] text-sm">
                    {error || "Release your creative potential..."}
                  </p>
                </div>
              )}
            </div>
          </section>
        </main>
        {/* <AssetsPanel /> */}
        <footer className="flex items-center justify-center md:block">
          <div
            className="fixed bottom-0 left-0 w-full h-32 md:block hidden pt-1 lg:px-12 z-[3]"
            style={{
              background: "linear-gradient(0deg,#0d1116 50%,#0d111600)",
            }}
          ></div>
          <div className="fixed bottom-0 left-0 w-full max-md:mb-4 md:h-[118px] pt-3 px-4 lg:px-12 z-[3]">
            <div className="inline-block lg:ml-[10px]">
              <button
                type="submit"
                disabled={formState.prompt ? false : true}
                className={`px-4 py-[6px] mb-2 rounded-full w-[calc(100vw-32px)] lg:w-[344px] h-12
                    ${
                      formState.prompt
                        ? "bg-[#6c6cf5] hover:!bg-[#5252e5] text-white"
                        : "bg-[#333a45] text-[#727485] "
                    } font-[550] text-lg`}
              >
                {loading ? "Generating..." : "Generate"}
              </button>
            </div>
          </div>
          <p className="text-[#727485] text-sm mb-3 hidden md:block fixed bottom-0 w-full pt-1 px-4 lg:px-12 z-[3] text-center">
            The generated contents do not represent the views, positions or
            attitudes of Archiks88 AI. Please use them responsibly and kindly.
          </p>
        </footer>
      </form>
    </div>
  );
};

export default ImageAI;
