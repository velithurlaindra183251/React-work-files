/* import { useState } from "react";
import axios from "axios";
export default function App() {
  var [state, setState] = useState()
  var [loc, setLoc] = useState("")
  function handler() {
    axios.get(location)
      .then((res) => { setState(Math.round(res.data.main.temp - 273.15)) })
  }

  function demo(e) {
    setLoc(e.target.value)
  }
  var location = "https://api.openweathermap.org/data/2.5/weather?q=" + loc + "&appid=3d476dc9480ae4fac3ee1c79a66ea408"
  return (
    <>
      <h5>Temperature: {state} deg</h5>
      <input type="text" placeholder="Enter your city" onChange={demo} />
      <br />
      <button onClick={handler}>Submit</button>
    </>
  )
}
 */
import React, { useState } from 'react';
import axios from 'axios';
export default function App() {
    const [city, setCity] = useState('');
    const [Data, setData] = useState([]);
    const fetchData = () => {
        axios.get(vari)
            .then(res => {
                setData(res.data.main);
            })
    };
    const vari="https://api.openweathermap.org/data/2.5/weather?q="+city+"&appid=3d476dc9480ae4fac3ee1c79a66ea408 "
    const state1 = (event) => {
        setCity(event.target.value);
    };
    return (
        <div>
            <h1>Weather</h1>
            {Data.temp-273.15}
            <br/>
            <input type="text"  onChange={state1} placeholder="Enter city name" />
            <br />
            <button onClick={fetchData}>Submit</button>
        </div>
    );
}
