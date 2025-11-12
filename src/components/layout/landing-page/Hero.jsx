import React from "react";
import Ficon from "@assets/frame.svg?component";
import Button from "../../Button.jsx";
import HeroImg from "@assets/hero-bg1.svg"

const Hero = () => {
    return (
        <div className="relative bg-btn-primary text-center text-white space-y-10 py-20 min-h-[750px]">
            <div className={`w-fit mx-auto space-y-7 px-2.5 md:px-0`}>
                <div className={`space-y-5`}>
                    {/* Top message */}
                    <div className="flex justify-center items-center gap-2">
                        <Ficon/>
                        <p className="text-sm md:text-base">
                            Fully insured & bonded for your peace of mind.
                        </p>
                    </div>

                    <h1 className="font-semibold text-4xl md:text-[57px] lg:text-[61px] leading-[120%] md:w-4/5 lg:w-[70%] xl:max-w-3/5 mx-auto">
                        Every Space Deserves the TrueCare Touch
                    </h1>
                </div>

                <p className="font-medium md:max-w-1/2 mx-auto">
                    Experience spotless cleaning for homes, offices, and rentals across
                    Saskatchewan. Dependable, eco-friendly, and handled with true care.
                </p>
            </div>

            {/* Buttons */}
            <div
                className="flex flex-col items-center gap-4 md:flex-row md:justify-center md:w-4/5 lg:w-1/2 mx-auto px-10 md:px-0">
                <Button
                    text="Call Us: +1-234-567-890"
                    variant={`default`}
                    cta={true}
                />
                <Button
                    text="Request a Quote"
                    variant={`tertiary`}
                    cta={true}
                />
            </div>

            <div
                className={`absolute w-[90%] -bottom-20 lg:-bottom-24 xl:-bottom-14 left-1/2 md:w-4/5 lg:w-[70%] xl:w-3/5 h-[250px] md:h-[320px] -translate-x-1/2 rounded-3xl`}
                style={{
                    backgroundImage: `url(${HeroImg})`,
                    backgroundSize: "cover",
                    backgroundPosition: "center",
                }}
            >
            </div>
        </div>
    );
};

export default Hero;
