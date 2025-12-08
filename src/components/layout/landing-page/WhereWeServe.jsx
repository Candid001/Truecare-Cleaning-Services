import React from "react";
// import Map from "@assets/map1.svg";
// import MapLg from "@assets/map.svg";
import Map from "@components/layout/about-us/Map.jsx";

const WhereWeServe = () => {
  return (
    <div className="xl:pt-24 md:pt-32 py-20 w-[90%] mx-auto flex flex-col gap-12">
      <div className="flex flex-col gap-12">
        <div className="flex flex-col gap-3 text-center">
          <p className="bg-muted-blue p-1 w-fit rounded-sm font-medium text-sm text-highlight-blue-500 self-center">
            Who We Are
          </p>
          <div className="flex flex-col gap-6">
            <h1 className="font-semibold text-[40px] ">Where We Serve</h1>
            <p className="lg:w-[720px] self-center">
              Proudly serving homes, offices, and properties across Regina and
              surrounding Saskatchewan communities delivering dependable
              cleaning wherever true care is needed most.
            </p>
          </div>
        </div>
        <div>
          <Map />
        </div>
      </div>
    </div>
  );
};

export default WhereWeServe;
