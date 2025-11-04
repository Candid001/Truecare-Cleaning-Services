import { useState } from "react";
import { Link, NavLink } from "react-router-dom";
import Button from "../ui/Button";
import Logo from "../../assets/Layer 2.svg"
import { FaAngleDown } from 'react-icons/fa';

function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  const linkClass = ({ isActive }) =>
    isActive
      ? "text-[#0066CC] font-semibold"
      : "text-gray-700 hover:text-[#0066CC]";

  return (
    <nav className="bg-white shadow px-6 py-4 relative">
      {/* md & lg Screen */}
      <div className="flex justify-between items-center">
        <Link to="/" className="">
          <img src={Logo} alt="" />
        </Link>
        

        <div className="hidden md:flex gap-6 items-center">
          <NavLink to="/" className={linkClass}>
            Home
          </NavLink>
          <NavLink to="/about" className={linkClass}>
            About Us
          </NavLink>
          <NavLink to="/services" className={`${linkClass} flex gap-1 h-7`} >
            Our Services <FaAngleDown className="text-[#2B2F32] h-6 w-6"/>
          </NavLink>
          <NavLink to="/servicearea" className={linkClass}>
            Service Area
          </NavLink>
          <NavLink to="/contact" className={linkClass}>
            Contact Us
          </NavLink>
          <Button text="Request a Quote" />
        </div>

        {/* Mobile Screen */}
        <button
          onClick={() => setIsOpen(!isOpen)}
          className="md:hidden text-3xl focus:outline-none"
          aria-label="Toggle Menu"
        >
          {isOpen ? "×" : "☰"}
        </button>
      </div>
        {/* Mobile Screen List */}
      {isOpen && (
        <div className="absolute top-16 left-0 w-full bg-white flex flex-col px-6 gap-4 py-6 shadow-md md:hidden rounded-b-4xl">
          <NavLink
            to="/"
            className={linkClass}
            onClick={() => setIsOpen(false)}
          >
            Home
          </NavLink>
          <NavLink
            to="/about"
            className={linkClass}
            onClick={() => setIsOpen(false)}
          >
            About Us
          </NavLink>
          <NavLink
            to="/services"
            className={`${linkClass} flex flex-row justify-between h-7`}
            onClick={() => setIsOpen(false)}
            
          >
            Our Services<FaAngleDown className="text-[#2B2F32] h-6 w-6"/>
          </NavLink>
          <NavLink
            to="/servicearea"
            className={linkClass}
            onClick={() => setIsOpen(false)}
          >
            Service Area
          </NavLink>
          <NavLink
            to="/contact"
            className={linkClass}
            onClick={() => setIsOpen(false)}
          >
            Contact Us
          </NavLink>
          <Button text="Request a Quote" />
        </div>
      )}
    </nav>
  );
}

export default Navbar;
