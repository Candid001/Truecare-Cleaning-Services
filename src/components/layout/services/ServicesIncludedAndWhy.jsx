function ServicesIncludedAndWhy({services, heading}) {
    return(
        <div className={`col-span-1 space-y-5`}>
            <h3 className={`text-2xl font-medium`}>{heading}</h3>

            <ul className={`list-disc list-inside lg:px-5`}>
                {services.map((service, index) => (
                    <li key={index} className={`text-sm lg:text-base`}>{service}</li>
                ))}
            </ul>
        </div>
    )
}

export default ServicesIncludedAndWhy;