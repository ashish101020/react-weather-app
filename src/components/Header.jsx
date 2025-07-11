import { useContext } from "react"
import { weatherDataContext } from "../context/weatherUpdate"


const Header = () => {
    const {cityInput, setCityInput, getCityCoordinates, getUserCoordinates} = useContext(weatherDataContext);
    const handleInputChange = (e) =>{
        setCityInput(e.target.value);
    }
  return (
    <div className='header'>
        <h2>Weather</h2>
        <div className="weather-input">
            <input type="text" value={cityInput} onChange={handleInputChange} name='cityInput' id='city_input' placeholder='Enter city name'/>
            <button onClick={getCityCoordinates} type='button' id='searchBtn'>
                <i className='fa-solid fa-search'></i> Search</button>
            <button onClick={getUserCoordinates} type='button' id='locationBtn'>
                <i className='bx bx-target-lock'></i> Current Location</button>
        </div>
    </div>
  )
}

export default Header;