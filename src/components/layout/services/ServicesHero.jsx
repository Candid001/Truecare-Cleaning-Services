import HeroBg from "@assets/hero-bg.svg";

function ServicesHero({nav, heading, desc, maxWH, maxWD}) {
    return(
        <div
            style={{
                backgroundImage: `url(${HeroBg})`,
                backgroundSize: "cover",
                backgroundPosition: "center",
            }}
            className={`py-20 text-center text-white space-y-5 flex justify-center`}
        >
            <div className={`w-fit mx-auto space-y-6 px-5 md:px-0`}>
                <div className={`${maxWH} mx-auto space-y-3`}>
                    <p className={`text-sm md:text-base`}>Home &gt; {nav}</p>
                    <h1 className={`font-medium text-[40px] md:text-[52px] leading-[120%]`}>{heading}</h1>
                </div>

                <p className={`${maxWD} mx-auto`}>{desc}</p>
            </div>
        </div>
    )
}

export default ServicesHero;