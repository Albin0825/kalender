import BG from '../bilder/marita-kavelashvili-ugnrXk1129g-unsplash.jpg';
import '../App.css';
import Data from "../component/data.js";
import HeaderBar from './header';

import React from "react";

function Login() {
    return (
        <div>
            <div className='con'>
                <img src={BG} alt="background image"/>
                <div className="window blur">
                    <h1>Login</h1>
                    <input type="text" placeholder="Username"/>
                    <input type="password" placeholder="Password"/>
                    <button>Login</button>
                </div>
            </div>
        </div>
    );
}

export default Login;