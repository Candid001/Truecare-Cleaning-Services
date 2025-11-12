function ReviewInfo({title, value}) {
    return(
        <div className={`space-y-3 text-sm`}>
            <h3 className={`font-medium`}>{title}</h3>
            <p className={`text-review-muted`}>{value}</p>
        </div>
    )
}

export default ReviewInfo;