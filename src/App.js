import React from 'react';
import { Routes, Route, Link } from "react-router-dom";
import Home from "./component/Home";
import Back from "./component/Back";
import Login from "./page/login";
import OneEventOpen from "./page/OneEventOpen";
import Hamburger from "./page/Hamburger";
import Datadump from "./component/Datadump";
import Add from "./page/add";
import Eventlist from "./page/eventList";
import Edit from "./page/edit";

import HeaderBar from "./page/header";

function App() {
  return (
    <div>
      <HeaderBar/>
      <Routes>
        <Route path="/Hamburger" element = { <Hamburger/> } />
        <Route path="/Home" element = { <Home/> } />
        <Route path="/Back" element = { <Back/> } />
        <Route path="/Login" element = { <Login/> } />
        <Route path="/OneEventOpen" element = { <OneEventOpen/> } />
        <Route path="/Datadump" element = { <Datadump/> } />
        <Route path="/Add" element ={ <Add/> } />
        <Route path="/Edit" element ={<Edit />} />
      </Routes>
    </div>
  );
}

export default App;