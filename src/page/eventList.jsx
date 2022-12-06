import '../App.css';
import { useEffect, useState } from "react";
import * as React from 'react';
import Event from '../component/Event';
import { loadLs } from '../component/Funktioner';

function Eventlista(response){
    const [uid, setUid] = useState(loadLs('uID'));
    const [token, setToken] = useState(loadLs('token'));
    const API_URL = "https://takeee.ntigskovde.se/Calendar/calendar_index.php?action=showEvent&uID="+uid+"&token"+token;
    const [eventlist, setEventlist] = useState([]);
    const getEvents = async () => {
        //let API_URL = "https://takeee.ntigskovde.se/Calendar/calendar_index.php?action=showEvent&uID="+userid+"&token="+token;
        const response = await fetch(`${API_URL}`)
        .then(response => response.json())
        .then(
            (result)=>{
                console.log(result["Data"]["My events"]);
                setEventlist(result["Data"]["My events"]);
            }
        )
        
       //const data = await response.json(); 
    }
  
    return(
        <div>   
            <div>
                <input id="showEvents" type="button" onClick={() => getEvents()} value="click"></input>
                {eventlist.length}
                {eventlist?.length?(
                eventlist.map((events) => (
                <Event key={events["ID"].toString()} event={events} />    
                )))
                :(
                    <div>this is fel</div>
                )}
            </div>
        </div>
    )
}

export default Eventlista;