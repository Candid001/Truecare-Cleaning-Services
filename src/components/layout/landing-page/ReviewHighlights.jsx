import React from "react";
import { Star, Quote, ArrowRight } from "lucide-react";

const GOOGLE_REVIEWS_URL =
  "https://www.google.com/search?q=TrueCare+Cleaning+Services+Regina+reviews";

const reviews = [
  {
    name: "Sarah L.",
    place: "Regina",
    text: "As a mom of two, I barely have time to keep up with housework. TrueCare stepped in and made our home feel lighter and fresher. They’re always on time and the results speak for themselves.",
  },
  {
    name: "Daniel K.",
    place: "Moose Jaw",
    text: "I run a small office, and consistency matters. TrueCare has been reliable from day one. The team communicates well and leaves the office spotless every time.",
  },
  {
    name: "Maya R.",
    place: "White City",
    text: "Booking was easy, and the cleaning quality stays the same no matter who comes. My home always feels fresh after they leave.",
  },
  {
    name: "Lisa G.",
    place: "Edmonton",
    text: "I love that their products are eco-friendly. My home feels clean without the harsh chemical smell.",
  },
];

const ReviewHighlights = () => (
  <section className="w-[92%] max-w-7xl mx-auto py-16 md:py-20">
    <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-4 mb-10">
      <div className="space-y-3">
        <p className="bg-muted-blue text-highlight-blue-500 font-medium text-sm w-fit px-3 py-1 rounded-sm">
          Client Love
        </p>
        <h2 className="font-semibold text-3xl md:text-[40px]">What Our Clients Say</h2>
      </div>
      <a
        href={GOOGLE_REVIEWS_URL}
        target="_blank"
        rel="noopener noreferrer"
        className="inline-flex items-center gap-2 text-btn-primary font-semibold hover:gap-3 transition-all"
      >
        Read more reviews on Google <ArrowRight size={18} />
      </a>
    </div>

    <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-5">
      {reviews.map((r, i) => (
        <figure
          key={r.name}
          className={`rounded-3xl p-7 flex flex-col gap-4 ${
            i === 0 ? "bg-btn-primary text-white lg:-translate-y-3" : "bg-muted-blue"
          }`}
        >
          <Quote size={28} className={i === 0 ? "text-white/60" : "text-btn-primary/40"} />
          <div className="flex text-yellow-400">
            {[...Array(5)].map((_, k) => (
              <Star key={k} size={16} fill="currentColor" />
            ))}
          </div>
          <blockquote className="text-sm leading-relaxed flex-1">{r.text}</blockquote>
          <figcaption className="font-semibold text-sm">
            {r.name} <span className="font-normal opacity-75">· {r.place}</span>
          </figcaption>
        </figure>
      ))}
    </div>
  </section>
);

export default ReviewHighlights;
