import { ArrowRight } from "lucide-react";

function ServicesCard({ heading, desc, link }) {
    return (
        <a href={link} className="group col-span-1 bg-white rounded-xl p-8 md:p-10 flex flex-col gap-4 border-2 border-transparent hover:border-btn-sec transition shadow-sm">
            <h4 className="text-2xl font-semibold text-blue-tertiary">{heading}</h4>
            <p className="text-grey-pri flex-1">{desc}</p>
            <span className="inline-flex items-center gap-2 text-btn-primary font-semibold">
                Learn More <ArrowRight className="h-4 w-4 group-hover:translate-x-1 transition" />
            </span>
        </a>
    );
}

export default ServicesCard;
