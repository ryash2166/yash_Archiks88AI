import React from "react";

const Button = ({ title, className , onClick, icon }) => {
  return (
    <button
      className={`text-white font-medium rounded-full cursor-pointer py-1.5 px-4 m-0 text-sm whitespace-nowrap w-auto leading-6 transition-all duration-300 ${className} ${icon ? "flex items-center justify-center gap-2.5" : ""} `}
      onClick={onClick}
    >
      {icon && <div>{icon}</div>}
      <p className={`${icon && 'mt-1'}`}>{title}</p>
    </button>
  );
};

export default Button;
