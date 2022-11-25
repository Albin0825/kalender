import React, {useState, useEffect} from "react"
import {Link} from "react-router-dom"
import {MdClose} from "react-icons/md"
import {FiMenu} from "react-icons/fi"
import './App.css';

function Hamburger() {

    const [navbarOpen, setNavbarOpen] = useState(false)

    const Data = () => {
        const [item, setItem] = useState([]);
        useEffect (()=>{
            fetch("https://takeee.ntigskovde.se/Calendar/calendar_index.php?action=createEvent")
            .then(res => res.json())
            .then(
                (result)=>{
                    console.log(result)
                }
            )
        }, [])
    }

    const Data2 = () => {
        const [item, setItem] = useState([]);
        useEffect (()=>{
            fetch("https://takeee.ntigskovde.se/Calendar/calendar_index.php?action=editEvent")
            .then(res => res.json())
            .then(
                (result)=>{
                    console.log(result)
                }
            )
        }, [])
    }

    const Data3 = () => {
        const [item, setItem] = useState([]);
        useEffect (()=>{
            fetch("https://takeee.ntigskovde.se/Calendar/calendar_index.php?action=deleteEvent")
            .then(res => res.json())
            .then(
                (result)=>{
                    console.log(result)
                }
            )
        }, [])
    }
  
    const handleToggle = () => {
      setNavbarOpen(prev => !prev)
    }
  
    return (
        <nav className="navBar">
            <button onClick={handleToggle}>{navbarOpen ? (<MdClose style={{color: "red", width: "40px", height: "40px"}} />) : (<FiMenu style={{color: "#7b7b7b", width: "40px", height: "40px"}} />)}</button>
            <Link className={`menuNav1 ${navbarOpen ? " showMenu" : "noMenu"}`} to={Data} />
            <Link className={`menuNav2 ${navbarOpen ? " showMenu" : "noMenu"}`} to={Data2} />
            <Link className={`menuNav3 ${navbarOpen ? " showMenu" : "noMenu"}`} to={Data3} />
        </nav>
    );
}

export default Hamburger;