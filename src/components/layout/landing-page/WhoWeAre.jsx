import React from "react";
import CardImg1 from "@assets/frame9.svg";
import CardImg2 from "@assets/frame91.svg";
import CardImg3 from "@assets/frame92.svg";

const WhoWeAre = () => {
  return (
    <div className="xl:pt-24 md:pt-32 pt-36 w-[90%] mx-auto">
      <div className="flex flex-col gap-12 text-center md:gap-[72px]">
        <div className="w-full flex flex-col gap-2">
          <h3 className="bg-[#F0F7FF] p-1 w-fit rounded-sm font-medium text-sm text-[#0066CC] self-center">
            Who We Are
          </h3>
          <div className="flex flex-col gap-6">
            <h1 className="font-semibold text-[40px] ">
              Cleaning with TrueCare
            </h1>
            <p className="lg:w-[720px] self-center">
              We’re a reliable cleaning company in Saskatchewan, providing
              spotless homes and workspaces with eco-friendly products, trusted
              professionals, and consistent, high-quality service.
            </p>
          </div>
        </div>

        {/* Card Section */}
        <div className="flex flex-col gap-6 lg:flex-row">
          <div className="flex flex-col gap-10 p-10 border-[0.5px] rounded-xl border-[#EBEBEB] text-start">
            <img src={CardImg1} alt="Image" className="h-14 w-14" />
            <div className="flex flex-col gap-1">
              <h2 className="font-medium text-2xl">
                Experienced Professionals
              </h2>
              <p>
                Our trained cleaners deliver consistent, detailed results using
                proven methods that ensure every surface shines flawlessly
                clean.
              </p>
            </div>
          </div>

          <div className="flex flex-col gap-10 p-10 border-[0.5px] rounded-xl border-[#EBEBEB] text-start">
            <img src={CardImg2} alt="Image" className="h-14 w-14" />
            <div className="flex flex-col gap-1">
              <h2 className="font-medium text-2xl">Eco-Friendly Products</h2>
              <p>
                We use biodegradable, non-toxic cleaning solutions that are safe
                for your family, pets, and the environment.
              </p>
            </div>
          </div>

          <div className="flex flex-col gap-10 p-10 border-[0.5px] rounded-xl border-[#EBEBEB] text-start">
            <img src={CardImg3} alt="Image" className="h-14 w-14" />
            <div className="flex flex-col gap-1">
              <h2 className="font-medium text-2xl">On-Time, Every Time</h2>
              <p>
                We value your schedule and guarantee punctual, reliable cleaning
                services that keep your space shining exactly when you need it.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default WhoWeAre;
