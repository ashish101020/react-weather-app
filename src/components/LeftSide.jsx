import React, { useState, useEffect, useContext } from "react";
import "./LeftSide.css";
import { weatherDataContext } from "../context/weatherUpdate";
import Forecast from "./Forecast";

const LeftSide = () => {
  const { weatherData, location, dayForecast } = useContext(weatherDataContext);
  const [calendar, setCalendar] = useState("");

  useEffect(() => {
    const date = new Date();
    const days = [
      "Sunday",
      "Monday",
      "Tuesday",
      "Wednesday",
      "Thursday",
      "Friday",
      "Saturday",
    ];
    const months = [
      "Jan",
      "Feb",
      "Mar",
      "Apr",
      "May",
      "Jun",
      "Jul",
      "Aug",
      "Sep",
      "Oct",
      "Nov",
      "Dec",
    ];
    const formattedDate = `${days[date.getDay()]}, ${date.getDate()} ${
      months[date.getMonth()]
    }, ${date.getFullYear()}`;
    setCalendar(formattedDate);
  }, []);

  return (
    <div className="weather-left">
      <div className="card">
        <div className="current-weather">
          <div className="details">
            <p>Now</p>
            <h2>
              {weatherData?.main?.temp
                ? `${(weatherData.main.temp - 273.15).toFixed(2)}°C`
                : "___°C"}
            </h2>
            {/* <h3>___</h3> */}
            {/* <h3>{weatherData?.weather[0]?.description ? `${weatherData.weather[0].description}` : "___"}</h3> */}
          </div>
          <div className="weather-icon">
            <img
              src="https://openweathermap.org/img/wn/04d@2x.png"
              alt="Weather Icon"
            />
          </div>
        </div>
        <hr />
        <div className="card-footer">
          <p>
            <i className="fa-light fa-calendar"></i>{" "}
            {calendar ? calendar : "___"}
          </p>
          <p>
            <i className="fa-light fa-location-dot"></i>
            {location ? `${location}` : "___"}
          </p>
        </div>
      </div>
      <div className="card">
        <h2>5 Days Forecast</h2>
        <div className="day-forecast">
          {dayForecast && dayForecast.length > 0 ? (
            dayForecast.map((forecast, index) => (
              <Forecast key={index} forecast={forecast} />
            ))
          ) : (
            <div className="forecast-item">
              <div className="icon-wrapper">
                <img
                  src="https://openweathermap.org/img/wn/02d.png"
                  alt="Weather Icon"
                />
                <span>___&deg;C</span>
              </div>
              <p>___</p>
              <p>___</p>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default LeftSide;
