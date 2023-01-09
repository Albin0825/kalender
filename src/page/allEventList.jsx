import React, { useEffect, useState } from "react";
import { Link } from 'react-router-dom';
import { loadLs } from '../component/Funktioner';
import Hamburger from '../component/Hamburger'
import '../App.css';
import BG from '../bilder/marita-kavelashvili-ugnrXk1129g-unsplash.jpg';
import ARROW from '../bilder/Vector.svg';

function Alleventlist(){
    const [uid] = useState(loadLs('uID'));
    const [token] = useState(loadLs('token'));

    return(
        <div className='con'>
            <img src={BG} alt="background image" />
                <div className='window blur eventList'>
                    <Link to='/Kalender' className="vpil"><img src={ARROW} alt="Go back"/></Link>
                    <p className="OneEventOpenRubrik">Dina händelser</p>
                    <Hamburger/>
                </div>
        </div>
    )
}

export default Alleventlist;