import BG from '../bilder/marita-kavelashvili-ugnrXk1129g-unsplash.jpg';
import React, {useState, useEffect} from "react"
import {Link} from "react-router-dom"
import '../App.css';

function Add() {

    fetch("https://takeee.ntigskovde.se/Calendar/calendar_index.php?action=showEvent&uID=1&token=18f97fdf964f9c03fe97bdc4fc57407da9e0f021")
    .then(res => res.json())
    .then(
        (result)=>{
            console.log(result)
        }
    )

    const [item, setItem] = useState([]);
    useEffect (()=>{
        fetch("http://takeee.ntigskovde.se/login.php?username=root&password=root")
        .then(res => res.json())
        .then(
            (result)=>{
                console.log(result)
            }
        )
    }, [])

    return (
        <div className="con">
            <img src={BG} alt="background image"/>
            <div className="window blur notlogin">
                
            </div>
        </div>
    );
}

export default Add;