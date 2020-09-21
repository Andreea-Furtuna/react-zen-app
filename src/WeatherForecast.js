import React, { useState } from "react";
import axios from "axios";
import WeatherForecastPreview from "./WeatherForecastPreview";
import "./WeatherForecast.css";

export default function WeatherForecast(props) {
  const [loaded, setLoaded] = useState(false);
  const [forecast, setForecast] = useState(null);

  function handleForecastResponse(response) {
    setForecast(response.data);
    setLoaded(true);
    console.log(response.data);
  }

  if (loaded && props.city === forecast.city.name) {
    return (
      <div className="WeatherForecast row">
        <div className="col-2">
          <WeatherForecastPreview data={forecast.list[0]} />
        </div>
        <div className="col-2">
          <WeatherForecastPreview data={forecast.list[1]} />
        </div>
        <div className="col-2">
          <WeatherForecastPreview data={forecast.list[2]} />
        </div>
        <div className="col-2">
          <WeatherForecastPreview data={forecast.list[3]} />
        </div>
        <div className="col-2">
          <WeatherForecastPreview data={forecast.list[4]} />
        </div>
        <div className="col-2">
          <WeatherForecastPreview data={forecast.list[5]} />
        </div>
      </div>
    );
  } else {
    let apiKey = "e712c02183c40bcef18f9c8f32b75f7a";
    let url = `https://api.openweathermap.org/data/2.5/forecast?q=${props.city}&appid=${apiKey}&units=metric`;
    axios.get(url).then(handleForecastResponse);

    return null;
  }
}
