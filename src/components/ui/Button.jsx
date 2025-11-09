import React from "react";

const Button = ({ text, className }) => {
    // const btnClasses =
  return (
    <div>
      <button className={`${className} `}>
        {text}
      </button>
    </div>
  );
};

export default Button;
