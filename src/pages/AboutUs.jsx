import ServicesHero from "@components/layout/services/ServicesHero.jsx";
import AboutUSContent from "@components/layout/about-us/AboutUSContent.jsx";
import ServiceCTA from "@components/layout/services/ServiceCTA.jsx";
import {serviceCta} from "@lib/utils.jsx";
import Map from "@components/layout/about-us/Map.jsx"

const AboutUs = () => {
    const teamPromise = [
        "Friendly, background-checked cleaners",
        "Fully insured and bonded for your peace of mind",
        "Always punctual, respectful, and reliable",
        "Tailored services for your unique needs",
    ]
  return (
      <>
          <ServicesHero
              nav={'About Us'}
              heading={'Clean Spaces. True Care.'}
              desc={`From homes to offices, we provide professional cleaning across Saskatchewan 
                built on consistency, quality, and genuine care for every client and every space.`
              }
              maxWH={'lg:max-w-3/5 md:max-w-4/5'}
              maxWD={'lg:max-w-[55%] md:max-w-4/5'}
          />

          {/*Content */}
          <div className={`md:py-20 space-y-20 w-[90%] mx-auto`}>
              {/*Text content*/}
              <div className={`space-y-10`}>
                  <AboutUSContent
                      heading={'Our Story'}
                      description={`
                          TrueCare Cleaning Services began with a simple belief every space deserves true care.
                          What started as a small local effort in Regina has grown into a trusted cleaning brand
                          serving homes, offices, and businesses across Saskatchewan. Over the years,
                          we’ve built our reputation through reliability, professionalism, and a commitment
                          to detail that clients can always depend on. From cozy apartments to busy clinics
                          and post-construction sites, we bring the same level of care and consistency to every job.
                          TrueCare isn’t just our name it’s the foundation of how we serve, ensuring every client
                          experiences a cleaner, healthier, and more comfortable environment.
                      `}
                  />

                  <AboutUSContent
                      heading={'Our Story'}
                      description={`
                          Our mission is to deliver professional, high-quality cleaning services that make every
                          space shine and every client feel at ease. We aim to redefine cleaning through genuine care,
                          attention to detail, and consistency in every service we provide. At TrueCare, we believe
                          that a clean environment contributes to peace of mind, productivity, and better living.
                          By combining modern cleaning practices, eco-friendly products, and a dedicated team, we
                          ensure results that exceed expectations. Our focus is simple to provide dependable cleaning
                          solutions that our clients can trust and recommend with confidence, every single time.
                      `}
                  />

                  <AboutUSContent
                      heading={'Our Story'}
                      description={`
                          Our vision is to become Saskatchewan’s most trusted and preferred cleaning company recognized
                          for reliability, quality, and genuine care. We aspire to set a new standard in cleaning by
                          focusing on both people and spaces, ensuring our clients always feel valued and supported.
                          Through innovation, eco-conscious products, and exceptional customer experience, we aim to
                          create lasting relationships built on trust. TrueCare envisions a future where every home,
                          office, and business across the province experiences a cleaner, safer, and more inspiring
                          environment maintained by a team that truly cares about the details.
                      `}
                  />

                  <AboutUSContent heading={'Our Promise'} isList={true} listArray={teamPromise} />
              </div>

              {/*Map*/}
              <div className={`space-y-20`}>
                  {/*header*/}
                  <div className={`text-center md:w-4/5 xl:w-1/2 mx-auto `}>
                      {/*Heading*/}
                      <div>
                          <span className={`text-btn-primary p-1 bg-muted-blue rounded-sm text-xs`}>Who we are</span>
                          <h1 className={`text-[61px] leading-[120%] font-semibold`}>Where We Serve</h1>
                      </div>

                      <p>
                          Proudly serving Regina and surrounding areas across Saskatchewan for homes,
                          offices, clinics, construction projects, and property turnovers.
                      </p>
                  </div>

                  <Map />
              </div>
          </div>

          <ServiceCTA {...serviceCta.homeAndApartments}/>
      </>
  )
}

export default AboutUs