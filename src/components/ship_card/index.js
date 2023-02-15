
import "./index.css"

const Card = (props) => {
    const shipNames = props.shipNames
    return (
        <div id="ships-container">
            {shipNames}
        </div>
    )
}

export default Card