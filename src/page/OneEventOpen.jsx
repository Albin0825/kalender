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
    console.log("HEj");
    getEvent();
  }, []);
  
  return (
    // <div className="con">
      
    //   <img src={BG} alt="background image"/>
    //   <div className="window blur notlogin">
    //     <Link to='/eventList' className="vpil"><img src={ARROW} alt="Go back"/></Link>
    //     <h1 className="rubrik">Rubrik!</h1>
    //     <p className="desc">Beskrivning: </p>
    //     <p className="time">Tid: </p>
    //     <p className="inv">Inbjudningar: </p>
    //     <Hamburger/>
    //   </div>
    // </div>
    <div className='con'>
      <img src={BG} alt="background image" />
          <div className='window blur eventList'>
              <Backbutton />
              {(() => { console.log(loadLs('eID'));
              for (let i = 0; i < eventlist.length; i++) {
                
                if (loadLs('eID') == eventlist[i].ID)
                {
                  console.log(eventlist[i]);
                  return (
                          <div>
                            {eventlist.map((event)=> {
                              {}
                            })}
                          </div> 
                      )
                    
                } 
          }})()}
          <Hamburger />
          </div>
    </div>
  );
}

export default OneEvent;