import React from "react";
import axios from "axios";



export default function Weather(props) {

    function handleResponse(response) {
        alert(`The weather in New York is ${response.data.main.temp}`);
    }
    let apiKey = "b6f13b15bc39c8fd600adbc9db22e8c9";
    let apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${props.city}&appid=${apiKey}&units=metric`;
    axios.get(apiUrl).then(handleResponse);
    return (
        <h2>Hello from weather</h2>
    )
}