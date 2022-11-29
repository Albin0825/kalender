import BG from '../marita-kavelashvili-ugnrXk1129g-unsplash.jpg';
import '../App.css';
import Data from "../component/data.js";

import React from "react";
import { Link } from "react-router-dom";

function App() {
    return (
        <div>
            <img src={BG} alt="background image"/>
            <div className="window blur">
                <h1>Login</h1>
                <input type="text" placeholder="Username"/>
                <input type="password" placeholder="Password"/>
                <Link to={Data}>Login</Link>
                <input type="submit" value="Login" />
            </div>
        </div>
    );
}