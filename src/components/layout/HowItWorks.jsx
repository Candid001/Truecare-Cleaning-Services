import React from "react";
import Hiwi1 from "../../assets/Howitworksimage1.svg";
import Hiwi2 from "../../assets/Howitworksimage2.svg";
import Hiwi3 from "../../assets/Howitworksimage3.svg";

const HowItWorks = () => {
  return (
    <div className="w-full h-fit py-10 flex flex-col gap-12 px-5 md:gap-[72px] md:px-10 md:py-20 lg:px-[120px]">
      <div className="flex flex-col gap-2 lg:w-[626px] self-center">
        <p className="text-[#0066CC] bg-[#E6F2FF] rounded-sm p-1 w-fit self-center font-medium">
          Simple 3-Step Process
        </p>
        <div className="flex flex-col gap-6 text-center">
          <h2 className="font-semibold text-[40px]">How it Works</h2>
          <p>
            We make cleaning simple and stress-free request a quote, choose your
            schedule, and our professional team delivers spotless results every
            single time.
          </p>
        </div>
      </div>

      <div className="relative h-[300vh] flex flex-col gap-[72px]">
        <div
          className="sticky top-0 w-full h-[380px] rounded-2xl overflow-hidden bg-cover bg-center z-10"
          style={{
            backgroundImage: `linear-gradient(to right, rgba(0,51,102,0.85) 40%, rgba(0,51,102,0) 70%), url(${Hiwi2})`,
          }}
        >
          <div className="absolute left-0 top-0 h-full flex flex-col justify-between p-8 text-white">
            <p className="text-4xl font-bold leading-none">
              01<span className="text-white/60 text-lg font-medium"> /03</span>
            </p>

            <div>
              <h3 className="text-2xl font-semibold mt-6">Request a Quote</h3>

              <p className="text-sm text-white/80 mt-3 leading-relaxed max-w-xs">
                Tell us what you need through our online form or a quick call.
                We’ll provide a clear, upfront estimate no surprises.
              </p>
            </div>
          </div>
        </div>

        <div
          className="sticky top-0 w-full h-[380px] rounded-2xl overflow-hidden bg-cover bg-center z-20"
          style={{
            backgroundImage: `linear-gradient(to right, rgba(0, 168, 107, 1) 10%, rgba(0, 66, 42, 0) 90%), url(${Hiwi1})`,
          }}
        >
          <div className="absolute left-0 top-0 h-full flex flex-col justify-between p-8 text-white">
            <p className="text-4xl font-bold leading-none">
              02<span className="text-white/60 text-lg font-medium"> /03</span>
            </p>

            <div>
              <h3 className="text-2xl font-semibold mt-6">We Clean</h3>

              <p className="text-sm text-white/80 mt-3 leading-relaxed max-w-xs">
                Our professional cleaners arrive on time with all supplies,
                following your preferences to deliver spotless, consistent
                results every time.
              </p>
            </div>
          </div>
        </div>

        <div
          className="sticky top-0 w-full h-[380px] rounded-2xl overflow-hidden bg-cover bg-center z-30"
          style={{
            backgroundImage: `linear-gradient(to right, rgba(108, 117, 125, 1) 10%, rgba(196, 212, 227, 0) 90%), url(${Hiwi3})`,
          }}
        >
          <div className="absolute left-0 top-0 h-full flex flex-col justify-between p-8 text-white">
            <p className="text-4xl font-bold leading-none">
              03<span className="text-white/60 text-lg font-medium"> /03</span>
            </p>

            <div>
              <h3 className="text-2xl font-semibold mt-6">You Relax</h3>

              <p className="text-sm text-white/80 mt-3 leading-relaxed max-w-xs">
                Enjoy your clean, fresh space knowing everything was handled
                with genuine care and TrueCare’s commitment to quality.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HowItWorks;
