import {services} from "@lib/utils.jsx";
import {useLocation} from "react-router-dom";
import ServicesCard from "./ServicesCard.jsx";

function OtherCleaningServices() {
    const location = useLocation();
    const path = location.pathname;
    const otherServices = services.filter((service) => service.link !== path);

    return(
        <div className={`bg-gradient-to-br from-blue-tertiary via-deep-blue to-btn-primary py-12 md:py-20 space-y-12 md:space-y-16 px-5 md:px-0`}>
            <div className={`w-fit mx-auto`}>
                <h2 className={`text-[32px] md:text-[48px] leading-[120%] md:max-w-3/5 mx-auto text-center text-white font-semibold`}>Other Cleaning Solutions You’ll Love.</h2>
            </div>

            <div className={`grid grid-col-1 md:grid-cols-2 gap-6 md:gap-8 md:w-[90%] lg:w-4/5 max-w-6xl mx-auto`}>
                {otherServices.map((service, index) => (
                    <ServicesCard key={index} heading={service.name} desc={service.desc} link={service.link}/>
                ))}
            </div>
        </div>
    )
}

export default OtherCleaningServices;