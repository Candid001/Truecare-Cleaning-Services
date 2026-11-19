import MultiStepQuoteForm from "@/components/layout/request-a-quote/MultiStepQuoteForm.jsx";
import BookingSidebar from "@/components/layout/request-a-quote/BookingSidebar.jsx";
import { Phone, ShieldCheck, Leaf, BadgeCheck } from "lucide-react";

const pills = [
    { icon: ShieldCheck, label: "Insured & Bonded" },
    { icon: Leaf, label: "Eco-Friendly" },
    { icon: BadgeCheck, label: "Satisfaction Guaranteed" },
];

function RequestAQuoteForm() {
    return (
        <>
            {/* Compact header band */}
            <div className="bg-gradient-to-br from-blue-tertiary via-deep-blue to-btn-primary text-white">
                <div className="w-[92%] max-w-6xl mx-auto py-8 md:py-10 flex flex-col md:flex-row md:items-center md:justify-between gap-5">
                    <div className="space-y-2">
                        <p className="text-[#5EE6B0] text-sm font-semibold uppercase tracking-wide">Book Your Cleaning</p>
                        <h1 className="text-3xl md:text-5xl font-semibold leading-tight">Get Your Free Quote</h1>
                        <p className="text-white/85 max-w-xl">Quick, simple and transparent. No hidden fees, no pressure.</p>
                    </div>
                    <div className="space-y-3">
                        <a href="tel:+13065526150" className="inline-flex items-center gap-2 bg-white text-deep-blue rounded-full px-5 py-3 font-semibold text-sm">
                            <Phone size={16} /> +1 (306) 552-6150
                        </a>
                        <div className="flex flex-wrap gap-2">
                            {pills.map(({ icon: Icon, label }) => (
                                <span key={label} className="inline-flex items-center gap-1.5 rounded-full bg-white/10 border border-white/20 px-3 py-1 text-xs">
                                    <Icon size={13} className="text-btn-sec" /> {label}
                                </span>
                            ))}
                        </div>
                    </div>
                </div>
            </div>

            {/* Form + sidebar */}
            <div className="w-[92%] max-w-6xl mx-auto py-8 md:py-12 grid lg:grid-cols-[1.6fr_1fr] gap-8 items-start">
                <MultiStepQuoteForm split />
                <BookingSidebar />
            </div>
        </>
    );
}

export default RequestAQuoteForm;
