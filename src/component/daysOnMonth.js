import React from 'react';
import { useState, useEffect } from "react";
import { Routes, Route, Link } from "react-router-dom";

function DaysOnMonth() {
  let days = []

  const dateMDY = `${dt.getFullYear()}-${dt.getMonth() + 1}-${dt.getDate()}`;
  const [date, setDate] = useState(format(new Date(), 'yyyy/mm/dd'));
  const dt = new Date(date);
  const hour = ["00", "01", "02", "03", "04", "05", "06", "07", "08", "09", "10", "11", "12", "13", "14", "15", "16", "17", "18", "19", "20", "21", "22", "23"];
  const minute = ["00", "01", "02", "03", "04", "05", "06", "07", "08", "09", "10", "11", "12", "13", "14", "15", "16", "17", "18", "19", "20", "21", "22", "23", "24", "25", "26", "27", "28", "29", "30", "31", "32", "33", "34", "35", "36", "37", "38", "39", "40", "41", "42", "43", "44", "45", "46", "47", "48", "49", "50", "51", "52", "53", "54", "55", "56", "57", "58", "59"]
  const time = [];
  const effect = useEffect (()=>{
    fetch("https://takeee.ntigskovde.se/Calendar/calendar_index.php?action=sortTimeline&uID="+ uid +"&token="+ token +"&startDate="+ dateMDY +" "+ time +"&endDate="+ dateMDY +" "+ time +"")
    .then(res => res.json())
    .then(
        (result)=>{
            console.log(dateMDY + " " + time)
            console.log(result["Data"]["My events"])
            /*const data = result["Data"]["My events"];
            for(let i = 0;i<data.length;i++) {
                console.log(data[i])
                setItems(data[i])
            } */  
        }
    )
}, []) 

  for(let i = 0; i != 5; i++) {
      days.push(
        <tr>
          <td>hej</td>
          <td>hej</td>
          <td>hej</td>
          <td>hej</td>
          <td>hej</td>
          <td>hej</td>
          <td>hej</td>
        </tr>

    )
  }
  return (
    <table
      width = "100%"
      height = "100%"
      cellspacing = "111"
    >
      <caption align="top">
      </caption>
      <thead>
        <tr>
          <th>Monday</th>
          <th>Tuesday</th>
          <th>Wednesday</th>
          <th>Thursday</th>
          <th>Friday</th>
          <th>Saturday</th>
          <th>Sunday</th>
        </tr>
      </thead>
      <tbody>
        {days}
      </tbody>
    </table>
  );
}

export default DaysOnMonth;