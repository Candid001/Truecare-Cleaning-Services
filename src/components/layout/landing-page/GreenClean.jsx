import React from "react";
import { Link } from "react-router-dom";
import { Leaf, Baby, PawPrint, Wind, Check } from "lucide-react";

const points = [
  { icon: Leaf, title: "Eco-friendly products", text: "Cleaning products chosen to work on grime without harsh fumes." },
  { icon: Baby, title: "Safe for kids", text: "Surfaces your family touches every day, cleaned with care." },
  { icon: PawPrint, title: "Safe for pets", text: "A fresh home that is gentle on the four-legged family too." },
  { icon: Wind, title: "Fresher air", text: "A clean you can feel when you walk in, not just see." },
];

const GreenClean = () => (
  <section className="relative overflow-hidden bg-gradient-to-br from-[#E9FAF2] via-white to-muted-blue py-16 md:py-24">
    <div className="absolute -left-20 -top-20 w-80 h-80 rounded-full bg-btn-sec/10 blur-3xl" />
    <div className="relative w-[92%] max-w-7xl mx-auto grid lg:grid-cols-[.9fr_1.1fr] gap-12 items-center">
      <div className="space-y-6">
        <span className="inline-flex items-center gap-2 rounded-full bg-btn-sec/10 text-btn-sec px-4 py-1.5 text-sm font-semibold">
          <Leaf size={16} /> Green Clean
        </span>
        <h2 className="font-semibold text-3xl md:text-[44px] leading-[1.12] text-blue-tertiary">
          Clean Regina Homes,
          <span className="block text-btn-sec">Gentle on the Planet</span>
        </h2>
        <p className="text-grey-pri leading-relaxed">
          Every TrueCare clean uses eco-friendly products, so your home or workplace
          comes out spotless without the harsh chemical smell. Add green to your
          cleaning routine today.
        </p>
        <ul className="space-y-2 text-sm md:text-base">
          {["Eco-friendly products on every job", "Satisfaction guaranteed every visit"].map((t) => (
            <li key={t} className="flex items-center gap-3">
              <span className="grid place-items-center h-5 w-5 rounded-full bg-btn-sec text-white"><Check size={13} strokeWidth={3} /></span>
              {t}
            </li>
          ))}
        </ul>
        <Link to="/request-a-quote" className="inline-block bg-btn-sec text-white rounded-full px-7 py-3.5 font-semibold text-sm hover:brightness-110 transition shadow-lg">
          Book a Green Clean
        </Link>
      </div>
      <div className="grid sm:grid-cols-2 gap-5">
        {points.map(({ icon: Icon, title, text }) => (
          <div key={title} className="bg-white rounded-2xl p-6 border border-btn-sec/30 shadow-sm">
            <span className="inline-flex p-3 rounded-full bg-btn-sec/10 text-btn-sec mb-4"><Icon size={24} /></span>
            <h3 className="font-semibold text-lg mb-1 text-blue-tertiary">{title}</h3>
            <p className="text-grey-pri text-sm leading-relaxed">{text}</p>
          </div>
        ))}
      </div>
    </div>
  </section>
);

export default GreenClean;
