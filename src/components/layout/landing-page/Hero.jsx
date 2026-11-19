import React from "react";
import { Phone, ShieldCheck, Leaf, Clock, Star, ArrowRight, CheckCircle2 } from "lucide-react";
import HeroBg from "@assets/hero-bg.svg";

const GOOGLE_REVIEWS_URL =
  "https://www.google.com/search?q=TrueCare+Cleaning+Services+Regina+reviews";

const badges = [
  { icon: ShieldCheck, label: "Fully Insured & Bonded" },
  { icon: Leaf, label: "Eco-Friendly Products" },
  { icon: CheckCircle2, label: "100% Satisfaction Guaranteed" },
  { icon: Clock, label: "On-Time, Every Visit" },
];

const quickServices = [
  { label: "Home & Apartment", to: "/home-and-apartments-cleaning" },
  { label: "Office & Small Business", to: "/office-and-small-business-cleaning" },
  { label: "Property Managers & Realtors", to: "/property-realtors-cleaning" },
  { label: "Clinics & Wellness Centers", to: "/clinics-and-wellness-centers-cleaning" },
  { label: "Post-Construction", to: "/post-construction-cleaning" },
];

const Hero = () => {
  return (
    <section className="relative overflow-hidden text-white">
      <div
        className="absolute inset-0"
        style={{
          backgroundImage: `linear-gradient(115deg, rgba(0,41,82,.96) 0%, rgba(0,61,122,.9) 55%, rgba(0,102,204,.78) 100%), url(${HeroBg})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      />
      <div className="absolute -right-24 -top-24 w-96 h-96 rounded-full bg-btn-sec/25 blur-3xl" />

      <div className="relative w-[92%] max-w-7xl mx-auto pt-14 pb-12 md:pt-20 grid lg:grid-cols-[1.15fr_.85fr] gap-12 items-center">
        <div className="space-y-7">
          <a
            href={GOOGLE_REVIEWS_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-3 bg-white/10 backdrop-blur border border-white/20 rounded-full pl-3 pr-4 py-2 text-sm hover:bg-white/20 transition"
          >
            <span className="flex text-yellow-300">
              <Star size={15} fill="currentColor" />
            </span>
            <span className="font-medium">See what Regina clients say on Google</span>
            <ArrowRight size={15} />
          </a>

          <h1 className="font-semibold text-4xl md:text-6xl leading-[1.08]">
            Regina&apos;s Trusted
            <span className="block text-[#5EE6B0]">Cleaning Team</span>
          </h1>

          <p className="text-lg md:text-xl text-white/85 max-w-xl">
            Professional home, office, and rental cleaning across Regina and
            surrounding Saskatchewan. Eco-friendly products, reliable cleaners,
            and a spotless finish every time.
          </p>

          <div className="flex flex-col sm:flex-row gap-3 max-w-xl">
            <a
              href="/request-a-quote"
              className="flex-1 text-center bg-btn-sec hover:brightness-110 transition rounded-full px-7 py-4 font-semibold shadow-lg"
            >
              Book Online
            </a>
            <a
              href="tel:+13065526150"
              className="flex-1 inline-flex items-center justify-center gap-2 bg-white text-deep-blue rounded-full px-7 py-4 font-semibold hover:bg-blue-muted-pri transition"
            >
              <Phone size={18} /> +1 (306) 552-6150
            </a>
          </div>

          <p className="flex items-center gap-2 text-sm text-white/80">
            <span className="relative flex h-2.5 w-2.5">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[#5EE6B0] opacity-75" />
              <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-[#5EE6B0]" />
            </span>
            Booking open now · Free, no-pressure quotes
          </p>
        </div>

        <div className="bg-white text-grey rounded-3xl p-6 md:p-8 shadow-2xl space-y-5">
          <div>
            <p className="text-btn-sec font-semibold text-sm uppercase tracking-wide">
              Get Your Free Quote
            </p>
            <h2 className="font-semibold text-2xl text-deep-blue mt-1">
              What do you need cleaned?
            </h2>
          </div>
          <ul className="space-y-2">
            {quickServices.map((s) => (
              <li key={s.to}>
                <a
                  href={s.to}
                  className="flex items-center justify-between rounded-xl border border-border-grey px-4 py-3 text-sm font-medium hover:border-btn-primary hover:bg-muted-blue transition group"
                >
                  {s.label}
                  <ArrowRight size={16} className="text-btn-primary group-hover:translate-x-1 transition" />
                </a>
              </li>
            ))}
          </ul>
          <a
            href="/request-a-quote"
            className="block text-center bg-btn-primary text-white rounded-full py-3.5 font-semibold hover:bg-deep-blue transition"
          >
            Start My Quote
          </a>
        </div>
      </div>

      <div className="relative w-[92%] max-w-7xl mx-auto pb-10 flex flex-wrap gap-3">
        {badges.map(({ icon: Icon, label }) => (
          <span
            key={label}
            className="inline-flex items-center gap-2 bg-white/10 border border-white/20 rounded-full px-4 py-2 text-sm"
          >
            <Icon size={16} className="text-[#5EE6B0]" /> {label}
          </span>
        ))}
      </div>
    </section>
  );
};

export default Hero;
