import BG from '../bilder/marita-kavelashvili-ugnrXk1129g-unsplash.jpg';
import ARROW from '../bilder/Vector.svg';
import React, { useState } from "react"
import { Link, useNavigate } from "react-router-dom"
import '../App.css';
import { loadLs } from '../component/Funktioner';
import Backbutton from "../component/backbutton";

function Delete() {

    let navigate = useNavigate();
    const [uid] = useState(loadLs('uID'));
    const [token] = useState(loadLs('token'));
    const [id, setID] = useState([]);

    const handleChangeID = (e) => {
        setID(e.target.value);
    }

    function send() {
        fetch("https://takeee.ntigskovde.se/Calendar/calendar_index.php?action=deleteEvent&uID="+ uid +"&token="+ token +"&eID="+ id +"")
            .then(res => res.json())
            .then(
                (result) => {
                    if (result["Data"]["Result"] != undefined) {
                        console.log(result["Data"])
                        navigate('/Kalender')
                    }
                    else {
                        console.log(result["Data"])
                        console.log("Invalid input")
                    }
                }
            )
    }
    const text = 0;
    return (
        <div className="con">
            <img src={BG} alt="background image" />
            <div className="window blur notlogin">
                <Backbutton />
                <div key={text}>
                    <h2>ID: <input type="text" name={text} onChange={handleChangeID} /></h2>
                    <button onClick={send} className="add">Ta bort</button>
                </div>

            </div>
        </div>
    );
}

export default Delete;