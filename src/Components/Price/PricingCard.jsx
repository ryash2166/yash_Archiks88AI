import React from "react";
import { Check, MoveRight } from "lucide-react";

const PricingCard = ({
  title,
  yearlyPrice,
  monthlyPrice,
  features,
  isRecommended = false,
  isActive = false,
}) => {
  return (
    <div
      className={`relative rounded-3xl p-9 sm:max-w-[25rem] flex flex-col group border border-border-secondary transition-all duration-300 ${
        isActive
          ? "bg-[#1a1a3a] border border-border-secondary z-10 bg-grid-white-faint bg-grid"
          : "bg-primary hover:bg-[#1a1a3a] hover:bg-grid-white-faint hover:bg-grid"
      }`}
    >
      {isRecommended && (
        <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
          <div className="bg-secondary text-white px-4 py-1 rounded-lg text-sm font-medium">
            Recommended
          </div>
        </div>
      )}

      <div className="text-center mb-6">
        <h3
          className={`text-2xl font-bold group-hover:text-secondary  ${
            isActive ? "text-secondary hover:" : "text-white"
          }`}
        >
          {title}
        </h3>
        <p className="text-gray-400 mt-1">Starts with {yearlyPrice}</p>
      </div>

      <div className="text-center mb-8">
        <span className={`text-5xl font-bold text-white`}>${monthlyPrice}</span>
        <span className="text-gray-400 ml-1 text-xs">Per Mon</span>
      </div>

      {isActive && (
        <div className="flex items-center mb-6">
          <div className="h-3 w-3 rounded-full bg-secondary"></div>
          <div className="h-1 flex-grow bg-gradient-to-r from-secondary to-transparent"></div>
        </div>
      )}

      <div className="flex-grow space-y-4 mb-8">
        {features &&
          features.map((feature, index) => (
            <div key={index} className="flex items-start">
              <div className="mt-0.5 mr-3 text-secondary">
                <Check size={18} />
              </div>
              <span className="text-white text-sm">{feature}</span>
            </div>
          ))}
      </div>

      <div className="mt-auto">
        <button className="w-full py-2.5 px-6 rounded-xl bg-secondary gap-2 text-white font-semibold transition-all hover:bg-secondary/80 flex items-center justify-center">
          Subscribe{" "}
          <span className="">
            <MoveRight className="mt-1" />
          </span>
        </button>
      </div>
    </div>
  );
};

export default PricingCard;
