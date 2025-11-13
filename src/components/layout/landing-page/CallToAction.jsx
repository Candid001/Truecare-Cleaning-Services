import React from "react";
import {serviceCta} from "@lib/utils.jsx";
import ServiceCTA from "@components/layout/services/ServiceCTA.jsx";
import Image from "@assets/frame106.svg";
import Button from "../../Button.jsx";

const CallToAction = () => {
  return (
    <>
      <ServiceCTA {...serviceCta.homeAndApartments}/>
    </>
  );
};

export default CallToAction;
