import React from "react";
import Price from "../Components/Price/Price";
import Footer from "../Components/Footer/Footer";

const Pricing = () => {
  return (
    <div className="h-full container mx-auto px-4">
      <Price />
      <Footer margin={false} />
    </div>
  );
};

export default Pricing;
