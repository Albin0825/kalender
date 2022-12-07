import React from 'react';
import { Routes, Route, Link } from "react-router-dom";

function DaysOnMonth() {
  let days = []
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