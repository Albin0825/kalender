import React from 'react';
import { Routes, Route } from "react-router-dom";

import Back from "./component/Back";
import Login from "./page/login";
import Home from "./page/kalender";
import OneEventOpen from "./page/OneEventOpen";
import Hamburger from "./page/Hamburger";

import HeaderBar from "./page/header";

function App() {
  return (
    <div>
      <HeaderBar/>
      <Routes>
        <Route path="/Hamburger" element={ <Hamburger/> } />
        <Route path="/Home" element={ <Home/> } />
        <Route path="/Back" element={ <Back/> } />
        <Route path="/Login" element ={ <Login/> } />
        <Route path="/OneEventOpen" element ={ <OneEventOpen/> } />
      </Routes>
    </div>
  );
}

export default App;