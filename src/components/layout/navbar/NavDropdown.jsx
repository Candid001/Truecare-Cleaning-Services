import {ChevronDown} from "lucide-react";
import NavDrop from "@/components/layout/navbar/NavDrop.jsx";

function NavDropdown({ dropdownRef, showDropdown, setIsServicesHover, isServicesHover, handleDropdownClick, closeMobileNav}) {
    return(
        <div
            ref={dropdownRef}
            className={`flex relative items-center justify-between lg:justify-normal px-3 lg:px-0 py-1 lg:py-0 gap-x-2 cursor-pointer`}
            onMouseEnter={() => setIsServicesHover(true)}
            onMouseLeave={() => setIsServicesHover(false)}
            onClick={handleDropdownClick}
        >
            <span>Our Services</span>
            <ChevronDown className="h-6 w-6"/>

            {/*Hover Effect*/}
            {(!showDropdown && isServicesHover) &&
                <div className={`absolute w-full -bottom-2 h-[2px] bg-btn-primary`}></div>}
            {/*Dropdown*/}
            {showDropdown && <NavDrop onclick={closeMobileNav}/>}
        </div>
    )
}

export default NavDropdown;