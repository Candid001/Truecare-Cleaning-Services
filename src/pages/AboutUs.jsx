import { serviceCta } from "@lib/utils.jsx";

import Map from "@components/layout/about-us/Map.jsx";
import ServiceCTA from "@components/layout/services/ServiceCTA.jsx";
import ServicesHero from "@components/layout/services/ServicesHero.jsx";
import AboutUSContent from "@components/layout/about-us/AboutUSContent.jsx";

const AboutUs = () => {
  const teamPromise = [
    "Friendly, background-checked cleaners",
    "Fully insured and bonded for your peace of mind",
    "Punctual, respectful, and reliable service",
    "Cleaning tailored to your unique needs",
    "Everything we do is built on trust, consistency, and care.",
  ];
  return (
    <>
      <ServicesHero
        nav={"About Us"}
        heading={"Clean Spaces. True Care."}
        desc={`From homes to offices, we provide professional cleaning across Saskatchewan 
                built on consistency, quality, and genuine care for every client and every space.`}
        maxWH={"lg:max-w-3/5 md:max-w-4/5"}
        maxWD={"lg:max-w-[55%] md:max-w-4/5"}
      />

      {/*Content */}
      <div className={`md:py-20 space-y-20 w-[90%] mx-auto`}>
        {/*Text content*/}
        <div className={`space-y-10`}>
          <AboutUSContent
            heading={"Our Story"}
            description={`
                          TrueCare Cleaning Services began with one simple idea: every space deserves to feel cared for. Before it became a company, it was just a small effort in Regina helping families who were too busy, supporting business owners who needed reliable cleaning, and showing up for people who wanted their space to feel lighter and fresher. What started with a few homes quickly grew through word of mouth. Clients kept returning, not just because their spaces were clean, but because they felt cared for. They knew someone showed up on time, paid attention to the small details, and treated their home or office with respect. Over the years, TrueCare has grown across Saskatchewan, but the heart of the business hasn’t changed. We still clean every home, office, and workspace with the same dedication we had on day one giving every client a space they can breathe, work, and live comfortably in.
                      `}
          />

          <AboutUSContent
            heading={"Our Mission"}
            description={`
                          Our mission comes from a belief we see every day: a clean space changes how people feel. When a home feels fresh, families relax. When a workspace is spotless, people focus better. When a clinic is perfectly sanitized, patients feel safe. So our mission is simple: to help create those feelings through the work we do. We show up with eco-friendly products, trained hands, and a commitment to do the job right. We take our time, follow the details, and make sure every space feels better when we leave than when we arrived. At TrueCare, our mission is not just to clean but to bring comfort, calm, and care into the lives of the people we serve.
                      `}
          />

          <AboutUSContent
            heading={"Our Vision"}
            description={`
                          We imagine a future where TrueCare is the first name people think of when they need a clean, safe, comfortable space not because we’re the biggest, but because we’re the most trusted. Our vision is to build a company that truly supports people: families who want help at home, businesses that need reliable cleaning, and communities that deserve healthier spaces. We want to set a new standard in Saskatchewan where cleaning is done with intention, eco-friendly practices are the norm, and clients always feel respected and cared for. As we grow, our focus stays the same: care for people, care for spaces, and care for the communities we serve.
                      `}
          />

          <AboutUSContent
            heading={"Our Promise"}
            isList={true}
            listArray={teamPromise}
          />
        </div>

        {/*Map*/}
        <div className={`space-y-20`}>
          {/*header*/}
          <div className={`text-center md:w-4/5 xl:w-1/2 mx-auto `}>
            {/*Heading*/}
            <div>
              <span
                className={`text-btn-primary p-1 bg-muted-blue rounded-sm text-xs`}
              >
                Who we are
              </span>
              <h1 className={`text-[61px] leading-[120%] font-semibold`}>
                Where We Serve
              </h1>
            </div>

            <p>
              We proudly serve Regina and surrounding Saskatchewan communities
              offering dependable cleaning for homes, offices, clinics,
              post-construction projects, and property turnovers.
            </p>
          </div>

          <Map />
        </div>
      </div>

      <ServiceCTA {...serviceCta.aboutUs} />
    </>
  );
};

export default AboutUs;
