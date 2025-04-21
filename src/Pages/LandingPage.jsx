import React from "react";
import { SparklesCore } from "../Components/Landing/Sparkles";
import Hero from "../Components/Landing/Hero";
import Footer from "../Components/Footer/Footer";

const LandingPage = () => {
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

      {/* Content with proper z-index */}
      <div className="relative z-10 flex flex-col">
        <div className="flex-grow">
          <Hero />
          {/* You can add more sections here */}
        </div>
      </div>
      <Footer margin={false} />
    </div>
  );
};

export default LandingPage;
