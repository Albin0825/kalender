import React from "react";
import { useNavigate } from "react-router-dom";

const Profile = ({profile}) => {
    let navigate = useNavigate();
    const originProfile = profile;

    return ( 
        <div className='data' >
            <span className='usrnm'>{profile.name}</span>
            <span className='dscrptn'>{profile.description}</span>
            <span className='mail'>{profile.email}</span>
            <span className='avatar'>{profile.avatar}</span>
        </div>
    ); 
}

export default Profile;