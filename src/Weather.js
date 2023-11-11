import React from "react";
import "./Weather.css";

export default function Weather(props) {
  return (
    <div className="Weather mt-5">
      <div className="row">
        <div className="col-6">
          <div className="d-flex justify-content-start">
            <img
              src="https://ssl.gstatic.com/onebox/weather/64/partly_cloudy.png"
              alt="weather icon"
              className="main-icon"
            />
            <h2>{props.data.temperature}</h2>
            <span className="unit">°C</span>
          </div>
        </div>
        <div className="col-6">
          <ul>
            <li>Saturday 17:44, {props.data.description}</li>
            <li>
              Humidity: {props.data.humidity}%, Wind: {props.data.wind}km/h
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
}
