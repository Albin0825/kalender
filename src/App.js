import React from 'react';
import { Routes, Route, Link } from "react-router-dom";
import Home from "./component/Home";
import Back from "./component/Back";
import Login from "./page/login";
import OneEventOpen from "./page/OneEventOpen";

function App() {
  return (
    <div>
        <Link to="/Home">Kalender</Link>
        <Link to="/Back">tillbaka</Link>
        <Link style={{textDecoration: "none"}} to='/Login'>Login</Link>
        <Link style={{textDecoration: "none"}} to='/OneEventOpen'>OneEventOpen</Link>
      <Routes>
        <Route path="/Home" element={ <Home/> } />
        <Route path="/Back" element={ <Back/> } />
        <Route path="/Login" element ={<Login />} />
        <Route path="/OneEventOpen" element ={<OneEventOpen />} />
      </Routes>
    </div>
  );
}

export default App;