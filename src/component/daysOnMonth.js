import React from 'react';
import { loadLs, saveLs } from '../component/Funktioner';
import { useState, useEffect } from "react"
import { useNavigate } from "react-router-dom";


function DaysOnMonth() {

  let days = []

  let navigate = useNavigate();

  let date = new Date();

  const [uid] = useState(loadLs('uID'));
  const [token] = useState(loadLs('token'));
  const [time, setTime] = useState([]);
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
          setTime(d)
          //console.log(time)
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
          <div key={(i)} onClick={() => navigate("/Eventlist", save(prevYear, dataPrevMonth, (prevMonth - dayOfWeek + i + 1)))}>
            {prevMonth - dayOfWeek + i + 1}
            {(() => {
              let elements = [];
              for (let x = 0; x < time.length; x++) {
                let start = time[x]["startDate"].lastIndexOf(" ");
                let stripStart = time[x]["startDate"].slice(0, start);
                let end = time[x]["endDate"].lastIndexOf(" ");
                let stripEnd = time[x]["endDate"].slice(0, end);

                let startYear = stripStart.slice(0, stripStart.indexOf("-"))
                let endYear = stripEnd.slice(0, stripEnd.indexOf("-"))
                let startMonth = stripStart.slice(stripStart.indexOf("-") + 1, stripStart.lastIndexOf("-"))
                let endMonth = stripEnd.slice(stripEnd.indexOf("-") + 1, stripEnd.lastIndexOf("-"))
                let startDay = stripStart.slice(stripStart.lastIndexOf("-") + 1, stripStart.length)
                let endDay = stripEnd.slice(stripEnd.lastIndexOf("-") + 1, stripEnd.length)

                
                if (prevYear >= parseInt(startYear) && prevYear <= parseInt(endYear)) {
                  if (dataPrevMonth >= parseInt(startMonth) && dataPrevMonth <= parseInt(endMonth)) {
                    if ((prevMonth - dayOfWeek + i + 1) >= parseInt(startDay) && (prevMonth - dayOfWeek + i + 1) <= parseInt(endDay)) {
                      console.log(time[x])
                      elements.push(<p>{time[x]["title"]}</p>);
                    }
                  }
                }
              }
              return elements;
            })()}
          </div>
        );
      }
      else if (i - dayOfWeek < currMonth) {
        days.push(
          <div key={(i)} onClick={() => navigate("/Eventlist", save(finalInputYear, finalInputMonth, (i - dayOfWeek + 1)))}>
            {i - dayOfWeek + 1}
            {(() => {
              let elements = [];
              for (let x = 0; x < time.length; x++) {
                let start = time[x]["startDate"].lastIndexOf(" ");
                let stripStart = time[x]["startDate"].slice(0, start);
                let end = time[x]["endDate"].lastIndexOf(" ");
                let stripEnd = time[x]["endDate"].slice(0, end);

                let startYear = stripStart.slice(0, stripStart.indexOf("-"))
                let endYear = stripEnd.slice(0, stripEnd.indexOf("-"))
                let startMonth = stripStart.slice(stripStart.indexOf("-") + 1, stripStart.lastIndexOf("-"))
                let endMonth = stripEnd.slice(stripEnd.indexOf("-") + 1, stripEnd.lastIndexOf("-"))
                let startDay = stripStart.slice(stripStart.lastIndexOf("-") + 1, stripStart.length)
                let endDay = stripEnd.slice(stripEnd.lastIndexOf("-") + 1, stripEnd.length)

                if (finalInputYear >= parseInt(startYear) && finalInputYear <= parseInt(endYear)) {
                  if (finalInputMonth >= parseInt(startMonth) && finalInputMonth <= parseInt(endMonth)) {
                    if ((i - dayOfWeek + 1) >= parseInt(startDay) && (i - dayOfWeek + 1) <= parseInt(endDay)) {
                      console.log(time[x])
                      elements.push(<p>{time[x]["title"]}</p>);
                    }
                  }
                }
              }
              return elements;
            })()}
          </div>
        );
      }
      else {
        days.push(
          <div key={(i)} onClick={() => navigate("/Eventlist", save(nextYear, dataNextMonth, (i - dayOfWeek + 1 - currMonth)))}>
            {i - dayOfWeek + 1 - currMonth}
            {(() => {
              let elements = [];
              for (let x = 0; x < time.length; x++) {
                let start = time[x]["startDate"].lastIndexOf(" ");
                let stripStart = time[x]["startDate"].slice(0, start);
                let end = time[x]["endDate"].lastIndexOf(" ");
                let stripEnd = time[x]["endDate"].slice(0, end);

                let startYear = stripStart.slice(0, stripStart.indexOf("-"))
                let endYear = stripEnd.slice(0, stripEnd.indexOf("-"))
                let startMonth = stripStart.slice(stripStart.indexOf("-") + 1, stripStart.lastIndexOf("-"))
                let endMonth = stripEnd.slice(stripEnd.indexOf("-") + 1, stripEnd.lastIndexOf("-"))
                let startDay = stripStart.slice(stripStart.lastIndexOf("-") + 1, stripStart.length)
                let endDay = stripEnd.slice(stripEnd.lastIndexOf("-") + 1, stripEnd.length)

                if (nextYear >= parseInt(startYear) && nextYear <= parseInt(endYear)) {
                  if (finalInputMonth + 1 >= parseInt(startMonth) && finalInputMonth + 1 <= parseInt(endMonth)) {
                    if ((i - dayOfWeek + 1 - currMonth) >= parseInt(startDay) && (i - dayOfWeek + 1 - currMonth) <= parseInt(endDay)) {
                      elements.push(<p>{time[x]["title"]}</p>);
                    }
                  }
                }
              }
              return elements;
            })()}
          </div>
        );
      }
    }
    setDay(days);
  }

  useEffect(() => {
    getData()
  }, []);

  useEffect(() => {
    handleChange()
  }, [time]);
  
  function save(year, month, day) {
    saveLs("startDate", year + "-" + month + "-" + day)
    console.log(loadLs('startDate'));
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
        <div>Måndag</div>
        <div>Tisdag</div>
        <div>Onsdag</div>
        <div>Torsdag</div>
        <div>Fredag</div>
        <div>Lördag</div>
        <div>Söndag</div>
        {day}
      </div>
    </div>
  );
}

export default DaysOnMonth;