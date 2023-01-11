import React, {useState, useEffect} from "react"
import { Link } from 'react-router-dom';
import Hamburger from '../component/Hamburger';
import '../App.css';
import BG from '../bilder/marita-kavelashvili-ugnrXk1129g-unsplash.jpg';
import ARROW from '../bilder/Vector.svg';
import Event from '../component/Event';
import { loadLs } from '../component/Funktioner';
import Backbutton from "../component/backbutton";


function OneEvent() {

  const [uid] = useState(loadLs('uID'));
  const [token] = useState(loadLs('token'));
  const [eventlist, setEventlist] = useState([]);
  const [startdate] = useState(loadLs('startDate'));
  
  async function getEvent() {
      let API_URL = "https://takeee.ntigskovde.se/Calendar/calendar_index.php?action=sortTimeline&uID="+uid+"&token="+token+"&startDate="+startdate.substring(0,10)+" 00:00&endDate="+startdate.substring(0,10)+" 23:59";
      await fetch(`${API_URL}`)
      .then(res => res.json())
      .then(
          (result)=>{
              console.log(loadLs());
              console.log(loadLs('token'));
              console.log(result);
              console.log(loadLs('eID'));
              console.log(result["Data"]["My events"]);
              setEventlist(result["Data"]["My events"]); 
    
          }
      )
  }
    
  useEffect(() => {
    getEvent();
  }, []);
  
  let filteredEvent;
  eventlist.filter(event => {
    if(event.ID == loadLs('eID')){
       filteredEvent = event
    }
  });
  return(
    <div className='con'>
    <img src={BG} alt="background image" />
        <div className='window blur eventList'>
            <Backbutton />

            { filteredEvent ? <Event key={filteredEvent["ID"].toString()} event={filteredEvent} /> : <div>Event not found</div> }
            <Hamburger />
        </div>
  </div>
   );
}

export default OneEvent;