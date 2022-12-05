import { Link } from "react-router-dom";


function HeaderBar() {
    let setup =
        <nav style={{
            background: "linear-gradient(135deg, rgba(255,255,255,0.75) 0%, rgba(255,255,255,0.12) 100%)",
            width: "100%",
            height: "6vh",
            backdropFilter: "blur(40px)"
            }}>
            <ul>
                <li>
                    <Link style={{textDecoration: "none"}} to="/Home">Kalender</Link>
                    <Link style={{textDecoration: "none"}} to="/Back">tillbaka</Link>
                    <Link style={{textDecoration: "none"}} to='/Login'>Login</Link>
                    <Link style={{textDecoration: "none"}} to='/OneEventOpen'>OneEventOpen</Link>
                    <Link style={{textDecoration: "none"}} to="/Hamburger">Hamburger meny</Link>
                    <Link style={{textDecoration: "none"}} to="/Datadump">DATA</Link>
                   
                </li>
            </ul>
        </nav>;
    console.log(setup)
    return (
        <header>
            {setup}
        </header>
    );
}

export default HeaderBar;