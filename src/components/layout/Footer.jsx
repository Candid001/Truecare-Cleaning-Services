import React from "react";
import Logo from "../../assets/TrueCare Cleaning Services full logo.svg";
import { FaFacebook } from "react-icons/fa";
import { RiInstagramFill } from "react-icons/ri";
import { AiFillLinkedin } from "react-icons/ai";

const Footer = () => {
  return (
    <div className="bg-[#003D7A] px-5 pt-10 flex flex-col gap-12 h-fit w-auto md:pt-20 md:px-10 lg:px-[120px] lg:pt-[120px]">
      {/* First Div  */}
      <div className="flex flex-col gap-12 md:gap-16 lg:flex lg:flex-row lg:gap-[141px]">
        <div className="flex flex-col gap-6 lg:w-[407px]">
          <img src={Logo} alt="Logo" className="w-[136px] h-10" />
          <p className="text-white font-medium text-base md:w-full">
            TrueCare Cleaning Services delivers reliable residential and
            commercial cleaning across Saskatchewan.We’re fully insured,
            eco-conscious, and committed to making every space shine because
            every space deserves true care.
          </p>
        </div>
        {/* Second Div */}
        <div className="text-white grid grid-cols-2 gap-6 md:flex  md:justify-between lg:w-[724px]">
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
            <p className="text-sm font-medium">
              Location: Regina, Saskatchewan
            </p>
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
      </div>
      {/* Last Div */}
      <div className="border-t border-[#3184D6] py-6 text-center text-white flex flex-col gap-2.5 lg:flex lg:flex-row lg:justify-between">
        <p className="font-semibold text-sm">
          © 2025 TrueCare Cleaning Services. All Rights Reserved.
        </p>
        <p className="font-semibold text-sm">
          {" "}
          Designed with care 💙 by Olatunji & Developed by MuhToyyib.
        </p>
      </div>
    </div>
  );
};

export default Footer;
