import React from "react";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import BG from '../bilder/marita-kavelashvili-ugnrXk1129g-unsplash.jpg';
import '../App.css';
import HeaderBar from './header';
import { saveLs } from '../component/Funktioner';



function Login() {
    let navigate = useNavigate();
    let uID;
    let token;
    const [user, setUser ] = useState();
    const [password, setPassword ] = useState();
    const handleChangeUser = (e) => {
        setUser(e.target.value);
    }
    const handleChangePassword = (e) => {
        setPassword(e.target.value);
    }

    function send() {
        fetch("http://takeee.ntigskovde.se/login.php?username="+user+"&password="+password)
        .then(res => res.json())
        .then(
            (result)=>{
                if(result.Data.Token != undefined) {
                    console.log(result.Data.Token)
                    console.log(result.Data.uID)
                    navigate('/OneEventOpen');
                    saveLs('uID',result.Data.uID);
                    saveLs('token',result.Data.token);
                    saveLs('admin',result.Data.admin);
                }
            }
        )
    }

    return (
        <div>
            <div className='con'>
                <img src={BG} alt="background image"/>
                <div className="window blur">
                    <h1>Login</h1>
                    <input type="text" value={user} onChange={handleChangeUser} placeholder="Username"/>
                    <input type="password" value={password} onChange={handleChangePassword} placeholder="Password"/>
                    <button onClick={send}>Login</button>
                </div>
            </div>
        </div>
    );
}

export default Login;
