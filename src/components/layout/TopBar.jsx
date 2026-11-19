import { Phone } from "lucide-react";

const TopBar = () => (
  <div className="bg-btn-sec text-white text-sm font-medium">
    <div className="w-[92%] mx-auto py-2 flex items-center justify-center gap-x-6 gap-y-1 flex-wrap text-center">
      <a href="tel:+13065526150" className="inline-flex items-center gap-2 hover:underline">
        <Phone size={15} />
        <span>
          Call Now For a Quote: <strong>+1 (306) 552-6150</strong>
        </span>
      </a>
      <span className="hidden md:inline opacity-90">Mon–Fri 8 AM–6 PM · Sat–Sun 9 AM–4 PM · Regina &amp; area</span>
    </div>
  </div>
);

export default TopBar;
