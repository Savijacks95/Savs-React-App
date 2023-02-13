import React, { useState } from "react";
import Forecast from "./Forecast";
import DateFormat from "./DateFormat";
import axios from "axios";

export default function Weather(props) {
  const [weatherData, setWeatherData] = useState({ ready: false });
  function handleResponse(response) {
    console.log(response.data);
    setWeatherData({
      ready: true,
      city: response.data.city,
      temperature: response.data.daily[0].temperature.day,
      humidity: response.data.daily[0].temperature.humidity,
      wind: response.data.daily[0].wind.speed,
      high: response.data.daily[0].temperature.maximum,
      low: response.data.daily[0].temperature.minimum,
      iconUrl: response.data.daily[0].condition.icon_url,
      description: response.data.daily[0].condition.description,
      date: new Date(response.data.daily[0].time * 1000),
    });
  }

  if (weatherData.ready) {
    return (
      <div className="card two bg-transparent">
        <div className="city search">
          <form id="search-form">
            <input
              type="text"
              className="form-control bg-transparent"
              id="city"
              placeholder="Enter City"
              autoFocus="on"
            />
          </form>
          <button className="bg-transparent btn">GO</button>
        </div>

        <div className="city-name">{weatherData.city}</div>
        <div className="date">
          <DateFormat date={weatherData.date} />
        </div>
        <div>
          <img
            src={weatherData.iconUrl}
            width="125"
            height="125"
            alt=""
            className="weather-icon"
          />
          <p className="temp">{Math.round(weatherData.temperature)}°</p>
          <button className="fahrenheit">F°</button>
          <button className="celsius">C°</button>
          <div>
            <p className="weather-condition">{weatherData.description}</p>
          </div>
          <div className="weather-description">
            Humidity: <span className="humidity">{weatherData.humidity}</span>%
          </div>
          <div className="weather-description">
            Wind: <span className="wind">{Math.round(weatherData.wind)}</span>{" "}
            mph
          </div>
          <Forecast />
          <div className="card three">
            <div className="HighTemp">{Math.round(weatherData.high)}°</div>
          </div>
          <div className="card four">
            <div className="LowTemp">{Math.round(weatherData.low)}°</div>
          </div>
        </div>
      </div>
    );
  } else {
    const apiKey = `0f801bba3d6t60a3b33a098o4965a127`;
    let apiUrl = `https://api.shecodes.io/weather/v1/forecast?query=${props.city}&key=${apiKey}&units=metric`;
    axios.get(apiUrl).then(handleResponse);

    return `Loading`;
  }
}
