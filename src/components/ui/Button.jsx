import React from "react";

const Button = ({ text }) => { 
  return (
    <div>
      <button className="bg-[#0066CC] text-white text-sm px-5 py-3 rounded-[60px] font-medium focus:outline-none w-fit hidden md:flex">
        {text}
      </button>
    </div>
  );
};

export default Button;
