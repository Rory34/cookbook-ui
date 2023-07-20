import 'bootstrap/dist/css/bootstrap.min.css'
import {Link} from "react-router-dom";
import {useContext} from "react";
import {AuthContext} from "./security/AuthContext";

function HeaderComponent() {
    const authContext = useContext(AuthContext)
    const isAauthenticated = authContext.isAuthenticated;
    return (
        <header className="border-bottom border-light border-5 mb-5 p-2">
            <div className="container">
                <div className="row">
                    <nav className="navbar navbar-expand-lg">
                        {isAauthenticated ?
                            <Link className="navbar-brand ms-2 fs-2 fw-bold text-black" to="/recipes">Cookbook</Link> :
                            <div className="navbar-brand ms-2 fs-2 fw-bold text-black">Cookbook</div>}
                        <div className="collapse navbar-collapse">
                            <ul className="navbar-nav">
                                {/*Put filter option here*/}
                            </ul>
                        </div>
                        <ul className="navbar-nav">
                            <li className="nav-item">{isAauthenticated
                                && <Link className="nav-link" to="/logout">Logout</Link>}</li>
                            <li className="nav-item">{!isAauthenticated
                                && <Link className="nav-link" to="/login">Login</Link>}</li>
                        </ul>
                    </nav>
                </div>
            </div>
        </header>
    )
}
export default HeaderComponent