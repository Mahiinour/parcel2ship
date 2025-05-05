import React from "react";
import fedex from "../assets/images/fedex.png";
import everi from "../assets/images/everi.png";
import wsw from "../assets/images/wsw.png";

const Courier = () => {
  return (
    <div className="bg-[#F7F9FB] rounded-xl shadow-md py-8 px-6 text-center max-w-2xl mx-auto mt-[-40px] z-10 relative">
      <h2 className="text-lg md:text-xl font-bold mb-6">
        Comparing Prices from the UAE’s Most Trusted Parcel Couriers
      </h2>
      <div className="flex justify-center items-center gap-4 flex-wrap">
        <img src={fedex} alt="fedex" className="w-[100px] h-auto rounded" />
        <img src={everi} alt="everi" className="w-[100px] h-auto rounded" />
        <img src={wsw} alt="wsw" className="w-[100px] h-auto rounded" />
        <img src={everi} alt="everi" className="w-[100px] h-auto rounded" />
        <img src={wsw} alt="wsw" className="w-[100px] h-auto rounded" />
      </div>
    </div>
  );
};

export default Courier;
