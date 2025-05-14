import React, { useEffect, useState } from "react";
// import { DateRangePicker } from "@nextui-org/react"; 
import nowork from "../../assets/nowork.svg";
import Button from "../Common/Button";
import { useNavigation } from "../../Context/NavigationContext";
import { Link } from "react-router-dom";

const ProfileTabs = () => {
  const [mainTab, setMainTab] = useState("Assets");
  const [assetsSubTab, setAssetsSubTab] = useState("All");
  const { setActiveTab } = useNavigation();

  // Effect to set default sub-tab when mainTab changes
  useEffect(() => {
    if (mainTab === "Assets") {
      setAssetsSubTab("All");
    } else if (mainTab === "Published" || mainTab === "Likes") {
      setAssetsSubTab("Creatives");
    }
  }, [mainTab]);

  // Content for sub-tabs
  const renderSubTabContent = () => {
    if (mainTab === "Assets") {
      switch (assetsSubTab) {
        case "All":
          return (
            <div className="text-center">
              <div className="pt-20 pt- mb-5">
                <div className="w-full text-center flex flex-col justify-center items-center">
                  <LazyLoadImg src={nowork} alt="No_Work" width={120} height={120} />
                  <p className="text-gray text-sm">
                    Release your creative potential. Experience the magic of
                    Archiks88 AI.
                  </p>
                  <div className="mt-3 flex gap-2">
                    <Link to="/ImageAI" onClick={() => setActiveTab("ImageAI")}>
                      <Button
                        className="bg-[linear-gradient(89.86deg,#a7ff1a,#82fac2,#47d4ff)] !px-5 !py-2 "
                        title="Generate Images"
                      />
                    </Link>
                    <Link to="/VideoAI" onClick={() => setActiveTab("VideoAI")}>
                      <Button
                        className="bg-[linear-gradient(89.86deg,#a7ff1a,#82fac2,#47d4ff)] !px-5 !py-2 "
                        title="Generate Videos"
                      />
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          );
        case "Images":
          return (
            <div className="text-center">
              <div className="pt-20 mb-5">
                <div className="w-full text-center flex flex-col justify-center items-center">
                  <LazyLoadImg src={nowork} alt="No_Work" width={120} height={120} />
                  <p className="text-gray text-sm">No Result Found</p>
                </div> 
              </div>
            </div>
          );
        case "Videos":
          return (
            <div className="text-center">
              <div className="pt-20 mb-5">
                <div className="w-full text-center flex flex-col justify-center items-center">
                  <LazyLoadImg src={nowork} alt="No_Work" width={120} height={120} />
                  <p className="text-gray text-sm">No Result Found</p>
                </div>
              </div>
            </div>
          );
        default:
          return null;
      }
    } else if (mainTab === "Published") {
      switch (assetsSubTab) {
        case "Creatives":
          return (
            <div className="text-center flex justify-center">
              <div className="pt-20 mb-5">
                <div>
                  <LazyLoadImg src={nowork} alt="No_Work" width={120} height={120} />
                  <p className="text-gray text-sm mb-3">No Works</p>
                </div>
              </div>
            </div>
          );
        case "Shorts":
          return (
            <div className="text-center flex justify-center">
              <div className="pt-20 mb-5">
                <div className="flex flex-col items-center">
                  <LazyLoadImg src={nowork} alt="No_Work" width={120} height={120} />
                  <p className="text-gray text-sm mb-3">
                    You haven't published any works. Share your masterpiece now.
                  </p>
                </div>
              </div>
            </div>
          );
        default:
          return null;
      }
    } else if (mainTab === "Likes") {
      switch (assetsSubTab) {
        case "Creatives":
          return (
            <div className="text-center flex justify-center">
              <div className="pt-20 mb-5">
                <div className="flex flex-col items-center">
                  <LazyLoadImg src={nowork} alt="No_Work" width={120} height={120} />
                  <p className="text-gray text-sm mb-3">
                    You haven't liked any works. Show some love to our
                    masterpiece.
                  </p>
                  <Link to="/" onClick={() => setActiveTab("Home")}>
                    <Button
                      className="bg-[linear-gradient(89.86deg,#a7ff1a,#82fac2,#47d4ff)] !px-5 !py-2"
                      title="Check It Out"
                    />
                  </Link>
                </div>
              </div>
            </div>
          );
        case "Shorts":
          return (
            <div className="text-center flex justify-center">
              <div className="pt-20 mb-5">
                <div className="flex flex-col items-center">
                  <LazyLoadImg src={nowork} alt="No_Work" width={120} height={120} />
                  <p className="text-gray text-sm mb-3">
                    You haven't liked any works. Show some love to our
                    masterpiece.
                  </p>
                  <Link to="/" onClick={() => setActiveTab("Home")}>
                    <Button
                      className="bg-[linear-gradient(89.86deg,#a7ff1a,#82fac2,#47d4ff)] !px-5 !py-2 "
                      title="Check It Out"
                    />
                  </Link>
                </div>
              </div>
            </div>
          );
        default:
          return null;
      }
    }
    return null;
  };

  return (
    <div className="flex flex-col space-y-4 p-2 md:p-4 rounded-lg shadow-md">
      {/* Main Tabs */}
      <div className="flex items-center justify-evenly sm:justify-normal space-x-4">
        {["Published", "Assets", "Likes"].map((tab) => (
          <button
            key={tab}
            className={`md:px-4 px-2 py-2 text-xl leading-7 font-medium transition-transform ${
              mainTab === tab
                ? "bg-primary text-transparent bg-clip-text bg-gradient-to-r from-[#52ffba] via-[#23faec] to-[#0af] border-b-2 border-teal-400 !ml-0"
                : "text-gray hover:text-white !ml-0"
            }`}
            onClick={() => setMainTab(tab)}
          >
            {tab}
          </button>
        ))}
      </div>

      {/* Sub Tabs */}
      <div className="flex justify-between items-center max-md:hidden">
        <div className="flex items-center p-1 rounded-full bg-primary border border-border-secondary">
          {(mainTab === "Assets"
            ? ["All", "Images", "Videos"]
            : ["Creatives", "Shorts"]
          ).map((subTab) => (
            <button
              key={subTab}
              className={`py-1.5 px-6 text-sm leading-6 font-medium rounded-full transition ${
                assetsSubTab === subTab
                  ? "bg-primary bg-gradient-to-r focus:outline-none from-[#52ffba] via-[#23faec] to-[#0af]"
                  : "text-white"
              }`}
              onClick={() => setAssetsSubTab(subTab)}
            >
              {subTab}
            </button>
          ))}
        </div>

        {/* Action Buttons */}
        {mainTab === "Assets" ? (
          <div className="flex items-center space-x-4">
            <button className="px-4 py-2 bg-gray-800 text-white text-sm rounded-lg hover:bg-gray-700 transition">
              Select
            </button>
            <button className="px-4 py-2 bg-gray-800 text-white text-sm rounded-lg hover:bg-gray-700 transition">
              Hierarchy
            </button>
            {/* <DateRangePicker variant="" /> */}
          </div>
        ) : (
          <Button
            className="bg-[linear-gradient(89.86deg,#a7ff1a,#82fac2,#47d4ff)] !px-5 !py-2"
            title="Publish"
          />
        )}
      </div>

      {/* Sub-Tab Content */}
      <div className="mt-6">{renderSubTabContent()}</div>
    </div>
  );
};

export default ProfileTabs;
