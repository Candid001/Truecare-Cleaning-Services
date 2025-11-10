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
                desc={'Create a spotless, welcoming workspace with reliable cleaning that fits your business hours — because a clean office means happier staff and better first impressions.'}
                maxWH={'lg:max-w-1/2 md:max-w-3/5'}
                maxWD={'lg:max-w-[55%] md:max-w-[70%]'}
            />
            <ServicesOverview
                desc={`A clean workplace makes a powerful statement. TrueCare Cleaning Services helps offices
                 and small businesses across Saskatchewan maintain a spotless environment that supports productivity
                 and professionalism.Our flexible scheduling means we work after hours or on weekends to avoid disrupting
                  your team. From daily maintenance to deep cleaning, we tailor every plan to your business needs.`}
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