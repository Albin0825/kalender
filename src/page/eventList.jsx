import '../App.css';
import { useEffect, useState } from "react";
import * as React from 'react';
import Event from '../component/Event';

function Eventlista(response){


    const [eventlist, setEventlist] = useState([]);
    const getEvents = async () => {
        let API_URL = "https://takeee.ntigskovde.se/Calendar/calendar_index.php?action=showEvent&uID=33&token=ad5e158186e7e75d0a38e60eaad62e41821e212b";
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