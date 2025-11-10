import React from "react";

const Button = ({ text, variant, ...props }) => {
    const variants = {
        primary: "bg-btn-primary text-white",
    };

    return (
        <button
            className={`px-4 py-2 rounded-3xl font-medium transition-colors ${variants[variant]}`}
            {...props}
        >
            {text}
        </button>
    );
};

export default Button;