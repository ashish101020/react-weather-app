import React from "react";

const Forecast = ({ forecast }) => {
  const date = new Date(forecast.dt_txt);
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

  const icon = forecast.weather?.[0]?.icon;
  const temperature = (forecast.main.temp - 273.15).toFixed(2); // Convert from Kelvin to °C

  return (
    <div className="forecast-item">
      <div className="icon-wrapper">
        <img
          src={`https://openweathermap.org/img/wn/${icon}.png`}
          alt="Weather Icon"
        />
        <span>{temperature}&deg;C</span>
      </div>
      <p>
        {date.getDate()} {months[date.getMonth()]}
      </p>
      <p>{days[date.getDay()]}</p>
    </div>
  );
};

export default Forecast;
