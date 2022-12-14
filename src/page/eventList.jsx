import '../App.css';
import BG from '../bilder/andrew-neel-cckf4TsHAuw-unsplash.jpg';

import { useEffect, useState } from "react";
import React from 'react';
import Event from '../component/Event';
import { loadLs } from '../component/Funktioner';
import { Link } from 'react-router-dom';

function Eventlista(response){

    const [navbarOpen, setNavbarOpen] = useState(false)
    const handleToggle = () => {
        setNavbarOpen(prev => !prev)
    }

    const [uid] = useState(loadLs('uID'));
    const [token] = useState(loadLs('token'));
    const [eventlist, setEventlist] = useState([]);

    
    const getEvents = async () => {
        let API_URL = "https://takeee.ntigskovde.se/Calendar/calendar_index.php?action=showEvent&uID="+uid+"&token="+token+"";
        const response = await fetch(`${API_URL}`)
        .then(response => response.json())
        .then(
            (result)=>{
                console.log(loadLs());
                console.log("bruh", loadLs('token'));
                console.log("hej", result["Data"]["My events"]);
                setEventlist(result["Data"]["My events"]);   
            }
        )
        
       //const data = await response.json(); 
    }
    
    useEffect(() => {
        getEvents();
      }, []);

    return(
        <div className='lista'>   
            <div className='eventList'>
                <img src={BG} alt="background image" />
                    
                    {eventlist.length}
                    {eventlist?.length?(
                    eventlist.map((events) => (
                    <Event key={events["ID"].toString()} event={events} />    
                    )))
                    :(
                        <div>Detta är fel</div>
                    )}
                <nav className="navBar">
                    <button className={`button ${navbarOpen ? " showMenu" : "noMenu"}`} onClick={handleToggle}></button>
                    <Link className={`button menuNav1 ${navbarOpen ? " showMenu" : "noMenu"}`} to="/add"/>
                    <Link className={`button menuNav3 ${navbarOpen ? " showMenu" : "noMenu"}`} to="/delete" />
                </nav>
            </div>
        </div>
    )
}

export default Eventlista;