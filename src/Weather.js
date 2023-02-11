import React from "react";
import Forecast from "./Forecast";
import sun from "./sun.jpg";
import Search from "./Search";
import Description from "./Description";
import HiLo from "./Hi-Lo";
import axios from "axios";

export default function Temp() {
  const apiKey = `0f801bba3d6t60a3b33a098o4965a127
`;
  let city = "London";
  let apiUrl = `https://api.shecodes.io/weather/v1/forecast?query=${city}
              &key=${apiKey}&units=metric
`;
  return (
    <div className="card two bg-transparent">
      <Search />
      <div className="city-name">City</div>
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
        <Description />
        <HiLo />
      </div>
    </div>
  );
}
