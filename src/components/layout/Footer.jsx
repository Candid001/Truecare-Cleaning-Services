import React from "react";
import FooterLogo from "@assets/full-logo-white.svg?component"
import Facebook from "@assets/facebook.svg?component"
import Instagram from "@assets/instagram.svg?component"
import Linkedin from "@assets/linkedln.svg?component"

const Footer = () => {
    return (
        <div className="bg-deep-blue py-5 text-white">
            {/* Footer content*/}
            <div className={`flex flex-col lg:flex-row justify-between gap-16 lg:gap-40 items-start w-[90%] mx-auto py-14`}>
                {/*Logo and text*/}
                <div className={`space-y-7 basis-2/5`}>
                    <FooterLogo/>

                    <p>
                        TrueCare Cleaning Services delivers reliable residential and commercial cleaning across
                        Saskatchewan.
                        We’re fully insured, eco-conscious, and committed to making every space shine because every
                        space deserves true care.
                    </p>
                </div>

                <div className={`lg:flex basis-3/5 gap-10 space-y-10 lg:space-y-0`}>
                    <div className={`space-y-7 lg:basis-1/2`}>
                            <h2 className={`font-bold text-lg`}>Stay Connected</h2>

                            <ul className={`space-y-3`}>
                                <p>Hours: <br/> Mon–Fri: 8 AM – 6 PM <br/>Sat–Sun: 9 AM – 4 PM</p>
                                <div className={`flex gap-2`}>
                                    <a href="https://www.facebook.com/truecarecleaningservices" target="_blank" rel="noopener noreferrer">
                                        <Facebook/>
                                    </a>
                                    <a href="https://www.facebook.com/truecarecleaningservices" target="_blank" rel="noopener noreferrer">
                                        <Instagram/>
                                    </a>
                                    <a href="https://www.facebook.com/truecarecleaningservices" target="_blank" rel="noopener noreferrer">
                                        <Linkedin/>
                                    </a>
                                </div>

                            </ul>
                        </div>

                    <div className={`space-y-7 lg:basis-1/2`}>
                        <h2 className={`font-bold text-lg`}>Contact Info</h2>

                        <ul className={`space-y-3`}>
                            <p>Location: Regina, Saskatchewan</p>
                            <a href="tel:+12345677890">Phone: +1 (234) 567-7890</a>
                            <a href="mailto:info@truecarecleaningservices.ca">Email: info@truecarecleaningservices.ca </a>
                        </ul>
                    </div>
                </div>
            </div>

            {/*Copyright*/}
            <div className={`border-t border-t-blue-sec pt-5 text-xs md:text-sm`}>
                <div className={`w-[90%] mx-auto flex flex-col gap-5 lg:flex-row lg:justify-between justify-center items-center text-center`}>
                    <p>© 2025 TrueCare Cleaning Services. All Rights Reserved.</p>
                    <p>
                        Designed with care by <a href={`/`}>Olatunji </a>& Developed by <a href={`https://github.com/Muhtoyyib`}>Dev Toyyib</a> .
                    </p>
                </div>
            </div>
        </div>
    );
};

export default Footer;
