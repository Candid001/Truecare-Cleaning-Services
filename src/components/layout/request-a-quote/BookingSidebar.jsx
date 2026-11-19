import { Phone, ClipboardList, Sparkles, Smile, ShieldCheck, Leaf, BadgeCheck, Clock } from "lucide-react";

const steps = [
  { icon: ClipboardList, title: "Send your request", text: "Takes about two minutes." },
  { icon: Phone, title: "Get your estimate", text: "A clear, upfront quote. No hidden fees." },
  { icon: Sparkles, title: "We clean", text: "Our team arrives on time with everything needed." },
  { icon: Smile, title: "You relax", text: "Backed by our satisfaction guarantee." },
];

const perks = [
  { icon: ShieldCheck, label: "Fully insured & bonded" },
  { icon: Leaf, label: "Eco-friendly products" },
  { icon: BadgeCheck, label: "100% satisfaction guaranteed" },
  { icon: Clock, label: "On time, every visit" },
];

const BookingSidebar = () => (
  <aside className="space-y-5 lg:sticky lg:top-36 self-start">
    <div className="rounded-2xl bg-gradient-to-br from-blue-tertiary via-deep-blue to-btn-primary text-white p-6 space-y-4">
      <p className="text-[#5EE6B0] text-sm font-semibold uppercase tracking-wide">Prefer to talk?</p>
      <h3 className="text-2xl font-semibold leading-tight">Call us for a quick quote</h3>
      <a href="tel:+13065526150" className="inline-flex items-center gap-2 bg-white text-deep-blue rounded-full px-5 py-3 font-semibold text-sm">
        <Phone size={16} /> +1 (306) 552-6150
      </a>
      <p className="text-white/80 text-sm">Mon–Fri 8 AM–6 PM · Sat–Sun 9 AM–4 PM</p>
    </div>

    <div className="rounded-2xl border border-border-grey bg-white p-6">
      <h3 className="font-semibold text-lg mb-4">What happens next</h3>
      <ol className="space-y-4">
        {steps.map(({ icon: Icon, title, text }, i) => (
          <li key={title} className="flex gap-3">
            <span className="shrink-0 w-9 h-9 rounded-full bg-btn-sec/10 text-btn-sec flex items-center justify-center">
              <Icon size={18} />
            </span>
            <div>
              <p className="font-semibold text-sm">{i + 1}. {title}</p>
              <p className="text-grey-pri text-sm">{text}</p>
            </div>
          </li>
        ))}
      </ol>
    </div>

    <div className="rounded-2xl bg-muted-blue border border-blue-100 p-6">
      <ul className="space-y-3">
        {perks.map(({ icon: Icon, label }) => (
          <li key={label} className="flex items-center gap-3 text-sm font-medium">
            <Icon size={18} className="text-btn-sec" /> {label}
          </li>
        ))}
      </ul>
    </div>
  </aside>
);

export default BookingSidebar;
