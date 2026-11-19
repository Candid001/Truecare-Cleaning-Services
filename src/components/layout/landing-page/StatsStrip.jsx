import React from "react";

// Only verifiable facts here. Swap in real numbers (homes cleaned, review count,
// years in business) as soon as you have them.
const stats = [
  { value: "5", label: "Specialized cleaning services" },
  { value: "$0", label: "Hidden fees. Ever." },
  { value: "100%", label: "Satisfaction guarantee" },
  { value: "Mon–Fri", label: "8–6 · Sat–Sun 9–4, Regina & area" },
];

const StatsStrip = () => (
  <section className="bg-muted-blue border-b border-blue-100">
    <div className="w-[92%] max-w-7xl mx-auto py-10 grid grid-cols-2 md:grid-cols-4 gap-y-8 gap-x-4">
      {stats.map((s) => (
        <div key={s.label} className="text-center">
          <p className="text-3xl md:text-4xl font-semibold text-btn-primary">{s.value}</p>
          <p className="mt-1 text-sm md:text-base text-grey-pri">{s.label}</p>
        </div>
      ))}
    </div>
  </section>
);

export default StatsStrip;
