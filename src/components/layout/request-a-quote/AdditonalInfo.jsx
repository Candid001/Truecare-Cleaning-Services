function AdditonalInfo({icon, title}) {
    return (
        <div className="flex items-center gap-2">
            <div>{icon}</div>
            <p className={`text-xs`}>{title}</p>
        </div>
    )
}

export default AdditonalInfo;