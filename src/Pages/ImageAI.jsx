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
import LazyLoadImg from "../Components/Common/LazyLoadImg";

const SectionHeader = ({ icon, title, subtitle }) => (
  <div className="flex items-center ">
    <LazyLoadImg src={icon} alt={title} />
    <span className="text-base  text-left pl-1.5 text-white">{title}</span>
    {subtitle && (
      <span className="text-sm text-gray-200 text-left pl-1.5">
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
  <div className="grid grid-cols-1 gap-4 w-full h-80">
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
    <div className="bg-primary">
      <form onSubmit={handleSubmit}>
        <video
          src="https://s1-def.ap4r.com/kos/s101/nlav112154/aiwp/assets/videos/main-image-DBbp02YB.mp4"
          autoPlay
          loop
          muted
          disablePictureInPicture
          disableRemotePlayback
          playsInline
          className="sm:absolute sm:-top-1.5 md:left-52 sm:max-w-sm pointer-events-none hidden lg:!block"
        />
        <p className="absolute md:left-3 top-20 md:top-28 text-center w-80 tracking-wider font-bold text-4xl bg-gradient-to-r from-purple-700 via-blue-500 to-blue-700 bg-clip-text text-transparent hidden lg:!block">
          Creative Space
        </p>
        <div className="pb-28 xl:pr-52 absolute w-full pl-[444px] flex justify-center items-center overflow-hidden h-[calc(100%-68px)] max-lg:hidden">
          {loading ? (
            <div className="xl:ml-32 flex flex-col h-full justify-center items-center">
              <SkeletonLoader
                count={formState.count}
                selectedRatio={selectedRatio}
              />
              <p className="text-gray-100  text-center text-md mt-3">
                Generating {formState.count} images...
              </p>
            </div>
          ) : results.length > 0 ? (
            <div className="ml-32 flex flex-col h-full justify-center items-center">
              <div className="grid grid-cols-auto gap-4">
                {results.map((result, index) => (
                  <div key={index} className="relative">
                    <LazyLoadImg
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
              <p className="text-gray-100  text-center text-md mt-3">
                Generated {results.length} images
              </p>
            </div>
          ) : (
            <div className="flex flex-col items-center">
              <LazyLoadImg src={nowork} alt="" />
              <p className="text-gray-200 text-sm">
                {error || "Release your creative potential..."}
              </p>
            </div>
          )}
        </div>
        <main
          className="w-full lg:max-w-md absolute md:float-left overflow-y-scroll lg:pt-32 pr-4 pl-5 pb-0 h-[calc(100%-68px)]"
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
                  className={`md:px-3 px-2 py-2 text-xl md:font-semibold transition-transform ${
                    mainTab === tab
                      ? "text-blue-light  border-b-2 border-secondary !ml-0"
                      : "text-white hover:text-gray-200 !ml-0"
                  }`}
                  onClick={() => setMainTab(tab)}
                >
                  {tab}
                </button>
              )
            )}
          </nav>

          <section className="lg:max-w-md relative mt-6 ">
            <Card>
              <SectionHeader icon={sun} title="Start / End Frame and Prompt" />
              <div className="text-sm text-gray-150  mt-4">
                <div className="bg-primary rounded-xl h-40 relative">
                  <div className="mx-5 mt-7 lg:mt-3.5 absolute">
                    {!formState.prompt && (
                      <p className="text-gray-150  leading-7">
                        Please describe your creative ideas for the video, or
                        view
                        <span className="text-blue"> Help Center</span> for
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
                    className=" absolute ml-5 max-lg:w-5/6 bg-transparent top-8 text-ellipsis outline-none overflow-y-hidden resize-none text-white"
                  />
                  {formState.prompt && (
                    <button
                      onClick={() => setFormState({ ...formState, prompt: "" })}
                      className="absolute right-4 bottom-2 text-white hover:text-white"
                    >
                      <LazyLoadImg src={deleteIcon} alt="" />
                    </button>
                  )}
                </div>
              </div>
              <div className="flex w-full  items-center justify-between rounded-b-xl p-2">
                <div className="hidden">
                  <span className="text-gray-200 text-sm mr-1">Hints:</span>
                  <div className="inline-flex bg-primary-light text-sm items-center rounded-lg mr-1 text-gray p-2">
                    Chinese style CG
                  </div>
                  <div className="inline-flex bg-primary-light text-sm items-center rounded-lg text-gray p-2">
                    Blue melancholy
                  </div>
                </div>
                <div className="hidden items-center">
                  <button className="text-white">
                    <LazyLoadImg src={refresh} alt="" />
                  </button>
                </div>
              </div>
            </Card>

            <Card className="mb-4 lg:mb-32">
              <SectionHeader icon={setting} title="Settings" />
              <div className="mb-5 text-gray-200 flex justify-start items-start">
                <div className="text-sm leading-8">
                  <div className="mb-2">Aspect Ratio:</div>
                  <AspectRatioSelector
                    selectedRatio={selectedRatio}
                    onRatioChange={setSelectedRatio}
                  />
                </div>
              </div>
              <div className="mt-5 block">
                <label className="pr-3 mb-2 text-gray-200 ">
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
                  <p className="text-gray-100  text-center text-md mt-3">
                    Generating {formState.count} images...
                  </p>
                </div>
              ) : results.length > 0 ? (
                <div className="flex flex-col mb-32 w-full justify-center items-center">
                  <div className="grid grid-cols-auto gap-4">
                    {results.map((result, index) => (
                      <div key={index} className="relative">
                        <LazyLoadImg
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
                  <p className="text-gray-100  text-center text-md mt-3">
                    Generated {results.length} images
                  </p>
                </div>
              ) : (
                <div className="flex flex-col items-center">
                  <LazyLoadImg src={nowork} alt="" />
                  <p className="text-gray-200 text-sm">
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
            className="fixed bottom-0 left-0 w-full h-32 md:block hidden pt-1 lg:px-12 z-10"
            style={{
              background: "linear-gradient(0deg,#0d1116 50%,#0d111600)",
            }}
          ></div>
          <div className="fixed bottom-0 left-0 w-full max-md:mb-4 md:h-28 pt-3 px-4 lg:px-12 z-10">
            <div className="inline-flex items-center justify-center lg:ml-2.5 max-lg:w-full">
              <button
                type="submit"
                disabled={formState.prompt ? false : true}
                className={`px-4 py-1.5 mb-2 rounded-full w-full md:w-80 h-12
                    ${
                      formState.prompt
                        ? "bg-blue-light hover:!bg-secondary text-white"
                        : "bg-primary-light text-gray-150"
                    } font-semibold text-lg`}
              >
                {loading ? "Generating..." : "Generate"}
              </button>
            </div>
          </div>
          <p className="text-gray-100  text-sm mb-3 hidden md:block fixed bottom-0 w-full pt-1 px-4 lg:px-12 z-10 text-center">
            The generated contents do not represent the views, positions or
            attitudes of Archiks88 AI. Please use them responsibly and kindly.
          </p>
        </footer>
      </form>
    </div>
  );
};

export default ImageAI;
