import {servicesImages, servicesIncluded, serviceWhyChooseUS, serviceCta} from "@lib/utils.jsx";

import ServicesHero from "@components/layout/services/ServicesHero.jsx";
import ServiceCTA from "@components/layout/services/ServiceCTA.jsx";
import ServicesOverview from "@components/layout/services/ServicesOverview.jsx";
import OtherCleaningServices from "@components/layout/services/OtherCleaningServices.jsx";

function OfficeAndSMB() {
    return(
        <>
            <ServicesHero
                nav={'Office & Small Business Cleaning'}
                heading={'Keep Your Workplace Clean and Productive'}
                desc={'Give your team a fresh, organized workspace every day. We provide reliable cleaning that fits your business hours, because a clean office supports better focus, better impressions, and a better workday.'}
                maxWH={'lg:max-w-1/2 md:max-w-3/5'}
                maxWD={'lg:max-w-[55%] md:max-w-[70%]'}
            />
            <ServicesOverview
                desc={`A clean workplace does more than look good, it sets the tone for the entire day. At TrueCare Cleaning Services, we help offices and small businesses across Saskatchewan maintain spaces that feel professional, comfortable, and ready for work. We understand that businesses run on tight schedules, so our team works after hours, on weekends, or whenever it’s most convenient for you. Whether you need routine cleaning or occasional deep cleaning, we customize every plan to match your workflow, your space, and your priorities.`}
                images={servicesImages.officeAndSMB}
                services={servicesIncluded.officeAndSMB}
                why={serviceWhyChooseUS.officeAndSMB}
            />
            <OtherCleaningServices/>
            <ServiceCTA {...serviceCta.homeAndApartments}/>
        </>

    )
}

export default OfficeAndSMB;