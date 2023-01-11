import React from "react";
import { useNavigate } from "react-router-dom";
import {Link} from "react-router-dom";
import { saveLs } from "./Funktioner";
import { useLocation } from "react-router-dom";

const Event = ({event}) => {
    let navigate = useNavigate();
    const originEvents = event;
    const location = useLocation();

    return ( 
        <div className='data'>
            
            {location.pathname.match(/^\/Eventlist$/i) ? // if it is /Eventlist in the url (works with lowercase and uppercase and everything in between)
                <>
                    <span className='eventID'>{event.ID}</span>
                    <br></br>
                    <Link to="/OneEventOpen">
                        <span onClick={() => saveLs("eID", event.ID)}>{event.title}</span>
                    </Link>
                </>
                : null}

            {location.pathname.match(/^\/OneEventOpen$/i) ? // if it is /Eventlist in the url (works with lowercase and uppercase and everything in between)
                <>
                    <span onClick={() => saveLs("eID", event.ID)}>{event.title}</span>
                </>
                : null}
            
            <br></br>
            <span className='eventDesc'>{event.description}</span>
            <br></br>
            <span className='eventStdt'>{event.startDate.substring(11)} </span>
            {(() => {
                    if (event.startDate.substring(0,10) == event.endDate.substring(0,10)){
                        return (
                            <span className='eventDddt'>- {event.endDate.substring(11)} </span>
                            )
                    } else {
                        return (
                            <span className='eventDddt'>- {event.endDate}</span>
                            )
                        }
                })()}
        </div>
    ); 
}

export default Event;