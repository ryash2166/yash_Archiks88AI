import React from "react";
import Price from "../Components/Price/Price";
import Footer from "../Components/Footer/Footer";

const Pricing = () => {
  return (
    <div className="h-full bg-primary overflow-auto antialiased bg-grid-white/[0.02]">
      <div className="container px-4 mx-auto">
      <Price />
      <Footer margin={false} />
      </div>
    </div>
  );
};

export default Pricing;
