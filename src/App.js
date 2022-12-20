import React from 'react';
import { Routes, Route } from "react-router-dom";

import Back from "./component/Back";
import Login from "./page/login";
import Home from "./page/kalender";
import OneEventOpen from "./page/OneEventOpen";
import Hamburger from "./page/Hamburger";
import Add from "./page/add";
import Eventlist from "./page/eventList";
import Edit from "./page/edit";
import Delete from "./page/delete";
import Kalender from "./page/kalender";
import Profile from "./page/ProfilePage";

import HeaderBar from "./page/header";

function App() {
  return (
    <div>
      <HeaderBar/>
      <Routes>
        <Route path="/Hamburger" element={ <Hamburger/> } />
        <Route path="/Home" element={ <Home/> } />
        <Route path="/Back" element={ <Back/> } />
        <Route path="/" element ={<Login />} />
        <Route path="/Login" element ={<Login />} />
        <Route path='/Eventlist' element={<Eventlist />} />
        <Route path="/OneEventOpen" element ={<OneEventOpen />} />
        <Route path="/Add" element ={<Add />} />
        <Route path="/Editevent" element ={<Editevent />} />
        <Route path="/Delete" element ={<Delete />} />
        <Route path="/Kalender" element ={<Kalender />} />
        <Route path="/Profile" element ={<Profile />} />
      </Routes>
    </div>
  );
}

export default App;