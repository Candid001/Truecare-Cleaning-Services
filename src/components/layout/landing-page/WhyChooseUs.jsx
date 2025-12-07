import React, { useState } from "react";
import OfficeBefore from "@assets/untidy-office.png";
import OfficeAfter from "@assets/office-after.svg";

const WhyChooseUs = () => {
  const [isAfter, setIsAfter] = useState(false);
  const [active, setActive] = useState(1);

  const handleToggle = (state) => setIsAfter(state);

  const items = [
    {
      id: 1,
      title: "Consistent Quality",
      text: "Every visit follows a detailed checklist to ensure your space is spotless, fresh, and flawlessly cleaned.",
    },
    {
      id: 2,
      title: "Clear Communication",
      text: "From booking to follow-up, we keep you informed and make the process simple and stress-free.",
    },
    {
      id: 3,
      title: "Transparent Pricing",
      text: "No hidden fees or confusing bundles; just honest, upfront pricing tailored to your needs.",
    },
    {
      id: 4,
      title: "Customer-Focused Care",
      text: "We treat your space with the same attention and respect as our own, building trust with every clean.",
    },
  ];

  return (
    <div className="xl:pt-24 md:pt-32 pt-36 w-[90%] mx-auto flex flex-col gap-10 lg:flex lg:flex-row lg:justify-between lg:gap-[60px]">
      <div
        className="relative bg-cover bg-center w-full h-[400px] md:h-[400px] md:w-[588px] lg:h-[550px] rounded-2xl transition-all duration-500 ease-in-out"
        style={{
          backgroundImage: `url(${isAfter ? OfficeAfter : OfficeBefore})`,
        }}
      >
        <div className="absolute top-4 left-1/2 -translate-x-1/2 bg-white rounded-xl shadow-md flex items-center gap-2 px-2 py-1 z-40">
          <button
            onClick={() => handleToggle(false)}
            className={`px-4 py-2 rounded-md text-sm md:text-base font-medium transition-colors ${
              !isAfter ? "bg-[#e8f1ff] text-black" : "text-gray-500"
            }`}
          >
            Before
          </button>

          <button
            onClick={() => handleToggle(true)}
            className={`px-4 py-2 rounded-md text-sm md:text-base font-medium transition-colors ${
              isAfter ? "bg-[#e8f1ff] text-black" : "text-gray-500"
            }`}
          >
            After
          </button>
        </div>
      </div>

      {/* Second Div */}
      <div className="flex flex-col gap-8 lg:w-1/2">
        <div className="flex flex-col gap-6">
          <h1 className="font-semibold text-[40px]">Why Choose Us</h1>
          <p>
            We’re more than a cleaning company, we’re dependable partners
            committed to exceptional service, eco-friendly solutions, and
            results that truly shine.
          </p>
        </div>

        <div className="flex flex-col gap-6 rounded-lg divide-y divide-purple-200">
          {items.map((item) => (
            <div
              key={item.id}
              onMouseEnter={() => setActive(item.id)}
              onClick={() => setActive(item.id)}
              className={`cursor-pointer transition-all duration-300 px-4 py-4 ${
                active === item.id ? "bg-muted-blue" : " hover:bg-gray-50"
              }`}
            >
              <div className="flex items-center justify-between">
                <h3
                  className={`font-semibold text-base md:text-lg ${
                    active === item.id ? "text-black" : "text-gray-700"
                  }`}
                >
                  {item.id}. {item.title}
                </h3>
              </div>

              {active === item.id && (
                <p className="text-sm text-gray-600 mt-2 max-w-lg">
                  {item.text}
                </p>
              )}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default WhyChooseUs;
