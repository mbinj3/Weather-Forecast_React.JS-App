import React, { useState } from 'react'
import './WeatherApp.css'
import searchIcon from '../assets/search.png'
import clearIcon from '../assets/clear.png'
import cloudIcon from '../assets/cloud.png'
import drizzleIcon from '../assets/drizzle.png'
import rainIcon from '../assets/rain.png'
import snowIcon from '../assets/snow.png'
import windIcon from '../assets/wind.png'
import humidityIcon from '../assets/humidity.png'


const WeatherApp = () => {

  let api_key = "1d792fd7234e0b2d26f66cdb0fecc6d2";

  const[wicon,setWicon] = useState(cloudIcon)

  let search = async () => {

      const element = document.getElementsByClassName("cityInput");

      if(element[0].value === "")
      {
        return 0;
      }

      let url = `https://api.openweathermap.org/data/2.5/weather?q=${element[0].value}&appid=${api_key}&units=metric`;

      let response = await fetch(url);
      let data = await response.json();

      ///////

      const humidity = document.getElementsByClassName("humidity-percent");

      const wind = document.getElementsByClassName("wind-rate");

      const temprature = document.getElementsByClassName("weather-temp");

      const location = document.getElementsByClassName("weather-location");

      humidity[0].innerHTML = data.main.humidity + " %";

      wind[0].innerHTML = Math.floor(data.wind.speed) + " km/h";

      temprature[0].innerHTML = Math.floor(data.main.temp) + " ºC";

      location[0].innerHTML = data.name;

      if(data.weather[0].icon === "01d" || data.weather[0].icon === "01n")
      {
        setWicon(clearIcon)
      }
      else if(data.weather[0].icon === "02d" || data.weather[0].icon === "02n")
      {
        setWicon(cloudIcon)
      }
      else if(data.weather[0].icon === "03d" || data.weather[0].icon === "03n")
      {
        setWicon(drizzleIcon)
      }
      else if(data.weather[0].icon === "04d" || data.weather[0].icon === "04n")
      {
        setWicon(drizzleIcon)
      }
      else if(data.weather[0].icon === "09d" || data.weather[0].icon === "09n")
      {
        setWicon(rainIcon)
      }
      else if(data.weather[0].icon === "10d" || data.weather[0].icon === "10n")
      {
        setWicon(rainIcon)
      }
      else if(data.weather[0].icon === "13d" || data.weather[0].icon === "13n")
      {
        setWicon(snowIcon)
      }
      else{
        setWicon(clearIcon)
      }

  }
  return (

    <div className="container">

        <div className="top-bar">

            <input type="text" className="cityInput" placeholder='Search' />

            <div className="search-icon" onClick={()=>{search()}}>
                <img src={searchIcon} alt="" />
            </div>
        </div>

        <div className="weather-image">
          <img src={wicon} alt="" />
        </div>

        <div className="weather-temp">24 ºC</div>

        <div className="weather-location">London</div>

        <div className="data-container">

          <div className="element">
            <img src={humidityIcon} alt="" className="icon" />
          
            <div className="data">

              <div className="humidity-percent">64 %</div>

              <div className="text">Humidity</div>
            </div>

          </div>


          <div className="element">
            <img src={windIcon} alt="" className="icon" />
          
            <div className="data">

              <div className="wind-rate">18 km/h</div>

              <div className="text">Wind Speed</div>
              
            </div>

          </div>

        </div>


    </div>
  )
}

export default WeatherApp