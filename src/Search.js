import React from "react";
import "./Search.css";

export default function Search() {
  return (
    <div className="Search">
      <form>
        <div className="row">
          <div className="col-9">
            <input type="search" placeholder="Enter a city name"></input>
          </div>
          <div className="col-3">
            <button className="btn btn-success w-100">Search</button>
          </div>
        </div>
      </form>
    </div>
  );
}
