import {servicesImages, servicesIncluded, serviceWhyChooseUS, serviceCta} from "@lib/utils.jsx";

import ServicesHero from "@components/layout/services/ServicesHero.jsx";
import ServiceCTA from "@components/layout/services/ServiceCTA.jsx";
import ServicesOverview from "@components/layout/services/ServicesOverview.jsx";
import OtherCleaningServices from "@components/layout/services/OtherCleaningServices.jsx";

function PMAndRealtors() {
    return(
        <>
            <ServicesHero
                nav={'Property Managers & Realtors Cleaning'}
                heading={'Keep Every Property Show-Ready and Spotless'}
                desc={`Fast, reliable cleaning for rentals and listings we help property managers
                 and realtors maintain spotless spaces that impress tenants and attract buyers instantly.`
                }
                maxWH={'lg:max-w-[55%] md:max-w-[85%]'}
                maxWD={'lg:max-w-[55%] md:max-w-[70%]'}
            />
            <ServicesOverview
                desc={`As a property manager or realtor, presentation is everything. TrueCare Cleaning
                 Services ensures your properties always look their best from move-in/move-out cleaning 
                 to pre-showing refreshes.We work quickly and efficiently, helping you reduce vacancy 
                 times and leave a lasting impression on clients and prospective tenants.`
                }
                images={servicesImages.officeAndSMB}
                services={servicesIncluded.officeAndSMB}
                why={serviceWhyChooseUS.officeAndSMB}
            />
            <OtherCleaningServices/>
            <ServiceCTA {...serviceCta.homeAndApartments}/>
        </>

    )
}

export default PMAndRealtors;