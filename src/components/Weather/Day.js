import React from "react";
import "./Day.css";

export default function Day(props) {
  return <div>{props.item.dt}</div>;
}
