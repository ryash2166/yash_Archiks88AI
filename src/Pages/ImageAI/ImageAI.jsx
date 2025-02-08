import React, { useState } from "react";
import Slider from "@mui/material/Slider";
import sun from "../../assets/sun.svg";
import refresh from "../../assets/refresh.svg";
import deleteIcon from "../../assets/delete.svg";
import setting from "../../assets/setting.svg";
import AspectRatioSelector from "../../Components/AspectRatio/AspectRatioSelector";
// import AssetsPanel from "../../Components/Common/AssetsPanel";
import nowork from "../../assets/nowork.svg";
import { useNavigation } from "../../Context/NavigationContext";

const SectionHeader = ({ icon, title, subtitle }) => (
  <div className="flex items-center ">
    <img src={icon} alt={title} />
    <span className="text-[16px]  text-left pl-[6px] text-white">{title}</span>
    {subtitle && (
      <span className="text-sm text-[#999bac] text-left pl-[6px]">
        ({subtitle})
      </span>
    )}
  </div>
);

const Card = ({ children, className = "", disabled = false }) => (
  <div
    className={`bg-video rounded-2xl p-4 text-white backdrop-blur-sm w-full mb-3 overflow-hidden ${className} ${disabled ? "cursor-not-allowed" : ""
      }`}
  >
    {children}
  </div>
);

async function sendImageRequest(prompt, options) {
  console.log("Sending request with:", { prompt, options }); // Debugging

  try {
    const response = await fetch("http://localhost:3000/generate-image", {
      method: "POST",
      body: JSON.stringify({ prompt, options }),
      headers: { "Content-Type": "application/json" },
    });

    if (!response.ok) {
      throw new Error("Failed to generate image, check your input.");
    }

    const imageBlob = await response.blob();
    return URL.createObjectURL(imageBlob);
  } catch (error) {
    console.error("Error:", error);
    throw error;
  }
}

