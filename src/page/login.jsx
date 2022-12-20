import React from "react";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import BG from '../bilder/marita-kavelashvili-ugnrXk1129g-unsplash.jpg';
import '../App.css';
import HeaderBar from './header';
import { loadLs, saveLs } from '../component/Funktioner';



function Login() {
    let navigate = useNavigate();
    let uID;
    let token;
    const [uid] = useState(loadLs('uID'));
    const [user, setUser ] = useState();
    const [password, setPassword ] = useState();
    const [profpic, setProfpic] = useState([]);
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
                    console.log(result.Data.uID);
                    console.log(result.Data.Token);
                   
                   
                    saveLs('username',user)
                    saveLs('uID',result.Data.uID);
                    saveLs('token',result.Data.Token);
                    saveLs('admin',result.Data.admin);
                  
                }
                getProfilepic();
            }
            )


    function getProfilepic() {
        fetch("https://takeee.ntigskovde.se/Users/users_index.php?action=showUser&uID="+uid+"&token="+loadLs('token'))
        .then(res => res.json())
        .then(
            (result)=>{
                console.log(result["Data"]["Users"])
                setProfpic(result["Data"]["Users"]);
                console.log(profpic.avatar);
                saveLs('avatar', profpic);
                navigate('/Kalender');
                
            }
        )
    }

    }

    return (
        <div>
            <div className='con'>
                <img src={BG} alt="background image"/>
                <div className="window blur">
                    <h1>Inlogg</h1>
                    <input type="text" value={user} onChange={handleChangeUser} placeholder="Användarnamn"/>
                    <input type="password" value={password} onChange={handleChangePassword} placeholder="Lösenord"/>
                    <button onClick={send}>Logga in</button>
                </div>
            </div>
        </div>
    );
}

export default Login;
