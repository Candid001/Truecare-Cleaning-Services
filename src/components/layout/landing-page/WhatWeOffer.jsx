import React from "react";
import Apartments from "@assets/apartments.svg";
import Offices from "@assets/offices.svg";
import Clinics from "@assets/clinics.svg";
import Property from "@assets/property.svg";
import Projects from "@assets/projects.svg";
import { BsArrowRight } from "react-icons/bs";

const WhatWeOffer = () => {
  return (
    <div className="xl:pt-24 md:pt-32 pt-36 w-[90%] mx-auto">
      <div className="flex flex-col gap-14 md:gap-[72px]">
        <div className="flex flex-col gap-2 text-center md:gap-3">
          <h3 className="font-medium text-sm text-btn-primary bg-[#E6F2FF] p-1 rounded-sm w-fit self-center">
            What We Offer
          </h3>
          <div className="flex flex-col gap-6 md:w-[600px] self-center">
            <h1 className="font-semibold text-[40px] md:text-[52px]">
              Our Cleaning Services
            </h1>
            <p>
              We provide customized cleaning solutions for homes, offices, and
              commercial spaces designed to fit your schedule and maintain
              spotless, healthy environments.
            </p>
          </div>
        </div>

        <div className="flex flex-col gap-6">
          <div className="flex flex-col gap-6 lg:grid lg:grid-cols-3">
            <div
              className="relative h-[400px] w-full rounded-xl bg-cover bg-center overflow-hidden"
              style={{
                backgroundImage: `linear-gradient(rgba(0,0,0,0), rgba(0,0,0,0.8)), url(${Apartments})`,
                backgroundSize: "cover",
                backgroundPosition: "center",
              }}
            >
              <div className="absolute bottom-4 left-0 right-0 text-white py-6 px-3 md:p-6">
                <h3 className="flex items-center justify-between font-medium text-2xl">
                  Homes & Apartments <BsArrowRight />
                </h3>
              </div>
            </div>

            <div
              className="relative h-[400px] w-full rounded-xl bg-cover bg-center overflow-hidden"
              style={{
                backgroundImage: `linear-gradient(rgba(0,0,0,0), rgba(0,0,0,0.8)), url(${Offices})`,
                backgroundSize: "cover",
                backgroundPosition: "center",
              }}
            >
              <div className="absolute bottom-4 left-0 right-0 text-white py-6 px-3">
                <h3 className="flex items-center justify-between font-medium text-2xl">
                  Offices & Small Businesses <BsArrowRight />
                </h3>
              </div>
            </div>

            <div
              className="relative h-[400px] w-full rounded-xl bg-cover bg-center overflow-hidden"
              style={{
                backgroundImage: `linear-gradient(rgba(0,0,0,0), rgba(0,0,0,0.8)), url(${Clinics})`,
                backgroundSize: "cover",
                backgroundPosition: "center",
              }}
            >
              <div className="absolute bottom-4 left-0 right-0 text-white py-6 px-3">
                <h3 className="flex items-center justify-between font-medium text-2xl">
                  Clinics & Wellness Centers <BsArrowRight />
                </h3>
              </div>
            </div>
          </div>

          <div className="flex flex-col gap-6 lg:grid lg:grid-cols-2">
            <div
              className="relative h-[400px] w-full rounded-xl bg-cover bg-center overflow-hidden"
              style={{
                backgroundImage: `linear-gradient(rgba(0,0,0,0), rgba(0,0,0,0.8)), url(${Property})`,
                backgroundSize: "cover",
                backgroundPosition: "center",
              }}
            >
              <div className="absolute bottom-4 left-0 right-0 text-white py-6 px-3">
                <h3 className="flex items-center justify-between font-medium text-2xl">
                  Property Managers & Realtors <BsArrowRight />
                </h3>
              </div>
            </div>
            <div
              className="relative h-[400px] w-full rounded-xl bg-cover bg-center overflow-hidden"
              style={{
                backgroundImage: `linear-gradient(rgba(0,0,0,0), rgba(0,0,0,0.8)), url(${Projects})`,
                backgroundSize: "cover",
                backgroundPosition: "center",
              }}
            >
              <div className="absolute bottom-4 left-0 right-0 text-white py-6 px-3">
                <h3 className="flex items-center justify-between font-medium text-2xl">
                  Post-Construction Projects <BsArrowRight />
                </h3>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default WhatWeOffer;
