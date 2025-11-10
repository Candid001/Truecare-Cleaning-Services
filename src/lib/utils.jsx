import {Building2, Hospital, Hotel, HouseIcon, School} from "lucide-react";

export const navHoverClass = "hover:border-b-2 hover:border-btn-primary"

export const DropDownItems = [
    {
        link: "/",
        icon: <HouseIcon className="h-4 w-4"/>,
        name: "Home & Apartments",
        desc: "Customized regular and deep cleans for comfort."
    },
    {
        link: "/offices-and-small-businesses",
        icon: <Building2 className="h-4 w-4"/>,
        name: "Offices & Small Businesses",
        desc: "Cleaning for a professional workspace."
    },
    {
        link: "/property-managers-and-realtors",
        icon: <School className="h-4 w-4"/>,
        name: "Property Managers & Realtors",
        desc: "Cleaning for a rental and sale-ready."
    },
    {
        link: "/clinics-and-wellness-centers",
        icon: <Hospital className="h-4 w-4"/>,
        name: "Clinics & Wellness Centers",
        desc: "Cleaning for a healthcare and wellness."
    },
    {
        link: "/post-construction-projects",
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
        name: "Service Area",
        to: "/service-area"
    },
    {
        name: "Contact Us",
        to: "/contact-us"
    }
]