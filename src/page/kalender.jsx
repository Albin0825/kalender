import React from "react";
import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import BG from '../bilder/marita-kavelashvili-ugnrXk1129g-unsplash.jpg';
import '../App.css';

import DaysOnMonth from "../component/daysOnMonth"
import Calendar from 'react-calendar'
import { loadLs, saveLs } from '../component/Funktioner';



function Kalender() {

    let navigate = useNavigate();
    
    /*const sdt = new Date(evstartdate);
    const edt = new Date(evenddate);*/

    const hour = ["00", "01", "02", "03", "04", "05", "06", "07", "08", "09", "10", "11", "12", "13", "14", "15", "16", "17", "18", "19", "20", "21", "22", "23"];
    const minute = ["00", "01", "02", "03", "04", "05", "06", "07", "08", "09", "10", "11", "12", "13", "14", "15", "16", "17", "18", "19", "20", "21", "22", "23", "24", "25", "26", "27", "28", "29", "30", "31", "32", "33", "34", "35", "36", "37", "38", "39", "40", "41", "42", "43", "44", "45", "46", "47", "48", "49", "50", "51", "52", "53", "54", "55", "56", "57", "58", "59"]
    const time = [];
    /*let sdateMDY = `${sdt.getFullYear()}-${sdt.getMonth() + 1}-${sdt.getDate()}`;
    let edateMDY = `${edt.getFullYear()}-${edt.getMonth() + 1}-${edt.getDate()}`;
    let sdateMDYHM = `${sdt.getFullYear()}-${sdt.getMonth() + 1}-${sdt.getDate()} ${sdt.getHours()}:${sdt.getMinutes()}`;
    let edateMDYHM = `${edt.getFullYear()}-${edt.getMonth() + 1}-${edt.getDate()} ${edt.getHours()}:${edt.getMinutes()}`;*/
    for(let x = 0; x < hour.length; x++){
       for(let y = 0; y < minute.length; y++){
            time.push(hour[x]+":"+minute[y])      
        } 
    }
    

    const [evstartdate, setEvStartDate] = useState([]);
    const [evenddate, setEvEndDate] = useState([]);

    

    const callDay = () => {
        //setEvStartDate(items["startDate"])
        //setEvEndDate(items["endDate"])
        
        
        /*if(dateMDY == sdateMDY|| dateMDY == edateMDY){
            console.log(date)
            console.log(evstartdate)
            console.log(evenddate)
        }
        else{
            console.log(dateMDY)
            console.log(sdateMDYHM)
            console.log(edateMDYHM)
            console.log("Det finns inga händelser här")
        }*/
    };
    //moment(day.dateString).format(_format)*/

    return (
        <div>
            <div className='con'>
                <img src={BG} alt="background image"/>
                <div className="window blur kalender" style={{overflow: "hidden", border: "solid 1px hsla(0, 0%, 0%, 0.25"}}>
                    <DaysOnMonth/>
                    {/*<Calendar onChange={setDate} onClickDay={effect}/>*/}
                </div>
            </div>
        </div>
    );
}

export default Kalender;