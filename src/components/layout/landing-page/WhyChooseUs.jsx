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
      text: "We follow detailed cleaning checklists to ensure every room meets TrueCare’s standard spotless, fresh, and flawless.",
    },
    {
      id: 2,
      title: "Clear Communication",
      text: "We keep you updated every step of the way with clear communication before, during, and after our services.",
    },
    {
      id: 3,
      title: "Transparent Pricing",
      text: "No hidden charges or surprises, you always know what you’re paying for.",
    },
    {
      id: 4,
      title: "Customer-Focused Care",
      text: "Our priority is your satisfaction, and we tailor our services to meet your unique needs.",
    },
  ];

  return (
    <div className="px-4 md:px-10 lg:px-20 py-10 flex flex-col gap-10">
      <div
        className="relative bg-cover bg-center w-full h-[400px] md:h-[400px] lg:h-[500px] rounded-2xl transition-all duration-500 ease-in-out"
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
      <div className="flex flex-col gap-8">
        <div className="flex flex-col gap-6">
          <h1 className="font-semibold text-[40px]">Why Choose Us</h1>
          <p>
            We’re not just cleaners we’re trusted partners committed to reliable
            service, eco-friendly products, and spotless results that make every
            client’s space shine.
          </p>
        </div>

        <div className="flex flex-col gap-6 rounded-lg divide-y divide-purple-200">
          {items.map((item) => (
            <div
              key={item.id}
              onMouseEnter={() => setActive(item.id)}
              onClick={() => setActive(item.id)}
              className={`cursor-pointer transition-all duration-300 px-4 py-4 ${
                active === item.id
                  ? "bg-muted-blue"
                  : " hover:bg-gray-50"
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
