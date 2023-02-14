
import "./index.css"

const Card = (props) => {

    return (
        <div id="ships-container">
            {props.shipNames}
        </div>
    )
}

export default Card