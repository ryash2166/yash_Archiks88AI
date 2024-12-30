import React, { useEffect, useRef, useState } from "react";

const MainVideo = () => {
  const firstVideoRef = useRef(null);
  const secondVideoRef = useRef(null);
  const [hasInteracted, setHasInteracted] = useState(false);

  useEffect(() => {
    if (hasInteracted) {
      // When the first video ends, switch to the second video
      if (firstVideoRef.current) {
        firstVideoRef.current.onended = () => {
          // Hide the first video and show the second video
          firstVideoRef.current.style.display = "none";
          secondVideoRef.current.style.display = "block";
        };
      }
    }
  }, [hasInteracted]);

  return (
    <div className="ml-8 mt-5 leading-[0] text-right h-[360px] overflow-hidden max-lg:hidden">
      {/* First video with autoplay */}
      <video
        ref={firstVideoRef}
        src="https://s1-def.ap4r.com/kos/s101/nlav112154/aiwp/assets/home-start-C6AdYhVK.mp4"
        disablePictureInPicture
        playsInline
        disableRemotePlayback
        preload="auto"
        className="max-h-[360px] pointer-events-none w-auto"
        autoPlay
        muted
        style={{ display: "block" }} // First video will be shown initially
      />

      {/* Second video with autoplay and loop */}
      <video
        ref={secondVideoRef}
        src="https://s1-def.ap4r.com/kos/s101/nlav112154/aiwp/assets/home-loop-DOmEh9Jl.mp4"
        loop
        autoPlay
        preload="auto"
        className="max-h-[360px] pointer-events-none w-auto -mt-[400px] right-0"
        playsInline
        muted
        style={{ display: "none" }} // Initially hidden
      />
    </div>
  );
};

export default MainVideo;
