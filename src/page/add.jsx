import BG from '../bilder/marita-kavelashvili-ugnrXk1129g-unsplash.jpg';
import ARROW from '../bilder/Vector.svg';
import React, {useState} from "react"
import { Link } from "react-router-dom"
import '../App.css';

function Add() {

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
    const handleChangeStartdate= (e) => {
        setStartdate(e.target.value);
    }
    const handleChangeEnddate = (e) => {
        setEnddate(e.target.value);
    }
    function send(){
        /*fetch("https://takeee.ntigskovde.se/Calendar/calendar_index.php?action=createEvent&uID=38&token=28b292be5c912a34de42ad6368d76f0c9907ce00&title="+title+"&description="+description+"&startDate="+startdate+"&endDate="+enddate+"")
            .then(res => res.json())
            .then(
                (result) => {
                    const d = result["Data"]["My events"];
                    for (let i = 0; i < d.length; i++) {
                        console.log(d[i])
                        setItems(d[i])
                    }
                }
            )*/
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
                    <button onClick={send}>Add</button>
                </div>
                
            </div>
        </div>
    );
}

export default Add;