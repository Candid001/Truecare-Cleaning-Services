import React from "react";
import Ficon from "../../assets/Frame.svg";
import Button from "../ui/Button";
import Image from "../../assets/Frame 106.svg";
import Image1 from "../../assets/Frame 106 (1).svg";

const Hero = () => {
  return (
    <div className="relative bg-[#0066CC] w-full min-h-[700px] flex flex-col pt-10 text-center text-white px-5 md:px-10 lg:px-20 mb-20 z-40 md:h-[800px]">
      {/* Top message */}
      <div className="flex justify-center items-center gap-2 mt-10 md:mt-16">
        <img src={Ficon} alt="icon" className="w-5 h-5" />
        <p className="text-sm md:text-base">
          Fully insured & bonded for your peace of mind.
        </p>
      </div>

      {/* Main content */}
      <div className="flex flex-col items-center justify-center gap-8 max-w-[700px] mt-8 lg:ml-[270px] lg:w-[626px]">
        <h1 className="font-semibold text-3xl md:text-[57px] leading-tight tracking-tight lg:text-[61px] ">
          Every Space Deserves the TrueCare Touch
        </h1>

        <p className="font-medium text-sm md:text-base leading-relaxed">
          Experience spotless cleaning for homes, offices, and rentals across
          Saskatchewan. Dependable, eco-friendly, and handled with true care.
        </p>

        {/* Buttons */}
        <div className="flex flex-col gap-4 md:flex-row md:justify-center">
          <Button
            text="Call Us: +1-234-567-890"
            className="bg-white text-[#3184D6] text-[15px] px-5 py-3 rounded-[60px] font-medium w-[207px]"
          />
          <Button
            text="Request a Quote"
            className="bg-[#003D7A] text-white text-[15px] px-5 py-3 rounded-[60px] font-medium w-[207px]"
          />
        </div>
      </div>

      {/* Bottom images */}
      {/* Mobile image */}
      <img
        src={Image}
        alt="Image"
        className="absolute w-[340px] h-[249px] rounded-2xl md:hidden top-130 z-50 object-cover self-center"
      />

      {/* Desktop image */}
      <img
        src={Image1}
        alt="Image"
        className="hidden absolute md:block h-[289px] w-[90%] max-w-[1100px] rounded-2xl object-cover top-135 lg:top-140 lg:justify-center lg:ml-9"
      />
    </div>
  );
};

export default Hero;
