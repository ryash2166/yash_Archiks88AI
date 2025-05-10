import React from "react";
import { SparklesCore } from "../Landing/Sparkles";
import PricingSection from "./PricingSection";
import Comparison from "./Comparison";
import CustomizedAccordions from "./AccordionData";
import LazyLoadImg from "../Common/LazyLoadImg";
import Button from "../Common/Button";
import { useNavigation } from "react-router-dom";
const Price = () => {
  const navigate = useNavigation();

  const handleLogin = () => {
    navigate("/profile");
  };
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

      <div className="relative z-10 container mx-auto px-4 text-white ">
        <div className="flex items-center justify-center text-center flex-col pt-16 mb-4">
          <div className="bg-black-500 rounded-xl text-sm md:text-base w-fit px-5 py-1">
            ARCHIKS88 AI
          </div>
          <h2 className="my-4 text-3xl md:text-5xl font-bold">
            Choose Plan to Get Started
          </h2>
        </div>
        <div className="mb-4 flex flex-col gap-12">
          <PricingSection />
          <Comparison />
          <CustomizedAccordions />

          <div className="pt-16 mb-4">
            <div className="flex items-center justify-center relative">
              <LazyLoadImg
                src="https://shortful.ai/img/cta-4-bg.png"
                alt="cta-4-bg"
                className="w-full h-full opacity-10"
              />
              <div className="absolute flex flex-col items-center justify-center">
                <div className="bg-blue/20 rounded-xl text-sm md:text-base w-fit px-5 py-1 mb-3">
                  ARCHIKS88 AI
                </div>
                <h2 className="text-3xl sm:text-5xl font-bold text-center mb-3">
                  Create Viral Shorts in Minutes with AI
                </h2>
                <span className="text-gray-400">
                  Create captivating short videos effortlessly with Archiks88 AI
                </span>
                <div className="relative flex items-center justify-center  mt-10">
                  <div className="p-[2px] bg-gradient-to-r from-purple-700 to-sky-600 group  rounded-full transition-all duration-300 group-hover:shadow-lg">
                    <Button
                      onClick={handleLogin}
                      title="Get Started Now"
                      className="bg-black text-white sm:!text-base !py-2.5 !px-8 rounded-full w-full h-full transition-all duration-300 group-hover:bg-gradient-to-l group-hover:from-purple-900 group-hover:to-sky-700 font-medium"
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Price;
