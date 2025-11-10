import {DropDownItems} from "@/lib/utils.jsx";
import {NavLink} from "react-router-dom";


function NavDrop({onclick}) {
    return (
        <div
            className="absolute left-0 top-[49px] w-full lg:min-w-[350px] bg-white shadow-lg shawow-shadow z-10 rounded-b-lg py-7 space-y-7"
        >
            {DropDownItems.map((item, index) => (
                <NavLink to={item.link} className={`block`} key={index} onClick={onclick}>
                    {({isActive}) => (
                        <span
                            className={`${isActive && "border-l-2 border-l-btn-primary/80 rounded-l-xs"} pl-5 flex items-start gap-2 ${!isActive && "hover:text-btn-primary"}`}>
                            {item.icon}

                            <span className="block space-y-2 -mt-1">
                                <span
                                    className={`block font-medium ${isActive && "text-btn-primary border-b border-b-btn-primary/50"}`}
                                >
                                    {item.name}
                                </span>
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