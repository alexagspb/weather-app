import React from "react";
import "./City.css";

export default function City(props) {
  return (
    <div className={`${props.isActive ? "City City_active" : "City"}`}>
      <span onClick={() => props.updateCity(props.item.id)}>@</span>
      <span onClick={() => props.selectCity(props.item.name)}>
        {props.item.name}
      </span>
      <span onClick={() => props.removeCity(props.item.id)}>X</span>
    </div>
  );
}
