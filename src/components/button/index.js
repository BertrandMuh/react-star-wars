
import "./index.css"

const Button = (props) => {

    return (
        <div id="btn-container">
            <button type="button">back</button>
            <span className="page-number">1</span>
            <button type="button">next</button>
        </div>
    )
}

export default Button