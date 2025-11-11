function AboutUSContent({heading, description, isList, listArray}) {
    return (
        <div className={`flex flex-col md:flex-row items-start justify-between gap-10 lg:gap-20 pb-10 ${!isList && "border-b border-b-border-grey"}`}>
            <h2 className={`font-medium text-[40px] leading-[120%]`}>{heading}</h2>
            <div className={`basis-3/5 text-lg`}>
                {isList ?
                    <ul className={`list-disc space-y-5 lg:px-5 px-5`}>
                        {listArray.map((item, index) => (
                            <li key={index}>{item}</li>
                        ))}
                    </ul> :
                    <p>
                        {description}
                    </p>
                }
            </div>
        </div>
    )
}

export default AboutUSContent;