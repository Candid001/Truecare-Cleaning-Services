import React from "react";
import { BadgeCheck, ShieldCheck, Leaf, MessageSquareText } from "lucide-react";

const items = [
  { icon: BadgeCheck, title: "100% Satisfaction", text: "Satisfaction guaranteed every visit. If something is missed, tell us and we make it right." },
  { icon: ShieldCheck, title: "Insured & Bonded", text: "Your home and business are protected while our team is on site." },
  { icon: Leaf, title: "Eco-Friendly Clean", text: "Products that work hard on grime and stay gentle on people and pets." },
  { icon: MessageSquareText, title: "Straight Answers", text: "Clear pricing and clear communication. You always know what to expect." },
];

const Guarantee = () => (
  <section className="bg-gradient-to-br from-blue-muted-pri to-white py-16">
    <div className="w-[92%] max-w-7xl mx-auto">
      <h2 className="font-semibold text-3xl md:text-[40px] text-center mb-10">
        Our Promise to You
      </h2>
      <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-5">
        {items.map(({ icon: Icon, title, text }) => (
          <div key={title} className="bg-white rounded-2xl p-6 border border-blue-100 shadow-sm hover:shadow-md transition">
            <span className="inline-flex p-3 rounded-xl bg-btn-sec/10 text-btn-sec mb-4">
              <Icon size={26} />
            </span>
            <h3 className="font-semibold text-lg mb-2">{title}</h3>
            <p className="text-grey-pri text-sm leading-relaxed">{text}</p>
          </div>
        ))}
      </div>
    </div>
  </section>
);

export default Guarantee;
