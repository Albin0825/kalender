import BG from '../bilder/marita-kavelashvili-ugnrXk1129g-unsplash.jpg';
import ARROW from '../bilder/Vector.svg';
import React, { useState } from "react"
import { Link, useNavigate } from "react-router-dom"
import '../App.css';

function Edit() {

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
        fetch("https://takeee.ntigskovde.se/Calendar/calendar_index.php?action=editEvent&uID=38&token=fab0563efcbc4dc78a38c7ffbf6d902216e58ec4&eID=18&title=" + title + "&description=" + description + "&startDate=" + startdate + "&endDate=" + enddate + "")
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
                    <h2>Title: <input type="text" name={text} onChange={handleChangeTitle} /></h2>
                    <h2>Description: <input type="text" name={text} onChange={handleChangeDescription} /></h2>
                    <h2>Start-date: <input type="date" name={text} onChange={handleChangeDescription} /><input type="time" name={text} onChange={handleChangeDescription} /></h2>
                    <h2>End-date: <input type="date" name={text} onChange={handleChangeDescription} /><input type="time" name={text} onChange={handleChangeDescription} /></h2>
                    <button onClick={send} className="add">Edit</button>
                </div>

            </div>
        </div>
    );
}

export default Edit;