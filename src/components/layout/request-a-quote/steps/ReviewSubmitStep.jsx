import Editheader from "../Editheader.jsx";
import ReviewInfo from "@/components/layout/request-a-quote/ReviewInfo.jsx";

function ReviewSubmitStep({formData, onEdit}) {
    return (
        <div className="space-y-8">

            {/* Contact Information */}
            <div className="space-y-7 pb-10 border-b border-border-grey">
                {/*Header*/}
                <Editheader title="Contact Information" onEdit={() => onEdit(1)}/>

                <div className="rounded-lg space-y-3">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-7">
                        <ReviewInfo title={"Name"} value={formData.firstName + " " + formData.lastName}/>
                        <ReviewInfo title={"Email"} value={formData.email}/>
                        <ReviewInfo title={"Phone"} value={formData.phone}/>
                        <ReviewInfo title={"City"} value={formData.city + ", " + formData.province}/>
                    </div>
                </div>
            </div>

            {/* Service Summary */}
            <div className="space-y-7 pb-10 border-b border-border-grey">
                <Editheader title="Service Summary" onEdit={() => onEdit(2)}/>

                <div className="rounded-lg space-y-3">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-7">
                        <ReviewInfo title={"Property Type"} value={formData.propertyType}/>
                        <ReviewInfo title={"Service Type"} value={formData.serviceType}/>
                        <ReviewInfo title={"Space Size"} value={formData.spaceSize}/>
                        <ReviewInfo title={"Rooms"} value={formData.rooms + "," + formData.bathrooms}/>
                        <ReviewInfo title={"Frequency"} value={formData.cleaningFrequency}/>
                        <ReviewInfo title={"Cleanliness Level"} value={formData.cleanlinessLevel}/>
                        <ReviewInfo title={"Supplies Provided"} value={formData.provideCleaning}/>
                        <ReviewInfo title={"Pets"} value={formData.hasPets}/>
                    </div>
                </div>
            </div>

            {/* Schedule */}
            <div className="space-y-7 pb-10 border-b border-border-grey">
                <Editheader title="Schedule" onEdit={() => onEdit(3)}/>

                <div className="rounded-lg space-y-3">
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                        <ReviewInfo title={"Preferred Date"} value={formData.preferredDate}/>
                        {formData.alternateDate && (
                            <ReviewInfo title={"Alternate Date"} value={formData.alternateDate}/>
                        )}
                        <ReviewInfo title={"Preferred Time"} value={formData.preferredTime}/>
                    </div>
                    {formData.additionalNotes && (
                        <ReviewInfo title={"Additional Notes"} value={formData.additionalNotes}/>
                    )}
                </div>
            </div>

            {/* Uploaded Images */}
            {formData.photos && formData.photos.length > 0 && (
                <div className="space-y-4">
                    <Editheader title="Uploaded Images" onEdit={() => onEdit(3)}/>

                    <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                        {formData.photos.map((photo, index) => (
                            <div key={index} className="relative">
                                <img
                                    src={URL.createObjectURL(photo)}
                                    alt={`Upload ${index + 1}`}
                                    className="w-full h-24 object-cover rounded-lg"
                                />
                            </div>
                        ))}
                    </div>
                </div>
            )}
        </div>
    );
}

export default ReviewSubmitStep;
