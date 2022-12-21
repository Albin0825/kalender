import React from "react";
import { useNavigate } from "react-router-dom";
import { loadLS } from "./Funktioner";

function Invnotif  () {
    
    const [uid] = useState(loadLs('uID'));
    const [token] = useState(loadLs('token'));
   

    
    const getInvites = async () => {
        let API_URL = "https://takeee.ntigskovde.se/Calendar/calendar_index.php?action=showEvent&uID="+uid+"&token="+token+"";
        const response = await fetch(`${API_URL}`)
        .then(response => response.json())
        .then(
            (result)=>{
                console.log(loadLs());
                console.log(loadLs('token'));
                console.log(result);
                console.log(result["Data"]["My events"]);
                setEventlist(result["Data"]["My events"]); 
                
            }
        )
        
       //const data = await response.json(); 
    }

    return ( 
       <div>hej</div>
    ); 
}

export default Invnotif;