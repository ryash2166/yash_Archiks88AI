import React, { useState } from "react";
import logo from "../../assets/logo.svg";
// import creadits from "../../assets/credits.png";
import Button from "../Common/Button";
// import New from "../../assets/new.png";
import Login from "../Login/Login";
import { Link } from "react-router";
import { useNavigation } from "../../Context/NavigationContext";
import MobileMenu from "./MobileMenu";

const Navbar = () => {
  const [showLoginPopup, setShowLoginPopup] = useState(false);
  const { setActiveTab } = useNavigation();

  const togglePopup = () => setShowLoginPopup(!showLoginPopup);

  const handleLogoClick = () => {
    setActiveTab("Home");
  };

  return (
    <div className="bg-[#0d1116] sticky top-0 z-20">
      <header className="h-[68px] w-full px-1 sm:px-5">
        <div className="flex h-full justify-between items-center">
          <div className="flex items-center  h-full ">
            {/* <div className="md:hidden ">
            <MobileMenu  />
            </div> */}
          <Link to="/" className="flex h-full max-sm:ml-[2px] items-center" onClick={handleLogoClick}>
            <img src={logo} alt="Logo" className="" />
          </Link>
          </div>
          <div className="flex items-center h-full">
            {/* <div className="flex cursor-pointer justify-center items-center flex-row rounded-full h-9 px-5 bg-[#ffffff14] text-sm mr-5 max-md:hidden">
              <img src={creadits} alt="" width={16} height={16} />
              <span className="ml-1 gradient-text text-transparent align-middle">
                Sign in for free credits
              </span>
            </div>
            <div className="mr-5 relative max-sm:hidden">
              <Button
                className="bg-[linear-gradient(135deg,#52ffba_9.27%,#23faec_46.96%,#0af_88.5%)]"
                title="API Calls"
              />
              <img
                src={New}
                alt=""
                className="w-[27px] h-4 absolute -top-[6px] -right-[15px] new-tag"
              />
            </div> */}
            <Button
              className="bg-[#6c6cf5] hover:!bg-[#5252e5] !px-3 sm:!px-6 "
              title="Sign In"
              onClick={togglePopup}
            />
          </div>
        </div>
      </header>

      {/* Import and Use Login Popup */}
      <Login isVisible={showLoginPopup} onClose={() => setShowLoginPopup(false)} />
    </div>
  );
};

export default Navbar;
