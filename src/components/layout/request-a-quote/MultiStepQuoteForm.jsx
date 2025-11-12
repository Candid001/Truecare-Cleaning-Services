import {useState} from "react";
import {toast} from "sonner";
import ContactDetailsStep from "./steps/ContactDetailsStep";
import ServiceDetailsStep from "./steps/ServiceDetailsStep";
import SchedulingExtrasStep from "./steps/SchedulingExtrasStep";
import ReviewSubmitStep from "./steps/ReviewSubmitStep";
import SuccessModal from "./SuccessModal";
import StepIndicator from "@/components/layout/request-a-quote/StepIndicator.jsx";
import Caution from "@assets/caution.svg?component"
import Button from "@/components/Button.jsx";
import { cn } from "@/lib/utils"

const STEPS = {
    CONTACT: 1,
    SERVICE: 2,
    SCHEDULING: 3,
    REVIEW: 4,
};

function MultiStepQuoteForm() {
    const [currentStep, setCurrentStep] = useState(STEPS.CONTACT);
    const [showSuccessModal, setShowSuccessModal] = useState(false);
    const [isSubmitting, setIsSubmitting] = useState(false);

    const [formData, setFormData] = useState({
        // Contact Information
        firstName: "",
        lastName: "",
        email: "",
        phone: "",
        city: "",
        province: "",

        // Service Details
        propertyType: "",
        serviceType: "",
        spaceSize: "",
        rooms: "",
        bathrooms: "",
        cleaningFrequency: "",
        cleanlinessLevel: "",
        provideSupplies: "",
        provideCleaning: "",
        hasPets: "",

        // Scheduling & Extras
        preferredDate: "",
        alternateDate: "",
        preferredTime: "",
        additionalNotes: "",
        photos: [],
    });

    const [errors, setErrors] = useState({});

    const updateFormData = (field, value) => {
        setFormData((prev) => ({...prev, [field]: value}));
        // Clear error for this field when user updates it
        if (errors[field]) {
            setErrors((prev) => {
                const newErrors = {...prev};
                delete newErrors[field];
                return newErrors;
            });
        }
    };

    const validateContactStep = () => {
        const newErrors = {};

        if (!formData.firstName.trim()) {
            newErrors.firstName = "First name is required";
        }
        if (!formData.lastName.trim()) {
            newErrors.lastName = "Last name is required";
        }
        if (!formData.email.trim()) {
            newErrors.email = "Email is required";
        } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
            newErrors.email = "Please enter a valid email address";
        }
        if (!formData.phone.trim()) {
            newErrors.phone = "Phone number is required";
        }
        if (!formData.city.trim()) {
            newErrors.city = "City is required";
        }
        if (!formData.province) {
            newErrors.province = "Province is required";
        }

        setErrors(newErrors);
        return Object.keys(newErrors).length === 0;
    };

    const validateServiceStep = () => {
        const newErrors = {};

        if (!formData.propertyType) {
            newErrors.propertyType = "Property type is required";
        }
        if (!formData.serviceType) {
            newErrors.serviceType = "Service type is required";
        }
        if (!formData.spaceSize.trim()) {
            newErrors.spaceSize = "Space size is required";
        }
        if (!formData.rooms) {
            newErrors.rooms = "Number of rooms is required";
        }
        if (!formData.bathrooms) {
            newErrors.bathrooms = "Number of bathrooms is required";
        }
        if (!formData.cleaningFrequency.trim()) {
            newErrors.cleaningFrequency = "Cleaning frequency is required";
        }
        if (!formData.cleanlinessLevel) {
            newErrors.cleanlinessLevel = "Cleanliness level is required";
        }
        if (!formData.provideSupplies) {
            newErrors.provideSupplies = "Please specify if you'll provide supplies";
        }
        if (!formData.provideCleaning) {
            newErrors.provideCleaning = "Please specify if you'll provide cleaning supplies";
        }
        if (!formData.hasPets) {
            newErrors.hasPets = "Please specify if you have pets";
        }

        setErrors(newErrors);
        return Object.keys(newErrors).length === 0;
    };

    const validateSchedulingStep = () => {
        const newErrors = {};

        if (!formData.preferredDate) {
            newErrors.preferredDate = "Preferred date is required";
        }
        if (!formData.preferredTime) {
            newErrors.preferredTime = "Preferred time is required";
        }

        setErrors(newErrors);
        return Object.keys(newErrors).length === 0;
    };

    const handleNext = () => {
        let isValid = false;

        if (currentStep === STEPS.CONTACT) {
            isValid = validateContactStep();
        } else if (currentStep === STEPS.SERVICE) {
            isValid = validateServiceStep();
        } else if (currentStep === STEPS.SCHEDULING) {
            isValid = validateSchedulingStep();
        }

        if (isValid) {
            setCurrentStep((prev) => prev + 1);
        } else {
            toast.error("Please fill in all required fields");
        }
    };

    const handleBack = () => {
        setCurrentStep((prev) => prev - 1);
    };

    const handleSubmit = async () => {
        setIsSubmitting(true);

        try {
            // Format the message for Telegram
            const message = `
🧹 *New Cleaning Quote Request*

*Contact Information*
Name: ${formData.firstName} ${formData.lastName}
Email: ${formData.email}
Phone: ${formData.phone}
City: ${formData.city}
Province: ${formData.province}

 *Service Details*
Property Type: ${formData.propertyType}
Service Type: ${formData.serviceType}
Space Size: ${formData.spaceSize}
Rooms: ${formData.rooms}
Bathrooms: ${formData.bathrooms}
Frequency: ${formData.cleaningFrequency}
Cleanliness Level: ${formData.cleanlinessLevel}
Client Provides Supplies: ${formData.provideSupplies}
Client Provides Cleaning Supplies: ${formData.provideCleaning}
Has Pets: ${formData.hasPets}

📅 *Schedule*
Preferred Date: ${formData.preferredDate}
${formData.alternateDate ? `Alternate Date: ${formData.alternateDate}` : ""}
Preferred Time: ${formData.preferredTime}

${formData.additionalNotes ? `📝 *Additional Notes*\n${formData.additionalNotes}` : ""}
      `.trim();

            // Replace with your Telegram Bot Token and Chat ID
            const TELEGRAM_BOT_TOKEN = "8255936518:AAEOpIvD2H2-H2RUmzn3bB1KkLKaBw829XM";
            const TELEGRAM_CHAT_ID = "6487668702";

            const response = await fetch(
                `https://api.telegram.org/bot${TELEGRAM_BOT_TOKEN}/sendMessage`,
                {
                    method: "POST",
                    headers: {
                        "Content-Type": "application/json",
                    },
                    body: JSON.stringify({
                        chat_id: TELEGRAM_CHAT_ID,
                        text: message,
                        parse_mode: "Markdown",
                    }),
                }
            );

            if (!response.ok) {
                throw new Error("Failed to send message");
            }

            // Handle photo uploads if any
            if (formData.photos.length > 0) {
                for (const photo of formData.photos) {
                    const photoFormData = new FormData();
                    photoFormData.append("chat_id", TELEGRAM_CHAT_ID);
                    photoFormData.append("photo", photo);
                    photoFormData.append("caption", "Quote request photo");

                    await fetch(
                        `https://api.telegram.org/bot${TELEGRAM_BOT_TOKEN}/sendPhoto`,
                        {
                            method: "POST",
                            body: photoFormData,
                        }
                    );
                }
            }

            setShowSuccessModal(true);
            toast.success("Quote request submitted successfully!");

            // Reset form after successful submission
            setTimeout(() => {
                setFormData({
                    firstName: "",
                    lastName: "",
                    email: "",
                    phone: "",
                    city: "",
                    province: "",
                    propertyType: "",
                    serviceType: "",
                    spaceSize: "",
                    rooms: "",
                    bathrooms: "",
                    cleaningFrequency: "",
                    cleanlinessLevel: "",
                    provideSupplies: "",
                    provideCleaning: "",
                    hasPets: "",
                    preferredDate: "",
                    alternateDate: "",
                    preferredTime: "",
                    additionalNotes: "",
                    photos: [],
                });
                setCurrentStep(STEPS.CONTACT);
            }, 3000);
        } catch (error) {
            console.error("Error submitting form:", error);
            toast.error("Failed to submit quote request. Please try again.");
        } finally {
            setIsSubmitting(false);
        }
    };

    const renderStep = () => {
        switch (currentStep) {
            case STEPS.CONTACT:
                return (
                    <ContactDetailsStep
                        formData={formData}
                        updateFormData={updateFormData}
                        errors={errors}
                    />
                );
            case STEPS.SERVICE:
                return (
                    <ServiceDetailsStep
                        formData={formData}
                        updateFormData={updateFormData}
                        errors={errors}
                    />
                );
            case STEPS.SCHEDULING:
                return (
                    <SchedulingExtrasStep
                        formData={formData}
                        updateFormData={updateFormData}
                        errors={errors}
                    />
                );
            case STEPS.REVIEW:
                return (
                    <ReviewSubmitStep
                        formData={formData}
                        onEdit={(step) => setCurrentStep(step)}
                    />
                );
            default:
                return null;
        }
    };

    return (
        <div className="space-y-5 md:space-y-10">
            <div className={`w-fit mx-auto space-y-5`}>
                <h2 className={cn("md:text-[40px] text-2xl leading-[120%]", currentStep !== 4 && "md:w-3/5 mx-auto", "text-center font-medium")}>
                    {currentStep === 4 ? "Review Your Details": "Tell Us About Your Cleaning Need"}
                </h2>

                {currentStep === 4 &&
                    <p className={cn("xl:max-w-3/5 lg:max-w-[70%] md:max-w-[75%] mx-auto text-center text-xs md:text-base")}>
                        Please take a moment to confirm your information and service details. Once everything looks right,
                        submit your request to receive your personalized cleaning quote.
                    </p>
                }
            </div>

            <div className={cn(currentStep < STEPS.REVIEW && "bg-blue-tert"," rounded-lg md:w-4/5 xl:w-[55%] mx-auto p-3 lg:p-5 space-y-10")}>
                <div className="space-y-5">
                    {/* Step Indicator */}
                    {currentStep < STEPS.REVIEW &&  <StepIndicator currentStep={currentStep} />}

                    {/* Privacy Notice */}
                    <div className="bg-blue-muted-pri py-2 px-5 rounded-sm">
                        <div className="flex items-center justify-center gap-3">
                            <Caution className={cn("hidden md:block")}/>
                            <p className="text-xs text-btn-primary">
                                We respect your privacy. Your information is only used to prepare your cleaning quote, never shared or sold.
                            </p>
                        </div>
                    </div>
                </div>

                {/* Form Step Content */}
                <div className="space-y-5">
                    {currentStep < STEPS.REVIEW  && <p className={`font-semibold text-xl`}>{currentStep === 1 ? "Contact Information": currentStep === 2 ? "Service Details": "Scheduling"}</p> }
                    {renderStep()}
                </div>

                {/* Navigation Buttons */}
                <div className="flex items-center gap-5 justify-between">
                    {currentStep > STEPS.CONTACT ? (
                        <Button variant={`form`} width={'w-1/2 md:w-[220px]'} onClick={handleBack} text={"Back"} />
                    ) : (
                        <Button onClick={() => (window.location.href = "/")}  width={'w-1/2 md:w-[220px]'} text={"Home"} variant={`form`} />
                    )}

                    {currentStep < STEPS.REVIEW ? (
                        <Button variant={`primary`} text={ `Next`}  width={'w-1/2 md:w-[220px]'} onClick={handleNext}/>
                    ) : (
                        <Button variant={`primary`} width={'w-1/2 md:w-[220px]'} text={isSubmitting ? "Submitting..." : "Submit"} onClick={handleSubmit} disabled={isSubmitting}/>
                    )}
                </div>
            </div>

            <SuccessModal
                isOpen={showSuccessModal}
                onClose={() => setShowSuccessModal(false)}
            />
        </div>
    );
}

export default MultiStepQuoteForm;
