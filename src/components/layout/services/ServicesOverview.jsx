import { Link } from "react-router-dom";
import { Check, Phone } from "lucide-react";

function ServicesOverview({ desc, images, services, why }) {
    return (
        <div className="bg-white">
            {/* Intro: text + checks on the left, image on the right */}
            <section className="w-[92%] max-w-6xl mx-auto py-12 md:py-20 grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-14 items-center">
                <div className="space-y-6">
                    <p className="text-btn-sec font-semibold text-sm uppercase tracking-wide">Service Overview</p>
                    <h2 className="text-[28px] md:text-[38px] leading-[120%] font-semibold text-blue-tertiary">
                        Why customers choose TrueCare
                    </h2>
                    <p className="text-grey-pri leading-relaxed">{desc}</p>
                    <ul className="space-y-3">
                        {why.map((item, i) => (
                            <li key={i} className="flex items-start gap-3 text-sm md:text-base">
                                <span className="mt-0.5 shrink-0 grid place-items-center h-5 w-5 rounded-full bg-btn-sec text-white">
                                    <Check size={13} strokeWidth={3} />
                                </span>
                                <span>{item}</span>
                            </li>
                        ))}
                    </ul>
                    <div className="flex flex-wrap gap-3 pt-2">
                        <Link to="/request-a-quote" className="bg-btn-sec text-white rounded-full px-6 py-3 font-semibold text-sm hover:opacity-90 transition">
                            Get a Free Quote
                        </Link>
                        <a href="tel:+13065526150" className="border border-deep-blue text-deep-blue rounded-full px-6 py-3 font-semibold text-sm inline-flex items-center gap-2 hover:bg-muted-blue transition">
                            <Phone size={16} /> Call Us
                        </a>
                    </div>
                </div>
                <div
                    role="img"
                    aria-label="TrueCare cleaning"
                    className="rounded-2xl min-h-[300px] lg:min-h-[460px] shadow-lg"
                    style={{ backgroundImage: `url(${images[1] || images[0]})`, backgroundSize: "cover", backgroundPosition: "center" }}
                />
            </section>

            {/* What's included: green-bordered cards */}
            <section className="bg-muted-blue py-12 md:py-20">
                <div className="w-[92%] max-w-6xl mx-auto space-y-10">
                    <div className="text-center space-y-3">
                        <p className="text-btn-sec font-semibold text-sm uppercase tracking-wide">What's Included</p>
                        <h2 className="text-[28px] md:text-[38px] leading-[120%] font-semibold text-blue-tertiary">
                            Everything We Take Care Of
                        </h2>
                    </div>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                        {services.map((item, i) => (
                            <div key={i} className="bg-white rounded-xl border-2 border-btn-sec/80 p-6 flex items-start gap-4 shadow-sm">
                                <span className="shrink-0 grid place-items-center h-9 w-9 rounded-full bg-btn-sec/10 text-btn-sec">
                                    <Check size={18} strokeWidth={3} />
                                </span>
                                <p className="font-medium text-blue-tertiary pt-1.5">{item}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Gallery */}
            <section className="w-[92%] max-w-6xl mx-auto py-12 md:py-20 grid grid-cols-2 md:grid-cols-3 gap-4">
                {[images[0], images[2], images[3]].filter(Boolean).map((image, index) => (
                    <div
                        key={index}
                        role="img"
                        aria-label="TrueCare cleaning work"
                        className={`rounded-xl h-[200px] md:h-[280px] ${index === 0 ? "col-span-2 md:col-span-1" : ""}`}
                        style={{ backgroundImage: `url(${image})`, backgroundSize: "cover", backgroundPosition: "center" }}
                    />
                ))}
            </section>
        </div>
    );
}

export default ServicesOverview;
