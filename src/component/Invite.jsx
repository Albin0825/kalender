import React from "react";
import { useNavigate } from "react-router-dom";
import {Link} from "react-router-dom";
import { saveLs } from "./Funktioner";

const Event = ({event}) => {
    let navigate = useNavigate();
    const originEvents = event;


    return ( 
        <div className='data' >
            <span className='eventID'>{event.ID}</span>
            <br></br>
            <Link to="/OneInviteOpen">
                <span onClick={() => saveLs("eID", event.ID)}>{event.title}</span>
            </Link>
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