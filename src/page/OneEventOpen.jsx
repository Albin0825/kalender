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

  const [items, setItems] = useState([]);
    useEffect (()=>{
        fetch("https://takeee.ntigskovde.se/Calendar/calendar_index.php?action=showEvent&uID=38&token=28b292be5c912a34de42ad6368d76f0c9907ce00")
        .then(res => res.json())
        .then(
            (result)=>{
                const d = result["Data"]["My events"];
                for(let i = 0;i<d.length;i++) {
                    console.log(d[i])
                    setItems(d[i])
                }   
            }
        )
    }, [])

  return (
    <div className="con">
      <img src={BG} alt="background image"/>
        <div className="window blur notlogin">
          <Link to='/Login' className="vpil"><img src={ARROW} alt="Go back"/></Link>
          <h1 className="rubrik">Hej!</h1>
          <p className="desc">Desc: <input type="text"></input></p>
          <p className="time">Time: <input type="text"></input></p>
          <p className="inv">Invites: <input type="text"></input></p>
          <nav className="navBar">
              <button className={`button ${navbarOpen ? " showMenu" : "noMenu"}`} onClick={handleToggle}></button>
              <Link className={`button menuNav1 ${navbarOpen ? " showMenu" : "noMenu"}`} to="/add"/>
              <Link className={`button menuNav2 ${navbarOpen ? " showMenu" : "noMenu"}`} to="" />
              <Link className={`button menuNav3 ${navbarOpen ? " showMenu" : "noMenu"}`} to="" />
          </nav>
        </div>
    </div>
  );
}

export default App;