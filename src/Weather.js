import React from "react";
import axios from "axios";
import {Audio}  from "react-loader-spinner";


export default function Weather(props) {
    function showWeather(response){
        alert(`The weather in ${response.data.name} is ${Math.round(response.data.main.temp)}`);
    
    }
    let apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${props.city}&appid=3bad7bd4137a5ff9f5c84125992a313a&units=metric`;
    axios.get(apiUrl).then(showWeather);
    return (
      <Audio
        height="80"
        width="200"
        radius="9"
        color="red"
        ariaLabel="loading"
        wrapperStyle
        wrapperClass
      />
    );
}