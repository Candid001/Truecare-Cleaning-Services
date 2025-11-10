import {services} from "@lib/utils.jsx";
import {useLocation} from "react-router-dom";
import ServicesCard from "./ServicesCard.jsx";

function OtherCleaningServices() {
    const location = useLocation();
    const path = location.pathname;
    const otherServices = services.filter((service) => service.link !== path);

    return(
        <div className={`bg-btn-primary py-10 md:py-20 space-y-20 px-5 md:px-0`}>
            <div className={`w-fit mx-auto`}>
                <h1 className={`text-[40px] md:text-[52px] leading-[120%] md:max-w-3/5 mx-auto text-center text-white`}>Other Cleaning Solutions You’ll Love.</h1>
            </div>

            <div className={`grid grid-col-1 md:grid-cols-2 gap-10 md:w-[90%] lg:w-4/5 mx-auto`}>
                {otherServices.map((service, index) => (
                    <ServicesCard key={index} heading={service.name} desc={service.desc} link={service.link}/>
                ))}
            </div>
        </div>
    )
}

export default OtherCleaningServices;