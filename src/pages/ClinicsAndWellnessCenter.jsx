import {servicesImages, servicesIncluded, serviceWhyChooseUS, serviceCta} from "@lib/utils.jsx";

import ServicesHero from "@components/layout/services/ServicesHero.jsx";
import ServiceCTA from "@components/layout/services/ServiceCTA.jsx";
import ServicesOverview from "@components/layout/services/ServicesOverview.jsx";
import OtherCleaningServices from "@components/layout/services/OtherCleaningServices.jsx";


function ClinicsAndWellnessCenter() {
    return (
        <>
            <ServicesHero
                nav={'Clinic & Wellness Center Cleaning'}
                heading={'Create a Safe, Spotless Care Environment'}
                desc={`We deliver professional cleaning designed for clinics, spas, and wellness centers
                 ensuring every surface meets strict hygiene standards for your clients and staff.`
                }
                maxWH={'lg:max-w-[55%] md:max-w-[85%]'}
                maxWD={'lg:max-w-[55%] md:max-w-[70%]'}
            />
            <ServicesOverview
                desc={`our clients trust you with their health trust us with your space. At TrueCare 
                       Cleaning Services, we specialize in cleaning medical and wellness environments 
                       that require the highest levels of care and sanitation. From daily disinfection 
                       to deep cleaning treatments, we help you maintain a safe, welcoming atmosphere for
                        every patient and guest.`
                }
                images={servicesImages.clinicsAndWellnessCenter}
                services={servicesIncluded.clinicsAndWellnessCenter}
                why={serviceWhyChooseUS.clinicsAndWellnessCenter}
            />
            <OtherCleaningServices/>
            <ServiceCTA {...serviceCta.clinicsAndWellnessCenter}/>
        </>
    )
}

export default ClinicsAndWellnessCenter