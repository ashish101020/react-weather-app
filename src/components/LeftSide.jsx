import React from "react";
import './LeftSide.css'

const LeftSide = () => {
  return (
    <div class="weather-left">
      <div class="card">
        <div class="current-weather">
          <div class="details">
            <p>Now</p>
            <h2>___&deg;C</h2>
            <h3>_____</h3>
          </div>
          <div class="weather-icon">
            <img
              src="https://openweathermap.org/img/wn/04d@2x.png"
              alt="Weather Icon"
            />
          </div>
        </div>
        <hr />
        <div class="card-footer">
          <p>
            <i class="fa-light fa-calendar"></i> _____
          </p>
          <p>
            <i class="fa-light fa-location-dot"></i> _____
          </p>
        </div>
      </div>
      <div class="card">
        <h2>5 Days Forecast</h2>
        <div class="day-forecast">
          <div class="forecast-item">
            <div class="icon-wrapper">
              <img
                src="https://openweathermap.org/img/wn/02d.png"
                alt="Weather Icon"
              />
              <span>___&deg;C</span>
            </div>
            <p>___</p>
            <p>___</p>
          </div>
          <div class="forecast-item">
            <div class="icon-wrapper">
              <img
                src="https://openweathermap.org/img/wn/02d.png"
                alt="Weather Icon"
              />
              <span>___&deg;C</span>
            </div>
            <p>___</p>
            <p>___</p>
          </div>
          <div class="forecast-item">
            <div class="icon-wrapper">
              <img
                src="https://openweathermap.org/img/wn/02d.png"
                alt="Weather Icon"
              />
              <span>___&deg;C</span>
            </div>
            <p>___</p>
            <p>___</p>
          </div>
          <div class="forecast-item">
            <div class="icon-wrapper">
              <img
                src="https://openweathermap.org/img/wn/02d.png"
                alt="Weather Icon"
              />
              <span>___&deg;C</span>
            </div>
            <p>___</p>
            <p>___</p>
          </div>
          <div class="forecast-item">
            <div class="icon-wrapper">
              <img
                src="https://openweathermap.org/img/wn/02d.png"
                alt="Weather Icon"
              />
              <span>___&deg;C</span>
            </div>
            <p>___</p>
            <p>___</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LeftSide;
