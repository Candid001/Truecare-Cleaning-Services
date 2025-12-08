import {
  servicesImages,
  servicesIncluded,
  serviceWhyChooseUS,
  serviceCta,
} from "@lib/utils.jsx";

import ServicesHero from "@components/layout/services/ServicesHero.jsx";
import ServiceCTA from "@components/layout/services/ServiceCTA.jsx";
import ServicesOverview from "@components/layout/services/ServicesOverview.jsx";
import OtherCleaningServices from "@components/layout/services/OtherCleaningServices.jsx";

function ConstructionCleaning() {
  return (
    <>
      <ServicesHero
        nav={"Post-Construction Cleaning"}
        heading={"Turn Construction Mess Into Move-In Ready Spaces"}
        desc={`From dust to debris, we take care of the heavy lifting leaving your newly built or renovated property clean, polished, and ready for move-in or final presentation.`}
        maxWH={"lg:max-w-[55%] md:max-w-[85%]"}
        maxWD={"lg:max-w-[55%] md:max-w-[70%]"}
      />
      <ServicesOverview
        desc={`Construction and renovation projects often leave behind more than just a beautiful new space; dust, fine particles, and leftover materials can settle everywhere. That’s where TrueCare Cleaning Services comes in. We specialize in post-construction and post-renovation cleaning, transforming your project into a spotless, move-in-ready home or workspace. Whether you’re a contractor, developer, property manager, or homeowner, we make sure every detail looks clean, sharp, and professionally finished. Our team works carefully around new materials and surfaces to ensure your space shines exactly the way it should.`}
        images={servicesImages.clinicsAndWellnessCenter}
        services={servicesIncluded.constructionCleaning}
        why={serviceWhyChooseUS.constructionCleaning}
      />
      <OtherCleaningServices />
      <ServiceCTA {...serviceCta.constructionCleaning} />
    </>
  );
}

export default ConstructionCleaning;
