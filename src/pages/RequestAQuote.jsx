import {serviceCta} from "@lib/utils.jsx";

import ServiceCTA from "@components/layout/services/ServiceCTA.jsx";
import Button from "@/components/Button.jsx";
import RequestAQuoteForm from "@components/layout/request-a-quote/RequestAQuoteForm.jsx";
import Guarantee from "@components/layout/landing-page/Guarantee.jsx";
import ReviewHighlights from "@components/layout/landing-page/ReviewHighlights.jsx";
import Faq from "@components/layout/landing-page/Faq.jsx";

function RequestAQuote (){
    return (
        <>
            <RequestAQuoteForm />
            <Guarantee />
            <ReviewHighlights />
            <Faq />
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
