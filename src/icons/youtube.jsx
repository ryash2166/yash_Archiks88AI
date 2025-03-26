import React from "react";

const YoutubeIcon = ({ size, props }) => {
  return (
    <svg
      data-v-8882fffa=""
      xmlns="http://www.w3.org/2000/svg"
      width={size}
      height={size}
      fill="none"
      {...props}
    >
      <circle cx="14" cy="14" r="14" fill="#fff" fill-opacity=".12" />
      <g clip-path="url(#a)">
        <path
          fill="#fff"
          fill-rule="evenodd"
          d="M19.454 9.39a1.76 1.76 0 0 1 1.24 1.24C20.991 11.726 21 14 21 14s0 2.282-.297 3.37a1.76 1.76 0 0 1-1.24 1.24c-1.087.296-5.463.296-5.463.296s-4.376 0-5.463-.297a1.76 1.76 0 0 1-1.24-1.24C7 16.273 7 14 7 14s0-2.273.288-3.36a1.76 1.76 0 0 1 1.24-1.24c1.087-.297 5.463-.306 5.463-.306s4.376 0 5.463.297M16.228 14l-3.63 2.102v-4.205z"
          clip-rule="evenodd"
        />
      </g>
      <defs>
        <clipPath id="a">
          <path fill="#fff" d="M7 7h14v14H7z" />
        </clipPath>
      </defs>
    </svg>
  );
};

export default YoutubeIcon;
