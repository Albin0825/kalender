import BG from '../bilder/marita-kavelashvili-ugnrXk1129g-unsplash.jpg';
import ARROW from '../bilder/Vector.svg';
import React, { useState } from "react"
import { Link, useNavigate } from "react-router-dom"
import '../App.css';
import { loadLs, saveLs } from '../component/Funktioner';


function Invitesend() {

    let navigate = useNavigate();
    const [uid] = useState(loadLs('uID'));
    const [token] = useState(loadLs('token'));
    const [eid, seteID] = useState([]);
    const [rid, setrID] = useState([]);


    const handleChangeEID = (e) => {
        seteID(e.target.value);
    }
    const handleChangeRID = (e) => {
        setrID(e.target.value);
    }


    function invite() {
        fetch("https://takeee.ntigskovde.se/Calendar/calendar_index.php?action=eventInvitation&uID="+uid+"&token="+token+"&eID="+eid+"&rID="+rid+"")
            .then(res => res.json())
            .then(
                (result) => {
                    if (result["Data"] != undefined) {
                        console.log(result["Data"])


                    }
                    else {
                        console.log(result["Data"])
                        console.log("Invalid input")
                    }
                    if(result.Type === 'Error' && result.Data === 'No user found or token not valid') {
                        navigate("/login")
                    }
                }
            )
    }
    const text = 0;
    return (
        <div className="con">
            <img src={BG} alt="background image" />
            <div className="window blur notlogin">
                <Link to='/OneEventOpen' className="vpil"><img src={ARROW} alt="Go back" /></Link>
                <div key={text}>
                    <h2>Eventets ID: <input type="text" name={text} onChange={handleChangeEID} /></h2>
                    <h2>Användarens ID: <input type="text" name={text} onChange={handleChangeRID} /></h2>
                    <button onClick={invite} className="add">Bjud in</button>
                </div>

            </div>
        </div>
    );
}

export default Invitesend;