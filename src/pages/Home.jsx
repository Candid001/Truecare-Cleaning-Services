import React from "react";
import Hero from "../components/layout/landing-page/Hero";
import WhoWeAre from "../components/layout/landing-page/WhoWeAre";
import WhatWeOffer from "../components/layout/landing-page/WhatWeOffer";
import HowItWorks from "../components/layout/landing-page/HowItWorks";
import WhyChooseUs from "../components/layout/landing-page/WhyChooseUs";
import WhatClientsSay from "../components/layout/landing-page/WhatClientsSay";
import WhereWeServe from "../components/layout/landing-page/WhereWeServe";

const Home = () => {
  return (
    <>
      <Hero />
      <WhoWeAre />
      <WhatWeOffer />
      <HowItWorks />
      <WhyChooseUs />
      <WhatClientsSay />
      <WhereWeServe />
    </>
  );
};

export default Home;
