import React, { useRef, useState, useEffect } from "react";
import { ArrowRight, ArrowLeft } from "lucide-react";
import Star from "@assets/star.svg";

const WhatClientsSay = () => {
  const scrollRef = useRef(null);
  const [activeIndex, setActiveIndex] = useState(0);

  const testimonials = [
    {
      id: 1,
      name: "Sarah L. – Regina",
      text: "As a mom of two, I barely have time to keep up with housework. TrueCare stepped in and made our home feel lighter and fresher. They’re always on time and the results speak for themselves.",
    },
    {
      id: 2,
      name: "Daniel K. – Moose Jaw",
      text: "I run a small office, and consistency matters. TrueCare has been reliable from day one. The team communicates well and leaves the office spotless every time.",
    },
    {
      id: 3,
      name: "Maya R. – White City",
      text: "Booking was easy, and the cleaning quality stays the same no matter who comes. My home always feels fresh after they leave.",
    },
    {
      id: 4,
      name: "Ahmed T. – Winnipeg",
      text: "Great service. They arrive when they say they will and deliver a thorough, professional clean.",
    },
    {
      id: 5,
      name: "Lisa G. – Edmonton",
      text: "I love that their products are eco-friendly. My home feels clean without the harsh chemical smell.",
    },
    {
      id: 6,
      name: "Owen R. – Vancouver",
      text: "Good service, reliable staff, and great attention to detail. Highly recommend.",
    },
  ];

  const moveActive = (direction) => {
    if (direction === "left" && activeIndex > 0) {
      setActiveIndex(activeIndex - 1);
    }

    if (direction === "right" && activeIndex < testimonials.length - 1) {
      setActiveIndex(activeIndex + 1);
    }
  };

  useEffect(() => {
    const container = scrollRef.current;
    if (!container) return;

    const cardWidth = container.children[0].offsetWidth;
    const gap = 16;

    container.scrollTo({
      left: activeIndex * (cardWidth + gap),
      behavior: "smooth",
    });
  }, [activeIndex]);

  return (
    <div className="xl:pt-24 md:pt-32 pt-36 w-[90%] mx-auto flex flex-col gap-12">
      <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
        <h1 className="font-semibold text-[32px] sm:text-[40px]">
          What Clients Say
        </h1>

        <div className="flex gap-4">
          <button
            className={`p-3 rounded-full ${
              activeIndex === 0
                ? "bg-[#CCCCCC] text-white"
                : "bg-[#E6F0FF] text-[#0066CC]"
            }`}
            disabled={activeIndex === 0}
            onClick={() => moveActive("left")}
          >
            <ArrowLeft size={20} />
          </button>

          <button
            className={`p-3 rounded-full ${
              activeIndex === testimonials.length - 1
                ? "bg-[#CCCCCC] text-white"
                : "bg-[#0066CC] text-white"
            }`}
            disabled={activeIndex === testimonials.length - 1}
            onClick={() => moveActive("right")}
          >
            <ArrowRight size={20} />
          </button>
        </div>
      </div>

      <div
        ref={scrollRef}
        className="flex gap-4 lg:gap-6 overflow-x-auto scroll-smooth no-scrollbar"
      >
        {testimonials.map((item, i) => {
          const active = i === activeIndex;
          const bg = active ? "#0066CC" : "#F5FAFF";
          const text = active ? "text-white" : "text-black";

          return (
            <div
              key={item.id}
              onClick={() => setActiveIndex(i)}
              style={{ backgroundColor: bg }}
              className={`w-[300px] h-[359px] md:w-[340px] lg:w-[360px] shrink-0 rounded-3xl p-8 flex flex-col justify-between transition-all duration-300 cursor-pointer ${text}`}
            >
              <div className="mb-4">
                <img src={Star} alt="Star" className="w-8 h-8" />
              </div>

              <div className="flex flex-col gap-3">
                <p className="font-medium">{item.name}</p>
                <p className="text-sm leading-relaxed">{item.text}</p>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default WhatClientsSay;