const ImageAI = () => {
  const [mainTab, setMainTab] = useState("Text to Image");
  const [opacity, setOpacity] = useState(1);
  const [selectedRatio, setSelectedRatio] = useState("1:1");

  const handleScroll = (e) => {
    const scrollTop = e.target.scrollTop;
    const maxScroll = 75;
    const newOpacity = Math.max(1 - scrollTop / maxScroll, 0);
    setOpacity(newOpacity);
  };

  // AI Images Generation
  const [formState, setFormState] = useState({
    result: null,
    imageUrl: "",
    prompt: "",
    message: "",
  });

  const [isPending, setIsPending] = useState(false);

  async function handleSubmit(event) {
    event.preventDefault();
    setIsPending(true);
    console.log("Form submitted!"); // Debugging

    const formData = new FormData(event.target);
    const prompt = formData.get("prompt");
    const options = {
      quality: formData.get("quality"),
      aspect_ratio: formData.get("aspectRatio"),
      format: formData.get("format"),
    };

    try {
      const imageUrl = await sendImageRequest(prompt, options);
      console.log("Image URL received:", imageUrl); // Debugging
      setFormState({ result: "success", imageUrl, prompt });
    } catch (error) {
      setFormState({ result: "error", message: error.message });
    } finally {
      setIsPending(false);
      setFormState((prev) => ({ ...prev, prompt: "" }));
    }
  }

  console.log("Current formState:", formState); // Debugging

  return (
    <div className="bg-[#0d1116]">
      <form onSubmit={handleSubmit}>
        <video
          src="https://s1-def.ap4r.com/kos/s101/nlav112154/aiwp/assets/videos/main-image-DBbp02YB.mp4"
          autoPlay
          loop
          muted
          disablePictureInPicture
          disableRemotePlayback
          playsInline
          className="sm:absolute sm:-top-[5px] md:left-[200px] sm:max-w-[380px] pointer-events-none hidden md:!block"
        />
        <p className="absolute md:left-3 top-[80px] md:top-[110px] text-center w-[320px] tracking-wider font-bold text-4xl text-transparent bg-clip-text bg-gradient-to-r from-[#fff] via-[#fff] to-[#0af] hidden md:!block">
          Creative Space
        </p>
        <div className="pb-[118px] pr-[200px] absolute w-full pl-[444px] flex justify-center items-center overflow-hidden h-[calc(100%-68px)]  max-lg:hidden">
          {!formState.result && (
            <div className="flex flex-col items-center">
              <img src={nowork} alt="" />
              <p className="text-[#c5c7d5] text-sm">
                Release your creative potential. Experience the magic of
                Archiks88 AI.
              </p>
            </div>
          )}
          {formState.result === "success" && (
            <div className="ml-32 flex flex-col h-full justify-end items-center">
              <img
                src={formState.imageUrl}
                alt={formState.prompt}
                className="rounded-lg"
              />
              <p className="text-[#727485] text-center text-md mt-3">
                The magic of Archiks88 AI.
              </p>
            </div>
          )}
          {formState.result === "error" && (
            <p className="text-red-200 text-md">{formState.message}</p>
          )}
        </div>
        <main
          className="w-full md:max-w-[450px] absolute md:float-left overflow-y-scroll md:pt-[125px] pr-4 pl-5 pb-0 h-[calc(100%-68px)]"
          onScroll={handleScroll}
        >
          <nav
            className="flex flex-wrap items-center transition-opacity duration-300"
            style={{ opacity }}
          >
            {["Text to Image"].map(
              (
                tab // , "AI Virtual Try-On"
              ) => (
                <button
                  key={tab}
                  className={`md:px-3 px-2 py-2 text-[20px] leading-7 md:font-semibold transition-transform ${mainTab === tab
                      ? "bg-[#191d21] text-transparent bg-clip-text bg-gradient-to-r from-[#52ffba] via-[#23faec] to-[#0af] border-b-2 border-teal-400 !ml-0"
                      : "text-white hover:text-[#c5c7d5] !ml-0"
                    }`}
                  onClick={() => setMainTab(tab)}
                >
                  {tab}
                </button>
              )
            )}
          </nav>

          <section className="lg:max-w-[460px] relative mt-6 ">
            <Card>
              <SectionHeader icon={sun} title="Start / End Frame and Prompt" />
              <div className="text-sm text-[#727485] mt-4">
                <div className="bg-[#0d1116] rounded-[12px] h-[158px] relative">
                  <div className="mx-5 mt-[13px] absolute">
                    {!formState.prompt && (
                      <p className="text-[#727485] leading-7">
                        Please describe your creative ideas for the video, or
                        view
                        <span className="text-[#82fac2]"> Help Center</span> for
                        a quick start.
                      </p>
                    )}
                  </div>
                  <label htmlFor="prompt" />
                  <textarea
                    type="text"
                    id="prompt"
                    name="prompt"
                    value={formState.prompt}
                    rows={5}
                    cols={38}
                    onChange={(e) =>
                      setFormState({ ...formState, prompt: e.target.value })
                    }
                    className=" absolute ml-5 top-[30px] text-ellipsis bg-transparent outline-none overflow-y-hidden resize-none text-white"
                  />
                  {formState.prompt && (
                    <button
                      onClick={() => setFormState({ ...formState, prompt: "" })}
                      className="absolute right-4 bottom-2 text-white hover:text-white"
                    >
                      <img src={deleteIcon} alt="" />
                    </button>
                  )}
                </div>
              </div>
              <div className="flex w-full  items-center justify-between rounded-b-[12px] p-2">
                <div>
                  <span className="text-[#999bac] text-sm mr-1">Hints:</span>
                  <div className="inline-flex bg-[#ffffff0f] text-sm items-center rounded-lg mr-1 text-[#f5f8fa] p-2">
                    Chinese style CG
                  </div>
                  <div className="inline-flex bg-[#ffffff0f] text-sm items-center rounded-lg text-[#f5f8fa] p-2">
                    Blue melancholy
                  </div>
                </div>
                <div className="inline-flex items-center">
                  <button className="text-white">
                    <img src={refresh} alt="" />
                  </button>
                </div>
              </div>
            </Card>

            <Card className="mb-[85px] md:mb-32">
              <SectionHeader icon={setting} title="Settings" />
              <div className="mb-5 text-[#999bac] flex justify-start items-start">
                <div className="text-sm leading-8">
                  <div className="mb-2">Aspect Ratio:</div>
                  <AspectRatioSelector
                    selectedRatio={selectedRatio}
                    onRatioChange={setSelectedRatio}
                  />
                </div>
              </div>
              <div className="mt-5 block">
                <label className="pr-3 mb-2 text-[#999bac] ">
                  Generating Count:
                  <span className="text-white"> 4</span>
                </label>
                <Slider defaultValue={4} step={1} marks min={0} max={9} />
              </div>
            </Card>
          </section>
        </main>
        {/* <AssetsPanel /> */}
        <footer className="flex items-center justify-center md:block">
          <div
            className="fixed bottom-0 left-0 w-full h-[118px] md:block hidden pt-1 md:px-12 z-[3]"
            style={{
              background: "linear-gradient(0deg,#0d1116 40%,#0d111600)",
            }}
          />
          <div className="fixed bottom-0 left-0 w-full max-md:mb-4 md:h-[118px] pt-1 px-4 md:px-12 z-[3]">
            <div className="inline-block md:ml-[10px]">
              <button
                type="submit"
                disabled={formState.prompt ? false : true}
                className={`px-4 py-[6px] rounded-full w-[calc(100vw-32px)] md:w-[344px] h-12
                  ${formState.prompt
                    ? "bg-[#6c6cf5] hover:!bg-[#5252e5] text-white"
                    : "bg-[#333a45] text-[#727485] "
                  } font-[550] text-lg`}
              >
                {isPending ? "Generating..." : "Generate"}
              </button>
            </div>
          </div>
          <p className="text-[#727485] text-sm mb-3 hidden md:block fixed bottom-0 w-full pt-1 px-4 lg:px-12 z-[3] text-center">
            The generated contents do not represent the views, positions or
            attitudes of Archiks88 AI. Please use them responsibly and kindly.
          </p>
        </footer>
      </form>
    </div>
  );
};

