
const Card = ({name, phone, mail}) => {
    return (
        <div className="card">
            <p>{name}</p>
            <p>{phone}</p>
            <p>{mail}</p>
        </div>
    )
}

export default Card