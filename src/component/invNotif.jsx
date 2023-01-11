import React from "react";
import { useState, useEffect } from "react";
import { loadLs } from "./Funktioner";
import { Link } from "react-router-dom";
import "../App.css"

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
                console.log(result["Data"]);
                setInvites(result["Data"]["Event invitations"]); 
                
            }
        )
        
        
    }
    useEffect(() => {
        getInvites();
      }, []);
    if (invites == 0 || invites == undefined){
        return (
            <div className="noti"><div className="padding"></div></div>
        );
    }
    else{
        return ( 
            <Link to="/Invites">{invites.length}</Link>
         );
    }

}

export default Invnotif;