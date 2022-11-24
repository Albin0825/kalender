import BG from './background.jpg';
import React, {useState} from "react"
import {MdClose} from "react-icons/md"
import {FiMenu} from "react-icons/fi"
import './App.css';

function App() {

  const [navbarOpen, setNavbarOpen] = useState(false)

  const handleToggle = () => {
    setNavbarOpen(prev => !prev)
  }

  return (
      <div className="con">
        <img src={BG} alt="background image"/>
        <div className="window blur">
          <nav className="navBar">
              <button onClick={handleToggle}>{navbarOpen ? (<MdClose style={{color: "red", width: "40px", height: "40px"}} />) : (<FiMenu style={{color: "#7b7b7b", width: "40px", height: "40px"}} />)}</button>
              <div className={`menuNav1 ${navbarOpen ? " showMenu" : ""}`}>
              </div>
              <div className={`menuNav2 ${navbarOpen ? " showMenu" : ""}`}>
              </div>
              <div className={`menuNav3 ${navbarOpen ? " showMenu" : ""}`}>
              </div>
          </nav>
        </div>
      </div>
  );
}

export default App;
