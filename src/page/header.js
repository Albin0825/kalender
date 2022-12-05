import { Link } from "react-router-dom";
import '../App.css';


function HeaderBar() {
    let setup =
        <nav>
            <ul style={{display: "flex", justifyContent: "flex-end"}}>
                <li style={{display: "inline-block", textAlign: "center"}}>
                    <Link style={{textDecoration: "none"}} to="/Home">Kalender</Link>
                </li>
                <li style={{display: "inline-block", textAlign: "center"}}>
                    <Link style={{textDecoration: "none"}} to='/Login'>Login</Link>
                </li>
                <li style={{display: "inline-block", textAlign: "center"}}>
                    <Link style={{textDecoration: "none"}} to='/OneEventOpen'>OneEventOpen</Link>
                </li>
                <li style={{display: "inline-block", textAlign: "center"}}>
                    <Link style={{textDecoration: "none"}} to="/Hamburger">Hamburger meny</Link>
                </li>
                <li style={{display: "inline-block", textAlign: "center"}}>
                    <Link style={{textDecoration: "none"}} to="/Datadump">DATA</Link>
                </li>
            </ul>
        </nav>;
    return (
        <header style={{
            display: "flex",
            justifyContent: "space-around",
            alignItems: "center",
            background: "linear-gradient(135deg, rgba(255,255,255,0.75) 0%, rgba(255,255,255,0.12) 100%)",
            width: "100%",
            height: "6vh",
            backdropFilter: "blur(40px)"
            }}>
            <img src="" alt="ACE SOFT"></img>
            {setup}
        </header>
    );
}

export default HeaderBar;