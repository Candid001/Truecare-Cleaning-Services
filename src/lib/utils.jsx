import {Building2, Hospital, Hotel, HouseIcon, School} from "lucide-react";

import OfficeAndSMB1 from "@assets/office-and-smb-1.svg"
import OfficeAndSMB2 from "@assets/office-and-smb-2.svg"
import OfficeAndSMB3 from "@assets/office-and-smb-3.svg"
import OfficeAndSMB4 from "@assets/office-and-smb-4.svg"

import ServiceHomeApartments1 from "@assets/home-and-apartments-1.svg"
import ServiceHomeApartments2 from "@assets/home-and-apartments-2.svg"
import ServiceHomeApartments3 from "@assets/home-and-apartments-3.svg"
import ServiceHomeApartments4 from "@assets/home-and-apartments-4.svg"

import ClinicsAndWellnessCenter1 from "@assets/clinic-and-wellness-center-1.svg"
import ClinicsAndWellnessCenter2 from "@assets/clinic-and-wellness-center-2.svg"
import ClinicsAndWellnessCenter3 from "@assets/clinic-and-wellness-center-3.svg"
import ClinicsAndWellnessCenter4 from "@assets/clinic-and-wellness-center-4.svg"

export const navHoverClass = "hover:border-b-2 hover:border-btn-primary"

export const DropDownItems = [
    {
        link: "/home-and-apartments-cleaning",
        icon: <HouseIcon className="h-4 w-4"/>,
        name: "Home & Apartments",
        desc: "Customized regular and deep cleans for comfort."
    },
    {
        link: "/office-and-small-business-cleaning",
        icon: <Building2 className="h-4 w-4"/>,
        name: "Offices & Small Businesses",
        desc: "Cleaning for a professional workspace."
    },
    {
        link: "/property-realtors-cleaning",
        icon: <School className="h-4 w-4"/>,
        name: "Property Managers & Realtors",
        desc: "Cleaning for a rental and sale-ready."
    },
    {
        link: "/clinics-and-wellness-centers-cleaning",
        icon: <Hospital className="h-4 w-4"/>,
        name: "Clinics & Wellness Centers",
        desc: "Cleaning for a healthcare and wellness."
    },
    {
        link: "/post-construction-cleaning",
        icon: <Hotel className="h-4 w-4"/>,
        name: "Post-Construction Projects",
        desc: "Cleanup that makes new builds move-in."
    }
]

export const navItems = [
    {
        name: "Home",
        to: "/"
    },
    {
        name: "About Us",
        to: "/about"
    },
    {
        name: "Request a Quote",
        to: "/request-a-quote"
    },
    {
        name: "Contact Us",
        to: "/contact-us"
    }
]

export const servicesImages = {
    homeAndApartments: [ServiceHomeApartments1, ServiceHomeApartments2, ServiceHomeApartments3, ServiceHomeApartments4],
    officeAndSMB: [OfficeAndSMB1, OfficeAndSMB2, OfficeAndSMB3, OfficeAndSMB4],
    clinicsAndWellnessCenter: [ClinicsAndWellnessCenter1, ClinicsAndWellnessCenter2, ClinicsAndWellnessCenter3, ClinicsAndWellnessCenter4],
}

export const servicesIncluded = {
    homeAndApartments: [
        "General dusting and surface cleaning",
        "Vacuuming and mopping of all floors",
        "Kitchen cleaning including appliance",
        "Bathroom sanitization and deodorizing",
        "Window and mirror polishing",
        "Optional deep cleaning or add-on services",
    ],
    officeAndSMB: [
        "Daily, weekly, or bi-weekly cleaning schedules",
        "Dusting of desks, surfaces, and office electronics",
        "Vacuuming carpets and mopping hard floors",
        "Restroom cleaning, sanitizing, and supply restock",
        "Trash removal and recycling",
        "⦁	Kitchen, lunchroom, and break area cleaning"
    ],
    propertyRealtors: [
        "Move-in & move-out deep cleaning",
        "Appliance and fixture cleaning",
        "Floor vacuuming and mopping",
        "Bathroom and kitchen sanitization",
        "Wall and baseboard dusting",
        "Window and glass cleaning",
        "Light debris removal and final touches"
    ],
    clinicsAndWellnessCenter: [
        "Thorough disinfection of high-touch areas",
        "Sanitization of treatment rooms, waiting areas, and common spaces",
        "Floor cleaning (vacuuming, sweeping, and mopping)",
        "Restroom cleaning, sanitizing, and supply restocking",
        "Countertops, sinks, and fixtures wiped and disinfected",
        "Waste removal and proper disposal",
        "Light dusting of furniture, shelves, and equipment",
        "Optional deep cleaning add-ons for periodic maintenance"
    ],
    constructionCleaning: [
        "Thorough dust removal from walls, ceilings, vents, and fixtures",
        "Vacuuming, mopping, and polishing all floors",
        "Interior and exterior window cleaning",
        "Wipe-down of cabinets, countertops, and appliances",
        "Removal of paint splatter, adhesive residue, and construction debris",
        "Deep cleaning of kitchens and bathrooms",
        "Final walk-through to ensure the space is flawless and ready to use"
    ]
}

