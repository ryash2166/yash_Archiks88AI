import React, { useState } from "react";

const AssetsPanel = () => {
  const [isExpanded, setIsExpanded] = useState(false);

  return (
    <div
      className={`h-screen border-[#2e3136] bg-[#0d1116] border-[1px] rounded-xl pt-[16px] pb-0 px-[15px] absolute right-5 transition-all duration-300 ease-in-out ${
        isExpanded ? "w-[548px]" : "w-[152px]"
      }`}
    >
      {/* Header */}
      <div className="flex items-center justify-between">
        <div className="flex flex-row items-center justify-between w-full gap-2">
          <h2 className="text-white leading-6 text-left flex-1 text-[16px] font-semibold">
            Assets
          </h2>
          <p className="text-white flex  hover:text-[#9ffd38] cursor-pointer transition duration-200">
            <svg
              data-v-8f71f730=""
              width="20"
              height="20"
              viewBox="0 0 20 20"
              fill="currentColor"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                fillRule="evenodd"
                clipRule="evenodd"
                d="M15.9474 6.44107C16.2068 6.35963 16.2068 5.99245 15.9474 5.91101L10.0822 4.07004C10.0281 4.05304 9.97002 4.05304 9.91586 4.07004L4.05071 5.91101C3.79126 5.99245 3.79126 6.35963 4.05071 6.44107L9.91586 8.28204C9.97002 8.29903 10.0281 8.29903 10.0822 8.28204L15.9474 6.44107ZM16.4465 4.32084C18.2627 4.8909 18.2627 7.46118 16.4465 8.03124L10.5814 9.87221C10.2023 9.9912 9.79583 9.9912 9.41674 9.87221L3.55158 8.03124C1.73541 7.46118 1.73541 4.89091 3.55158 4.32084L9.41674 2.47987C9.79583 2.36088 10.2023 2.36088 10.5814 2.47987L16.4465 4.32084Z"
              ></path>
              <path
                fillRule="evenodd"
                clipRule="evenodd"
                d="M17.6829 10.2828C17.8358 10.7169 17.6078 11.1927 17.1737 11.3456L10.6467 13.6443C10.2287 13.7914 9.77309 13.7915 9.35515 13.6444L2.82454 11.3457C2.39041 11.1929 2.16236 10.717 2.31517 10.2829C2.46797 9.84879 2.94378 9.62073 3.37791 9.77354L9.90853 12.0723C9.96823 12.0933 10.0333 12.0933 10.093 12.0722L16.6201 9.77359C17.0542 9.62071 17.53 9.84868 17.6829 10.2828Z"
              ></path>
              <path
                fillRule="evenodd"
                clipRule="evenodd"
                d="M17.6829 14.1386C17.8358 14.5727 17.6078 15.0485 17.1737 15.2014L10.6467 17.5001C10.2287 17.6472 9.77309 17.6473 9.35515 17.5002L2.82454 15.2015C2.39041 15.0486 2.16236 14.5728 2.31517 14.1387C2.46797 13.7046 2.94378 13.4765 3.37791 13.6293L9.90853 15.928C9.96823 15.9491 10.0333 15.9491 10.093 15.928L16.6201 13.6294C17.0542 13.4765 17.53 13.7045 17.6829 14.1386Z"
              ></path>
            </svg>
            {isExpanded && <span className="ml-1 align-middle">Hierarchy</span>}
          </p>
          <p className="text-white flex  hover:text-[#9ffd38] cursor-pointer transition duration-200">
            <svg
              data-v-8f71f730=""
              width="20"
              height="20"
              viewBox="0 0 20 20"
              fill="currentColor"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path d="M11.6636 9.56777C11.989 9.89321 11.989 10.4208 11.6636 10.7463L8.34723 14.0626C8.0218 14.3881 7.49416 14.3881 7.16872 14.0626C7.16161 14.0555 7.15465 14.0483 7.14785 14.041L5.5108 12.404C5.18536 12.0785 5.18536 11.5509 5.5108 11.2254C5.83624 10.9 6.36387 10.9 6.68931 11.2254L7.75836 12.2945L10.4851 9.56777C10.8105 9.24233 11.3381 9.24233 11.6636 9.56777Z"></path>
              <path
                fillRule="evenodd"
                clipRule="evenodd"
                d="M8.50054 2.33301C7.11983 2.33301 6.00054 3.4523 6.00054 4.83301V5.2803C6.00054 5.31811 6.00306 5.35534 6.00794 5.39182H4.83301C3.4523 5.39182 2.33301 6.51111 2.33301 7.89182V15.1661C2.33301 16.5468 3.4523 17.6661 4.83301 17.6661H12.1073C13.488 17.6661 14.6073 16.5468 14.6073 15.1661V13.9997H15.1672C16.5479 13.9997 17.6672 12.8804 17.6672 11.4997V4.83301C17.6672 3.4523 16.5479 2.33301 15.1672 2.33301H8.50054ZM14.6073 12.333H15.1672C15.6274 12.333 16.0005 11.9599 16.0005 11.4997V4.83301C16.0005 4.37277 15.6274 3.99967 15.1672 3.99967H8.50054C8.04031 3.99967 7.66721 4.37277 7.66721 4.83301V5.2803C7.66721 5.31811 7.66469 5.35534 7.65981 5.39182H12.1073C13.488 5.39182 14.6073 6.51111 14.6073 7.89182V12.333ZM3.99967 7.89182C3.99967 7.43158 4.37277 7.05849 4.83301 7.05849H12.1073C12.5676 7.05849 12.9406 7.43158 12.9406 7.89182V15.1661C12.9406 15.6264 12.5676 15.9995 12.1073 15.9995H4.83301C4.37277 15.9995 3.99967 15.6264 3.99967 15.1661V7.89182Z"
              ></path>
            </svg>
            {isExpanded && <span className="ml-1 align-middle">Select</span>}
          </p>
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
        >
          <path
            fillRule="evenodd"
            clipRule="evenodd"
            d="M10.3178 2.74408C9.99233 2.41864 9.4647 2.41864 9.13926 2.74408L2.47259 9.41074C2.14716 9.73618 2.14716 10.2638 2.47259 10.5893L9.13926 17.2559C9.4647 17.5814 9.99234 17.5814 10.3178 17.2559C10.6432 16.9305 10.6432 16.4028 10.3178 16.0774L4.24036 10L10.3178 3.92259C10.6432 3.59715 10.6432 3.06951 10.3178 2.74408Z"
          ></path>
          <path
            fillRule="evenodd"
            clipRule="evenodd"
            d="M16.9844 2.74408C16.659 2.41864 16.1314 2.41864 15.8059 2.74408L9.13926 9.41074C8.81382 9.73618 8.81383 10.2638 9.13926 10.5893L15.8059 17.2559C16.1314 17.5814 16.659 17.5814 16.9844 17.2559C17.3099 16.9305 17.3099 16.4028 16.9844 16.0774L10.907 10L16.9844 3.92259C17.3099 3.59715 17.3099 3.06951 16.9844 2.74408Z"
          ></path>
        </svg>
      </button>

      {/* Content */}
      <div className="mt-[10px]">
        <div className="bg-[#191d21] rounded-lg w-[120px] h-[120px] flex items-center justify-center">
          <span className="text-gray-500">Empty</span>
        </div>
      </div>
    </div>
  );
};

export default AssetsPanel;
