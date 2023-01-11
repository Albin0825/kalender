import React from 'react';
import { Routes, Route } from "react-router-dom";

import Back from "./component/Back";
import Login from "./page/login";
import Logout from "./component/logout";
import Home from "./page/kalender";
import OneEventOpen from "./page/OneEventOpen";
import Add from "./page/add";
import Eventlist from "./page/eventList";
import Editevent from "./page/editEvent";
import Delete from "./page/delete";
import Kalender from "./page/kalender";
import Profile from "./page/ProfilePage";
import EditProfile from "./page/editProfile";
import Invite from "./component/invSend";
import Alleventlist from "./page/allEventList";
import Redirect from "./component/redirect";

import HeaderBar from "./page/header";

function App() {
  Redirect();
  return (
    <div>
      <HeaderBar/>
      <Routes>
        <Route path="/Home" element={ <Home/> } />
        <Route path="/Back" element={ <Back/> } />
        <Route path="/" element ={<Login />} />
        <Route path="/Login" element ={<Login />} />
        <Route path="/Logout" element ={<Logout />} />
        <Route path='/Eventlist' element={<Eventlist />} />
        <Route path="/OneEventOpen" element ={<OneEventOpen />} />
        <Route path="/Add" element ={<Add />} />
        <Route path="/Editevent" element ={<Editevent />} />
        <Route path="/Delete" element ={<Delete />} />
        <Route path="/Kalender" element ={<Kalender />} />
        <Route path="/Profile" element ={<Profile />} />
        <Route path="/Editprofile" element ={<EditProfile />} />
        <Route path="/Invite" element ={<Invite />} />
        <Route path="/Allaevent" element ={<Alleventlist />} />
        
      </Routes>
    </div>
  );
}

export default App;