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

function PMAndRealtors() {
  return (
    <>
      <ServicesHero
        nav={"Property Managers & Realtors Cleaning"}
        heading={"Keep Every Property Show-Ready and Spotless"}
        desc={`Fast, reliable cleaning for rentals and listings. We help property managers and realtors keep every space fresh, spotless, and ready to impress whether it’s for new tenants or potential buyers.`}
        maxWH={"lg:max-w-[55%] md:max-w-[85%]"}
        maxWD={"lg:max-w-[55%] md:max-w-[70%]"}
      />
      <ServicesOverview
        desc={`When it comes to rentals and real estate, presentation isn’t optional, it’s everything. TrueCare Cleaning Services makes sure your properties always look their best. We handle move-in/move-out cleanings, pre-showing refreshes, and deep cleans that help you reduce vacancy time and leave a strong first impression. Our team works quickly, professionally, and with an eye for detail, so you can focus on the part you do best: closing deals and managing tenants.`}
        images={servicesImages.officeAndSMB}
        services={servicesIncluded.propertyRealtors}
        why={serviceWhyChooseUS.propertyRealtors}
      />
      <OtherCleaningServices />
      <ServiceCTA {...serviceCta.propertyRealtors} />
    </>
  );
}

export default PMAndRealtors;
