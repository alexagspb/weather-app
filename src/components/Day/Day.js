import React from "react";
import { convertTemp, getDate } from "../../helpers";
import "./Day.css";

export default function Day(props) {
  return (
    <div className="Day">
      <h3>{getDate(props.item.dt)}</h3>
      <p>{props.item.weather[0].description}</p>
      <p>min temp: {convertTemp(props.item.temp.min)} degrees</p>
      <p>max temp: {convertTemp(props.item.temp.max)} degrees</p>
      <p>humidity: {props.item.humidity}</p>
    </div>
  );
}
