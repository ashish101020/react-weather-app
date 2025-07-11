import { createContext, useState } from "react";
import axios from "axios";
export const weatherDataContext = createContext();

export const WeatherDataProvider = ({ children }) => {
  let api_key = "227aad7249d36ea09cb7f322d0315078";

  const [cityInput, setCityInput] = useState("");
  const [weatherData, setWeatherData] = useState({});
  const [location, setLocation] = useState("");
  const [forecastData, setForecastData] = useState({});
  const [hourlyForecast, setHourlyForecast] = useState([]);
  const [dayForecast, setDayForecast] = useState([]);
  const [aqiData, setAqiData] = useState({});

  const getWeatherDetails = async (name, lat, lon, country, state) => {
    let FORECAST_API_URL = `https://api.openweathermap.org/data/2.5/forecast?lat=${lat}&lon=${lon}&appid=${api_key}`,
      WEATHER_API_URL = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${api_key}`,
      AQI_API_URL = `https://api.openweathermap.org/data/2.5/air_pollution?lat=${lat}&lon=${lon}&appid=${api_key}`;

    try {
      let weatherResponse = await axios.get(WEATHER_API_URL);
      setWeatherData(weatherResponse.data);
      // console.log(weatherResponse.data);
    } catch (e) {
      console.error("Error fetching weather data:", e);
      alert("Failed to fetch weather data.");
    }
    setLocation(`${name}, ${state ?? ""} ${country}`);

    try {
      let forecastResponse = await axios.get(FORECAST_API_URL);
      setForecastData(forecastResponse.data);
      setHourlyForecast(forecastResponse.data.list);
      // console.log(forecastResponse.data.list);

      const uniqueForecastDays = [];
      let fiveDayForecast = forecastData.list.filter((forecast) => {
        const forecastDate = new Date(forecast.dt_txt).getDate();
        if (!uniqueForecastDays.includes(forecastDate)) {
          uniqueForecastDays.push(forecastDate);
          return true;
        }
        return false;
      });
      setDayForecast(fiveDayForecast);
    } catch (error) {
      console.error("Error fetching forecast data:", error);
      alert("Failed to fetch weather forecast.");
    }

    try{
      const aqiResponse = await axios.get(AQI_API_URL);
      setAqiData(aqiResponse.data);
      // console.log(aqiData);
    }catch(error) {
      console.error("Error fetching aqi data:", error);
      alert("Failed to fetch aqiData.");
    }
  };

  const getCityCoordinates = async () => {
    let cityName = cityInput.trim();
    // console.log(cityName);
    setCityInput("");
    if (!cityName) return;

    let GEOCODING_API_URL = `https://api.openweathermap.org/geo/1.0/direct?q=${cityName}&limit=1&appid=${api_key}`;
    try {
      const response = await axios.get(GEOCODING_API_URL);
      if (response.data.length > 0) {
        let { name, lat, lon, country, state } = response.data[0];
        getWeatherDetails(name, lat, lon, country, state);
      } else {
        alert(`No cordinates found for ${cityName}`);
      }
    } catch (e) {
      alert(`Failed to fetch coordinates of ${cityName}`);
    }
  };

  const getUserCoordinates = async () => {
    try {
      if (!navigator.geolocation) {
        throw new Error("Geolocation is not supported by this browser.");
      }

      const position = await new Promise((resolve, reject) => {
        navigator.geolocation.getCurrentPosition(resolve, reject, {
          enableHighAccuracy: true,
        });
      });

      const { latitude, longitude } = position.coords;

      const REVERSE_GEOCODING_API = `https://api.openweathermap.org/geo/1.0/reverse?lat=${latitude}&lon=${longitude}&limit=1&appid=${api_key}`;

      const response = await fetch(REVERSE_GEOCODING_API);
      if (!response.ok) {
        throw new Error("Failed to fetch location details.");
      }

      const data = await response.json();
      if (Array.isArray(data) && data.length > 0) {
        const { name, country, state } = data[0];
        getWeatherDetails(name, latitude, longitude, country, state);
        // console.log(`Detected location: ${name}, ${state}, ${country}`);
      } else {
        alert("No location details found.");
      }
    } catch (error) {
      alert(`Error getting coordinates: ${error.message}`);
      console.error("Detailed error:", error);
    }
  };

  const contextValue = {
    setCityInput,
    cityInput,
    getCityCoordinates,
    getUserCoordinates,
    weatherData,
    location,
    dayForecast,
    hourlyForecast,
    aqiData
  };
  return (
    <weatherDataContext.Provider value={contextValue}>
      {children}
    </weatherDataContext.Provider>
  );
};
