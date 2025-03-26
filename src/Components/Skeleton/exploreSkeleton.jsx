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
            </div>
          ))}
        </Masonry>
      </ResponsiveMasonryWrapper>
    </div>
  )
}

export default ExploreSkeleton
