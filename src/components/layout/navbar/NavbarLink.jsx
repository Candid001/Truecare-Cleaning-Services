import {NavLink} from "react-router-dom";
import {navHoverClass} from "@/lib/utils.jsx";

function NavbarLink({name, to}) {

    return(
        <NavLink to={to} className={`block`}>
            {({ isActive }) => (
                <span className={`${isActive && "font-semibold"}text-nav-default ${navHoverClass} cursor-pointer pb-2`}>
                    {name}
                </span>
            )}
        </NavLink>
    )
}

export default NavbarLink;