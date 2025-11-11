import React from "react";

const Button = ({ text, variant, cta, ...props }) => {
    const variants = {
        primary: "bg-btn-primary text-white",
        default: "bg-white text-btn-primary",
        secondary: "bg-btn-sec text-white",
        tertiary: "bg-btn-tertiary text-white",
    };

    return (
        <button
            className={`px-6 ${cta ? "py-4": "py-2.5"} rounded-4xl font-medium transition-colors w-full cursor-pointer ${variants[variant]}`}
            {...props}
        >
            {text}
        </button>
    );
};

export default Button;