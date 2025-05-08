import React, { useState, useEffect } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";
import TestimonialCard from "./TestimonialCard";
import { testimonials } from "../../Data/AllData";

const TestimonialSection = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [visibleTestimonials, setVisibleTestimonials] = useState([]);

  useEffect(() => {
    const handleResize = () => {
      const width = window.innerWidth;
      if (width < 640) {
        setVisibleTestimonials([currentIndex]);
      } else if (width < 1024) {
        setVisibleTestimonials([
          currentIndex,
          (currentIndex + 1) % testimonials.length,
        ]);
      } else {
        setVisibleTestimonials([
          currentIndex,
          (currentIndex + 1) % testimonials.length,
          (currentIndex + 2) % testimonials.length,
          (currentIndex + 3) % testimonials.length,
        ]);
      }
    };

    handleResize();
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, [currentIndex]);

  const goToPrev = () => {
    setCurrentIndex(
      (prevIndex) => (prevIndex - 1 + testimonials.length) % testimonials.length
    );
  };

  const goToNext = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % testimonials.length);
  };

  return (
    <div className="w-full container">
      <div className="">
        <h2 className="text-2xl md:text-4xl lg:text-5xl font-semibold text-white text-center mb-4 md:mb-12">
          Our{" "}
          <span className="bg-gradient-to-r font-bold from-purple-400 to-sky-600 bg-clip-text text-transparent">
            Trust Client
          </span>{" "}
          Loved By
          <br className="md:hidden" /> Thinkers Use Archiks88 AI
        </h2>

        <div className="relative">
          {/* <button 
            onClick={goToPrev}
            className="absolute left-0 top-1/2 -translate-y-1/2 -translate-x-2 z-10 bg-black/30 backdrop-blur-sm rounded-full p-2 text-white hover:bg-black/50 transition-all duration-300"
          >
            <ChevronLeft size={24} />
          </button>
          
          <button 
            onClick={goToNext}
            className="absolute right-0 top-1/2 -translate-y-1/2 translate-x-2 z-10 bg-black/30 backdrop-blur-sm rounded-full p-2 text-white hover:bg-black/50 transition-all duration-300"
          >
            <ChevronRight size={24} />
          </button> */}

          <div className="flex justify-center gap-6 flex-wrap lg:flex-nowrap">
            {testimonials.map((index) => (
              <div
                key={index.id}
                className="transition-all duration-300 ease-in-out transform hover:scale-105 w-full"
              >
                <TestimonialCard
                  name={index.name}
                  testimonial={index.testimonial}
                  image={index.image}
                />
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default TestimonialSection;
