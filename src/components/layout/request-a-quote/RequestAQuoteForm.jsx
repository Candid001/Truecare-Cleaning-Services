import AdditonalInfo from "@components/layout/request-a-quote/AdditonalInfo.jsx";
import Satisfaction from "@assets/satisfaction.svg?component"
import Professional from "@assets/professional.svg?component"
import Eco from "@assets/eco-friendly.svg?component"
import Insured from "@assets/insured.svg?component"
import MultiStepQuoteForm from "@/components/layout/request-a-quote/MultiStepQuoteForm.jsx";

function RequestAQuoteForm(){
    return (
        <div className={`py-10 md:py-20 px-3 md:px-0 space-y-20`}>
            <div className="space-y-10">
                <h2 className={`text-[40px] leading-[120%] md:w-3/5 lg:max-w-1/3 mx-auto text-center font-medium`}>Tell Us About Your Cleaning Needs</h2>
                {/*Form*/}
                <MultiStepQuoteForm />
            </div>

            {/*Additional Info*/}
            <div className={`space-y-5`}>
                <div className="flex flex-col md:flex-row items-center justify-center gap-3 md:gap-7">
                    <AdditonalInfo icon={<Insured />} title={`Fully Insured and Bonded`} />
                    <AdditonalInfo icon={<Eco />} title={`Eco-Friendly Cleaning Products`} />
                </div>

                <div className="flex flex-col md:flex-row items-center justify-center gap-3 md:gap-7">
                    <AdditonalInfo icon={<Professional />} title={`Trained, Background-Checked Professionals`} />
                    <AdditonalInfo icon={<Satisfaction />} title={`100% Satisfaction Guaranteed`} />
                </div>
            </div>
        </div>
    )
}

export default RequestAQuoteForm;