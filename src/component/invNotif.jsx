import React from "react";
import { useState, useEffect } from "react";
import { loadLs } from "./Funktioner";

function Invnotif  () {
    
    const [uid] = useState(loadLs('uID'));
    const [token] = useState(loadLs('token'));
    const [invites, setInvites] = useState([]);
   

    
    const getInvites = async () => {
        let API_URL = "https://takeee.ntigskovde.se/Calendar/calendar_index.php?action=showEvent&uID="+uid+"&token="+token+"";
        const response = await fetch(`${API_URL}`)
        .then(response => response.json())
        .then(
            (result)=>{
                setInvites(result["Data"]["Event invitations"]); 
                
            }
        )
        
        
    }
    useEffect(() => {
        getInvites();
      }, []);

    return ( 
       <span id="notification">{invites.length}</span>
    ); 
}

export default Invnotif;