import React from "react";
import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import BG from '../bilder/marita-kavelashvili-ugnrXk1129g-unsplash.jpg';
import '../App.css';

import DaysOnMonth from "../component/daysOnMonth"
import Calendar from 'react-calendar'
import { loadLs, saveLs } from '../component/Funktioner';



function Kalender() {
    return (
        <div>
            <div className='con'>
                <img src={BG} alt="background image"/>
                <div className="window blur kalender" style={{overflow: "hidden", border: "solid 1px hsla(0, 0%, 0%, 0.25"}}>
                    <DaysOnMonth/>
                </div>
            </div>
        </div>
    );
}

export default Kalender;