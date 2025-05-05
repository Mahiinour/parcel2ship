import React from "react";
import heroImage from "../assets/images/81bbef4354298fdc0f80e8f0e36a1a838df44382.png";

const HeroSection = () => {
  return (
    <section
      className="relative w-full h-screen overflow-hidden"
      style={{
        background:
          "linear-gradient(90deg, rgba(1,0,252,1) 0%, rgba(22,184,108,1) 100%)",
      }}
    >
      {/* description */}
      <div className="relative z-10 flex flex-col justify-center h-full px-6 md:px-20 text-white max-w-[50%]">
        <h1 className="text-3xl md:text-5xl font-bold leading-tight mb-6">
          Affordable Parcel <br /> Delivery Across the <br /> UAE & Worldwide
        </h1>
        <p className="text-base md:text-lg mb-8">
          Send parcels starting from just AED 9.
        </p>
        <button
          className="bg-white text-blue-700 font-semibold border border-blue-700 rounded"
          style={{
            width: "153px",
            height: "42px",
            padding: "8px 19px",
            borderRadius: "5px",
            borderWidth: "1px",
          }}
        >
          SIGN UP NOW
        </button>
      </div>

      {/* half image */}
      <div className="absolute top-0 right-0 w-1/2 h-full z-0">
        <img
          src={heroImage}
          alt="Courier Delivery"
          className="w-full h-full object-cover"
        />
      </div>
    </section>
  );
};

export default HeroSection;
