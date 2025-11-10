import React, { useState } from "react";
import OfficeBefore from "@assets/untidy-office.png";
// import OfficeAfter from "@assets/tidy-office.png";

const WhyChooseUs = () => {
  const [isAfter, setIsAfter] = useState(false);

  const handleToggle = (state) => setIsAfter(state);

  return (
    <div className="px-4 md:px-10 lg:px-20 py-10 flex flex-col gap-10">
      <div
        className="relative bg-cover bg-center w-full h-[300px] sm:h-[350px] md:h-[400px] lg:h-[500px] rounded-2xl transition-all duration-500 ease-in-out"
        style={{
          backgroundImage: `url(${isAfter ? OfficeAfter : OfficeBefore})`,
        }}
      >
        <div className="absolute top-4 left-1/2 -translate-x-1/2 bg-white rounded-xl shadow-md flex items-center gap-2 px-2 py-1 z-50">
          <button
            onClick={() => handleToggle(false)}
            className={`px-4 py-2 rounded-md text-sm md:text-base font-medium transition-colors ${
              !isAfter ? "bg-[#FDFEFF] text-black" : "text-gray-500"
            }`}
          >
            Before
          </button>

          <button
            onClick={() => handleToggle(true)}
            className={`px-4 py-2 rounded-md text-sm md:text-base font-medium transition-colors ${
              isAfter ? "bg-[#FDFEFF] text-black" : "text-gray-500"
            }`}
          >
            After
          </button>
        </div>
      </div>
    </div>
  );
};

export default WhyChooseUs;
