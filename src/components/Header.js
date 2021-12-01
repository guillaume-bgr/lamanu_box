import { Link } from "react-router-dom";
import StyledLink from "./Link";

function Header() {
    return (
        <header className="w-100 d-flex justify-content-between align-items-center">
            <div className="mt-2">
                <Link to="/" className="logo h2 ms-2 text-decoration-none"><span>LA </span><span>MANU</span></Link>
            </div>
            <ul className="d-flex mb-0 w-25 me-3 align-items-center justify-content-end list-unstyled align-top">
                <li class="pe-2"><StyledLink text="Nos offres" to="/boxes" /></li>
                <li><StyledLink text="Calculateur de stockage" to="/calculator" /></li>
            </ul>
        </header>
    )
}

export default Header;