export default ImageAI;

// import { useState } from "react";

// async function sendImageRequest(prompt, options) {
//   const response = await fetch("http://localhost:3000/generate-image", {
//     method: "POST",
//     headers: {
//       "Content-Type": "application/json",
//     },
//     body: JSON.stringify({ prompt, options }),
//   });

//   if (!response.ok) {
//     throw new Error("Failed to generate image, check your input.");
//   }

//   const imageBlob = await response.blob();
//   return URL.createObjectURL(imageBlob);
// }

// function ImageAI() {
//   const [formState, setFormState] = useState({ result: null });
//   const [isPending, setIsPending] = useState(false);

//   async function submitAction(event) {
//     event.preventDefault();
//     setIsPending(true);

//     const formData = new FormData(event.target);
//     const prompt = formData.get("prompt");
//     const options = {
//       quality: formData.get("quality"),
//       aspect_ratio: formData.get("aspectRatio"),
//       format: formData.get("format"),
//     };

//     try {
//       const imageUrl = await sendImageRequest(prompt, options);
//       setFormState({ result: "success", imageUrl, prompt });
//     } catch (error) {
//       setFormState({ result: "error", message: error.message });
//     } finally {
//       setIsPending(false);
//     }
//   }

//   return (
//     <div className="flex gap-4 max-w-[70rem] mx-auto items-start">
//       <form
//         onSubmit={submitAction}
//         className="flex flex-col w-[25rem] justify-between gap-8"
//       >
//         <div className="flex flex-col gap-4">

//             <label htmlFor="prompt">Image Prompt</label>
//             <textarea type="text" id="prompt" name="prompt" />

//           <div className="flex gap-5">

//               <label htmlFor="quality">Quality</label>
//               <input
//                 type="number"
//                 id="quality"
//                 name="quality"
//                 min="1"
//                 max="100"
//                 step="1.0"
//                 defaultValue="80"
//                 className="w-[4rem]"
//               />

//               <label htmlFor="aspectRatio">Aspect Ratio</label>
//               <select
//                 id="aspectRatio"
//                 name="aspectRatio"
//                 defaultValue="1:1"
//                 className="p-[0.6rem] rounded-sm w-[6rem]"
//               >
//                 <option value="1:1">1:1</option>
//                 <option value="16:9">16:9</option>
//                 <option value="4:3">4:3</option>
//               </select>

//               <label htmlFor="format">Format</label>
//               <select
//                 id="format"
//                 name="format"
//                 defaultValue="png"
//                 className="p-[0.6rem] rounded-sm w-[5rem]"
//               >
//                 <option value="webp">WebP</option>
//                 <option value="png">PNG</option>
//                 <option value="jpg">JPG</option>
//               </select>

//           </div>
//         </div>
//         <p className="flex justify-end">
//           <button
//             type="submit"
//             disabled={isPending}
//             className="bg-sky-400 text-black py-3 rounded-lg hover:bg-sky-500 disabled:cursor-not-allowed disabled:bg-stone-400 disabled:text-stone-600 px-10 text-lg"
//           >
//             {isPending ? "Generating..." : "Generate!"}
//           </button>
//         </p>
//       </form>
//       <div className="h-[25rem] flex-1 flex justify-center items-center">
//         {!formState.result && (
//           <p className="text-stone-400 p-8 font-mono">
//             Press "Generate" to generate an image based on your prompt.
//           </p>
//         )}
//         {formState.result === "success" && (
//           <img
//             src={formState.imageUrl}
//             alt={formState.prompt}
//             className="h-[25rem] shadow-2xl rounded-md"
//           />
//         )}
//         {formState.result === "error" && (
//           <p className="text-red-200">{formState.message}</p>
//         )}
//       </div>
//     </div>
//   );
// }

// export default ImageAI;
