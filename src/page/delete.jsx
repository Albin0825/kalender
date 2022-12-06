import BG from '../bilder/marita-kavelashvili-ugnrXk1129g-unsplash.jpg';
import ARROW from '../bilder/Vector.svg';
import React, { useState } from "react"
import { Link, useNavigate } from "react-router-dom"
import '../App.css';

function Edit() {

    let navigate = useNavigate();
    const [id, setID] = useState([]);

    const handleChangeID = (e) => {
        setID(e.target.value);
    }

    function send() {
        fetch("https://takeee.ntigskovde.se/Calendar/calendar_index.php?action=deleteEvent&uID=38&token=fab0563efcbc4dc78a38c7ffbf6d902216e58ec4&eID="+ id +"")
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
                    <button onClick={send} className="add">Delete</button>
                </div>

            </div>
        </div>
    );
}

export default Edit;