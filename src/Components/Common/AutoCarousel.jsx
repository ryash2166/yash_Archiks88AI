import React from "react";
import { Carousel } from "antd";
import slider1 from "../../assets/slider1.jpeg";
import slider2 from "../../assets/slider2.jpeg";
import slider3 from "../../assets/slider3.jpeg";
import LazyLoadImg from "./LazyLoadImg";

const AutoCarousel = () => (
  <div className="!w-full max-w-[926.4px] max-md:w-auto">
    <Carousel autoplay>
      <div className="w-full h-[325.605px] max-md:h-auto">
        <LazyLoadImg
          src={slider1}
          alt="Slider 1"
          className="w-full h-full max-xl:object-cover rounded-[20px]"
        />
      </div>
      <div className="w-full h-[325.605px] max-md:h-auto">
        <LazyLoadImg
          src={slider2}
          alt="Slider 2"
          className="w-full h-full max-xl:object-cover rounded-[20px]"
        />
      </div>
      <div className="w-full h-[325.605px] max-md:h-auto">
        <LazyLoadImg
          src={slider3}
          alt="Slider 3"
          className="w-full h-full max-xl:object-cover rounded-[20px]"
        />
      </div>
    </Carousel>
  </div>
);

export default AutoCarousel;
