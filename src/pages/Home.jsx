import React from "react";
import Hero from "../components/layout/landing-page/Hero";
import WhoWeAre from "../components/layout/landing-page/WhoWeAre";
import WhatWeOffer from "../components/layout/landing-page/WhatWeOffer";
import HowItWorks from "../components/layout/landing-page/HowItWorks";
import WhyChooseUs from "../components/layout/landing-page/WhyChooseUs";

const Home = () => {
  return (
    <>
      <Hero />
      <WhoWeAre />
      <WhatWeOffer />
      <HowItWorks />
      <WhyChooseUs />
    </>
  );
};

export default Home;
