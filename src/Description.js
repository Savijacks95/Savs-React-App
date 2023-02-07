import React from "react";

export default function Description() {
  return (
    <div>
      <div className="three">
        <div className="weather-description">
          Humidity: <span className="humidity"></span>%
        </div>
        <div className="weather-description">
          Wind: <span className="wind"></span> mph
        </div>
        <div className="weather-description">
          Precipitation: <span className="precipitation"></span>%
        </div>
      </div>
    </div>
  );
}
