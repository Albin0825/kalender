import BG from '../bilder/marita-kavelashvili-ugnrXk1129g-unsplash.jpg';
import ARROW from '../bilder/Vector.svg';
import React, { useState } from "react"
import { Link, useNavigate } from "react-router-dom"
import '../App.css';
import { loadLs } from '../component/Funktioner';

function Edit() {

    let navigate = useNavigate();
    const [uid] = useState(loadLs('uID'));
    const [token] = useState(loadLs('token'));
    const [id, setID] = useState([]);
    const [title, setTitle] = useState([]);
    const [description, setDescription] = useState([]);
    const [startdate, setStartdate] = useState([]);
    const [starttime, setStarttime] = useState([]);
    const [enddate, setEnddate] = useState([]);
    const [endtime, setEndtime] = useState([]);

    const handleChangeID = (e) => {
        setID(e.target.value);
    }
    const handleChangeTitle = (e) => {
        setTitle(e.target.value);
    }
    const handleChangeDescription = (e) => {
        setDescription(e.target.value);
    }
    const handleChangeStartdate = (e) => {
        setStartdate(e.target.value);
    }
    const handleChangeStarttime = (e) => {
        setStarttime(e.target.value);
    }
    const handleChangeEnddate = (e) => {
        setEnddate(e.target.value);
    }
    const handleChangeEndtime = (e) => {
        setEndtime(e.target.value);
    }

    function send() {
        fetch("https://takeee.ntigskovde.se/Calendar/calendar_index.php?action=editEvent&uID="+ uid +"&token="+ token +"&eID="+ id +"&title=" + title + "&description=" + description + "&startDate=" + startdate+" "+starttime + "&endDate=" + enddate +" "+endtime+ "")
            .then(res => res.json())
            .then(
                (result) => {
                    if (result["Data"]["Result"] != undefined) {
                        console.log(result["Data"])
                        navigate('/OneEventOpen')
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
                <Link to='/OneEventOpen' className="vpil"><img src={ARROW} alt="Go back" /></Link>
                <div key={text}>
                    <h2>ID: <input type="text" name={text} onChange={handleChangeID} /></h2>
                    <h2>Titel: <input type="text" name={text} onChange={handleChangeTitle} /></h2>
                    <h2>Beskrivning: <input type="text" name={text} onChange={handleChangeDescription} /></h2>
                    <h2>Starttid: <input type="date" name={text} onChange={handleChangeStartdate} /><input type="time" name={text} onChange={handleChangeStarttime} /></h2>
                    <h2>Sluttid: <input type="date" name={text} onChange={handleChangeEnddate} /><input type="time" name={text} onChange={handleChangeEndtime} /></h2>
                    <button onClick={send} className="add">Redigera</button>
                </div>

            </div>
        </div>
    );
}

export default Edit;