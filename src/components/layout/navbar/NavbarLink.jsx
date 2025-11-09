import {NavLink} from "react-router-dom";
import {navHoverClass} from "@/lib/utils.jsx";

function NavbarLink({name, to, isMobile, onClick}) {

    if (isMobile) {
        return (
            <NavLink to={to} className={`block`} onClick={onClick}>
                {({isActive}) => (
                    <span className={`${isActive && "bg-muted-blue"} text-nav-default cursor-pointer p-3 w-full block rounded-md`}>
                        {name}
                    </span>
                )}
            </NavLink>
        )
    }

    return (
        <NavLink to={to} className={`block`}>
            {({isActive}) => (
                <span className={`${isActive && "font-semibold"} text-nav-default ${navHoverClass} cursor-pointer pb-2`}>
                    {name}
                </span>
            )}
        </NavLink>
    )
}

export default NavbarLink;