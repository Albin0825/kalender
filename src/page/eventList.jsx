import '../App.css';
import BG from '../bilder/marita-kavelashvili-ugnrXk1129g-unsplash.jpg';
import { useEffect, useState } from "react";
import React from 'react';
import Event from '../component/Event';
import { loadLs } from '../component/Funktioner';
import { Link } from 'react-router-dom';
import Backbutton from "../component/backbutton";
import Hamburger from '../component/Hamburger'

function Eventlista(response){

    const [navbarOpen, setNavbarOpen] = useState(false)
    const handleToggle = () => {
        setNavbarOpen(prev => !prev)
    }

    const [uid] = useState(loadLs('uID'));
    const [token] = useState(loadLs('token'));
    const [eventlist, setEventlist] = useState([]);
    const [startdate] = useState(loadLs('startDate'));
    
    const getEvents = async () => {
        let API_URL = "https://takeee.ntigskovde.se/Calendar/calendar_index.php?action=sortTimeline&uID="+uid+"&token="+token+"&startDate="+startdate.substring(0,10)+" 00:00&endDate="+startdate.substring(0,10)+" 23:59";
        const response = await fetch(`${API_URL}`)
        .then(response => response.json())
        .then(
            (result)=>{
                console.log(loadLs());
                console.log(loadLs('token'));
                console.log(result);
                console.log(result["Data"]["My events"]);
                setEventlist(result["Data"]["My events"]); 
                if(result.Type === 'Error') {
                    navigate("/login")
                }
            }
        )
    }
    
    useEffect(() => {
        getEvents();
      }, []);

    return(
        <div className='con'>
            <img src={BG} alt="background image" />
                <div className='window blur eventList'>
                    <Backbutton />
                    <p className="OneEventOpenRubrik">Dagens händelser</p>
                    {(() => {
                    if (eventlist != undefined) {
                    return (
                         eventlist.map((events) => (
                        <Event key={events["ID"].toString()} event={events} />    
                        ))
                        )
                    } else if (eventlist == undefined) {
                    return (
                        <span>Du har inga händelser den här dagen, men du kan skapa en via knappen nere till höger</span>
                        )
                    }
                })()}
                <Hamburger/>
                </div>
        </div>
    )
}

export default Eventlista;