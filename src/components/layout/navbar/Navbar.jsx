import {useState} from "react";
import {Link, NavLink} from "react-router-dom";
import Button from "../../ui/Button.jsx";
//TODO: Use icon like this, check line 23
import Logo from "@assets/logo-full.svg?component";
import {FaAngleDown} from "react-icons/fa";
import {ChevronDown} from "lucide-react";
import NavbarLink from "./NavbarLink.jsx";
import NavDrop from "./NavDrop.jsx";

function Navbar() {
    const [isOpen, setIsOpen] = useState(false);
    const [showDropdown, setShowDropdown] = useState(false);

    const [isServicesHover, setIsServicesHover] = useState(false);

    const mobileLinkClass = ({isActive}) =>
        isActive
            ? "bg-[#F5FAFF]"
            : "text-gray-700 hover:text-btn-primary";

    return (
        <nav className="fixed top-0 left-0 right-0 z-50 bg-white py-2 shadow-xs border-b border-blue-100">
            <div className="flex justify-between items-center w-[90%] mx-auto">
                <Link to="/">
                    <Logo/>
                </Link>

                {/* lg Screen */}
                <div className="hidden lg:flex justify-center gap-x-10">
                    {[
                        {
                            name: "Home",
                            to: "/"
                        },
                        {
                            name: "About Us",
                            to: "/about"
                        }
                    ].map((item, index) => (
                        <NavbarLink key={index} name={item.name} to={item.to}/>
                    ))}

                    <div
                        className={`flex relative items-center gap-x-2 cursor-pointer`}
                        onMouseEnter={() => setIsServicesHover(true)}
                        onMouseLeave={() => setIsServicesHover(false)}
                        onClick={() => setShowDropdown(!showDropdown)}
                    >
                        <span>Our Services</span>
                        <ChevronDown className="h-6 w-6"/>

                        {/*Hover Effect*/}
                        {isServicesHover && !showDropdown && <div className={`absolute w-full -bottom-2 h-[2px] bg-btn-primary`}></div>}
                        {showDropdown && <NavDrop/>}
                    </div>

                    {[
                        {
                            name: "Service Area",
                            to: "/service-area"
                        },
                        {
                            name: "Contact Us",
                            to: "/contact-us"
                        }
                    ].map((item, index) => (
                        <NavbarLink key={index} name={item.name} to={item.to}/>
                    ))}
                </div>

                <div className="md:flex md:gap-6">
                    <button
                        onClick={() => setIsOpen(!isOpen)}
                        className="lg:hidden text-3xl focus:outline-none"
                        aria-label="Toggle Menu"
                    >
                        {isOpen ? "×" : "☰"}
                    </button>

                    {/* Mobile Screen List */}
                    {isOpen && (
                        <div
                            className="absolute top-18 left-0 w-full bg-white flex flex-col p-6  rounded-b-4xl md:z-50">
                            <NavLink
                                to="/"
                                className={mobileLinkClass}
                                onClick={() => setIsOpen(false)}
                            >
                                <p className="w-full h-[60px] rounded-md p-4">Home</p>
                            </NavLink>
                            <NavLink
                                to="/about"
                                className={mobileLinkClass}
                                onClick={() => setIsOpen(false)}
                            >
                                <p className="w-full h-[60px] rounded-md p-4">About Us</p>
                            </NavLink>
                            <NavLink
                                to="/services"
                                className={mobileLinkClass}
                                onClick={() => setIsOpen(false)}

                            >
                                <div className="flex justify-between w-full h-[60px] rounded-md p-4">
                                    Our Services
                                    <FaAngleDown className="text-[#2B2F32] h-6 w-6 inline"/>
                                </div>
                            </NavLink>
                            <NavLink
                                to="/servicearea"
                                className={mobileLinkClass}
                                onClick={() => setIsOpen(false)}
                            >
                                <p className="w-full h-[60px] rounded-md p-4">Service Area</p>
                            </NavLink>
                            <NavLink
                                to="/contact"
                                className={mobileLinkClass}
                                onClick={() => setIsOpen(false)}
                            >
                                <p className="w-full h-[60px] rounded-md p-4">Contact Us</p>
                            </NavLink>
                        </div>
                    )}
                    {/* Button */}
                    <div>
                        <Button text="Request a Quote"
                                className="bg-[#0066CC] text-white text-sm px-5 py-3 rounded-[60px] font-medium focus:outline-none w-fit hidden md:flex "/>
                    </div>
                </div>

            </div>
        </nav>
    );
}

export default Navbar;
