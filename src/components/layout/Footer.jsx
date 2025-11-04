import React from "react";
import Logo from "../../assets/Layer 2.svg";
import { FaFacebook } from "react-icons/fa";
import { RiInstagramFill } from "react-icons/ri";
import { AiFillLinkedin } from "react-icons/ai";

const Footer = () => {
  return (
    <div className="bg-[#003D7A] px-5 py-10 flex flex-col gap-12 h-fit w-auto">
        {/* First Div  */}
      <div className="flex flex-col gap-6">
        <img src={Logo} alt="Logo" className="w-[136px] h-10" />
        <p className="text-white font-medium leading-6">
          TrueCare Cleaning Services delivers reliable residential and
          commercial cleaning across Saskatchewan.We’re fully insured,
          eco-conscious, and committed to making every space shine because every
          space deserves true care.
        </p>
      </div>
        {/* Second Div */}
      <div className="text-white grid grid-cols-2 gap-6">
        {/* Quick Links */}
        <div className="flex flex-col gap-4">
          <h2 className="font-bold text-lg">Quick Links</h2>
          <p className="text-sm  font-medium">Home</p>
          <p className="text-sm font-medium">About Us</p>
          <p className="text-sm font-medium">Services</p>
          <p className="text-sm font-medium">How it works</p>
          <p className="text-sm font-medium">Testimonials</p>
          <p className="text-sm font-medium">Get a Quote</p>
        </div>
        {/* Contact Info */}
        <div className="flex flex-col gap-4">
          <h2 className="font-bold text-lg">Contact Info</h2>
          <p className="text-sm font-medium">Location: Regina, Saskatchewan</p>
          <p className="text-sm  font-medium">Phone: +1 (234) 567-7890</p>
          <p className="text-sm  font-medium">
            Email: info@truecarecleaning.ca
          </p>
        </div>
        {/* Stay Connected */}
        <div className="flex flex-col gap-4">
          <h2 className="font-bold text-lg">Stay Connected</h2>
          <p className="text-sm  font-medium">
            Hours: <br />
            Mon–Fri: 8 AM – 6 PM <br />
            Sat–Sun: 9 AM – 4 PM
          </p>
          <div className="flex gap-2">
            <div className="h-10 w-10 rounded-[40px] bg-[#0066CC] p-2.5">
              <FaFacebook className="w-5 h-5" />
            </div>
            <div className="h-10 w-10 rounded-[40px] bg-[#0066CC] p-2.5">
              <RiInstagramFill className="w-5 h-5" />
            </div>
            <div className="h-10 w-10 rounded-[40px] bg-[#0066CC] p-2.5">
              <AiFillLinkedin className="w-5 h-5" />
            </div>
          </div>
        </div>
      </div>
        {/* Last Div */}
      <div className="border-t border-[#3184D6] py-6 text-center text-white flex flex-col gap-2.5">
        <p className="font-semibold text-sm">© 2025 TrueCare Cleaning Services. All Rights Reserved.</p>
        <p className="font-semibold text-sm"> Designed with care 💙 by Olatunji & Developed by MuhToyyib.</p>
      </div>
    </div>
  );
};

export default Footer;
