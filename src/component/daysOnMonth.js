import React from 'react';

function DaysOnMonth() {
  let days = []

  let date = new Date();
  
  function getMonths(month){
    // Get the month and year of the date
    let year = date.getFullYear();

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

  // Get the day of the week for this date
  let dayOfWeek = date.getDay();
  dayOfWeek = dayOfWeek-1;

  for(let i = 0; i != 35; i++) {
    let prevMonth = getMonths(date.getMonth()-1)
    let currMonth = getMonths(date.getMonth())

    if(prevMonth - dayOfWeek + i < prevMonth){
      days.push(
        <div key={(i)}>{prevMonth - dayOfWeek + i +1}</div>
      )
    }
    else if(i - dayOfWeek < currMonth){
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
  return (
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
      {days}
    </div>
  );
}

export default DaysOnMonth;