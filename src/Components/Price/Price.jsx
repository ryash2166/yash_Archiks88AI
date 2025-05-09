import React from "react";
import { SparklesCore } from "../Landing/Sparkles";
import PricingSection from "./PricingSection";
import Comparison from "./Comparison";

const Price = () => {
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
        </div>
      </div>
    </div>
  );
};

export default Price;
