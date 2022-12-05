import BG from '../bilder/marita-kavelashvili-ugnrXk1129g-unsplash.jpg';
import React, {useState, useEffect} from "react"
import {Link} from "react-router-dom"
import '../App.css';

function Hamburger() {
    const [navbarOpen, setNavbarOpen] = useState(false)
    const handleToggle = () => {
        setNavbarOpen(prev => !prev)
    }
    
    /*const [item, setItem] = useState([]);
    useEffect (()=>{
        fetch("http://takeee.ntigskovde.se/login.php?username=Zacke&password=jaggillarkatter1")
        .then(res => res.json())
        .then(
            (result)=>{
                console.log(result["Data"])
                setItem(result["Data"])
            }
        )
    }, [])*/

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
    console.log(items)
    const list = [];
    return (
        <div className="con">
            <img src={BG} alt="background image"/>
            <div className="window blur notlogin">
          {/* <div>
               {Object.keys(item).map((key, index) => {
                return(
                    <div key={index}>
                        <li>
                            {key}: {item[key]}
                        </li>
                    </div>
                    );
                })} 
            </div>*/} 
              <div>
                {Object.keys(items).map((key, index) => {
                    
                    list.push(
                        <div key={index}>
                            {key}: {items[key]}
                        </div>
                    );
                })}
                {list}
              </div>
              
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