import React from 'react'

const Header = () => {
  return (
    <div className='header'>
        <h2>Weather</h2>
        <div className="weather-input">
            <input type="text" name='city' id='city_input' placeholder='Enter city name'/>
            <button type='button' id='searchBtn'>
                <i className='fa-regular fa-search'></i> Search</button>
            <button type='button' id='locationBtn'>
                <i className='bx bx-target-lock'></i> Current Location</button>
        </div>
    </div>
  )
}

export default Header