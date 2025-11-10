import ServicesIncludedAndWhy from "./ServicesIncludedAndWhy";

function ServicesOverview({desc, images, services, why}) {
    return(
        <div className={`py-10 md:py-20 md:w-[90%] lg:w-4/5 mx-auto space-y-14 px-5 md:px-0`}>
            {/*Overview*/}
            <div className={`space-y-5`}>
                <h2 className={`font-medium text-2xl`}>Service Overview</h2>
                <p>{desc}</p>
            </div>

            {/*Images*/}
            <div className={`grid grid-col-1 md:grid-cols-2 gap-7`}>
                {images.map((image, index) => (
                    <div
                        key={index}
                        className={`col-span-1 rounded-xl h-[300px]`}
                        style={{
                            backgroundImage: `url(${image})`,
                            backgroundSize: "cover",
                            backgroundPosition: "center",
                        }}
                    >
                    </div>
                ))}
            </div>

            {/*Services & Why*/}
            <div className={`grid grid-cols-1 md:grid-cols-2 gap-10 px-1 lg:px-0`}>
                <ServicesIncludedAndWhy services={services} heading={`What's included`}/>
                <ServicesIncludedAndWhy services={why} heading={`Why choose us`}/>
            </div>
        </div>
    )
}

export default ServicesOverview;