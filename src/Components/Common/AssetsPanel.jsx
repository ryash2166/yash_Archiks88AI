import React, { useState } from "react";

const AssetsPanel = () => {
  const [isExpanded, setIsExpanded] = useState(false);

  return (
      <div
        className={`h-screen border-[#2e3136] border-[1px] rounded-xl pt-[16px] pb-0 px-[15px] absolute right-5 transition-all duration-300 ease-in-out ${
          isExpanded ? "w-[548px]" : "w-[152px]"
        }`}
      >
        {/* Header */}
        <div className="flex items-center justify-between">
          <h2 className="text-white text-sm">Assets</h2>
          <div className="flex gap-2">
            {isExpanded && (
              <>
                <button className="text-white hover:text-gray-300">
                  <svg
                    width="20"
                    height="20"
                    viewBox="0 0 24 24"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M3 7H21"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                    />
                    <path
                      d="M6 12H18"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                    />
                    <path
                      d="M10 17H14"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                    />
                  </svg>
                </button>
                <button className="text-white hover:text-gray-300">
                  <svg
                    width="20"
                    height="20"
                    viewBox="0 0 24 24"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M4 8H20M4 16H20"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                    />
                  </svg>
                </button>
              </>
            )}
          </div>
        </div>

        {/* Toggle Button */}
        <button
          onClick={() => setIsExpanded(!isExpanded)}
          className="absolute w-6 h-[37px] mt-[calc((100vh-200px)/2)] -ml-[27px] border-[1px] border-r-[0px]  border-[#2e3136] bg-[#0d1116] rounded-l-full transform -translate-y-1/2 -translate-x-1/2 pl-[6px] text-[#72e528]"
        >
          <svg
            data-v-8f71f730=""
            className={`transform transition-transform ${
              isExpanded ? "rotate-180 duration-300 ease-linear" : ""
            }`}
            width="20"
            height="20"
            viewBox="0 0 20 20"
            fill="currentColor"
            xmlns="http://www.w3.org/2000/svg"
            class="handle"
          >
            <path
              fill-rule="evenodd"
              clip-rule="evenodd"
              d="M10.3178 2.74408C9.99233 2.41864 9.4647 2.41864 9.13926 2.74408L2.47259 9.41074C2.14716 9.73618 2.14716 10.2638 2.47259 10.5893L9.13926 17.2559C9.4647 17.5814 9.99234 17.5814 10.3178 17.2559C10.6432 16.9305 10.6432 16.4028 10.3178 16.0774L4.24036 10L10.3178 3.92259C10.6432 3.59715 10.6432 3.06951 10.3178 2.74408Z"
            ></path>
            <path
              fill-rule="evenodd"
              clip-rule="evenodd"
              d="M16.9844 2.74408C16.659 2.41864 16.1314 2.41864 15.8059 2.74408L9.13926 9.41074C8.81382 9.73618 8.81383 10.2638 9.13926 10.5893L15.8059 17.2559C16.1314 17.5814 16.659 17.5814 16.9844 17.2559C17.3099 16.9305 17.3099 16.4028 16.9844 16.0774L10.907 10L16.9844 3.92259C17.3099 3.59715 17.3099 3.06951 16.9844 2.74408Z"
            ></path>
          </svg>
        </button>

        {/* Content */}
        <div className="mt-[10px]">
          <div className="bg-[#2C2C2E] rounded-lg w-[120px] h-[120px] flex items-center justify-center">
            <span className="text-gray-500">Empty</span>
          </div>
        </div>
      </div>
  );
};

export default AssetsPanel;
