import React from "react";
import ServicesHero from "@components/layout/services/ServicesHero.jsx";

const ContactUs = () => {
  return (
    <div>
      <ServicesHero
        nav={"Contact Us"}
        heading={"We’re Here to Help"}
        desc={`Have questions or ready to book a service? Reach out to our friendly team  we’ll respond quickly and help you get the clean you deserve.`}
        maxWH={"lg:max-w-3/5 md:max-w-4/5"}
        maxWD={"lg:max-w-[55%] md:max-w-4/5"}
      />
    </div>
  );
};

export default ContactUs;
