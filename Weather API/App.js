import React, { useState, useEffect } from 'react';
import axios from 'axios';

export default function Random_API() {
  const [weatherData, setWeatherData] = useState(null);

  useEffect(() => {
    axios.get('https://api.openweathermap.org/data/2.5/weather?q=Kadapa&appid=3d476dc9480ae4fac3ee1c79a66ea408')
      .then(response => {
        setWeatherData(response.data);
      })
      .catch(error => {
        console.error('Error fetching data:', error);
      });
  }, []);

  if (!weatherData) {
    return 
  }

  return (
    <>
      <h1>{`Weather   Report  ${weatherData.name}`}</h1>
      <h2>Temperature: {weatherData.main.temp} </h2>

    </>
  );
}