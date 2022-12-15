import BG from '../bilder/marita-kavelashvili-ugnrXk1129g-unsplash.jpg';
import ARROW from '../bilder/Vector.svg';
import React, { useState, useEffect } from "react";
import '../App.css';
import { Link } from 'react-router-dom';
import { loadLs } from "../component/Funktioner";
import Profile from "../component/profile";
import { data } from 'jquery';
import Nopfp from '../bilder/emptypfp.jpg';

function ProfilePage(response) {

    const [navbarOpen, setNavbarOpen] = useState(false)
        const handleToggle = () => {
        setNavbarOpen(prev => !prev)
    }

    const [uid] = useState(loadLs('uID'));
    const [token] = useState(loadLs('token'));
    const [profiledata, setProfiledata] = useState([]);

    
    



    const getProfile = async () =>{
        let API_URL = "https://takeee.ntigskovde.se/Users/users_index.php?action=showUser&uID="+uid+"&token="+token;
        const response = await fetch(`${API_URL}`)
        .then(response => response.json())
        .then(
            (result)=>{
                console.log(result["Data"]["Users"]);
                setProfiledata(result["Data"]["Users"]);
                console.log(profiledata);
                
            }
        )
        
       //const data = await response.json(); 
    } 

    useEffect(() => {
        getProfile();
      }, []);


return (
    <div className="con">
        <img src={BG} alt="background image"/>
        <div className="window blur profil">
            <Link to='/Kalender' className="vpil"><img src={ARROW} alt="Go back"/></Link>
            <div className="profilRuta">
                <span id="avatar">
                {(() => {
                    if (profiledata.avatar == "unset") {
                    return (
                        <img src={Nopfp} alt="Avatar"/>
                        )
                    } else {
                    return (
                        <img src={profiledata.avatar} alt="Avatar"/>
                        )
                    }
                })()}
                </span>
                <br></br>
                <span id="usrnm">{profiledata.name}</span> 
                <br></br>
                <span id="subtit">Beskrivning:</span>
                <br></br>
                <span id="dsc">{profiledata.description}</span>
                <br></br>
                <span id="subtit">E-post:</span>
                <br></br>
                <span id="mail">{profiledata.email}</span>
                <nav className="navBar">
                    <button className={`button ${navbarOpen ? " showMenu" : "noMenu"}`} onClick={handleToggle}></button>
                    <Link className={`button menuNav2 ${navbarOpen ? " showMenu" : "noMenu"}`} to="/editProfile" />
                </nav>
            </div>
        </div>
    </div>
);
}

export default ProfilePage;