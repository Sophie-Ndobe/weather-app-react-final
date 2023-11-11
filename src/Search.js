import React, { useState } from "react";
import "./Search.css";
import Weather from "./Weather";
import axios from "axios";

export default function Search({ defaultCity }) {
  const [city, setCity] = useState(defaultCity);
  const [weather, setWeather] = useState({ ready: false });

  function showWeather(response) {
    console.log(response);
    setWeather({
      ready: true,
      temperature: Math.round(response.data.temperature.current),
      city: response.data.city,
      humidity: response.data.temperature.humidity,
      wind: response.data.wind.speed,
      icon: response.data.condition.icon,
      description: response.data.condition.description,
    });
  }

  function weatherApiCall() {
    let apiKey = "2c13e0a2b6fe347b0421bb02eef2o43t";
    let apiUrl = `https://api.shecodes.io/weather/v1/current?query=${city}&key=${apiKey}`;

    axios.get(apiUrl).then(showWeather);
  }

  function handleSubmit(event) {
    event.preventDefault();

    weatherApiCall();
  }

  function updateCity(event) {
    setCity(event.target.value);
  }

  if (weather.ready) {
    return (
      <div className="Search">
        <div className="row">
          <div className="col-4">
            <h1>{weather.city}</h1>
          </div>
          <div className="col-8">
            <form onSubmit={handleSubmit}>
              <div className="row">
                <div className="col-9">
                  <input
                    type="search"
                    placeholder="Enter a city name"
                    onChange={updateCity}
                  ></input>
                </div>
                <div className="col-3">
                  <button className="btn btn-success w-100">Search</button>
                </div>
              </div>
            </form>
          </div>
        </div>
        <Weather data={weather} />
      </div>
    );
  } else {
    return weatherApiCall();
  }
}
