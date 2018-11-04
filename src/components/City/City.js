import React from "react";
import "./City.css";

export default function City(props) {
  return (
    <div className={`${props.isActive ? "City City_active" : "City"}`}>
      <div
        className="City__update"
        onClick={() => props.updateCity(props.item.name)}
      />
      <div
        className="City__name"
        onClick={() => props.selectCity(props.item.name)}
      >
        {props.item.name}
      </div>
      <div
        className="City__remove"
        onClick={() => props.removeCity(props.item.name)}
      />
    </div>
  );
}
