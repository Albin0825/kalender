import React from 'react';
import { loadLs, saveLs } from '../component/Funktioner';
import { useState, useEffect } from "react"


function DaysOnMonth() {
  let days = []

  let date = new Date();

  const [uid] = useState(loadLs('uID'));
  const [token] = useState(loadLs('token'));
  const [time,setTime] = useState([]);
  const [day,setDay] = useState([]);

  
  function getMonths(month,year){
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

 

  async function getData(year, month, day){
    await fetch("https://takeee.ntigskovde.se/Calendar/calendar_index.php?action=showEvent&uID="+uid+"&token="+token+"")
    .then(res => res.json())
    .then(
        (result)=>{
            const d = result["Data"]["My events"];
            for(let i = 0;i<d.length;i++) {
                let start = d[i]["startDate"].lastIndexOf(" ");
                let stripStart = d[i]["startDate"].slice(0,start);
                let end = d[i]["endDate"].lastIndexOf(" ");
                let stripEnd = d[i]["endDate"].slice(0,end);

                let startYear = stripStart.slice(0, stripStart.indexOf("-"))
                let endYear = stripEnd.slice(0, stripEnd.indexOf("-"))
                let startMonth = stripStart.slice(stripStart.indexOf("-")+1, stripStart.lastIndexOf("-"))
                let endMonth = stripEnd.slice(stripEnd.indexOf("-")+1, stripEnd.lastIndexOf("-"))
                let startDay = stripStart.slice(stripStart.lastIndexOf("-")+1, stripStart.length)
                let endDay = stripEnd.slice(stripEnd.lastIndexOf("-")+1, stripEnd.length)

                
              if(year >= parseInt(startYear) && year <= parseInt(endYear)){
                if(month >= parseInt(startMonth) && month <= parseInt(endMonth)){
                  if(day >= parseInt(startDay) && day <= parseInt(endDay)){
                    //console.log(d[i])
                    setTime(d[i])
                    return time;
                  }
                }
              }  
            }  
        }
    ) 
  }


  

  const handleChange = (event) => {
    let inputMonth = event.target.value.indexOf("-")
    let finalInputMonth = event.target.value.slice(inputMonth+1, event.target.value.length)
    let finalInputYear = event.target.value.slice(0, inputMonth)

    let prevMonth = getMonths(parseInt(finalInputMonth)-2, parseInt(finalInputYear))
    let currMonth = getMonths(parseInt(finalInputMonth)-1, parseInt(finalInputYear))
  
    let datum = new Date(finalInputYear, finalInputMonth-1, 1);
    
    // Get the day of the week for this date
    let dayOfWeek = datum.getDay();
    dayOfWeek = dayOfWeek-1;

    days = []

    for(let i = 0; i != 35; i++) {

      if(prevMonth - dayOfWeek + i < prevMonth){
        console.log(currMonth)
        days.push(
          <div key={(i)}>{prevMonth - dayOfWeek + i +1}</div>
        )
      }
      else if(i - dayOfWeek < currMonth){
        let hej = getData(parseInt(finalInputYear), parseInt(finalInputMonth), (i - parseInt(dayOfWeek) +1))
        console.log(hej)
        days.push(
          <div key={(i)}>{i - dayOfWeek + 1}</div>
        )
      }
      else{
        days.push(
          <div key={(i)}>{i - dayOfWeek + 1 - currMonth}</div>
        )
      }
    }
    setDay(days);

  }

  return (
    <div style={{
      height: "100%",
      width: "100%"
    }}>
      <input type="month" onChange={handleChange}/>
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