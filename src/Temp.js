import React from "react";
import Forecast from "./Forecast";
import sun from "./sun.jpg";

export default function Temp() {
  return (
    <div className="card two">
      <div className="city-name">City</div>;
      <div>
        <p className="date">Sunday, 12</p>
      </div>
      <div>
        <img
          src={sun}
          width="100"
          height="100"
          alt=""
          className="weather-icon"
        />
        <p className="temp">00°</p>
        <button className="fahrenheit">F°</button>
        <button className="celsius">C°</button>
        <div>
          <p className="weather-condition">Partly Cloudy</p>
        </div>
        <Forecast />
      </div>
    </div>
  );
}
