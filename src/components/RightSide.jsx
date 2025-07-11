import React, { useContext, useState } from "react";
import "./RightSide.css";
import { weatherDataContext } from "../context/weatherUpdate";
import moment from "moment";
import HourlyForecast from "./HourlyForecast";

const RightSide = () => {
  const { weatherData, aqiData, hourlyForecast } =
    useContext(weatherDataContext);
  const [aqiList] = useState(["Good", "Fair", "Moderate", "Poor", "Very Poor"]);

  const { co, no, no2, o3, so2, pm2_5, pm10, nh3 } =
    aqiData?.list?.[0]?.components || {};
  const { sunrise, sunset } = weatherData?.sys || {};
  const { timezone, visibility } = weatherData || {};
  const { humidity, pressure, feels_like } = weatherData?.main || {};
  const { speed: windSpeed } = weatherData?.wind || {};

  const sRiseTime = moment
    .utc(sunrise, "X")
    .add(timezone, "seconds")
    .format("hh:mm A");
  const sSetTime = moment
    .utc(sunset, "X")
    .add(timezone, "seconds")
    .format("hh:mm A");

  return (
    <div className="weather-right">
      <h2>Today's Highlights</h2>
      <div className="highlights">
        <div className="card">
          <div className="card-head">
            <p>Air Quality Index</p>
            <p className={`air-index aqi-${aqiData?.list?.[0]?.main?.aqi}`}>
              {aqiList[aqiData?.list?.[0]?.main?.aqi - 1] || "___"}
            </p>
          </div>
          <div className="air-indices">
            <div className="item">
              <p>PM2.5</p>
              <p>{pm2_5 ?? "___"}</p>
            </div>
            <div className="item">
              <p>PM10</p>
              <p>{pm10 ?? "___"}</p>
            </div>
            <div className="item">
              <p>SO2</p>
              <p>{so2 ?? "___"}</p>
            </div>
            <div className="item">
              <p>CO</p>
              <p>{co ?? "___"}</p>
            </div>
            <div className="item">
              <p>NO</p>
              <p>{no ?? "___"}</p>
            </div>
            <div className="item">
              <p>NO2</p>
              <p>{no2 ?? "___"}</p>
            </div>
            <div className="item">
              <p>NH3</p>
              <p>{nh3 ?? "___"}</p>
            </div>
            <div className="item">
              <p>O3</p>
              <p>{o3 ?? "___"}</p>
            </div>
          </div>
        </div>

        <div className="card">
          <div className="card-head">
            <p>Sunrise & Sunset</p>
          </div>
          <div className="sunrise-sunset">
            <div className="item">
              <div className="icon">
                <i className="fa-light fa-sunrise fa-4x"></i>
              </div>
              <div>
                <p>Sunrise</p>
                <h2>{sRiseTime || "___"}</h2>
              </div>
            </div>
            <div className="item">
              <div className="icon">
                <i className="fa-light fa-sunset fa-4x"></i>
              </div>
              <div>
                <p>Sunset</p>
                <h2>{sSetTime || "___"}</h2>
              </div>
            </div>
          </div>
        </div>

        <div className="card">
          <div className="card-head">
            <p>Humidity</p>
          </div>
          <div className="card-item">
            <i className="fa-light fa-droplet fa-2x"></i>
            <h2 id="humidityVal">{humidity ?? "___"}%</h2>
          </div>
        </div>

        <div className="card">
          <div className="card-head">
            <p>Pressure</p>
          </div>
          <div className="card-item">
            <i className="fa-light fa-compass fa-2x"></i>
            <h2 id="pressureVal">{pressure ?? "___"} hPa</h2>
          </div>
        </div>

        <div className="card">
          <div className="card-head">
            <p>Visibility</p>
          </div>
          <div className="card-item">
            <i className="fa-light fa-eye fa-2x"></i>
            <h2 id="visibilityVal">{visibility/1000 ?? "___"} km</h2>
          </div>
        </div>

        <div className="card">
          <div className="card-head">
            <p>Wind Speed</p>
          </div>
          <div className="card-item">
            <i className="fa-light fa-location-arrow fa-2x"></i>
            <h2 id="windSpeedVal">{windSpeed ?? "___"} m/s</h2>
          </div>
        </div>

        <div className="card">
          <div className="card-head">
            <p>Feels Like</p>
          </div>
          <div className="card-item">
            <i className="fa-light fa-temperature-list fa-2x"></i>
            <h2 id="feelsVal">{(feels_like - 273.15).toFixed(2) ?? "___"}&deg;C</h2>
          </div>
        </div>
      </div>

      <h2>Today at</h2>
      <div className="hourly-forecast">
        {hourlyForecast && hourlyForecast.length > 0 ? (
          hourlyForecast
            .slice(0, 8)
            .map((forecast, index) => (
              <HourlyForecast key={index} forecast={forecast} index={index} />
            ))
        ) : (
          <div className="card">
            <p>9 AM</p>
            <img src="https://openweathermap.org/img/wn/04d.png" alt="" />
            <p>____&deg;C</p>
          </div>
        )}
      </div>
    </div>
  );
};

export default RightSide;
