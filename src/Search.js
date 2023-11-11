import React, { useState } from "react";
import "./Search.css";

export default function Search() {
  const [city, setCity] = useState("");
  function handleSubmit(event) {
    event.preventDefault();
    alert(city);
  }

  function updateCity(event) {
    setCity(event.target.value);
  }
  return (
    <div className="Search">
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
  );
}
