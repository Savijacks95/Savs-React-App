import React, { useState } from "react";

export default function WeatherTemperature(props) {
  const [unit, setUnit] = useState(`celsius`);

  function convertFahrenheit(event) {
    event.preventDefault();
    setUnit(`fahrenheit`);
  }

  function convertCelsius(event) {
    event.preventDefault();
    setUnit(`celsius`);
  }

  if (unit === `celsius`) {
    return (
      <div className="Temperature">
        <p className="temp">{Math.round(props.celsius)}°</p>
        <button className="celsius">C°</button>
        <button className="fahrenheit" onClick={convertFahrenheit}>
          F°
        </button>
      </div>
    );
  } else {
    let fahrenheit = (props.celsius * 9) / 5 + 32;
    return (
      <div className="Temperature">
        <p className="temp">{Math.round(fahrenheit)}°</p>
        <button className="celsius" onClick={convertCelsius}>
          C°
        </button>
        <button className="fahrenheit">F°</button>
      </div>
    );
  }
}
