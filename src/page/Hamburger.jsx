import BG from '../bilder/marita-kavelashvili-ugnrXk1129g-unsplash.jpg';
import React, {useState, useEffect} from "react"
import {Link} from "react-router-dom"
import '../App.css';

function Hamburger() {
    const [navbarOpen, setNavbarOpen] = useState(false)
    const handleToggle = () => {
        setNavbarOpen(prev => !prev)
    }

    fetch("https://takeee.ntigskovde.se/Calendar/calendar_index.php?action=showEvent&uID=1&token=df04626fbf42c665f6a80817cd6672ae10a3eda3")
    .then(res => res.json())
    .then(
        (result)=>{
            console.log(result)
        }
    )

    return (
        <div className="con">
            <img src={BG} alt="background image"/>
            <div className="window blur notlogin">
                <nav className="navBar">
                    <button className={`button ${navbarOpen ? " showMenu" : "noMenu"}`} onClick={handleToggle}></button>
                    <Link className={`button menuNav1 ${navbarOpen ? " showMenu" : "noMenu"}`} to=""/>
                    <Link className={`button menuNav2 ${navbarOpen ? " showMenu" : "noMenu"}`} to="" />
                    <Link className={`button menuNav3 ${navbarOpen ? " showMenu" : "noMenu"}`} to="" />
                </nav>
            </div>
        </div>
    );

}

export default Hamburger;