import BG from '../bilder/marita-kavelashvili-ugnrXk1129g-unsplash.jpg';
import ARROW from '../bilder/Vector.svg';
import React, { useState } from "react"
import { Link, useNavigate } from "react-router-dom"
import '../App.css';
import { loadLs, saveLs } from '../component/Funktioner';
import Backbutton from "../component/backbutton";

function Editevent() {

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
    const [eid, seteID] = useState([]);
    const [rname, setrName] = useState([]);
    const [startDate] = useState(loadLs('startDate'));
    const [endDate] = useState(loadLs('endDate'));
    const [selectedDate, setSelectedDate] = useState('');
    const [selectedTime, setSelectedTime] = useState('');
    
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
        setSelectedDate(e.target.value);
    }
    const handleChangeStarttime = (e) => {
        setStarttime(e.target.value);
        setSelectedTime(e.target.value);
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

                        saveLs('title',result.Data.title);
                        saveLs('description',result.Data.description);
                        saveLs('startDate',result.Data.startDate);
                        saveLs('endDate',result.Data.endDate);

                    }
                    else {
                        console.log(result["Data"])
                        console.log("Invalid input")
                    }
                }
            )
    }
    const handleChangeEID = (e) => {
        seteID(e.target.value);
    }
    const handleChangeRNAME = (e) => {
        setrName(e.target.value);
    }


    function invite() {
        fetch("https://takeee.ntigskovde.se/Calendar/calendar_index.php?action=eventInvitation&uID="+uid+"&token="+token+"&eID="+eid+"&rName="+rname+"")
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
                    <h2>Titel: <input type="text" name={text} onChange={handleChangeTitle} /></h2>
                    <h2>Beskrivning: <input type="text" name={text} onChange={handleChangeDescription} /></h2>
                    <h2>Starttid: <input type="date" value={selectedDate || startDate} name={text} onChange={handleChangeStartdate} /><input type="time" value={selectedTime || startDate} name={text} onChange={handleChangeStarttime} /></h2>
                    <h2>Sluttid: <input type="date" value={endDate} name={text} onChange={handleChangeEnddate} /><input type="time" value={endDate} name={text} onChange={handleChangeEndtime} /></h2>
                    <button onClick={send} className="add">Redigera</button>
                    <h2>Eventets ID: <input type="text" name={text} onChange={handleChangeEID} /></h2>
                    <h2>Användarens namn: <input type="text" name={text} onChange={handleChangeRNAME} /></h2>
                    <button onClick={invite} className="add">Bjud in</button>
                </div>

            </div>
        </div>
    );
}

export default Editevent;