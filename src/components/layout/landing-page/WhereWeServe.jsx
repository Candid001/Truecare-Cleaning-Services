import React from "react";
import Map from "@assets/map1.svg"
import MapLg from "@assets/map.svg"

const WhereWeServe = () => {
  return (
    <div className="w-full h-fit px-5 py-10 flex flex-col gap-12 md:px-10 md:py-20 lg:p-30">
      <div className="flex flex-col gap-12">
        <div className="flex flex-col gap-3 text-center">
          <p className="bg-muted-blue p-1 w-fit rounded-sm font-medium text-sm text-highlight-blue-500 self-center">
            Who We Are
          </p>
          <div className="flex flex-col gap-6">
            <h1 className="font-semibold text-[40px] ">Where We Serve</h1>
            <p className="lg:w-[720px] self-center">
              Proudly serving homes, offices, and properties across Regina and
              nearby Saskatchewan communities delivering dependable cleaning
              wherever true care is needed most.
            </p>
          </div>
        </div>
        <div>
            <img src={Map} alt="Map" className="md:hidden"/>
            <img src={MapLg} alt="Map" className="hidden md:flex"/>
            {/* <MapLg /> */}
        </div>
      </div>
    </div>
  );
};

export default WhereWeServe;
