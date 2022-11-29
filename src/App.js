import BG from './bilder/andrew-neel-cckf4TsHAuw-unsplash.jpg';
import './App.css';
import * as React from 'react';
import { Routes, Route } from "react-router-dom";
import Home from "./component/Home";
import Back from "./component/Back";
import { Link } from "react-router-dom";

function App() {
  const [isOpen, setOpen] = React.useState(false);

  const handleClick = () => {
    setOpen(!isOpen);
  };

  return (
    <div className="con">
      <button type="button" onClick={handleClick} id="back" class="arrow">Back</button>
      <button type="button" onClick={handleClick} id="forward" class="arrow">Forward</button>
      <img src={BG} alt="background image"/>
      <div className="window blur">
        <Link to="/Home">Kalender</Link>
        <Link to="/Back">tillbaka</Link>
        <button type="button" onClick={handleClick}>Suspicious button</button>
        
      </div>
      <Routes>
        <Route path="/Home" element={ <Home/> } />
        <Route path="/Back" element={ <Back/> } />
      </Routes>
      
    </div>
  );
}


export default App;