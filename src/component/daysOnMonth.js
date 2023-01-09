import React, { useState, useEffect } from "react"
import { useNavigate } from "react-router-dom";
import { loadLs, saveLs } from '../component/Funktioner';
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

    try {
      setSelectedMonth(event.target.value);
      inputMonth = event.target.value.indexOf("-")
      finalInputMonth = event.target.value.slice(inputMonth + 1, event.target.value.length)
      finalInputYear = event.target.value.slice(0, inputMonth)
    }
    catch {
      finalInputMonth = date.getMonth() + 1
      finalInputYear = date.getFullYear()
    }

    let dataPrevMonth = parseInt(finalInputMonth) - 1;
    if (dataPrevMonth <= 0) {
      dataPrevMonth = 11
    }

    let dataNextMonth = parseInt(finalInputMonth) + 1;
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

    let datum = new Date(finalInputYear, finalInputMonth - 1, 1);

    // Get the day of the week for this date
    let dayOfWeek = datum.getDay();
    if (dayOfWeek == 0) {
      dayOfWeek = 7;
    }
    dayOfWeek = dayOfWeek - 1;

    days = []

    let prevYear = 0;

    if (dataPrevMonth == 12) {
      prevYear = parseInt(finalInputYear) - 1;
    }
    else {
      prevYear = finalInputYear;
    }


    let nextYear = 0;

    if (dataNextMonth == 1) {
      nextYear = parseInt(finalInputYear) + 1;
    }
    else {
      nextYear = finalInputYear;
    }

    for (let i = 0; i != 42; i++) {

      if (prevMonth - dayOfWeek + i < prevMonth) {
        days.push(
          <div key={(i)} className="item" onClick={() => navigate("/Eventlist", save(prevYear, dataPrevMonth, (prevMonth - dayOfWeek + i + 1)))}>
            {prevMonth - dayOfWeek + i + 1}
            {stripData(prevYear, dataPrevMonth, (prevMonth - dayOfWeek + i + 1))}
          </div>
        );
      }
      else if (i - dayOfWeek < currMonth) {
        const isDay = (date.getDate() == (i - dayOfWeek + 1) && date.getMonth() == (finalInputMonth - 1) && date.getFullYear() == finalInputYear)
        days.push(
          <div key={(i)} className={isDay ? "day blur item" : "item"} onClick={() => navigate("/Eventlist", save(finalInputYear, finalInputMonth, (i - dayOfWeek + 1)))}>
            {i - dayOfWeek + 1}
            {stripData(finalInputYear, (finalInputMonth - 1), (i - dayOfWeek + 1))}
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

  function stripData(year, month, day) {
    let num = 1
    let elements = []

    for (let x = 0; x < Event.length; x++) {
      let startDate = Event[x]["startDate"].slice(0, Event[x]["startDate"].lastIndexOf(" "))
      let endDate = Event[x]["endDate"].slice(0, Event[x]["endDate"].lastIndexOf(" "))

      let thisday = year + "-" + month + 1 + "-" + day

      if (thisday >= startDate && thisday <= endDate) {
        if (elements.length == 0) {
          elements.push(<p key={(x)}>{Event[x]["title"]}</p>);
          elements.push(<p className='timeStamp' key={(x + 1)}>{Event[x]["startDate"]}</p>);
          elements.push(<p className='timeStamp' key={(x + 2)}>{Event[x]["endDate"]}</p>);
        } else {
          elements.splice(3, 1, "+" + num++)
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
    if (day.toString().length == 1) {
      day = "0" + day
    }
    if (month.toString().length == 1) {
      month = "0" + month
    }
    saveLs("startDate", year + "-" + month + "-" + day)
  }

  return (
    <div className="gridDiv">
      <input type="month" value={selectedMonth || date.getFullYear() + "-" + (date.getMonth() + 1)} onChange={handleChange} />
      <div className="grid">
        <div className="weekDay">Måndag</div>
        <div className="weekDay">Tisdag</div>
        <div className="weekDay">Onsdag</div>
        <div className="weekDay">Torsdag</div>
        <div className="weekDay">Fredag</div>
        <div className="weekDay">Lördag</div>
        <div className="weekDay">Söndag</div>
        {day}
      </div>
    </div>
  );
}

export default DaysOnMonth;