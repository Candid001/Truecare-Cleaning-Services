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
              desc={'Enjoy a clean, fresh home without the stress. We provide reliable home and apartment cleaning designed to make your space feel comfortable, tidy, and well cared for.'}
              maxWH={'lg:max-w-1/2 md:max-w-3/5'}
              maxWD={'lg:max-w-[55%] md:max-w-[70%]'}
          />
          <ServicesOverview
              desc={`Every home deserves personal attention, and that’s exactly what we deliver. TrueCare Cleaning Services offers customized cleaning plans for apartments, condos, and family homes all designed to bring freshness, comfort, and peace of mind. Whether you want a recurring cleaning schedule or a deep clean for a special occasion, our friendly and trained team handles each detail with care. We show up on time, work efficiently, and leave your home feeling truly refreshed.`}
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