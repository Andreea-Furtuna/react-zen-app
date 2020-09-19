import React from "react";
import "./Weather.css";

export default function Weather() {
  return (
    <div className="Weather">
      <h1>Amsterdam</h1>
      <form>
        <div className="row">
          <div className="col-9">
            <input
              type="text"
              placeholder="Type here your city..."
              className="form-control"
            />
          </div>
          <div className="col-3">
            <input type="submit" value="Search" className="btn btn-primary" />
          </div>
        </div>
      </form>
      <ul>
        <li>Saturday 16:01</li>
        <li>Cloudy</li>
      </ul>
      <div className="row">
        <div className="col-6">
          <img
            src="https://ssl.gstatic.com/onebox/weather/64/sunny.png"
            alt="Cloudy"
          />
          6° C
        </div>
        <div className="col-6">
          <ul>
            <li>Description: Cloudy</li>
            <li>Humidity: 10%</li>
            <li>Wind: 3km/h</li>
          </ul>
        </div>
      </div>
    </div>
  );
}
