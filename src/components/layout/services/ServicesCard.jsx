import {Link} from "react-router-dom"
import {ChevronRight} from "lucide-react";

function ServicesCard({heading, desc, link}) {
    return(
        <div className={`col-span-1 bg-white rounded-xl p-10 relative`}>
            <div className={`space-y-3 pb-16`}>
                <h4 className={`text-2xl font-medium`}>{heading}</h4>
                <p>{desc}</p>
            </div>

            <div className={`flex gap-2 items-center absolute bottom-7 left-10`}>
                <Link to={link} className={`text-btn-primary font-medium`}>Learn More</Link>
                <ChevronRight className={`h-4 w-4`}/>
            </div>
        </div>
    )
}

export default ServicesCard;