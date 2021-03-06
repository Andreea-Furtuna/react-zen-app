import React from "react";
import FormattedDate from "./FormattedDate";
import WeatherIcon from "./WeatherIcon";
import WeatherTemperature from "./WeatherTemperature";

export default function WeatherInfo(props) {
  return (
    <div className="WeatherInfo">
      <div className="row">
        <div className="col-6">
          <div className="clearfix">
            <div className="float-left">
              <WeatherIcon code={props.data.icon} />
            </div>
            <div className="float-left">
              <WeatherTemperature celsius={props.data.temperature} />
            </div>
          </div>
        </div>
        <div className="col-6">
          <h1>{props.data.city}</h1>
        </div>
      </div>
      <div className="row">
        <div className="col-6">
          <div className="card">
            <ul>
              <li>
                <FormattedDate date={props.data.date} />
              </li>
            </ul>
          </div>
        </div>
        <div className="col-6">
          <div className="card">
            <ul>
              <li className="text-capitalize">{props.data.description}</li>
              <li>Humidity: {props.data.humidity} %</li>
              <li>Wind: {Math.round(props.data.wind)} km/h</li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}
