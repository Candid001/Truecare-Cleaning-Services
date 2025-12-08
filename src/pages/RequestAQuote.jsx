import {serviceCta} from "@lib/utils.jsx";

import ServicesHero from "@components/layout/services/ServicesHero.jsx";
import ServiceCTA from "@components/layout/services/ServiceCTA.jsx";
import Button from "@/components/Button.jsx";
import RequestAQuoteForm from "@components/layout/request-a-quote/RequestAQuoteForm.jsx";

function RequestAQuote (){
    return (
        <>
            <ServicesHero
                nav={'Request A Quote'}
                heading={'Quick, Simple, and Transparent'}
                desc={`At TrueCare Cleaning Services, getting a quote shouldn’t feel complicated. We keep the process straightforward with no hidden fees, no pressure, just honest pricing tailored to your home or business.`
                }
                maxWH={'lg:max-w-1/2 md:max-w-3/5'}
                maxWD={'lg:max-w-[55%] md:max-w-[70%]'}
            />
            <RequestAQuoteForm />
            <ServiceCTA
                {...serviceCta.homeAndApartments}
                email={
                    <a className={`block w-full`} href={`mailto:info@truecarecleaningservices.ca`}>
                        <Button text={`Email: info@truecarecleaningservices.ca`} variant={`secondary`} cta={true}/>
                    </a>
                }
            />
        </>
    )
}

export default RequestAQuote;