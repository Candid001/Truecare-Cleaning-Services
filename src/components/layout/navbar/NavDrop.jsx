import {NavLink} from "react-router-dom"
import {HouseIcon} from "lucide-react";

function NavDrop() {
    const DropDownItems = [
        {
            link: "/",
            icon: <HouseIcon className="h-4 w-4"/>,
            name: "Home & Apartments",
            desc: "Cleaning for a professional workspace."
        },
        {
            link: "/offices-and-small-businesses",
            icon: <HouseIcon className="h-4 w-4"/>,
            name: "Offices & Small Businesses",
            desc: "Cleaning for a professional workspace."
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