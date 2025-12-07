import React from "react";
import Hiwi1 from "@assets/howitworksimage1.svg";
import Hiwi2 from "@assets/howitworksimage2.svg";
import Hiwi3 from "@assets/howitworksimage3.svg";

const HowItWorks = () => {
  return (
    <div className="xl:pt-24 md:pt-32 pt-36 w-[90%] mx-auto flex flex-col gap-12">
      <div className="flex flex-col gap-2 lg:w-[626px] self-center">
        <p className="text-btn-primary bg-[#E6F2FF] rounded-sm p-1 w-fit self-center font-medium">
          Simple 3-Step Process
        </p>
        <div className="flex flex-col gap-6 text-center">
          <h2 className="font-semibold text-[40px]">How it Works</h2>
          <p>
            Cleaning shouldn’t be stressful. With TrueCare, it’s as easy as
            booking, scheduling, and relaxing while we take care of the rest.
          </p>
        </div>
      </div>

      <div className="relative h-fit flex flex-col gap-[72px]">
        <div
          className="sticky top-0 w-full h-[380px] rounded-2xl overflow-hidden bg-cover bg-center z-10"
          style={{
            backgroundImage: `linear-gradient(to right, rgba(0,51,102,0.85) 40%, rgba(0,51,102,0) 70%), url(${Hiwi2})`,
          }}
        >
          <div className="absolute left-0 top-0 h-fit flex flex-col justify-between p-8 text-white">
            <p className="text-4xl font-bold leading-none">
              01<span className="text-white/60 text-lg font-medium"> /03</span>
            </p>

            <div>
              <h3 className="text-2xl font-semibold mt-6">Request a Quote</h3>

              <p className="text-sm text-white/80 mt-3 leading-relaxed max-w-xs">
                Tell us what you need through our online form or a quick call.
                We’ll send a clear, upfront estimate; no surprises.
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
          <div className="absolute left-0 top-0 h-fit flex flex-col justify-between p-8 text-white">
            <p className="text-4xl font-bold leading-none">
              02<span className="text-white/60 text-lg font-medium"> /03</span>
            </p>

            <div>
              <h3 className="text-2xl font-semibold mt-6">We Clean</h3>

              <p className="text-sm text-white/80 mt-3 leading-relaxed max-w-xs">
                Our professional cleaners arrive on time with all supplies and
                follow your preferences for consistent, high-quality results.
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
          <div className="absolute left-0 top-0 h-fit flex flex-col justify-between p-8 text-white">
            <p className="text-4xl font-bold leading-none">
              03<span className="text-white/60 text-lg font-medium"> /03</span>
            </p>

            <div>
              <h3 className="text-2xl font-semibold mt-6">You Relax</h3>

              <p className="text-sm text-white/80 mt-3 leading-relaxed max-w-xs">
                Enjoy a fresh, spotless space knowing everything was done with
                TrueCare’s commitment to quality.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HowItWorks;
