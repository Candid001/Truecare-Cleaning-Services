import {serviceCta} from "@lib/utils.jsx";

import ServicesHero from "@components/layout/services/ServicesHero.jsx";
import ServiceCTA from "@components/layout/services/ServiceCTA.jsx";
import Button from "@components/ui/Button.jsx";
import RequestAQuoteForm from "@components/layout/request-a-quote/RequestAQuoteForm.jsx";

function RequestAQuote (){
    return (
        <>
            <ServicesHero
                nav={'Request A Quote'}
                heading={'Quick, Simple, and Transparent'}
                desc={`At TrueCare Cleaning Services, requesting a quote is easy.
                 No hidden fees, no pressure  just honest pricing and professional service designed around your schedule and space.`
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