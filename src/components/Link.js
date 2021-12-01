import {Link} from "react-router-dom";

function StyledLink(props) {
    return (
        <Link to={props.to} className="link">{props.text}</Link>
    )
}

export default StyledLink;