import BG from '../bilder/marita-kavelashvili-ugnrXk1129g-unsplash.jpg';
import ARROW from '../bilder/Vector.svg';
import React, { useState } from "react"
import { Link, useNavigate } from "react-router-dom"
import '../App.css';
import { loadLs, saveLs} from '../component/Funktioner';
import Backbutton from "../component/backbutton";

function Add() {
    let navigate = useNavigate();
    const [uid] = useState(loadLs('uID'));
    const [token] = useState(loadLs('token'));
    const [item, setItem] = useState([])
    const [title, setTitle] = useState([]);
    const [description, setDescription] = useState([]);
    const [startdate, setStartdate] = useState([]);
    const [starttime, setStarttime] = useState([]);
    const [enddate, setEnddate] = useState([]);
    const [endtime, setEndtime] = useState([]);
    const [startDate] = useState(loadLs('startDate'));
    const [selectedDate, setSelectedDate] = useState('');
    const [selectedTime, setSelectedTime] = useState('');

    const handleChangeTitle = (e) => {
        setTitle(e.target.value);
    }
    const handleChangeDescription = (e) => {
        setDescription(e.target.value);
    }
    const handleChangeStartdate = (e) => {
        const formattedDate = new Date(e.target.value).toISOString().slice(0, 10);
        setStartdate(formattedDate);
        setSelectedDate(formattedDate);
    }
    const handleChangeStarttime = (e) => {
        setStarttime(e.target.value);
        setSelectedTime(e.target.value);
    }
    const handleChangeEnddate = (e) => {
        const formattedDate = new Date(e.target.value).toISOString().slice(0, 10);
        setEnddate(formattedDate);
    }
    const handleChangeEndtime = (e) => {
        setEndtime(e.target.value);
    }

    function send() {
        fetch("https://takeee.ntigskovde.se/Calendar/calendar_index.php?action=createEvent&uID="+ uid +"&token="+ token +"&title=" + title + "&description=" + description + "&startDate=" + startdate+" "+starttime + "&endDate=" + enddate +" "+endtime+ "")
            .then(res => res.json())
            .then(
                (result) => {
                    
                    if (result["Data"]["Result"] != undefined) {
                        console.log(result.Type)

                        navigate('/Kalender');
                        saveLs('title',result.Data.title);
                        saveLs('description',result.Data.description);
                        saveLs('startDate',result.Data.startDate);
                        saveLs('endDate',result.Data.endDate);
                        

                    }
                    else {
                        setItem(result["Data"])
                        console.log(result)
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
                <Backbutton />
                <div key={text}>
                    <h1 className ="error">{item}</h1>
                    <h2>Titel: <input type="text" name={text} onChange={handleChangeTitle} /></h2>
                    <h2>Beskrivning: <input type="text" name={text} onChange={handleChangeDescription} /></h2>

                    <h2>Starttid: <input type="date" value={selectedDate || startDate} name={text} onChange={handleChangeStartdate} /><input type="time" value={selectedTime || startDate} name={text} onChange={handleChangeStarttime} /></h2>
                    <h2>Sluttid: <input type="date" name={text} onChange={handleChangeEnddate} /><input type="time" name={text} onChange={handleChangeEndtime} /></h2>
                    <button onClick={send} className="add">Add</button>
                </div>

            </div>
        </div>
    );
}

export default Add;