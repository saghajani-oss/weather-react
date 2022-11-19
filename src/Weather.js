import React, {useState} from "react";
import axios from "axios";

import "./Weather.css"


export default function Weather() {
let [city, setCity] = useState(" ");
let [message, setMessage] = useState(" ");

  function showWeather(response) {
    console.log(response);
    setMessage(
      <ul className="weather-list">
        <li>Temperature: {Math.round(response.data.main.temp)} °C</li>
        <li>Description: {response.data.weather[0].description}</li>
        <li>Humidity: {response.data.main.humidity} %</li>
        <li>Wind: {Math.round(response.data.wind.speed)} Km/h</li>
      </ul>
    );
  }

  function handleSearch(event) {
    event.preventDefault();
    let apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=3bad7bd4137a5ff9f5c84125992a313a&units=metric`;
    axios.get(apiUrl).then(showWeather);
  }

  function showCity(event) {
    event.preventDefault();
    setCity(event.target.value);
  }

  
    return (
      <form onSubmit={handleSearch}>
        <input
          className="search-text"
          type="search"
          placeholder="Enter a city ..."
          onChange={showCity}
        />
        <input className="search-input" type="submit" value="Search" />
        <p>{message}</p>
      </form>
    );
}