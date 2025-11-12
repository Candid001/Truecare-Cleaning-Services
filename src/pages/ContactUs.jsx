import React from "react";
import ServicesHero from "@components/layout/services/ServicesHero.jsx";
import { MapPinned, PhoneCall, Mail } from 'lucide-react';


const ContactUs = () => {
  return (
    <>
      <ServicesHero
        nav={"Contact Us"}
        heading={"We’re Here to Help"}
        desc={`Have questions or ready to book a service? Reach out to our friendly team  we’ll respond quickly and help you get the clean you deserve.`}
        maxWH={"lg:max-w-3/5 md:max-w-4/5"}
        maxWD={"lg:max-w-[55%] md:max-w-4/5"}
      />

      <div className="py-10">
        <div className="flex flex-col space-y-6 mx-auto border-b-2 py-6 items-center text-center">
          <h2 className="font-medium text-2xl text-blue-500 flex gap-2"><MapPinned /> Address:</h2>
          <p className="text-lgto w-[90%] mx-au">Serving Regina and surrounding areas across Saskatchewan</p>
        </div>
        <div className="flex flex-col space-y-6 mx-auto border-b-2 py-6 items-center text-center">
          <h2 className="font-medium text-2xl text-blue-500 flex gap-2"><PhoneCall /> Phone:</h2>
          <p className="text-lgto w-[90%] mx-au">+1-234-567-890</p>
        </div>
        <div className="flex flex-col space-y-6 mx-auto border-b-2 py-6 items-center text-center">
          <h2 className="font-medium text-2xl text-blue-500 flex gap-2"><Mail /> Email:</h2>
          <p className="text-lgto w-[90%] mx-au">info@truecarecleaning.ca</p>
        </div>
        <div className="flex flex-col space-y-6 mx-auto border-b-2 py-6 items-center text-center">
          <h2 className="font-medium text-2xl text-blue-500 flex gap-2"><MapPinned /> Hours of Operation</h2>
          <p className="text-lgto w-[90%] mx-au">Monday – Friday: 8:00 AM – 6:00 PM <br />Saturday – Sunday: 9:00 AM – 4:00 PM</p>
        </div>
      </div>
    </>
  );
};

export default ContactUs;
