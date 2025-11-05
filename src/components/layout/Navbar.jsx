import { useState } from "react";
import { Link, NavLink } from "react-router-dom";
import Button from "../ui/Button";
import Logo from "../../assets/Layer 2.svg";
import { FaAngleDown } from "react-icons/fa";

function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [showDropdown, setShowDropdown] = useState(false);

  const linkClass = ({ isActive }) =>
    isActive
      ? "text-[#0066CC] font-semibold"
      : "text-gray-700 hover:text-[#0066CC]";

  const mobileLinkClass = ({ isActive }) =>
    isActive
      ? "bg-[#F5FAFF] font-semibold"
      : "text-gray-700 hover:text-[#0066CC]";

  return (
    <nav className="bg-white shadow pl-10 pr-5 py-4 relative md:px-10 md:py-6 lg:px-[120px] w-screen lg:w-full z-50 lg:h-[88px] lg:py-3">
      <div className="flex justify-between items-center">
        <Link to="/">
          <img src={Logo} alt="" />
        </Link>

        {/* lg Screen */}
        <div className="hidden lg:flex gap-6 items-center lg:gap-[30px]">
          <NavLink to="/" className={linkClass}>
            Home
          </NavLink>
          <NavLink to="/about" className={linkClass}>
            About Us
          </NavLink>
          <NavLink
            to="/services"
            className={linkClass}
            onClick={() => setShowDropdown(!showDropdown)}
          >
            <div className="flex justify-between w-full h-[60px] rounded-md p-4 lg:gap-1">
              Our Services
              <FaAngleDown className="h-6 w-6 inline" />
            </div>
          </NavLink>
          <NavLink to="/servicearea" className={linkClass}>
            Service Area
          </NavLink>
          <NavLink to="/contact" className={linkClass}>
            Contact Us
          </NavLink>
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
            <div className="absolute top-18 left-0 w-full bg-white flex flex-col p-6  rounded-b-4xl md:z-50">
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
                  <FaAngleDown className="text-[#2B2F32] h-6 w-6 inline" />
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
            <Button text="Request a Quote" className="bg-[#0066CC] text-white text-sm px-5 py-3 rounded-[60px] font-medium focus:outline-none w-fit hidden md:flex "/>
          </div>
        </div>

        {/* Our Services Dropdown */}
        {showDropdown && (
          <div className="absolute flex flex-col gap-1 left-145 top-25 mt-2 w-[275px] h-fit bg-white border border-gray-200 rounded-lg shadow-lg z-50 rounded-b-lg py-3">
            <Link
              to="/services"
              className="block px-4 py-2 hover:border-l-2  hover:text-[#0066CC] h-[46px] w-full"
            >
              Homes & Apartments
            </Link>
            <Link
              to="/services"
              className="block px-4 py-2 hover:border-l-2  hover:text-[#0066CC] h-[46px] w-full"
            >
              Offices & Small Businesses
            </Link>
            <Link
              to="/services"
              className="block px-4 py-2 hover:border-l-2  hover:text-[#0066CC] h-[46px] w-full"
            >
              Property Managers & Realtors
            </Link>
            <Link
              to="/services"
              className="block px-4 py-2 hover:border-l-2  hover:text-[#0066CC] h-[46px] w-full"
            >
              Clinics & Wellness Centers
            </Link>
            <Link
              to="/services"
              className="block px-4 py-2 hover:border-l-2  hover:text-[#0066CC] h-[46px] w-full"
            >
              Post-Construction Projects
            </Link>
          </div>
        )}
      </div>
    </nav>
  );
}

export default Navbar;
