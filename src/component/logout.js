import React, { useEffect } from "react"
import Login from "../page/login";
import { useNavigate } from "react-router-dom";
import { saveLs } from './Funktioner';

function Logout(){
    let navigate = useNavigate();

    saveLs('uID','');
    saveLs('token','');
    console.log("hej")

    useEffect(()=>{
        navigate("/login")
    },[])
        
    
}

export default Logout;