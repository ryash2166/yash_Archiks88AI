import React from "react";
import LazyLoadImg from "./LazyLoadImg";

const TestimonialCard = ({ name, testimonial, image }) => {
  return (
    <div className="relative w-full mx-auto h-72">
      <div className="absolute inset-0 bg-gradient-to-r from-purple-700/20 to-sky-700/20 rounded-lg" />
      <div className="absolute inset-px rounded-lg p-6 flex flex-col h-full">
        <div className="flex items-center mb-3">
          <div className="w-12 h-12 rounded-full overflow-hidden mr-3 border-2 border-cyan-500/30">
            <LazyLoadImg
              src={image}
              alt={name}
              className="w-full h-full object-cover"
            />
          </div>
          <div>
            <h3 className="font-bold text-white">{name}</h3>
          </div>
        </div>

        <div className="flex mb-3">
          {[...Array(5)].map((_, i) => (
            <svg
              key={i}
              className="w-5 h-5 text-yellow-400 fill-current"
              viewBox="0 0 24 24"
            >
              <path d="M12 17.27L18.18 21L16.54 13.97L22 9.24L14.81 8.63L12 2L9.19 8.63L2 9.24L7.46 13.97L5.82 21L12 17.27Z" />
            </svg>
          ))}
        </div>

        <p className="text-white text-sm sm:text-base leading-relaxed flex-1 overflow-hidden">
          {testimonial}
        </p>
      </div>
    </div>
  );
};

export default TestimonialCard;
