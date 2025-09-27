export const ItemCard = ({name, description, link})=>{
    console.log(link)
    return (
        <a href={link} className="item-link">
        <div className="item">
        <img 
        className="item-image" 
        src={link} alt="" />
        <div className="item-content">
            <h3>{name}</h3>
            <p>{description}</p>
            <button className="view-btn" href={link}>View ...</button>
        </div>
        </div>
        </a>
    )
}