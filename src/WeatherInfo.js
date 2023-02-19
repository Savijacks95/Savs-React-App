import React from "react";
import Forecast from "./Forecast";
import DateFormat from "./DateFormat";
import WeatherTemperature from "./WeatherTemperature";

export default function WeatherInfo(props) {
  return (
    <div className="WeatherInfo">
      <div className="city-name">{props.data.city}</div>
      <div className="date">
        <DateFormat date={props.data.date} />
      </div>
      <div>
        <img
          src={props.data.iconUrl}
          width="175"
          height="200"
          alt=""
          className="weather-icon"
        />
        <WeatherTemperature celsius={props.data.temperature} />

        <div>
          <p className="weather-condition">{props.data.description}</p>
        </div>
        <div className="weather-description">
          Humidity: <span className="humidity">{props.data.humidity}</span>%
        </div>
        <div className="weather-description">
          Wind: <span className="wind">{Math.round(props.data.wind)}</span> km/h
        </div>
        <Forecast />
      </div>
    </div>
  );
}
