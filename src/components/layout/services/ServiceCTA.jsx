import CTABg from "@assets/cta-bg.svg"
import {Link} from "react-router-dom";
import Button from "@components/ui/Button.jsx";

function ServiceCTA({cta, heading, desc}) {
    return(
        <div className={`py-20 md:w-[90%] lg:w-4/5 mx-auto px-5 md:px-0`}>
            <div
                className={`w-full rounded-lg py-10 relative overflow-hidden`}
                style={{
                    backgroundImage: `url(${CTABg})`,
                    backgroundSize: "cover",
                    backgroundPosition: "center",
                }}
            >
                <div
                    className="absolute inset-0 w-full h-full bg-blue-tertiary/50"
                />

                <div className="relative z-10 text-white space-y-14">
                    <div className={`space-y-7 w-fit mx-auto`}>
                        <div className={`space-y-3 text-center`}>
                            <p className={`text-sm`}>{cta}</p>
                            <h2 className={`text-[52px] xl:text-[61px] leading-[120%] lg:w-3/5 mx-auto font-semibold`}>{heading}</h2>
                        </div>
                        <p className={`text-center md:text-sm md:w-3/5 mx-auto px-5 md:px-0`}>{desc}</p>
                    </div>

                    <div className={`flex flex-col md:flex-row justify-center gap-5 px-5 md:px-10 lg:max-w-4/5 xl:w-3/5 mx-auto`}>
                       <a className={`block w-full`} href={`tel:639-385-0823`}>
                           <Button text={`Call Us: +1-639-385-0823`} variant={`default`} cta={true}/>
                       </a>

                        <Link to={`/request-a-quote`} className={`md:ml-5 block w-full`}>
                            <Button text={`Book My Cleaning`} variant={`secondary`} cta={true}/>
                        </Link>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default ServiceCTA;