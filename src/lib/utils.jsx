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
        "General dusting and surface wipe-downs",
        "Vacuuming and mopping of all floors",
        "Kitchen cleaning and appliance care",
        "Bathroom sanitization and deodorizing",
        "Window and mirror polishing",
        "Optional deep cleaning or add-on requests",
    ],
    officeAndSMB: [
        "Daily or weekly cleaning schedules",
        "Dusting desks, fixtures, and electronics",
        "Floor mopping and carpet vacuuming",
        "Restroom sanitation and supply restock",
        "Trash collection and recycling",
        "Kitchen and break area cleaning"
    ],
    propertyRealtors: [
        "Move-in & move-out deep cleaning",
        "Appliance and fixture cleaning",
        "Floor vacuuming and mopping",
        "Bathroom and kitchen sanitization",
        "Wall and baseboard dusting",
        "Window and glass cleaning",
        "Debris removal and final touches"
    ],
    clinicsAndWellnessCenter: [
        "Move-in & move-out deep cleaning",
        "Appliance and fixture cleaning",
        "Floor vacuuming and mopping",
        "Bathroom and kitchen sanitization",
        "Wall and baseboard dusting",
        "Window and glass cleaning",
        "Debris removal and final touches"
    ],
    constructionCleaning: [
        "Dust removal from walls, ceilings, and fixtures",
        "Floor vacuuming, mopping, and polishing",
        "Window and glass cleaning (inside & out)",
        "Cabinet, countertop, and appliance wipe-down",
        "Paint, adhesive, and debris removal",
        "Bathroom and kitchen deep cleaning",
        "Final inspection to ensure spotless delivery"
    ]
}

export const serviceWhyChooseUS = {
    homeAndApartments: [
        "Reliable and background-checked cleaners",
        "Eco-friendly products safe for family and pets",
        "Flexible scheduling that fits your routine",
        "Affordable, transparent pricing",
        "Satisfaction guaranteed every visit"
    ],
    officeAndSMB: [
        "Flexible after-hours service to fit your workday",
        "Professional, background-checked cleaning team",
        "Eco-friendly and safe cleaning products",
        "Customized plans for all business sizes",
        "Satisfaction guaranteed every single time"
    ],
    propertyRealtors: [
        "Fast turnaround perfect for tight move-out schedules",
        "Professional team experienced with rental properties",
        "Detail-oriented cleaning that helps listings stand out",
        "Reliable service trusted by property managers across Saskatchewan",
        "Fully insured, bonded, and satisfaction guaranteed"
    ],
    clinicsAndWellnessCenter: [
        "Fast turnaround perfect for tight move-out schedules",
        "Professional team experienced with rental properties",
        "Detail-oriented cleaning that helps listings stand out",
        "Reliable service trusted by property managers across Saskatchewan",
        "Fully insured, bonded, and satisfaction guaranteed"
    ],
    constructionCleaning: [
        "Trained team experienced with post-construction cleaning",
        "Professional-grade tools for dust and debris removal",
        "Eco-friendly products safe for new finishes and materials",
        "Flexible scheduling to meet project deadlines",
        "Fully insured, bonded, and satisfaction guaranteed"
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
        desc: "Keep your workspace spotless and productive with flexible, after-hours cleaning tailored to your schedule and needs.",
        link: "/office-and-small-business-cleaning"
    },
    {
        name: "Property Realtors Cleaning",
        desc: "Keep your workspace spotless and productive with flexible, after-hours cleaning tailored to your schedule and needs.",
        link: "/property-realtors-cleaning"
    },
    {
        name: "Clinic & Wellness Center Cleaning",
        desc: "Maintain a sanitary, professional environment with cleaning designed for health and wellness spaces.",
        link: "/clinics-and-wellness-centers-cleaning"
    },
    {
        name: "Post-Construction Cleaning",
        desc: "From dust to debris, we make new builds move-in ready with precision and care.",
        link: "/post-construction-cleaning"
    },
]

export const serviceCta = {
    homeAndApartments: {
        cta: "Ready for a Cleaner Home?",
        heading: "Book Your TrueCare Cleaning Today",
        desc: "Reclaim your weekends and relax — our professional home cleaning team is ready to bring true care and freshness right to your doorstep."
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