import React from "react";
import { X, Check } from "lucide-react";

const others = [
  "Different cleaner and different results each visit",
  "Vague quotes that grow once they arrive",
  "Harsh chemicals and strong odours",
  "Hard to reach once the job is booked",
];

const us = [
  "Detailed checklist followed on every visit",
  "Upfront, transparent pricing. No hidden fees",
  "Eco-friendly products that are safe for families and pets",
  "Clear communication from booking to follow-up",
  "Fully insured and bonded",
];

const Compare = ({ className = "" }) => (
  <section className={`w-[92%] max-w-6xl mx-auto py-16 md:py-20 ${className}`}>
    <div className="text-center max-w-2xl mx-auto space-y-3 mb-12">
      <p className="bg-muted-blue text-highlight-blue-500 font-medium text-sm w-fit mx-auto px-3 py-1 rounded-sm">
        The TrueCare Difference
      </p>
      <h2 className="font-semibold text-3xl md:text-[40px] leading-tight">
        Say Goodbye to Cleanings You Have to Redo
      </h2>
    </div>

    <div className="grid md:grid-cols-2 gap-6">
      <div className="rounded-3xl border border-border-grey bg-white p-8">
        <h3 className="font-semibold text-xl text-grey-pri mb-5">The Other Cleaners</h3>
        <ul className="space-y-4">
          {others.map((t) => (
            <li key={t} className="flex gap-3 text-grey-pri">
              <X className="shrink-0 mt-0.5 text-error" size={20} />
              {t}
            </li>
          ))}
        </ul>
      </div>
      <div className="rounded-3xl bg-deep-blue text-white p-8 shadow-xl ring-4 ring-btn-sec/30">
        <h3 className="font-semibold text-xl mb-5">TrueCare Cleaning Services</h3>
        <ul className="space-y-4">
          {us.map((t) => (
            <li key={t} className="flex gap-3">
              <Check className="shrink-0 mt-0.5 text-[#5EE6B0]" size={20} />
              {t}
            </li>
          ))}
        </ul>
        <a
          href="/request-a-quote"
          className="inline-block mt-7 bg-btn-sec rounded-full px-7 py-3 font-semibold hover:brightness-110 transition"
        >
          Get My Free Quote
        </a>
      </div>
    </div>
  </section>
);

export default Compare;
