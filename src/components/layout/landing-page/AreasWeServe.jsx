import React from "react";
import { MapPin, Phone } from "lucide-react";
import Map from "@components/layout/about-us/Map.jsx";

// Edit this list to match exactly where you want to take bookings.
const areas = [
  "Regina",
  "White City",
  "Emerald Park",
  "Pilot Butte",
  "Balgonie",
  "Lumsden",
  "Moose Jaw",
  "Surrounding Saskatchewan communities",
];

const AreasWeServe = () => (
  <section className="w-[92%] max-w-7xl mx-auto py-16 md:py-20">
    <div className="grid lg:grid-cols-[.9fr_1.1fr] gap-10 items-center">
      <div className="space-y-6">
        <p className="bg-muted-blue text-highlight-blue-500 font-medium text-sm w-fit px-3 py-1 rounded-sm">
          Areas We Serve
        </p>
        <h2 className="font-semibold text-3xl md:text-[40px] leading-tight">
          Proudly Cleaning Regina &amp; Surrounding Saskatchewan
        </h2>
        <p className="text-grey-pri">
          Homes, offices, and properties across the Queen City and the communities
          around it. Don&apos;t see your area? Give us a call. We may still be able to help.
        </p>
        <ul className="flex flex-wrap gap-2">
          {areas.map((a) => (
            <li
              key={a}
              className="inline-flex items-center gap-1.5 rounded-full border border-blue-100 bg-white px-4 py-2 text-sm font-medium shadow-sm"
            >
              <MapPin size={14} className="text-btn-sec" /> {a}
            </li>
          ))}
        </ul>
        <a
          href="tel:+13065526150"
          className="inline-flex items-center gap-2 bg-btn-primary text-white rounded-full px-6 py-3 font-semibold hover:bg-deep-blue transition"
        >
          <Phone size={17} /> +1 (306) 552-6150
        </a>
      </div>
      <div className="rounded-3xl overflow-hidden border border-blue-100 shadow-md">
        <Map />
      </div>
    </div>
  </section>
);

export default AreasWeServe;
