import React, { useState } from "react";

import WeatherInfo from "./WeatherInfo";
import axios from "axios";

export default function Weather(props) {
  const [weatherData, setWeatherData] = useState({ ready: false });
  const [city, setCity] = useState(props.city);
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
  function search() {
    const apiKey = `0f801bba3d6t60a3b33a098o4965a127`;
    let apiUrl = `https://api.shecodes.io/weather/v1/forecast?query=${city}&key=${apiKey}&units=metric`;
    axios.get(apiUrl).then(handleResponse);
  }

  function handleSubmit(event) {
    event.preventDefault();
    search();
  }

  function handleCityChange(event) {
    setCity(event.target.value);
  }

  if (weatherData.ready) {
    return (
      <div className="card bg-transparent">
        <div className="city search">
          <form id="search-form" onSubmit={handleSubmit}>
            <input
              type="text"
              className="form-control bg-transparent"
              id="city"
              placeholder="Enter City"
              autoFocus="on"
              onChange={handleCityChange}
            />
            <button className="bg-transparent btn">GO</button>
          </form>
          <WeatherInfo data={weatherData} />
        </div>
      </div>
    );
  } else {
    search();
    return `Loading`;
  }
}
