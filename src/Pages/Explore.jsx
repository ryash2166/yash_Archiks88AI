// import React from "react";
// import Masonry from "react-responsive-masonry";
// import ResponsiveMasonryWrapper from "../Components/Wrapper/ResponsiveMasonryWrapper";
// import { FaExclamationTriangle, FaImage } from "react-icons/fa";
// import { useNavigation } from "../Context/NavigationContext";
// import { ExploreSkeleton } from "../Components/Skeleton/SkeletonLoader";
// import LazyLoadImg from "../Components/Common/LazyLoadImg";

// const Explore = () => {
//   const { mediaItems, loading, error } = useNavigation();

//   const renderMediaGrid = (media) => (
//     <ResponsiveMasonryWrapper
//       className="mt-3"
//       columnsCountBreakPoints={{ 480: 1, 575: 2, 767: 3, 1025: 5 }}
//     >
//       <Masonry className="!m-auto">
//         {media.map((item) => (
//           <div
//             key={item._id}
//             className="relative group hover:opacity-80 transition-opacity duration-300"
//           >
//             <LazyLoadImg
//               src={item.imageUrl}
//               alt={item.prompt || "Generated Image"}
//               className="w-full h-auto object-cover rounded-lg inline-block"
//             />
//             <div className="absolute bottom-0 left-0 right-0 bg-black bg-opacity-50 text-white p-2 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
//               <div className="flex justify-between items-center gap-3">
//                 {item.user && (
//                   <div className="flex items-center shrink-0">
//                     <LazyLoadImg
//                       src={item.user.avatar}
//                       alt={item.user.name}
//                       className="w-7 h-7 rounded-full mr-2 object-cover"
//                     />
//                     <span className="text-xs">{item.user.name}</span>
//                   </div>
//                 )}
//                 <div className="flex items-center">
//                   <span className="text-xs">
//                     Prompt: {item.prompt || "Generated Image"}
//                   </span>
//                 </div>
//               </div>
//             </div>
//           </div>
//         ))}
//       </Masonry>
//     </ResponsiveMasonryWrapper>
//   );

//   const renderContent = () => {
//     if (loading) return <ExploreSkeleton />;

//     if (error) {
//       return (
//         <div className="flex flex-col items-center justify-center h-screen text-red-500">
//           <FaExclamationTriangle className="text-6xl mb-4" />
//           <h2 className="text-2xl font-bold mb-2">Error Fetching Media</h2>
//           <p className="text-center">{error}</p>
//         </div>
//       );
//     }

//     return mediaItems.length === 0 ? (
//       <div className="flex flex-col items-center justify-center h-screen text-gray-500">
//         <FaImage className="text-6xl mb-4" />
//         <h2 className="text-2xl font-bold mb-2">No Media Found</h2>
//         <p>Explore more generated images later!</p>
//       </div>
//     ) : (
//       renderMediaGrid(mediaItems)
//     );
//   };

//   return (
//     <div className="relative h-lvh w-full overflow-auto overflow-x-hidden">
//       <div className="lg:pl-64 pt-0 mb-20 bg-primary">
//         {/* Tab Header */}
//         <div className="mb-8 pt-4 px-2 md:px-4">
//           <h1 className="text-2xl font-bold text-white">Explore</h1>
//         </div>

//         {/* Media Content */}
//         <div className="px-2 md:px-4">{renderContent()}</div>
//       </div>
//     </div>
//   );
// };

// export default Explore;

import React, { memo, Suspense } from "react";
import Masonry from "react-responsive-masonry";
import ResponsiveMasonryWrapper from "../Components/Wrapper/ResponsiveMasonryWrapper";
import { FaExclamationTriangle, FaImage } from "react-icons/fa";
import { useNavigation } from "../Context/NavigationContext";
import { ExploreSkeleton } from "../Components/Skeleton/SkeletonLoader";
import LazyLoadImg from "../Components/Common/LazyLoadImg";

// Memoized Media Item component to prevent unnecessary re-renders
const MediaItem = memo(({ item }) => (
  <div className="relative group hover:opacity-80 transition-opacity duration-300">
    <img
      src={item.imageUrl}
      alt={item.prompt || "Generated Image"}
      className="w-full h-auto object-cover rounded-lg inline-block"
    />
    <div className="absolute bottom-0 left-0 right-0 bg-black bg-opacity-50 text-white p-2 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
      <div className="flex justify-between items-center gap-3">
        {item.user && (
          <div className="flex items-center shrink-0">
            <LazyLoadImg
              src={item.user.avatar}
              alt={item.user.name}
              className="w-7 h-7 rounded-full mr-2 object-cover"
            />
            <span className="text-xs">{item.user.name}</span>
          </div>
        )}
        <div className="flex items-center">
          <span className="text-xs">
            Prompt: {item.prompt || "Generated Image"}
          </span>
        </div>
      </div>
    </div>
  </div>
));

// Memoized Media Grid component
const MediaGrid = memo(({ media }) => (
  <ResponsiveMasonryWrapper
    className="mt-3"
    columnsCountBreakPoints={{ 480: 1, 575: 2, 767: 3, 1025: 5 }}
  >
    <Masonry className="!m-auto">
      {media.map((item) => (
        <MediaItem key={item._id} item={item} />
      ))}
    </Masonry>
  </ResponsiveMasonryWrapper>
));

// Error display component
const ErrorDisplay = memo(({ message }) => (
  <div className="flex flex-col items-center justify-center h-screen text-red-500">
    <FaExclamationTriangle className="text-6xl mb-4" />
    <h2 className="text-2xl font-bold mb-2">Error Fetching Media</h2>
    <p className="text-center">{message}</p>
  </div>
));

// Empty state component
const EmptyState = memo(() => (
  <div className="flex flex-col items-center justify-center h-screen text-gray-500">
    <FaImage className="text-6xl mb-4" />
    <h2 className="text-2xl font-bold mb-2">No Media Found</h2>
    <p>Explore more generated images later!</p>
  </div>
));

const Explore = () => {
  const { mediaItems, loading, error } = useNavigation();

  // Content to render based on data state
  const Content = () => {
    if (error) return <ErrorDisplay message={error} />;
    if (mediaItems.length === 0) return <EmptyState />;
    return <MediaGrid media={mediaItems} />;
  };

  return (
    <div className="relative h-lvh w-full overflow-auto overflow-x-hidden">
      <div className="lg:pl-64 pt-0 mb-20 bg-primary">
        {/* Tab Header */}
        <div className="mb-8 pt-4 px-2 md:px-4">
          <h1 className="text-2xl font-bold text-white">Explore</h1>
        </div>

        {/* Media Content with Suspense */}
        <div className="px-2 md:px-4">
          <Suspense fallback={<ExploreSkeleton />}>
            {loading ? <ExploreSkeleton /> : <Content />}
          </Suspense>
        </div>
      </div>
    </div>
  );
};

export default Explore;
