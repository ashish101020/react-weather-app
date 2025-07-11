import React from "react";

const HourlyForecast = ({ forecast, index }) => {
  let hrforecastDate = new Date(forecast.dt_txt);
  let hr = hrforecastDate.getHours();
  let a = "PM";
  if (hr < 12) a = "AM";
  if (hr === 0) hr = 12;
  if (hr > 12) hr = hr - 12;

  const temperature = (forecast.main.temp - 273.15).toFixed(2);

  return (
    <div className="card">
      <p>{`${hr} ${a}`}</p>
      <img
        src={`https://openweathermap.org/img/wn/${forecast.weather[0].icon}.png`}
        alt="Weather Icon"
      />
      <p>{temperature}&deg;C</p>
    </div>
  );
};

export default HourlyForecast;
