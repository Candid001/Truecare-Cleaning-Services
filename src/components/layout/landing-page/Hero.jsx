import React from "react";
import Ficon from "@assets/frame.svg?component";
import Button from "../../Button.jsx";
import HeroImg from "@assets/hero-bg1.svg";
import HeroBg from "@assets/hero-bg.svg";

const Hero = () => {
  return (
    <div
      className="relative text-center text-white space-y-10 py-20 min-h-[750px]"
      style={{
        backgroundImage: `url(${HeroBg})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
    >
      <div className={`w-fit mx-auto space-y-7 px-2.5 md:px-0`}>
        <div className={`space-y-5`}>
          {/* Top message */}
          <div className="flex justify-center items-center gap-2">
            <Ficon />
            <p className="text-sm md:text-base">
              Fully insured and bonded so you can relax knowing your space is in
              trusted hands.
            </p>
          </div>

          <h1 className="font-semibold text-4xl md:text-[57px] lg:text-[61px] leading-[120%] md:w-4/5 lg:w-[70%] xl:max-w-3/5 mx-auto">
            Bring Your Space to Life with the TrueCare Touch
          </h1>
        </div>

        <p className="font-medium md:max-w-1/2 mx-auto">
          Professional cleaning for homes, offices, and rentals across
          Saskatchewan. Eco-friendly products, reliable cleaners, and results
          that make your space shine every time.
        </p>
      </div>

      {/* Buttons */}
      <div className="flex flex-col items-center gap-4 md:flex-row md:justify-center md:w-4/5 lg:w-1/2 mx-auto px-10 md:px-0">
        <a href="tel:+16393850823" className="w-full">
          <Button
            text="Call Us: +1-639-385-0823"
            variant={`default`}
            cta={true}
          />
        </a>
        <a href="/request-a-quote" className="w-full">
          <Button text="Request a Quote" variant={`tertiary`} cta={true} />
        </a>
        <a href="https://truecarecleaningservices.setmore.com" target="_blank" rel="noopener noreferrer" className="w-full">
          <Button text="Book Now" variant={`tertiary`} cta={true} />
        </a>
      </div>

      <div
        className={`absolute w-[90%] -bottom-20 lg:-bottom-24 xl:-bottom-14 left-1/2 md:w-4/5 lg:w-[70%] xl:w-3/5 h-[250px] md:h-[320px] -translate-x-1/2 rounded-3xl`}
        style={{
          backgroundImage: `url(${HeroImg})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      ></div>
    </div>
  );
};

export default Hero;
