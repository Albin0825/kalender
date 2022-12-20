import BG from '../bilder/marita-kavelashvili-ugnrXk1129g-unsplash.jpg';
import ARROW from '../bilder/Vector.svg';
import React, {useState, useEffect} from "react"
import '../App.css';
import { Link } from 'react-router-dom';

function App() {

  const [navbarOpen, setNavbarOpen] = useState(false)
    const handleToggle = () => {
        setNavbarOpen(prev => !prev)
    }

  return (
    <div className="con">
      <img src={BG} alt="background image"/>
        <div className="window blur notlogin">
          <Link to='/eventList' className="vpil"><img src={ARROW} alt="Go back"/></Link>
          <h1 className="rubrik">Rubrik!</h1>
          <p className="desc">Beskrivning: </p>
          <p className="time">Tid: </p>
          <p className="inv">Inbjudningar: </p>
          <nav className="navBar">
              <button className={`button ${navbarOpen ? " showMenu" : "noMenu"}`} onClick={handleToggle}></button>
              <Link className={`button menuNav2 ${navbarOpen ? " showMenu" : "noMenu"}`} to="/Editevent" />
              <Link className={`button menuNav3 ${navbarOpen ? " showMenu" : "noMenu"}`} to="/Delete" />
          </nav>
        </div>
    </div>
  );
}

export default App;