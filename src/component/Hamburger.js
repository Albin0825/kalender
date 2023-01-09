import React, { useState, useEffect } from "react"
import {Link} from "react-router-dom"
import { loadLs } from './Funktioner';
import Event from './Event';

function Hamburger() {
    const [navbarOpen, setNavbarOpen] = useState(false)
    const handleToggle = () => {
        setNavbarOpen(prev => !prev)
    }

    const [uid] = useState(loadLs('uID'));
    const [token] = useState(loadLs('token'));
    const [eventlist, setEventlist] = useState([]);
    
    const getEvents = async () => {
        let API_URL = "https://takeee.ntigskovde.se/Calendar/calendar_index.php?action=showEvent&uID="+uid+"&token="+token;
        const response = await fetch(`${API_URL}`)
        .then(response => response.json())
        .then(
            (result)=>{
                console.log(loadLs());
                console.log(loadLs('token'));
                console.log(result);
                console.log(result["Data"]["My events"]);
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
                <Link className={`button menuNav1 ${navbarOpen ? " showMenu" : "noMenu"}`} to="/add"/>
                <Link className={`button menuNav2 ${navbarOpen ? " showMenu" : "noMenu"}`} to="/editevent"/>
                <Link className={`button menuNav3 ${navbarOpen ? " showMenu" : "noMenu"}`} to="/delete" />
            </nav>
        </div>
    );
}

export default Hamburger;