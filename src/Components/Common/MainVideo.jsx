import React, { useEffect, useRef, useState } from "react";

const MainVideo = () => {
  const firstVideoRef = useRef(null);
  const secondVideoRef = useRef(null);
  const [hasInteracted, setHasInteracted] = useState(false);

  useEffect(() => {
    if (hasInteracted) {
      // Ensure the first video is set up to hide itself and show the second video on end
      if (firstVideoRef.current && secondVideoRef.current) {
        firstVideoRef.current.onended = () => {
          // Hide the first video and show the second video
          firstVideoRef.current.style.display = "none";
          secondVideoRef.current.style.display = "block";
          secondVideoRef.current.play(); // Ensure second video starts playing
        };
      }
    }
  }, [hasInteracted]);

  return (
    <div className="ml-8 text-right h-96 overflow-hidden max-xl:hidden">
      {/* First video with autoplay */}
      <video
        ref={firstVideoRef}
        src="https://s1-def.ap4r.com/kos/s101/nlav112154/aiwp/assets/home-start-C6AdYhVK.mp4"
        disablePictureInPicture
        playsInline
        disableRemotePlayback
        preload="auto"
        className="max-h-96 pointer-events-none w-auto"
        autoPlay
        muted
        style={{ display: "block" }}
        onPlay={() => setHasInteracted(true)}
      />

      {/* Second video with autoplay and loop */}
      <video
        ref={secondVideoRef}
        src="https://s1-def.ap4r.com/kos/s101/nlav112154/aiwp/assets/home-loop-DOmEh9Jl.mp4"
        loop
        preload="auto"
        className="max-h-96 pointer-events-none w-auto right-0"
        playsInline
        muted
        style={{ display: "none" }}
      />
    </div>
  );
};

export default MainVideo;
