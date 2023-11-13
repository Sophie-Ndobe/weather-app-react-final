import React, { useState } from "react";
import "./WeatherForecast.css";
import axios from "axios";

export default function WeatherForecast(props) {
  const [forecast, setForecast] = useState({ loaded: false });

  // let date = new Date(1000*forecast[0].time)

  function showWeatherForecast(response) {
    setForecast({
      loaded: true,
      data: response.data.daily,
    });
  }

  function forecastApiCall() {
    let apiKey = "2c13e0a2b6fe347b0421bb02eef2o43t";
    let forecastApiUrl = `https://api.shecodes.io/weather/v1/forecast?query=${props.city}&key=${apiKey}`;

    axios.get(forecastApiUrl).then(showWeatherForecast);
  }

  if (forecast.loaded) {
    return (
      <div className="WeatherForecast">
        <div className="row">
          <div className="col forecast-details">
            <div className="outline">
              <div>{forecast.data[0].time}Sun</div>
              <img
                src="https://ssl.gstatic.com/onebox/weather/64/partly_cloudy.png"
                alt="weather icon"
                className="main-icon"
              />
              <div>
                {forecast.data[0].temperature.maximum}{" "}
                {forecast.data[0].temperature.minimum}{" "}
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  } else {
    forecastApiCall();
    return <p>Loading....</p>;
  }
}
