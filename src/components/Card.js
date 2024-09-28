const Card = ({ data }) => {
    return <div className="card">
        <div>{data.Name}</div>
        <div>{data.BranchType}</div>
        <div>{data.DeliveryStatus}</div>
        <div>{data.District}</div>
        <div>{data.Division}</div>
    </div>
}

export default Card;