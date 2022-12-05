import BG from './bilder/andrew-neel-cckf4TsHAuw-unsplash.jpg';
import './App.css';
import * as React from 'react';
import { Routes, Route } from "react-router-dom";
import Home from "./component/Home";
import Back from "./component/Back";
import Eventlist from "./page/eventLista";
import Data from "./component/data";
import { Link } from "react-router-dom";

export default function App() {


  return (
    <div className="con">
      <Routes>
        <Route path="/" element={<Eventlist/>} />
        <Route path="/Home" element={ <Home/> } />
        <Route path="/Back" element={ <Back/> } />
        <Route path="/Eventlist" element={ <Eventlist/> } />
        <Route path="/Data" element={ <Data/> } />
      </Routes>
      
    </div>
  );
}


