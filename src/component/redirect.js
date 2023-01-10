import React, { useState, useEffect } from "react"
import { useNavigate, useLocation } from "react-router-dom";
import { loadLs } from './Funktioner';

function Redirect(){
    const [uid] = useState(loadLs('uID'));
    const [token] = useState(loadLs('token'));

    const location = useLocation();
    const navigate  = useNavigate();

    async function getData() {
        await fetch("https://takeee.ntigskovde.se/Calendar/calendar_index.php?action=showEvent&uID=" + uid + "&token=" + token + "")
          .then(res => res.json())
          .then(
            (result) => {
                if (!location.pathname.match(/^\/Login$/i) && result.Type === 'Error') {
                    navigate("/login")
                }
            }
          )
      }

    useEffect(() => {
        getData()
    }, [location.pathname])
}

export default Redirect;