import {NavLink} from "react-router-dom"
import {HouseIcon} from "lucide-react";
import { Building2 } from 'lucide-react';
import { School } from 'lucide-react';
import { Hospital } from 'lucide-react';
import { Hotel } from 'lucide-react';

function NavDrop() {
    const DropDownItems = [
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

    return(
        <div
            className="absolute left-0 top-10.5 w-[275px] bg-white border-t border-t-blue-100 shadow-lg shawow-shadow z-10 rounded-b-lg py-5 space-y-5"
        >
            {DropDownItems.map((item, index) => (
                <NavLink to={item.link} className={`block`} key={index}>
                    {({ isActive }) => (
                        <span className={`${isActive && "border-l border-l-btn-primary/80"} pl-3 flex items-start gap-2 ${!isActive && "hover:text-btn-primary"}`}>
                            {item.icon}

                            <span className="block space-y-2 -mt-1">
                                <span className={`block ${isActive ? "text-btn-primary border-b border-b-btn-primary/50": 'text-nav-default'} font-medium`}>{item.name}</span>
                                {isActive && <span className={`block text-text-nav-desc text-xs`}>{item.desc}</span>}
                            </span>
                    </span>
                    )}
                </NavLink>
            ))}
        </div>
    )
}

export default NavDrop;