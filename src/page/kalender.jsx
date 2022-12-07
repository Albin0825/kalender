import React from "react";
import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import BG from '../bilder/marita-kavelashvili-ugnrXk1129g-unsplash.jpg';
import '../App.css';
import DaysOnMonth from "../component/daysOnMonth"
import { loadLs } from '../component/Funktioner';



function Kalender() {

    const [uid, setUid] = useState(loadLs('uID'));
    const [token, setToken] = useState(loadLs('token'));

    const [items, setItems] = useState([]);
    useEffect (()=>{
        fetch("https://takeee.ntigskovde.se/Calendar/calendar_index.php?action=showEvent&uID="+ uid +"&token="+ token +"")
        .then(res => res.json())
        .then(
            (result)=>{
                const data = result["Data"]["My events"];
                for(let i = 0;i<data.length;i++) {
                    console.log(data[i])
                    setItems(data[i])
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