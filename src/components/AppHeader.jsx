import { NavLink, Link } from "react-router-dom";

function AppHeader() {

    const NavLinks = [
        {
            path: "/",
            title: "Home"
        },
        {
            path: "/movies",
            title: "Film"
        }
    ]

    return <header>
        <nav className="navbar navbar-expand-lg bg-body-tertiary">
            <div className="container-fluid">
                <Link className="navbar-brand" to="/" >Bool Movies</Link>
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarSupportedContent">
                    <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                        {NavLinks.map((cureLink, index) => (
                            <li className="nav-item" key={index}>
                                <NavLink className="nav-link" to={cureLink.path}>{cureLink.title}</NavLink>
                            </li>
                        ))}
                    </ul>
                </div>
            </div>
        </nav>
    </header>
};

export default AppHeader;