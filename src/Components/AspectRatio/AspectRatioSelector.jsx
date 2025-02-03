import React from "react";
import AspectRatioButton from "./AspectRatioButton";

const ASPECT_RATIOS = [
  "1:1",
  "16:9",
  "4:3",
  "3:2",
  "2:3",
  "3:4",
  "9:16",
  "21:9",
];

const AspectRatioSelector = ({ selectedRatio, onRatioChange }) => {
  return (
    <div className="flex flex-wrap gap-x-4 gap-y-2">
      {ASPECT_RATIOS.map((ratio) => (
        <AspectRatioButton
          key={ratio}
          ratio={ratio}
          isSelected={selectedRatio === ratio}
          onClick={() => onRatioChange(ratio)}
        />
      ))}
    </div>
  );
};

export default AspectRatioSelector;
