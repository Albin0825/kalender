import React from 'react';
import { loadLs, saveLs } from '../component/Funktioner';
import { useState, useEffect } from "react"
import { useNavigate } from "react-router-dom";
import '../App.css';


function DaysOnMonth() {

  let days = []

  let navigate = useNavigate();

  let date = new Date();

  const [uid] = useState(loadLs('uID'));
  const [token] = useState(loadLs('token'));
  const [Event, setEvent] = useState([]);
  const [day, setDay] = useState([]);
  const [selectedMonth, setSelectedMonth] = useState('');


  function getMonths(month, year) {
    // Determine the number of days in the month
    let daysInMonth = 0;
    switch (month) {
      case 0:  // January
      case 2:  // March
      case 4:  // May
      case 6:  // July
      case 7:  // August
      case 9:  // October
      case 11: // December
        daysInMonth = 31;
        break;
      case 3:  // April
      case 5:  // June
      case 8:  // September
      case 10: // November
        daysInMonth = 30;
        break;
      case 1:  // February
        daysInMonth = year % 4 === 0 && (year % 100 !== 0 || year % 400 === 0) ? 29 : 28;
        break;
      default:
        daysInMonth = 0;
    }

    return daysInMonth;
  }


  async function getData() {
    await fetch("https://takeee.ntigskovde.se/Calendar/calendar_index.php?action=showEvent&uID=" + uid + "&token=" + token + "")
      .then(res => res.json())
      .then(
        (result) => {
          const d = result["Data"]["My events"];
          setEvent(d)
        }
      )
  }


  const handleChange = (event) => {
    let inputMonth = 0;
    let finalInputMonth = 0;
    let finalInputYear = 0;

    try{
      setSelectedMonth(event.target.value);
      inputMonth = event.target.value.indexOf("-")
      finalInputMonth = event.target.value.slice(inputMonth + 1, event.target.value.length)
      finalInputYear = event.target.value.slice(0, inputMonth)
    }
    catch{
      finalInputMonth = date.getMonth() +1
      finalInputYear = date.getFullYear()
    }

    let dataPrevMonth = finalInputMonth - 1;
    if (dataPrevMonth <= 0) {
      dataPrevMonth = 12
    }

    let dataNextMonth = finalInputMonth + 1;
    if (dataNextMonth >= 13) {
      dataNextMonth = 1
    }

    let prevMonth = 0;
    if (parseInt(finalInputMonth) - 2 <= -1) {
      prevMonth = getMonths(11, parseInt(finalInputYear) - 1)
    }
    else {
      prevMonth = getMonths(parseInt(finalInputMonth) - 2, parseInt(finalInputYear))
    }

    let currMonth = getMonths(parseInt(finalInputMonth) - 1, parseInt(finalInputYear))



    console.log(parseInt(finalInputMonth) - 1)

    let datum = new Date(finalInputYear, finalInputMonth - 1, 1);

    // Get the day of the week for this date
    let dayOfWeek = datum.getDay();
    if (dayOfWeek == 0) {
      dayOfWeek = 7;
    }
    dayOfWeek = dayOfWeek - 1;
    console.log(dayOfWeek)

    days = []

    let prevYear = 0;

    if (dataPrevMonth == 12) {
      prevYear = parseInt(finalInputYear)-1;
    }
    else {
      prevYear = finalInputYear;
    }


    let nextYear = 0;

    if (dataNextMonth == 1) {
      nextYear = parseInt(finalInputYear)+1;
    }
    else {
      nextYear = finalInputYear;
    }

    for (let i = 0; i != 42; i++) {
      
      if (prevMonth - dayOfWeek + i < prevMonth) {
        console.log(currMonth)
        days.push(
          <div key={(i)} className="item" onClick={() => navigate("/Eventlist", save(prevYear, dataPrevMonth, (prevMonth - dayOfWeek + i + 1)))}>
            {prevMonth - dayOfWeek + i + 1}
            {(() => {
              let events = stripData(prevYear, dataPrevMonth, (prevMonth - dayOfWeek + i + 1))
              //return events;
            })()}
          </div>
        );
      }
      else if (i - dayOfWeek < currMonth) {
        const isDay = (date.getDate() == (i - dayOfWeek + 1) && date.getMonth() == (finalInputMonth-1) && date.getFullYear() == finalInputYear)
        days.push(
          <div key={(i)} className={isDay ? "day blur item":"item"} onClick={() => navigate("/Eventlist", save(finalInputYear, finalInputMonth, (i - dayOfWeek + 1)))}>
            {i - dayOfWeek + 1}
            {stripData(finalInputYear, finalInputMonth, (i - dayOfWeek + 1))}
          </div>
        );
      }
      else {
        days.push(
          <div key={(i)} className="item" onClick={() => navigate("/Eventlist", save(nextYear, dataNextMonth, (i - dayOfWeek + 1 - currMonth)))}>
            {i - dayOfWeek + 1 - currMonth}
            {stripData(nextYear, dataNextMonth, (i - dayOfWeek + 1 - currMonth))}
          </div>
        );
      }
    }
    setDay(days);
  }

  function stripData(year, month, day){
    let elements = []

    for (let x = 0; x < Event.length; x++) {
      let start = Event[x]["startDate"].lastIndexOf(" ");
      let stripStart = Event[x]["startDate"].slice(0, start);
      let end = Event[x]["endDate"].lastIndexOf(" ");
      let stripEnd = Event[x]["endDate"].slice(0, end);

      let startYear = stripStart.slice(0, stripStart.indexOf("-"))
      let endYear = stripEnd.slice(0, stripEnd.indexOf("-"))
      let startMonth = stripStart.slice(stripStart.indexOf("-") + 1, stripStart.lastIndexOf("-"))
      let endMonth = stripEnd.slice(stripEnd.indexOf("-") + 1, stripEnd.lastIndexOf("-"))
      let startDay = stripStart.slice(stripStart.lastIndexOf("-") + 1, stripStart.length)
      let endDay = stripEnd.slice(stripEnd.lastIndexOf("-") + 1, stripEnd.length)

      if (year >= parseInt(startYear) && year <= parseInt(endYear)) {
        if (month + 1 >= parseInt(startMonth) && month + 1 <= parseInt(endMonth)) {
          if (day >= parseInt(startDay) && day <= parseInt(endDay)) {
            elements.push(<p>{Event[x]["title"]}</p>);
            console.log(elements["props"])
          }
        }
      }
    }
    return elements
  }


  useEffect(() => {
    getData()
  }, []);

  useEffect(() => {
    handleChange()
  }, [Event]);
  
  function save(year, month, day) {
    console.log(day.toString().length);
    if(day.toString().length == 1){
      saveLs("startDate", year + "-" + month + "-0" + day)
    }
    else{
      saveLs("startDate", year + "-" + month + "-" + day)
    }
  }

  return (
    <div style={{
      height: "100%",
      width: "100%"
    }}>
      <input type="month" value={selectedMonth || date.getFullYear()+"-"+(date.getMonth()+1)} onChange={handleChange} />
      <div style={{
        display: "grid",
        gridTemplateColumns: "repeat(7, 1fr)",
        height: "100%",
        width: "100%"
      }}>
        <div style={{
          borderBottom: "1px solid black"
        }}>Måndag</div>
        <div style={{
          borderBottom: "1px solid black"
        }}>Tisdag</div>
        <div style={{
          borderBottom: "1px solid black"
        }}>Onsdag</div>
        <div style={{
          borderBottom: "1px solid black"
        }}>Torsdag</div>
        <div style={{
          borderBottom: "1px solid black"
        }}>Fredag</div>
        <div style={{
          borderBottom: "1px solid black"
        }}>Lördag</div>
        <div style={{
          borderBottom: "1px solid black"
        }}>Söndag</div>
        {day}
      </div>
    </div>
  );
}

export default DaysOnMonth;