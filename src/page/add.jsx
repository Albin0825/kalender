import BG from '../bilder/marita-kavelashvili-ugnrXk1129g-unsplash.jpg';
import ARROW from '../bilder/Vector.svg';
import React, { useState } from "react"
import { Link, useNavigate } from "react-router-dom"
import '../App.css';

function Add() {

    let navigate = useNavigate();
    const [title, setTitle] = useState([]);
    const [description, setDescription] = useState([]);
    const [startdate, setStartdate] = useState([]);
    const [enddate, setEnddate] = useState([]);

    const handleChangeTitle = (e) => {
        setTitle(e.target.value);
    }
    const handleChangeDescription = (e) => {
        setDescription(e.target.value);
    }
    const handleChangeStartdate = (e) => {
        setStartdate(e.target.value);
    }
    const handleChangeEnddate = (e) => {
        setEnddate(e.target.value);
    }
    function send() {
        fetch("https://takeee.ntigskovde.se/Calendar/calendar_index.php?action=createEvent&uID=38&token=06f2cd760126aedd9f20a5bab4f1bf6f6072c0c4&title=" + title + "&description=" + description + "&startDate=" + startdate + "&endDate=" + enddate + "")
            .then(res => res.json())
            .then(
                (result) => {
                    if (result["Data"]["Result"] != undefined) {
                        console.log(result["Data"])
                        navigate('/OneEventOpen')
                    }
                    else {
                        console.log("Invalid user/tokens")
                    }
                }
            )
    }
    const text = 0;
    return (
        <div className="con">
            <img src={BG} alt="background image" />
            <div className="window blur notlogin">
                <Link to='/Login' className="vpil"><img src={ARROW} alt="Go back" /></Link>
                <div key={text}>
                    <h2>Title: <input type="text" name={text} onChange={handleChangeTitle} /></h2>
                    <h2>Description: <input type="text" name={text} onChange={handleChangeDescription} /></h2>
                    <h2>Start-date: <input type="text" name={text} onChange={handleChangeStartdate} /></h2>
                    <h2>End-date: <input type="text" name={text} onChange={handleChangeEnddate} /></h2>
                    <button onClick={send} className="add">Add</button>
                </div>

            </div>
        </div>
    );
}

export default Add;