import React from "react";
import { useNavigate } from "react-router-dom";

const Event = ({event}) => {
    let navigate = useNavigate();
    const originEvents = event;

    return ( 
        <div className='data' >
            <span className='title'>{event.title}</span>
            <span className='desc'>{event.description}</span>
            <span className='stdt'>{event.startDate}</span>
            <span className='eddt'>{event.endDate}</span>
        </div>
    ); 
}

export default Event;