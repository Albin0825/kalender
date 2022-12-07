import BG from '../bilder/andrew-neel-cckf4TsHAuw-unsplash.jpg';
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
          <Link to='/Login' className="vpil"><img src={ARROW} alt="Go back"/></Link>
          <h1 className="rubrik">Hej!</h1>
          <p className="desc">Desc: </p>
          <p className="time">Time: </p>
          <p className="inv">Invites: </p>
          <nav className="navBar">
              <button className={`button ${navbarOpen ? " showMenu" : "noMenu"}`} onClick={handleToggle}></button>
              <Link className={`button menuNav2 ${navbarOpen ? " showMenu" : "noMenu"}`} to="/edit" />
              <Link className={`button menuNav3 ${navbarOpen ? " showMenu" : "noMenu"}`} to="/delete" />
          </nav>
        </div>
    </div>
  );
}

export default App;