export const serviceWhyChooseUS = {
    homeAndApartments: [
        "Trusted, background-checked cleaners",
        "Eco-friendly products safe for kids and pets",
        "Flexible scheduling to fit your routine",
        "Honest, transparent pricing",
        "Satisfaction guaranteed every visit"
    ],
    officeAndSMB: [
        "After-hours and weekend cleaning tailored to your schedule",
        "Professional cleaners who are trained and background-checked",
        "Eco-friendly products that are safe for your staff and workspace",
        "Custom cleaning plans for businesses of all sizes",
        "Consistent, dependable service every single visit"
    ],
    propertyRealtors: [
        "Fast turnaround which is perfect for tight move-out timelines",
        "Experienced team familiar with rental property standards",
        "Detail-focused cleaning that helps listings stand out",
        "Trusted by property managers across Saskatchewan",
        "Fully insured, bonded, and committed to your satisfaction"
    ],
    clinicsAndWellnessCenter: [
        "Trained team experienced in medical and wellness environments",
        "Strict hygiene practices that meet industry standards",
        "Eco-friendly and safe cleaning products",
        "Flexible scheduling to avoid disruption to your clients",
        "Reliable, insured, and detail-focused"
    ],
    constructionCleaning: [
        "Skilled team experienced in post-construction and renovation cleaning",
        "Professional tools designed for fine dust and heavy debris",
        "Eco-friendly products safe for new finishes and materials",
        "Flexible scheduling to match your project timeline",
        "Fully insured, bonded, and committed to complete satisfaction"
    ]
}

export const services = [
    {
        name: "Home & Apartments Cleaning",
        desc: "Enjoy a spotless home with regular or deep cleaning tailored to your comfort and lifestyle.",
        link: "/home-and-apartments-cleaning"
    },
    {
        name: "Office & Small Business Cleaning",
        desc: "Keep your workspace fresh, organized, and productive with flexible cleaning options including after-hours service.",
        link: "/office-and-small-business-cleaning"
    },
    {
        name: "Property Realtors Cleaning",
        desc: "Create a great first impression for showings, open houses, or new tenants with spotless, move-in-ready spaces.",
        link: "/property-realtors-cleaning"
    },
    {
        name: "Clinic & Wellness Center Cleaning",
        desc: "Maintain a sanitary, professional environment with cleaning designed for health and wellness facilities.",
        link: "/clinics-and-wellness-centers-cleaning"
    },
    {
        name: "Post-Construction Cleaning",
        desc: "From dust to debris, we make new builds and renovations move-in ready with detailed, careful cleaning.",
        link: "/post-construction-cleaning"
    },
]

export const serviceCta = {
    homeAndApartments: {
        cta: "Ready for a Cleaner Home?",
        heading: "Book Your TrueCare Cleaning Today",
        desc: "Reclaim your time, relax, and leave the cleaning to us. Our home cleaning team is ready to bring true care, freshness, and comfort straight to your door."
    },
    propertyRealtors: {
        cta: "Reliable Turnover Cleaning Partner",
        heading: "Let’s Keep Your Properties Market-Ready",
        desc: "Partner with TrueCare for fast, detailed cleaning that keeps your listings spotless and your tenants happy — every time, right on schedule."
    },
    clinicsAndWellnessCenter: {
        cta: "Your Hygiene, Our Priority",
        heading: "Let’s Keep Your Clinic Safe and Spotless",
        desc: "Partner with TrueCare for consistent, professional cleaning that supports health, safety, and comfort giving your patients the clean care experience they deserve"
    },
    constructionCleaning: {
        cta: "Ready for the Final Touch?",
        heading: "Let’s Make Your Project Move-In Ready",
        desc: "We bring your new space to life with spotless results. Fast, detailed, and reliable post-construction cleaning across Saskatchewan done right the first time."
    },
    requestAQuote: {
        cta: "Prefer to Talk?",
        heading: "Call or Message Us Anytime",
        desc: "Need a faster response? Reach our friendly support team directly we’re always happy to help you schedule or customize your cleaning plan.",
    },
    aboutUs: {
        cta: "Experience the TrueCare Touch",
        heading: "Let’s Make Your Space Shine",
        desc: "Discover cleaning that goes beyond surface sparkle. Our trained team brings care, quality, and peace of mind to every space we enter.",
    },
}