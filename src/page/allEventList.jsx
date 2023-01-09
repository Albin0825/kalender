import React, { useEffect, useState } from "react";
import { Link } from 'react-router-dom';
import { loadLs } from '../component/Funktioner';
import Hamburger from '../component/Hamburger'
import '../App.css';
import BG from '../bilder/marita-kavelashvili-ugnrXk1129g-unsplash.jpg';
import ARROW from '../bilder/Vector.svg';
import Event from '../component/Event';
import Backbutton from "../component/backbutton";

function Alleventlist(response){

    const [navbarOpen, setNavbarOpen] = useState(false)
    const handleToggle = () => {
        setNavbarOpen(prev => !prev)
    }
}

function Alleventlist(){
    const [uid] = useState(loadLs('uID'));
    const [token] = useState(loadLs('token'));

    return(
        <div className='con'>
            <img src={BG} alt="background image" />
                <div className='window blur eventList'>
                    <Backbutton />
                    <p className="OneEventOpenRubrik">Dina händelser</p>
                    <Hamburger/>
                </div>
        </div>
    )
}

export default Alleventlist;