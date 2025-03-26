import React from "react";

const ArrowIcon = (props) => {
  return (
    <svg
      width="48"
      height="48"
      viewBox="0 0 37 36"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <rect
        x="0.833252"
        y="0.5"
        width="35"
        height="35"
        rx="17.5"
        stroke="url(#paint0_linear_950_14379)"
      ></rect>
      <path
        fill-rule="evenodd"
        clip-rule="evenodd"
        d="M19.4106 13.0337C19.0852 12.7082 19.0852 12.1806 19.4106 11.8552C19.7361 11.5297 20.2637 11.5297 20.5892 11.8552L26.1447 17.4107C26.4702 17.7362 26.4702 18.2638 26.1447 18.5892L20.5892 24.1448C20.2637 24.4702 19.7361 24.4702 19.4106 24.1448C19.0852 23.8193 19.0852 23.2917 19.4106 22.9663L23.5436 18.8333H11.111C10.6508 18.8333 10.2777 18.4602 10.2777 18C10.2777 17.5397 10.6508 17.1666 11.111 17.1666H23.5436L19.4106 13.0337Z"
        fill="url(#paint1_linear_950_14379)"
      ></path>
      <defs>
        <linearGradient
          id="paint0_linear_950_14379"
          x1="0.333252"
          y1="0"
          x2="36.3333"
          y2="36"
          gradientUnits="userSpaceOnUse"
        >
          <stop offset="0" stop-color="#23FAEC"></stop>
          <stop offset="0" stop-color="#00AAFF"></stop>
        </linearGradient>
        <linearGradient
          id="paint1_linear_950_14379"
          x1="26.3888"
          y1="11.6111"
          x2="13.9468"
          y2="27.2988"
          gradientUnits="userSpaceOnUse"
        >
          <stop offset="0" stop-color="#23FAEC"></stop>
          <stop offset="0" stop-color="#00AAFF"></stop>
        </linearGradient>
      </defs>
    </svg>
  );
};

export default ArrowIcon;
