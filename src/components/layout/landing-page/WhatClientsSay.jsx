import React, { useRef } from "react";
import { ArrowRight, ArrowLeft } from "lucide-react";
import Star from "@assets/star.svg";

const WhatClientsSay = () => {
  const scrollRef = useRef(null);

  const scroll = (direction) => {
    const container = scrollRef.current;
    if (container) {
      const scrollAmount = container.clientWidth * 0.9;
      container.scrollBy({
        left: direction === "left" ? -scrollAmount : scrollAmount,
        behavior: "smooth",
      });
    }
  };

  const testimonials = [
    {
      id: 1,
      name: "Sarah L. – Regina",
      text: "TrueCare made our home sparkle. The team was professional, punctual, and left everything spotless beyond expectations.",
      color: "#0066CC",
    },
    {
      id: 2,
      name: "Daniel K. – Moose Jaw",
      text: "We’ve used TrueCare for months reliable service, fair pricing, and top-notch cleaning every single time.",
      color: "#F5FAFF",
    },
    {
      id: 3,
      name: "Maya R. – White City",
      text: "I love how easy booking is, and my office always smells fresh. Excellent communication and consistent results!",
      color: "#F5FAFF",
    },

  ];

  return (
    <div className="xl:pt-24 md:pt-32 pt-36 w-[90%] mx-auto flex flex-col gap-12">
      {/* Header and controls */}
      <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
        <h1 className="font-semibold text-[32px] sm:text-[40px]">
          What Clients Say
        </h1>
        <div className="flex gap-4">
          <button
            className="p-3 rounded-full bg-[#E6F0FF] text-[#0066CC]"
            onClick={() => scroll("left")}
          >
            <ArrowLeft size={20} />
          </button>
          <button
            className="p-3 rounded-full bg-[#0066CC] text-white"
            onClick={() => scroll("right")}
          >
            <ArrowRight size={20} />
          </button>
        </div>
      </div>

      {/* Scrollable testimonials */}
      <div
        ref={scrollRef}
        className="flex gap-4 lg:gap-6 overflow-x-auto scroll-smooth scrollbar-hide"
      >
        {testimonials.map((item) => (
          <div
            key={item.id}
            style={{ backgroundColor: item.color }}
            className={`w-[300px] h-[359px] md:w-[340px] lg:w-[360px] shrink-0 rounded-3xl p-8 flex flex-col justify-between transition-transform duration-300 ${
              item.color === "#F5FAFF" ? "text-black" : "text-white"
            }`}
          >
            <div className="mb-4">
              <img src={Star} alt="Star" className="w-8 h-8" />
            </div>
            <div className="flex flex-col gap-3">
              <p className="font-medium">{item.name}</p>
              <p className="text-sm leading-relaxed">{item.text}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default WhatClientsSay;