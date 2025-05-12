import React, { useRef } from "react";
import { SparklesCore } from "../Components/Landing/Sparkles";
import Hero from "../Components/Landing/Hero";
import Footer from "../Components/Footer/Footer";
import Button from "../Components/Common/Button";
import { useNavigate } from "react-router-dom";
import useNavbar from "../hooks/useNavbar";
import Login from "../Components/Login/Login";
import ImageToVideoIcon from "../icons/imagetovideo";
import TextToImageIcon from "../icons/texttoImage";
import TestimonialSection from "../Components/Common/TestimonialSection";
import ArrowIcon from "../icons/arrow";
import AutoCarousel from "../Components/Common/AutoCarousel";
import TrendingCreatives from "../Components/Common/TrendingCreatives";
import LazyLoadImg from "../Components/Common/LazyLoadImg";
import { useNavigation } from "../Context/NavigationContext";
import { LazyLoadComponent } from "react-lazy-load-image-component";

const LandingPage = () => {
  const videoRefs = useRef([null]);
  const navigate = useNavigate();
  const { setActiveTab } = useNavigation();
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

  const handleVideoClick = () => {
    navigate("/VideoAI");
    setActiveTab("VideoAI");
  };

  const handleExploreClick = () => {
    navigate("/Explore");
    setActiveTab("Explore");
  };

  const handleImageClick = () => {
    navigate("/ImageAI");
    setActiveTab("ImageAI");
  };

  const { togglePopup, showLoginPopup, setShowLoginPopup } = useNavbar();

  return (
    <div className="bg-primary overflow-auto antialiased bg-grid-white/[0.02] relative">
      {/* Fixed position sparkles background that covers the entire viewport */}
      <div className="fixed inset-0 z-0">
        <SparklesCore
          id="tsparticlesfullpage"
          background="transparent"
          minSize={0.6}
          maxSize={1.4}
          particleDensity={100}
          className="w-full h-full"
          particleColor="#FFFFFF"
        />
      </div>

      <div className="relative z-10 flex flex-col">
        <div className="flex-grow">
          <Hero />
        </div>
        <div className="container mx-auto px-4">
          <div className="flex flex-col items-center justify-center max-xl:flex-wrap gap-20 w-full mb-14">
            <div className="flex flex-col items-center justify-center gap-2.5 max-sm:mt-4 max-w-6xl mx-auto text-center ">
              <h2 className="p-0 m-0 text-3xl md:text-4xl font-semibold text-white max-lg:text-center">
                <span className="text-transparent font-bold bg-clip-text bg-gradient-to-r from-purple-700 to-sky-600">
                  All the Best
                </span>{" "}
                AI Models in One Place!
              </h2>
              <p className="text-lg max-lg:text-center text-gray-400">
                Explore top-performing models for stunning visuals-right at your
                fingertips, all in one easy platform.
              </p>
            </div>
            <div className="flex flex-col md:flex-row gap-10">
              <div className="flex flex-col gap-2.5 lg:px-20">
                <h2 className="text-3xl text-center font-bold text-white">
                  AI Video Generators
                </h2>
                <p className="text-lg text-center text-white">
                  Our AI video generators provide access to flagship model,
                  kling 1.6, along with several other leading-edge video models
                  in the industry, including:
                </p>
                <div className="flex justify-around flex-wrap mt-7">
                  <div className="flex flex-col gap-1.5 items-center justify-center">
                    <LazyLoadImg
                      src="https://shortful.ai/_next/image?url=%2Fimages%2Flogo%2Fwanx_logo.png&w=48&q=75"
                      alt="Wanc_AI"
                      className="w-9 h-9"
                    />
                    <p className="text-lg text-center max-md:text-base text-white">
                      Wanx AI
                    </p>
                  </div>
                  <div className="flex flex-col gap-1.5 items-center justify-center">
                    <LazyLoadImg
                      src="https://shortful.ai/_next/image?url=%2Fimages%2Flogo%2Fluma_logo.png&w=48&q=75"
                      alt="Luma_AI"
                      className="w-9 h-9"
                    />
                    <p className="text-lg text-center max-md:text-base text-white">
                      Luma AI
                    </p>
                  </div>
                  <div className="flex flex-col gap-1.5 items-center justify-center">
                    <LazyLoadImg
                      src="https://shortful.ai/_next/image?url=%2Fimg%2Fkling-logo.png&w=48&q=75"
                      alt="Kling_AI"
                      className="w-9 h-9"
                    />
                    <p className="text-lg text-center max-md:text-base text-white">
                      Kling AI
                    </p>
                  </div>
                </div>
                <Button
                  title="AI Video Generator"
                  onClick={handleVideoClick}
                  className="mt-4 !py-3 !px-7 border-clip !text-base mx-auto text-white bg-gradient-to-r from-purple-700 to-sky-600 hover:bg-gradient-to-l hover:from-purple-900 hover:to-sky-700"
                />
              </div>
              <div className="flex flex-col gap-2.5 lg:px-20">
                <h2 className="text-3xl text-center font-bold text-white">
                  AI Image Generators
                </h2>
                <p className="text-lg text-center text-white">
                  Our image AIs let you choose from a variety of top-tier
                  models, each offering unique strengths to suit your specific
                  needs. These include:
                </p>
                <div className="flex justify-around flex-wrap mt-7">
                  <div className="flex flex-col gap-1.5 items-center justify-center">
                    <LazyLoadImg
                      src="https://shortful.ai/_next/image?url=%2Fimages%2Flogo%2Fwanx_logo.png&w=48&q=75"
                      alt="Wanx_AI"
                      className="w-9 h-9"
                    />
                    <p className="text-lg text-center max-md:text-base text-white">
                      Wanx AI
                    </p>
                  </div>
                  <div className="flex flex-col gap-1.5 items-center justify-center">
                    <LazyLoadImg
                      src="https://shortful.ai/_next/image?url=%2Fimages%2Flogo%2Fluma_logo.png&w=48&q=75"
                      alt="Luma_AI"
                      className="w-9 h-9"
                    />
                    <p className="text-lg text-center max-md:text-base text-white">
                      Luma AI
                    </p>
                  </div>
                  <div className="flex flex-col gap-1.5 items-center justify-center">
                    <LazyLoadImg
                      src="https://shortful.ai/_next/image?url=%2Fimg%2Fkling-logo.png&w=48&q=75"
                      alt="Kling_AI"
                      className="w-9 h-9"
                    />
                    <p className="text-lg text-center max-md:text-base text-white">
                      Kling AI
                    </p>
                  </div>
                </div>
                <Button
                  title="AI Image Generator"
                  onClick={handleImageClick}
                  className="mt-4 !py-3 !px-7 border-clip !text-base mx-auto text-white bg-gradient-to-r from-purple-700 to-sky-600 hover:bg-gradient-to-l hover:from-purple-900 hover:to-sky-700"
                />
              </div>
            </div>
          </div>
          <div className="mb-14 md:mt-40 flex flex-col gap-9">
            <div className="max-w-6xl mx-auto text-center">
              <h1 className="text-3xl sm:text-4xl md:text-5xl font-semibold text-white mb-4">
                Unleash
                <span className="text-transparent font-bold bg-clip-text bg-gradient-to-r from-purple-700 to-sky-600">
                  {" "}
                  Infinite Video
                </span>{" "}
                Creations
              </h1>
              <p className="text-gray-400 text-base md:text-lg max-w-4xl mx-auto">
                Dive into a vast collection of AI video templates! Spark
                emotions with realistic scenes, transform visuals effortlessly,
                or animate static images. Whatever you envision, we’ve got you
                covered! Let AI do the work, while you enjoy the creativity!
              </p>
            </div>
            <div>
              <div className="grid grid-cols-4 gap-2.5 w-full max-h-[540px] max-w-[1500px] relative max-lg:grid-cols-2 max-lg:max-h-max max-md:grid-cols-1">
                <div
                  className="relative"
                  onMouseEnter={() => handleMouseEnter(0)}
                  onMouseLeave={() => handleMouseLeave(0)}
                >
                  <LazyLoadComponent>
                    <video
                      ref={(el) => (videoRefs.current[0] = el)}
                      loop
                      preload="auto"
                      disablePictureInPicture
                      playsInline
                      muted
                      disableRemotePlayback
                      poster="https://s21-kling.klingai.com/kimg/EMXN1y8qfwoGdXBsb2FkEg55bGFiLXN0dW50LXNncBplc2UvYWlfcG9ydGFsX3NncF9tMnZfaW1nMnZpZGVvXzEwODBwX3YyMF9zdGQvMjlhOGY1ZjItMDA4YS00YjU5LTgzZWItMzM2MmEzMDNiNDg0X3Jhd192aWRlb19jb3Zlci5qcGc:360x644.webp?x-kcdn-pid=112372"
                      src="https://v21-kling.klingai.com/bs2/upload-ylab-stunt-sgp/se/ai_portal_sgp_m2v_img2video_1080p_v20_std/6a2669ad-58ae-453a-b412-c28b9edec85f_video.mp4?x-kcdn-pid=112372"
                      className="aspect-square object-cover rounded-xl w-full h-full"
                    ></video>
                  </LazyLoadComponent>
                  <div className="absolute bottom-0 left-0 top-0 right-0 bg-creative rounded-xl items-end"></div>
                </div>
                <div className="flex flex-col gap-2.5">
                  <div
                    className="relative"
                    onMouseEnter={() => handleMouseEnter(1)}
                    onMouseLeave={() => handleMouseLeave(1)}
                  >
                    <LazyLoadComponent>
                      <video
                        ref={(el) => (videoRefs.current[1] = el)}
                        loop
                        preload="auto"
                        disablePictureInPicture
                        playsInline
                        muted
                        disableRemotePlayback
                        src="https://v15-def.ap4r.com/bs2/upload-ylab-stunt-sgp/ai_portal/1733903709/hxK0UobWdx/______.mp4"
                        poster="https://s15-def.ap4r.com/bs2/upload-ylab-stunt-sgp/ai_portal/1733903832/YRBOw7TQoJ/_____________11_.png?x-oss-process=image%2Fresize%2Cw_400%2Ch_200%2Cm_mfit"
                        className="aspect-video object-top object-cover rounded-xl w-full h-full"
                      ></video>
                    </LazyLoadComponent>
                    <div className="absolute bottom-0 left-0 top-0 right-0 bg-creative rounded-xl items-end"></div>
                  </div>
                  <div
                    className="relative"
                    onMouseEnter={() => handleMouseEnter(2)}
                    onMouseLeave={() => handleMouseLeave(2)}
                  >
                    <LazyLoadComponent>
                      <video
                        ref={(el) => (videoRefs.current[2] = el)}
                        loop
                        preload="auto"
                        disablePictureInPicture
                        playsInline
                        disableRemotePlayback
                        muted
                        poster="https://s15-def.ap4r.com/bs2/upload-ylab-stunt-sgp/special-effect/output/16fdb03c-b7c1-426a-83cc-8b7dbea2ed1b/4930992406432380279/output.jpg?x-oss-process=image%2Fresize%2Cw_400%2Ch_200%2Cm_mfit"
                        src="https://v15-def.ap4r.com/bs2/upload-ylab-stunt-sgp/special-effect/output/70b03d43-6e55-4f06-a8d3-704386079966/-7120317322272835942/out.mp4"
                        className="aspect-video object-top object-cover rounded-xl w-full h-full"
                      ></video>
                    </LazyLoadComponent>
                    <div className="absolute bottom-0 left-0 top-0 right-0 bg-creative rounded-xl items-end"></div>
                  </div>
                </div>
                <div
                  className="relative"
                  onMouseEnter={() => handleMouseEnter(3)}
                  onMouseLeave={() => handleMouseLeave(3)}
                >
                  <LazyLoadComponent>
                    <video
                      ref={(el) => (videoRefs.current[3] = el)}
                      loop
                      preload="auto"
                      disablePictureInPicture
                      playsInline
                      disableRemotePlayback
                      muted
                      poster="https://s21-kling.klingai.com/kimg/EMXN1y8qfwoGdXBsb2FkEg55bGFiLXN0dW50LXNncBplc2UvYWlfcG9ydGFsX3NncF9tMnZfaW1nMnZpZGVvXzEwODBwX3YyMF9zdGQvYWJmOGIxNGItMWU2Yi00YTJhLWEwYTUtNWY0MWE4NGY4Yjc3X3Jhd192aWRlb19jb3Zlci5qcGc:360x540.webp?x-kcdn-pid=112372"
                      src="https://v21-kling.klingai.com/bs2/upload-ylab-stunt-sgp/se/ai_portal_sgp_m2v_img2video_1080p_v20_std/87298e80-17b1-4319-bbfb-a09ab4117452_video.mp4?x-kcdn-pid=112372"
                      className="aspect-square object-cover rounded-xl w-full h-full"
                    ></video>
                  </LazyLoadComponent>
                  <div className="absolute bottom-0 left-0 top-0 right-0 bg-creative rounded-xl items-end"></div>
                </div>
                <div className="flex flex-col gap-2.5">
                  <div
                    className="relative"
                    onMouseEnter={() => handleMouseEnter(4)}
                    onMouseLeave={() => handleMouseLeave(4)}
                  >
                    <LazyLoadComponent>
                      <video
                        ref={(el) => (videoRefs.current[4] = el)}
                        loop
                        preload="auto"
                        disablePictureInPicture
                        playsInline
                        muted
                        disableRemotePlayback
                        poster="https://s21-kling.klingai.com/kimg/EMXN1y8qgwEKBnVwbG9hZBIOeWxhYi1zdHVudC1zZ3AaaXNlL2FpX3BvcnRhbF9zZ3BfbTJ2X2ltZzJ2aWRlb18xMDgwcF92MTZfZGlzdGlsbC80OGJlN2U5NC1kNDBkLTQ5NjYtODA4Zi01YzQyZjVkYzNkNDhfcmF3X3ZpZGVvX2NvdmVyLmpwZw:360x236.webp?x-kcdn-pid=112372"
                        src="https://v21-kling.klingai.com/bs2/upload-ylab-stunt-sgp/se/ai_portal_sgp_m2v_img2video_1080p_v16_distill/23acb91a-59b8-44b0-8932-30cde5b957ae_video.mp4?x-kcdn-pid=112372"
                        className="aspect-video object-top object-cover rounded-xl w-full h-full"
                      ></video>
                    </LazyLoadComponent>
                    <div className="absolute bottom-0 left-0 top-0 right-0 bg-creative rounded-xl items-end"></div>
                  </div>
                  <div
                    className="relative"
                    onMouseEnter={() => handleMouseEnter(5)}
                    onMouseLeave={() => handleMouseLeave(5)}
                  >
                    <LazyLoadComponent>
                      <video
                        ref={(el) => (videoRefs.current[5] = el)}
                        loop
                        preload="auto"
                        disablePictureInPicture
                        playsInline
                        muted
                        disableRemotePlayback
                        poster="https://s21-kling.klingai.com/kimg/EMXN1y8qgwEKBnVwbG9hZBIOeWxhYi1zdHVudC1zZ3AaaXNlL2FpX3BvcnRhbF9zZ3BfbTJ2X2ltZzJ2aWRlb18xMDgwcF92MTZfZGlzdGlsbC9lNjkyMGRjYy0yZDAzLTQxNmUtOGUzMi1kMGNhMzBmNzFiZjFfcmF3X3ZpZGVvX2NvdmVyLmpwZw:360x203.webp?x-kcdn-pid=112372"
                        src="https://v21-kling.klingai.com/bs2/upload-ylab-stunt-sgp/se/ai_portal_sgp_m2v_img2video_1080p_v16_distill/4ef81e26-e45f-4882-9aff-ceb22c4ab328_video.mp4?x-kcdn-pid=112372"
                        className="aspect-video object-top object-cover rounded-xl w-full h-full"
                      ></video>
                    </LazyLoadComponent>
                    <div className="absolute bottom-0 left-0 top-0 right-0 bg-creative rounded-xl items-end"></div>
                  </div>
                </div>
              </div>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 sm:mx-auto gap-3 md:gap-20">
              <Button
                title="Get Free Trial"
                onClick={togglePopup}
                className="bg-black text-white sm:!text-base !py-3 sm:!py-4 !px-20 sm:max-w-80 rounded-full transition-all duration-300  bg-gradient-to-r from-purple-700 to-sky-600 hover:bg-gradient-to-l hover:from-purple-900 hover:to-sky-700 "
              />
              <div className="relative inline-block group sm:max-w-80">
                <div className="p-[2px] bg-gradient-to-r from-purple-700 to-sky-600 rounded-full transition-all duration-300 group-hover:shadow-lg">
                  <Button
                    onClick={togglePopup}
                    title="Try it Now!"
                    className="bg-black text-white sm:!text-base !py-2.5 sm:!py-4 !px-20  rounded-full w-full h-full transition-all duration-300 group-hover:bg-gradient-to-l group-hover:from-purple-900 group-hover:to-sky-700"
                  />
                </div>
              </div>
            </div>
          </div>
          <div className="mb-14 md:mt-40">
            <div className="max-w-4xl mx-auto text-center mb-5 md:mb-10">
              <h1 className="text-3xl sm:text-4xl md:text-5xl font-semibold text-white mb-4">
                Next-Gen AI Tools for
                <span className="text-transparent font-bold bg-clip-text bg-gradient-to-r from-purple-700 to-sky-600">
                  {" "}
                  Seamless
                </span>{" "}
                Video Creation
              </h1>
              <p className="text-gray-400 text-base md:text-lg max-w-4xl mx-auto">
                Turn text, images, or videos into stunning visuals—whether
                you're starting from scratch or refining your masterpiece, we've
                got you covered!
              </p>
            </div>
            <div className="flex flex-col lg:flex-row gap-10 ">
              <div className="flex flex-col items-center justify-center gap-3 ">
                <LazyLoadImg
                  src="https://shortful.ai/_next/static/media/text_to_video_bg.d6a9304a.svg"
                  alt=""
                  className="sm:h-[380px] object-contain"
                />
                <h2 className="text-2xl sm:text-3xl text-center font-bold text-white">
                  Text to Video
                </h2>
                <p className="text-base sm:text-lg xl:mx-12 text-center text-white">
                  Simply type your idea, and let AI bring it to life with
                  visuals, motion, and sound—no editing required.
                </p>
                <div className="relative inline-block group mx-auto sm:max-w-80">
                  <div className="p-[2px] bg-gradient-to-r from-purple-700 to-sky-600 rounded-full transition-all duration-300 group-hover:shadow-lg">
                    <Button
                      onClick={handleVideoClick}
                      title="Text to Video"
                      icon={<TextToImageIcon className="w-6 h-6" />}
                      className="bg-black text-white sm:!text-base !py-2.5 !px-8 rounded-full w-full h-full transition-all duration-300 group-hover:bg-gradient-to-l group-hover:from-purple-900 group-hover:to-sky-700"
                    />
                  </div>
                </div>
              </div>
              <div className="flex flex-col items-center justify-center gap-3 ">
                <LazyLoadImg
                  src="https://shortful.ai/_next/static/media/image_to_video_bg.e9094cda.svg"
                  alt=""
                  className="sm:h-[380px] object-contain"
                />
                <h2 className="text-2xl sm:text-3xl text-center font-bold text-white">
                  Image to Video
                </h2>
                <p className="text-base sm:text-lg xl:mx-12 text-center text-white">
                  Transform static images into lively mini-movies with AI,
                  adding motion, effects, and music.
                </p>
                <div className="relative inline-block mx-auto group sm:max-w-80">
                  <div className="p-[2px] bg-gradient-to-r from-purple-700 to-sky-600 rounded-full transition-all duration-300 group-hover:shadow-lg">
                    <Button
                      onClick={handleVideoClick}
                      title="Image to Video"
                      icon={<ImageToVideoIcon className="w-6 h-6" />}
                      className="bg-black text-white sm:!text-base !py-2.5 !px-8 rounded-full w-full h-full transition-all duration-300 group-hover:bg-gradient-to-l group-hover:from-purple-900 group-hover:to-sky-700"
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="mb-14 md:mt-40">
            <TestimonialSection />
          </div>
          <div className="mb-14 md:mt-40">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-5 sm:gap-10">
              <div className="flex items-center justify-center">
                <LazyLoadImg
                  src="https://shortful.ai/_next/image?url=%2F_next%2Fstatic%2Fmedia%2Fimage.b58413c8.png&w=640&q=75"
                  alt=""
                  className=" object-contain"
                />
              </div>
              <div className="flex flex-col gap-10">
                <div className="flex flex-col items-center justify-center gap-2.5 max-sm:mt-4 max-w-6xl mx-auto text-center ">
                  <h2 className="p-0 m-0 text-2xl md:text-4xl font-semibold text-white max-lg:text-center">
                    Bring Your{" "}
                    <span className="text-transparent font-bold bg-clip-text bg-gradient-to-r from-purple-700 to-sky-600">
                      Ideal AI Actor
                    </span>{" "}
                    to Life!
                  </h2>
                  <p className="text-base sm:text-lg max-lg:text-center text-gray-400">
                    With Synthetic, you're in control. Unlike other platforms,
                    you can create fully custom AI actors just by using natural
                    language. Describe their look, style, and personality—and
                    watch them come to life.
                  </p>
                </div>
                <div className="flex flex-col gap-2">
                  <div className="flex items-center gap-2">
                    <ArrowIcon className={`w-10 h-10`} />
                    <p className="text-white text-xl font-bold sm:text-2xl">
                      Natural Language Control
                    </p>
                  </div>
                  <p className="text-white text-base sm:text-lg">
                    Easily define your actor’s appearance, tone, and vibe with
                    simple, intuitive prompts.
                  </p>
                </div>
                <div className="flex flex-col gap-2">
                  <div className="flex items-center gap-2">
                    <ArrowIcon className={`w-10 h-10`} />
                    <p className="text-white text-2xl font-bold sm:text-xl">
                      Endless Possibilities
                    </p>
                  </div>
                  <p className="text-white text-base sm:text-lg">
                    From polished presenters to laid-back vloggers, craft AI
                    actors that match your brand and vision perfectly.
                  </p>
                </div>
                <div className="relative inline-block mx-auto group sm:max-w-80">
                  <div className="p-[2px] bg-gradient-to-r from-purple-700 to-sky-600 rounded-full transition-all duration-300 group-hover:shadow-lg">
                    <Button
                      // onClick={handleVideoClick}
                      title="Try Our AI Actor Generator"
                      // icon={<ImageToVideoIcon className="w-6 h-6" />}
                      className="bg-black text-white sm:!text-base !py-2.5 !px-8 rounded-full w-full h-full transition-all duration-300 group-hover:bg-gradient-to-l group-hover:from-purple-900 group-hover:to-sky-700 font-medium"
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="mb-14 md:mt-40">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-5 sm:gap-10">
              <div className="flex flex-col gap-10 max-lg:order-2">
                <div className="flex flex-col items-center justify-center gap-2.5 max-sm:mt-4 max-w-6xl mx-auto text-center ">
                  <h2 className="p-0 m-0 text-2xl md:text-4xl font-semibold text-white max-lg:text-center">
                    Art of{" "}
                    <span className="text-transparent font-bold bg-clip-text bg-gradient-to-r from-purple-700 to-sky-600">
                      Lipsyncing
                    </span>{" "}
                  </h2>
                  <p className="text-base sm:text-lg max-lg:text-center text-gray-400">
                    Experience flawless audio-visual sync with advanced AI.
                  </p>
                </div>
                <div className="flex flex-col gap-2">
                  <div className="flex items-center gap-2">
                    <ArrowIcon className={`w-10 h-10`} />
                    <p className="text-white text-xl font-bold sm:text-2xl">
                      Real-Time Processing
                    </p>
                  </div>
                  <p className="text-white text-base sm:text-lg">
                    Instantly sync audio with optimized AI performance.
                  </p>
                </div>
                <div className="flex flex-col gap-2">
                  <div className="flex items-center gap-2">
                    <ArrowIcon className={`w-10 h-10`} />
                    <p className="text-white text-xl font-bold sm:text-2xl">
                      Natural Expressions
                    </p>
                  </div>
                  <p className="text-white text-base sm:text-lg">
                    Emotion-aware tech matches facial expressions to tone and
                    context.
                  </p>
                </div>
                <div className="flex flex-col gap-2">
                  <div className="flex items-center gap-2">
                    <ArrowIcon className={`w-10 h-10`} />
                    <p className="text-white text-xl font-bold sm:text-2xl">
                      Multi-Language Support
                    </p>
                  </div>
                  <p className="text-white text-base sm:text-lg">
                    Accurate phoneme mapping and natural pronunciation in
                    multiple languages.
                  </p>
                </div>
                <div className="relative inline-block mx-auto group sm:max-w-80">
                  <div className="p-[2px] bg-gradient-to-r from-purple-700 to-sky-600 rounded-full transition-all duration-300 group-hover:shadow-lg">
                    <Button
                      // onClick={handleVideoClick}
                      title="Try Our Lip-Sync Video"
                      // icon={<ImageToVideoIcon className="w-6 h-6" />}
                      className="bg-black text-white sm:!text-base !py-2.5 !px-8 rounded-full w-full h-full transition-all duration-300 group-hover:bg-gradient-to-l group-hover:from-purple-900 group-hover:to-sky-700 font-medium"
                    />
                  </div>
                </div>
              </div>
              <div className="flex items-center justify-center">
                <LazyLoadImg
                  src="	https://shortful.ai/_next/image?url=%2F_next%2Fstatic%2Fmedia%2Fsection_img.56629c57.png&w=640&q=75"
                  alt=""
                  className=" object-contain"
                />
              </div>
            </div>
          </div>
          <div className="mb-14 md:mt-40">
            <div className="flex flex-col items-center justify-center gap-2.5 max-sm:mt-4 mb-10 max-w-6xl mx-auto text-center ">
              <h2 className="p-0 m-0 text-3xl md:text-5xl font-semibold text-white">
                Explore{" "}
                <span className="text-transparent font-bold bg-clip-text bg-gradient-to-r from-purple-700 to-sky-600">
                  Archiks88 AI
                </span>{" "}
                Creations
              </h2>
              <p className="text-lg text-gray-400">
                Explore top-performing creations for stunning visuals-right at
                your fingertips, all in one easy platform.
              </p>
            </div>
            <div className="mb-14 w-full">
              <div className="">
                <div className="md:hidden">{/* <AutoCarousel /> */}</div>
                <TrendingCreatives />
              </div>
              <div className="relative flex items-center justify-center  mt-10">
                <div className="p-[2px] bg-gradient-to-r from-purple-700 to-sky-600 group  rounded-full transition-all duration-300 group-hover:shadow-lg">
                  <Button
                    onClick={handleExploreClick}
                    title="View More"
                    // icon={<ImageToVideoIcon className="w-6 h-6" />}
                    className="bg-black text-white sm:!text-base !py-2.5 !px-8 rounded-full w-full h-full transition-all duration-300 group-hover:bg-gradient-to-l group-hover:from-purple-900 group-hover:to-sky-700 font-medium"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="container mx-auto">
        <Footer margin={false} />
      </div>
      <Login
        isVisible={showLoginPopup}
        onClose={() => setShowLoginPopup(false)}
      />
    </div>
  );
};

export default LandingPage;
