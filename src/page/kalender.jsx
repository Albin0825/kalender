import React from "react";
import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import BG from '../bilder/marita-kavelashvili-ugnrXk1129g-unsplash.jpg';
import '../App.css';

import Invnotif from "../component/invNotif";
import DaysOnMonth from "../component/daysOnMonth"
import Calendar from 'react-calendar'
import { loadLs, saveLs } from '../component/Funktioner';



function Kalender() {
    return (
        <div>
            <div className='con'>
                <img src={BG} alt="background image"/>
                <div className="window blur kalender">
                    <DaysOnMonth/>
                    <Invnotif />
                </div>
            </div>
        </div>
    );
}

export default Kalender;