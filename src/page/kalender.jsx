import React from "react";
import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import BG from '../bilder/marita-kavelashvili-ugnrXk1129g-unsplash.jpg';
import '../App.css';
import DaysOnMonth from "../component/daysOnMonth"



function Kalender() {

    const [items, setItems] = useState([]);
    useEffect (()=>{
        fetch("https://takeee.ntigskovde.se/Calendar/calendar_index.php?action=showEvent&uID=38&token=109736f6e0c46bc894cb64b1bd0a44b395eff484")
        .then(res => res.json())
        .then(
            (result)=>{
                const d = result["Data"]["My events"];
                for(let i = 0;i<d.length;i++) {
                    console.log(d[i])
                    setItems(d[i])
                }   
            }
        )
    }, [])

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