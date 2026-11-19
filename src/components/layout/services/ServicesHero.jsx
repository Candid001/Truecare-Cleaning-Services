import { Link } from "react-router-dom";
import { ChevronRight, Phone, ShieldCheck, Leaf, CheckCircle2 } from "lucide-react";
import HeroBg from "@assets/hero-bg.svg";

const pills = [
    { icon: ShieldCheck, label: "Insured & Bonded" },
    { icon: Leaf, label: "Eco-Friendly" },
    { icon: CheckCircle2, label: "Satisfaction Guaranteed" },
];

function ServicesHero({ nav, heading, desc, maxWH, maxWD, image }) {
    return (
        <div className="relative overflow-hidden text-white bg-gradient-to-br from-blue-tertiary via-deep-blue to-btn-primary">
            <div
                aria-hidden
                className={image ? "absolute inset-0" : "absolute inset-0 opacity-20"}
                style={{ backgroundImage: `url(${image || HeroBg})`, backgroundSize: "cover", backgroundPosition: "center" }}
            />
            {image && (
                <div aria-hidden className="absolute inset-0 bg-gradient-to-b from-blue-tertiary/85 via-blue-tertiary/75 to-deep-blue/85" />
            )}
            <div className={`relative w-[92%] max-w-6xl mx-auto text-center space-y-6 px-2 ${image ? "py-16 md:py-28" : "py-14 md:py-20"}`}>
                <nav aria-label="Breadcrumb" className="flex items-center justify-center gap-1 text-sm text-white/80">
                    <Link to="/" className="hover:text-white hover:underline">Home</Link>
                    <ChevronRight size={14} />
                    <span className="text-white">{nav}</span>
                </nav>
                <h1 className={`${maxWH || ""} mx-auto font-semibold text-[36px] md:text-[56px] leading-[115%]`}>{heading}</h1>
                <p className={`${maxWD || ""} mx-auto text-white/90 md:text-lg`}>{desc}</p>
                <div className="flex flex-wrap items-center justify-center gap-3 pt-2">
                    <Link to="/request-a-quote" className="bg-btn-sec hover:opacity-90 transition rounded-full px-7 py-3.5 font-semibold text-sm shadow-lg">
                        Book Online in 60 Seconds
                    </Link>
                    <a href="tel:+13065526150" className="bg-blue-tertiary/80 border border-white/30 hover:bg-blue-tertiary transition text-white rounded-full px-7 py-3.5 font-semibold text-sm inline-flex items-center gap-2">
                        <Phone size={16} /> +1 (306) 552-6150
                    </a>
                </div>
                <div className="flex flex-wrap justify-center gap-2 pt-2">
                    {pills.map(({ icon: Icon, label }) => (
                        <span key={label} className="inline-flex items-center gap-2 rounded-full bg-white/10 border border-white/20 px-3 py-1.5 text-xs md:text-sm">
                            <Icon size={14} className="text-btn-sec" /> {label}
                        </span>
                    ))}
                </div>
            </div>
        </div>
    );
}

export default ServicesHero;
