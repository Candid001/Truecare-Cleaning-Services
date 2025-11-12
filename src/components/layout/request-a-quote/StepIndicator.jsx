function StepIndicator({currentStep}) {
    return (
        <div className="space-y-5 w-4/5 mx-auto">
                <div className="flex items-center w-full">
                    {[
                        {num: 1, label: "Contact Details"},
                        {num: 2, label: "Service Details"},
                        {num: 3, label: "Scheduling & Extras"},
                    ].map((step) => (
                        <div key={step.num} className="flex items-center flex-1">
                            <div className="flex flex-col items-center flex-1">
                                <div
                                    className={`w-10 h-10 rounded-full flex items-center justify-center font-medium transition-colors ${
                                        currentStep >= step.num
                                            ? "bg-btn-primary text-white"
                                            : "bg-transparent border border-grey-sec text-grey-sec"
                                    }`}
                                >
                                    {step.num}
                                </div>
                                <span
                                    className={`text-sm mt-2 text-center font-medium ${
                                        currentStep >= step.num
                                            ? "text-grey"
                                            : "text-grey-pri"
                                    }`}
                                >
                                Step {step.num}:
                            </span>
                                <span className={`text-xs text-center text-grey-tert`}>
                                {step.label}
                            </span>
                            </div>
                        </div>
                    ))}
                </div>

            <div className="w-full bg-border-grey h-[3px]">
                <div className={`h-full bg-btn-primary`} style={{width: `${(currentStep/3)*100}%`}}>

                </div>
            </div>
        </div>
    )
}

export default StepIndicator