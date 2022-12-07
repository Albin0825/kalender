import '../App.css';
import { useEffect, useState } from "react";
import React from 'react';
import Event from '../component/Event';
import { loadLs } from '../component/Funktioner';
import { Link } from 'react-router-dom';

function Createuser (){
    const [uid, setUid] = useState(loadLs('uID'));
    const [token, setToken] = useState(loadLs('token'));
    const [eventlist, setEventlist] = useState([]);

    const createNewUser = async () => {
        let API_URL = "https://takeee.ntigskovde.se/Calendar/calendar_index.php?action=showEvent&uID="+uid+"&token="+token;
        const response = await fetch(`${API_URL}`)
        .then(response => response.json())
        .then(
            (result)=>{
                console.log(loadLs());
                console.log("bruh", loadLs('token'));
                console.log(result["Data"]["My events"]);
                setEventlist(result["Data"]["My events"]);
            }
        )
        
    }
}

export default Createuser;