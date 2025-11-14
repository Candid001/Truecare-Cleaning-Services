import React from "react";
import Image from "@assets/frame106.svg";
import Button from "../../Button.jsx";

const CallToAction = () => {
  return (
    <div
      className="py-20 px-auto overflow-hidden bg-cover bg-center lg:flex"
      style={{
        backgroundImage: `linear-gradient(to right, rgba(0, 102, 204, 0.7) 40%, rgba(0, 102, 204, 0.2) 60%), url(${Image})`,
      }}
    >
      <div className="flex flex-col gap-2 w-[90%] mx-auto lg:align-left md:w-2/3 md:mx-10 lg:w-1/3 lg:mx-30">
        <p className="text-highlight-blue-500 bg-muted-blue p-1 w-fit rounded-sm text-sm">
          Ready for a Cleaner Space?
        </p>
        <div className="flex flex-col gap-8">
          <div className="flex flex-col gap-6">
            <h1 className="font-medium text-[52px] text-white">
              Your Clean Space Starts Right Here
            </h1>
            <p className="text-white text-lg">
              From quick quotes to reliable service, TrueCare makes cleaning
              easy. Book today and see why Saskatchewan trusts us for spotless
              results.
            </p>
          </div>
          {/* Button div */}
          <div className="flex flex-row gap-3">
            <Button
              text="Call Us: +1-234-567-890"
              className="bg-white text-blue-sec text-sm px-4 py-3 rounded-[60px] font-medium"
            />
            <Button
              text="Request a Quote"
              className="bg-deep-blue text-white text-[12px] sm:text-[15px] px-4 py-3  rounded-[60px] font-medium"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default CallToAction;
