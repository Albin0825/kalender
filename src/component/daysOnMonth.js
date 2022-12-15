import React from 'react';

function DaysOnMonth() {
  let days = []
  for(let i = 0; i != 35; i++) {
      days.push(
          <div>div</div>
    )
  }
  return (
    <div style={{
      display: "grid",
      gridTemplateColumns: "repeat(7, 1fr)",
      height: "100%",
      width: "100%"
    }}>
      <div>Monday</div>
      <div>Tuesday</div>
      <div>Wednesday</div>
      <div>Thursday</div>
      <div>Friday</div>
      <div>Saturday</div>
      <div>Sunday</div>
      {days}
    </div>
  );
}

export default DaysOnMonth;