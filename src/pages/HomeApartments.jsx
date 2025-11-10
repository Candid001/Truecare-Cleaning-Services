import {servicesImages, servicesIncluded, serviceWhyChooseUS, serviceCta} from "@lib/utils.jsx";

import ServicesHero from "@components/layout/services/ServicesHero.jsx";
import ServiceCTA from "@components/layout/services/ServiceCTA.jsx";
import ServicesOverview from "@components/layout/services/ServicesOverview.jsx";
import OtherCleaningServices from "@components/layout/services/OtherCleaningServices.jsx";

const HomeApartments = () => {
  return (
      <>
          <ServicesHero
              nav={'Home & Apartment Cleaning'}
              heading={'Make Your Home Shine Effortlessly'}
              desc={'We provide home and apartment cleaning services to help you clean your home and apartment in a professional and efficient manner.'}
              maxWH={'lg:max-w-1/2 md:max-w-3/5'}
              maxWD={'lg:max-w-[55%] md:max-w-[70%]'}
          />
          <ServicesOverview
              desc={`Your home deserves the best care. TrueCare Cleaning Services provides tailored cleaning plans for apartments, condos, and family 
              homes — ensuring comfort, freshness, and peace of mind every visit. Whether you need a regular cleaning schedule or a deep clean for special 
              occasions, our friendly professionals handle every detail with care and precision.`}
              images={servicesImages.homeAndApartments}
              services={servicesIncluded.homeAndApartments}
              why={serviceWhyChooseUS.homeAndApartments}
          />
          <OtherCleaningServices/>
          <ServiceCTA {...serviceCta.homeAndApartments}/>
      </>
  )
}

export default HomeApartments