import React from "react";

const Button = ({ title, className , onClick }) => {
  return (
    <button
      className={`text-white font-medium rounded-full cursor-pointer py-[6px] px-4 m-0 text-sm whitespace-nowrap w-auto leading-6 ${className} `}
      onClick={onClick}
    >
      {title}
    </button>
  );
};

export default Button;
