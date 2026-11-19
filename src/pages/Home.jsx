import React from "react";
import VideoSection from "../components/layout/landing-page/VideoSection";
import Hero from "../components/layout/landing-page/Hero";
import WhoWeAre from "../components/layout/landing-page/WhoWeAre";
import WhatWeOffer from "../components/layout/landing-page/WhatWeOffer";
import HowItWorks from "../components/layout/landing-page/HowItWorks";
import WhyChooseUs from "../components/layout/landing-page/WhyChooseUs";
import WhatClientsSay from "../components/layout/landing-page/WhatClientsSay";
import WhereWeServe from "../components/layout/landing-page/WhereWeServe";
import PriceCalculator from "../components/layout/landing-page/PriceCalculator";
import CallToAction from "../components/layout/landing-page/CallToAction";
import StatsStrip from "../components/layout/landing-page/StatsStrip";
import Compare from "../components/layout/landing-page/Compare";
import Guarantee from "../components/layout/landing-page/Guarantee";
import ReviewHighlights from "../components/layout/landing-page/ReviewHighlights";
import Faq from "../components/layout/landing-page/Faq";
import AreasWeServe from "../components/layout/landing-page/AreasWeServe";

const Home = () => {
  return (
    <>
      <Hero />
      <StatsStrip />
      <WhatWeOffer />
      <Compare />
      <PriceCalculator />
      <HowItWorks />
      <WhyChooseUs />
      <Guarantee />
      <VideoSection />
      <WhoWeAre />
      <ReviewHighlights />
      <AreasWeServe />
      <Faq />
      <CallToAction />
    </>
  );
};

export default Home;
