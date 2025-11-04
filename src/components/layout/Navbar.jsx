import React from "react";
import { Link, NavLink } from "react-router-dom";

function Navbar() {
  const linkClass = ({ isActive }) =>
    isActive
      ? "text-[#0066CC] font-semibold"
      : "text-gray-700 hover:text-[#0066CC]";

  return (
    <nav className="flex justify-between items-center px-6 py-4 bg-white shadow">
      <Link to="/" className="text-xl font-bold text-[#0066CC]">
        TrueCare fghdfgfgfgh
      </Link>
      <div className="flex gap-6">
        <NavLink to="/" className={linkClass}>
          Home
        </NavLink>
        <NavLink to="/about" className={linkClass}>
          About Us
        </NavLink>
        <NavLink to="/services" className={linkClass}>
          Our Services
        </NavLink>
        <NavLink to="/servicearea" className={linkClass}>
          Service Area
        </NavLink>
        <NavLink to="/contact" className={linkClass}>
          Contact Us
        </NavLink>
      </div>
    </nav>
  );
}

export default Navbar;
