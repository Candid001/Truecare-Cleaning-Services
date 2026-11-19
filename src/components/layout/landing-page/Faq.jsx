import React, { useState } from "react";
import { Plus, Minus, Phone } from "lucide-react";
import { Link } from "react-router-dom";

export const FAQS = [
  {
    q: "How do I get a quote?",
    a: "Fill in the short online request form or call us at +1 (306) 552-6150. We'll send you a clear, upfront estimate. Quotes are free and there's no pressure to book.",
  },
  {
    q: "Are there any hidden fees?",
    a: "No. We keep pricing transparent and tell you what to expect before the clean, so there are no surprises afterwards.",
  },
  {
    q: "What types of cleaning do you offer?",
    a: "We clean homes and apartments, offices and small businesses, property managers' and realtors' units, clinics and wellness centers, and post-construction projects.",
  },
  {
    q: "Are your cleaners insured and bonded?",
    a: "Yes. TrueCare is fully insured and bonded, so your home or business is protected while our team is on site.",
  },
  {
    q: "Are your cleaning products safe for kids and pets?",
    a: "We use eco-friendly, non-toxic cleaning products that are gentle on families and pets. If you have a specific sensitivity, tell us in the quote form and we'll plan around it.",
  },
  {
    q: "What if I'm not happy with the cleaning?",
    a: "Your satisfaction is guaranteed. If something was missed, let us know and we'll make it right.",
  },
  {
    q: "Which areas do you serve?",
    a: "We serve Regina and surrounding Saskatchewan communities. Not sure if you're covered? Call or message us and we'll confirm.",
  },
  {
    q: "What are your hours?",
    a: "Monday to Friday 8 AM – 6 PM, and Saturday and Sunday 9 AM – 4 PM.",
  },
];

const Faq = ({ className = "" }) => {
  const [open, setOpen] = useState(0);

  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: FAQS.map(({ q, a }) => ({
      "@type": "Question",
      name: q,
      acceptedAnswer: { "@type": "Answer", text: a },
    })),
  };

  return (
    <section className={`w-[92%] max-w-6xl mx-auto py-16 md:py-20 ${className}`}>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
      <div className="grid lg:grid-cols-[.8fr_1.2fr] gap-10 lg:gap-16">
        <div className="space-y-4 lg:sticky lg:top-36 self-start">
          <p className="bg-muted-blue text-highlight-blue-500 font-medium text-sm w-fit px-3 py-1 rounded-sm">FAQ</p>
          <h2 className="font-semibold text-3xl md:text-[40px] leading-tight">Questions? We&apos;ve Got Answers</h2>
          <p className="text-grey-pri">
            Can&apos;t find what you&apos;re looking for? Our team is happy to help.
          </p>
          <div className="flex flex-wrap gap-3 pt-2">
            <a href="tel:+13065526150" className="inline-flex items-center gap-2 bg-btn-primary text-white rounded-full px-5 py-3 text-sm font-semibold">
              <Phone size={16} /> +1 (306) 552-6150
            </a>
            <Link to="/request-a-quote" className="inline-flex items-center bg-btn-sec text-white rounded-full px-5 py-3 text-sm font-semibold">
              Get a Free Quote
            </Link>
          </div>
        </div>

        <div className="space-y-3">
          {FAQS.map(({ q, a }, i) => {
            const isOpen = open === i;
            return (
              <div key={q} className={`rounded-2xl border transition ${isOpen ? "border-btn-sec bg-white shadow-md" : "border-border-grey bg-white"}`}>
                <button
                  type="button"
                  aria-expanded={isOpen}
                  onClick={() => setOpen(isOpen ? -1 : i)}
                  className="w-full flex items-center justify-between gap-4 text-left px-5 py-4 font-semibold"
                >
                  <span>{q}</span>
                  <span className={`shrink-0 rounded-full p-1.5 ${isOpen ? "bg-btn-sec text-white" : "bg-muted-blue text-btn-primary"}`}>
                    {isOpen ? <Minus size={16} /> : <Plus size={16} />}
                  </span>
                </button>
                {isOpen && <p className="px-5 pb-5 text-grey-pri leading-relaxed">{a}</p>}
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Faq;
