import React from "react";
import title from "../../assets/title.svg";
import Banner from "../../Components/Common/Banner";
import SectionTitle from "../../Components/Common/SectionTitle";
import MainVideo from "../../Components/Common/MainVideo";
import { TrendingCardData } from "../../Data/AllData";
import AutoCarousel from "../../Components/Common/AutoCarousel";
import TrendingCard from "../../Components/Common/TrendingCard";
import TrendingCreatives from "../../Components/Common/TrendingCreatives";
import Footer from "../../Components/Footer/Footer";
import Button from "../../Components/Common/Button";

const Main = () => {
  return (
    <div className="relative h-lvh w-full overflow-auto">
      <main className="lg:pl-[260px] pt-0 m-0 bg-[#0d1116]">
        <MainVideo />
        <div className="relative max-lg:static">
          <h1 className="absolute mt-[-320px] ml-5 lg:ml-0 max-lg:static max-lg:mx-5 max-lg:mt-0">
            <img
              src={title}
              alt="Archiks88 AI: A New Era of Creative Production"
              className="mt-10 max-w-full"
            />
          </h1>
        </div>
        <div className="">
          <div className="w-[calc(100%-40px)] -mt-[120px] mx-5 mb-0 max-lg:flex-col flex flex-wrap justify-center max-lg:mt-10">
            <Banner
              title="AI Images"
              className="mr-6 mb-4 lg:mb-0"
              subtitle="Powered by KOLORS"
            />
            <Banner
              title="AI Videos"
              className="mr-6 mb-4 lg:mb-0"
              subtitle="Powered by Archiks88"
            />
            <Banner
              title="Video Editor"
              showSVG={false}
              showR={false}
              subtitle="The feature is coming! We'll share with you soon."
            />
          </div>
        </div>

        {/* Trending Shorts Section */}
        <SectionTitle title="Trending Shorts" />
        <div className="mx-5 min-h-[220px]">
          <div className="flex flex-wrap justify-center lg:justify-start">
            {TrendingCardData.map((card) => (
              <TrendingCard
                key={card.id}
                title={card.title}
                subtitle={card.subtitle}
                videoSrc={card.videoSrc}
                posterSrc={card.posterSrc}
                likes={card.likes}
                time={card.time}
                author={card.author}
              />
            ))}
          </div>
        </div>

        {/* Trending Creatives Section */}
        <SectionTitle title="Trending Creatives" />
        <div className="mx-[5px] -mt-[15px] mb-20 w-full">
          <div className="p-[15px] max-md:p-3">
            <div className="md:hidden">
              <AutoCarousel />
            </div>
            {/* <TrendingCreatives /> */}
          </div>
          <Button
            title="Explore More"
            className="mx-auto flex items-center justify-center mt-[2em] px-8 bg-[linear-gradient(89.86deg,#a7ff1a,#82fac2,#47d4ff)] hover:!bg-[linear-gradient(89.86deg,#81d100,#56d69a,#1aaad6)]"
          />
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default Main;
