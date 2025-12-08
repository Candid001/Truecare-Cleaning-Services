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

function ClinicsAndWellnessCenter() {
  return (
    <>
      <ServicesHero
        nav={"Clinic & Wellness Center Cleaning"}
        heading={"Create a Safe, Spotless Care Environment"}
        desc={`We provide professional cleaning for clinics, spas, and wellness centers keeping every surface sanitized and every space welcoming for your clients and staff.`}
        maxWH={"lg:max-w-[55%] md:max-w-[85%]"}
        maxWD={"lg:max-w-[55%] md:max-w-[70%]"}
      />
      <ServicesOverview
        desc={`Your clients trust you with their well-being, trust us with the cleanliness of your environment. At TrueCare Cleaning Services, we specialize in maintaining medical and wellness spaces where hygiene, safety, and precision matter. From daily disinfection routines to deeper periodic cleaning, our team ensures your facility stays spotless, calm, and comfortable. Whether you run a clinic, dental office, physiotherapy space, massage studio, or spa, we tailor our cleaning process to meet your specific health and safety standards.`}
        images={servicesImages.clinicsAndWellnessCenter}
        services={servicesIncluded.clinicsAndWellnessCenter}
        why={serviceWhyChooseUS.clinicsAndWellnessCenter}
      />
      <OtherCleaningServices />
      <ServiceCTA {...serviceCta.clinicsAndWellnessCenter} />
    </>
  );
}

export default ClinicsAndWellnessCenter;
