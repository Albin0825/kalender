import '../App.css';
import BG from '../bilder/marita-kavelashvili-ugnrXk1129g-unsplash.jpg';
import ARROW from '../bilder/Vector.svg';
import { useEffect, useState } from "react";
import React from 'react';
import Event from '../component/Event';
import { loadLs } from '../component/Funktioner';
import { Link } from 'react-router-dom';
import Backbutton from "../component/backbutton";

function Alleventlist(response){

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
        
       //const data = await response.json(); 
    }
    
    useEffect(() => {
        getEvents();
      }, []);

    return(
        <div className='con'>
            <img src={BG} alt="background image" />
                <div className='window blur eventList'>
                    <Backbutton />
                    <p className="OneEventOpenRubrik">Dina händelser</p>
                    {
                    eventlist.map((events) => (
                    <Event key={events["ID"].toString()} event={events} />    
                    ))}
                <nav className="navBar">
                    <button className={`button ${navbarOpen ? " showMenu" : "noMenu"}`} onClick={handleToggle}></button>
                    <Link className={`button menuNav1 ${navbarOpen ? " showMenu" : "noMenu"}`} to="/add"/>
                    <Link className={`button menuNav2 ${navbarOpen ? " showMenu" : "noMenu"}`} to="/editevent"/>
                    <Link className={`button menuNav3 ${navbarOpen ? " showMenu" : "noMenu"}`} to="/delete" />
                </nav>
                </div>
        </div>
    )
}

export default Alleventlist;