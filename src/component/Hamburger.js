import React, { useState, useEffect } from "react"
import { Link, useLocation } from "react-router-dom"
import { loadLs } from './Funktioner';
import '../App.css';

function Hamburger() {
    const [navbarOpen, setNavbarOpen] = useState(false)
    const handleToggle = () => {
        setNavbarOpen(prev => !prev)
    }

    const location = useLocation();

    const [uid] = useState(loadLs('uID'));
    const [token] = useState(loadLs('token'));
    const [eventlist, setEventlist] = useState([]);
    
    const getEvents = async () => {
        let API_URL = "https://takeee.ntigskovde.se/Calendar/calendar_index.php?action=showEvent&uID="+uid+"&token="+token;
        const response = await fetch(`${API_URL}`)
        .then(response => response.json())
        .then(
            (result)=>{
                setEventlist(result["Data"]["My events"]);
            }
        )
    }

    useEffect(() => {
        getEvents();
    }, []);
    
    return (
        <div>
            <nav className="navBar">
                <button className={`button ${navbarOpen ? " showMenu" : "noMenu"}`} onClick={handleToggle}></button>
                {location.pathname.match(/^\/Eventlist$/i) || location.pathname.match(/^\/Allaevent$/i) ? // if it is /Eventlist in the url (works with lowercase and uppercase and everything in between)
                    <>
                        <Link className={`button menuNav1 ${navbarOpen ? " showMenu" : "noMenu"}`} to="/add"/>
                    </>
                : null}
                {location.pathname.match(/^\/OneEventOpen$/i) ? // if it is /OneEventOpen in the url (works with lowercase and uppercase and everything in between)
                    <>
                        <Link className={`button menuNav2 ${navbarOpen ? " showMenu" : "noMenu"}`} to="/editevent"/>
                        <Link className={`button menuNav3 ${navbarOpen ? " showMenu" : "noMenu"}`} to="/delete" />
                    </>
                : null}
            </nav>
        </div>
    );
}

export default Hamburger;