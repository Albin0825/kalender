import React, {useState, useEffect} from "react"
import { Link } from 'react-router-dom';
import Hamburger from '../component/Hamburger'
import '../App.css';
import BG from '../bilder/marita-kavelashvili-ugnrXk1129g-unsplash.jpg';
import ARROW from '../bilder/Vector.svg';

function App() {
  return (
    <div className="con">
      <img src={BG} alt="background image"/>
      <div className="window blur notlogin">
        <Link to='/eventList' className="vpil"><img src={ARROW} alt="Go back"/></Link>
        <h1 className="rubrik">Rubrik!</h1>
        <p className="desc">Beskrivning: </p>
        <p className="time">Tid: </p>
        <p className="inv">Inbjudningar: </p>
        <Hamburger/>
      </div>
    </div>
  );
}

export default App;