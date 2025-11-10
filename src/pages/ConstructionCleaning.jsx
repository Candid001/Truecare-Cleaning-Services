import {servicesImages, servicesIncluded, serviceWhyChooseUS, serviceCta} from "@lib/utils.jsx";

import ServicesHero from "@components/layout/services/ServicesHero.jsx";
import ServiceCTA from "@components/layout/services/ServiceCTA.jsx";
import ServicesOverview from "@components/layout/services/ServicesOverview.jsx";
import OtherCleaningServices from "@components/layout/services/OtherCleaningServices.jsx";

function ConstructionCleaning() {
    return (
        <>
            <ServicesHero
                nav={'Post-Construction Cleaning'}
                heading={'Turn Construction Mess Into Move-In Ready Spaces'}
                desc={`From dust to debris, we handle every detail leaving your newly built or renovated property spotless, polished, and ready for presentation or move-in.`}
                maxWH={'lg:max-w-[55%] md:max-w-[85%]'}
                maxWD={'lg:max-w-[55%] md:max-w-[70%]'}
            />
            <ServicesOverview
                desc={`Construction and renovation projects can leave behind dust, debris, and fine
                    particles that dull your hard work. At TrueCare Cleaning Services, we specialize in
                    post-construction and post-renovation cleaning transforming your site into a polished,
                    move-in-ready space. Whether you’re a contractor, property developer, or homeowner, we 
                    make sure every corner is clean, every surface shines, and your new build looks its absolute best.`
                }
                images={servicesImages.clinicsAndWellnessCenter}
                services={servicesIncluded.constructionCleaning}
                why={serviceWhyChooseUS.constructionCleaning}
            />
            <OtherCleaningServices/>
            <ServiceCTA {...serviceCta.constructionCleaning}/>
        </>
    )
}

export default ConstructionCleaning