import React, { lazy, Suspense } from "react";
import VideoSection from "../components/layout/landing-page/VideoSection";
import Hero from "../components/layout/landing-page/Hero";
import WhoWeAre from "../components/layout/landing-page/WhoWeAre";

const WhatWeOffer = lazy(() => import("../components/layout/landing-page/WhatWeOffer"));
const HowItWorks = lazy(() => import("../components/layout/landing-page/HowItWorks"));
const WhyChooseUs = lazy(() => import("../components/layout/landing-page/WhyChooseUs"));
const WhatClientsSay = lazy(() => import("../components/layout/landing-page/WhatClientsSay"));
const WhereWeServe = lazy(() => import("../components/layout/landing-page/WhereWeServe"));
const PriceCalculator = lazy(() => import("../components/layout/landing-page/PriceCalculator"));
const CallToAction = lazy(() => import("../components/layout/landing-page/CallToAction"));

const Home = () => {
  return (
    <>
      <VideoSection />
      <Hero />
      <WhoWeAre />
      <Suspense fallback={null}>
        <WhatWeOffer />
        <HowItWorks />
        <WhyChooseUs />
        <WhatClientsSay />
        <WhereWeServe />
        <PriceCalculator />
        <CallToAction />
      </Suspense>
    </>
  );
};

export default Home;
