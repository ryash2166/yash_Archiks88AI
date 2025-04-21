import React from 'react'
import Masonry from "react-responsive-masonry";
import ResponsiveMasonryWrapper from '../Wrapper/ResponsiveMasonryWrapper';

const ExploreSkeleton = () => {
  return (
    <div className="relative h-lvh w-full overflow-auto">
      <ResponsiveMasonryWrapper
        columnsCountBreakPoints={{ 480: 1, 575: 2, 767: 3, 1025: 5 }}
      >
        <Masonry className="!m-auto">
          {[...Array(50)].map((_, index) => (
            <div key={index} className="animate-pulse w-full">
              <div className="animate-pulse w-full ">
                <div className="h-64 w-full bg-slate-400/20 rounded-xl"></div>
              </div>
              <div className="animate-pulse w-full flex items-center gap-2 mt-3">
                <div className="h-10 w-10 bg-slate-400/20 rounded-full"></div>
                <div className="flex flex-col items-start gap-2">
                  <div className="h-5 w-40 bg-slate-400/20 rounded-xl"></div>
                  <div className="h-5 w-20 bg-slate-400/20 rounded-xl"></div>
                </div>
              </div>
            </div>
          ))}
        </Masonry>
      </ResponsiveMasonryWrapper>
    </div>
  )
}

const ProfileSkeleton = () => {
    return (
      <div className="relative h-lvh w-full overflow-auto">
        <div className="lg:pl-[260px] p-7 pt-0 mb-20 bg-primary">
          <div className="animate-pulse w-full">
            <div className="h-auto md:h-[200px] w-full rounded-xl bg-slate-400/20  mb-5">
              <div className="flex items-center justify-center md:justify-between p-8">
                <div className="flex md:flex-row flex-col items-center gap-4">
                  <div className="h-32 w-32 bg-slate-400/25 rounded-full"></div>
                  <div className="space-y-2">
                    <div className="h-5 w-40 bg-slate-400/25 rounded-xl"></div>
                    <div className="h-5 w-96 bg-slate-400/25 rounded-xl"></div>
                    <div className="h-5 w-36 bg-slate-400/25 rounded-xl"></div>
                  </div>
                </div>
                <div className="w-32 h-10 hidden md:block bg-slate-400/25 rounded-xl"></div>
              </div>
            </div>
            <div className="space-y-2">
              <div className="h-12 bg-slate-400/20 rounded-xl w-full mb-5"></div>
              <ResponsiveMasonryWrapper
                columnsCountBreakPoints={{ 480: 1, 575: 2, 767: 3, 1025: 4 }}
              >
                <Masonry className="!m-auto">
                  {[...Array(12)].map((_, index) => (
                    <div key={index} className="animate-pulse w-full relative">
                      <div className="h-64 w-full bg-slate-400/20 rounded-xl"></div>
                      <div className="absolute inset-0 flex items-center gap-4 justify-center transition-all duration-300 cursor-pointer rounded-[18px]">
                        <div className="flex h-14 w-14 rounded-full bg-slate-400/25"></div>
                        <div className="flex h-14 w-14 rounded-full bg-slate-400/25"></div>
                      </div>
                    </div>
                  ))}
                </Masonry>
              </ResponsiveMasonryWrapper>
            </div>
          </div>
        </div>
      </div>
    );
  };


export { ExploreSkeleton, ProfileSkeleton };