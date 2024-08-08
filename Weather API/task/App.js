import React, { useState } from 'react'
import axios from 'axios'
export default function App() {
 
  const [state, setstate] = useState([])
    axios.get('https://api.openweathermap.org/data/2.5/weather?q=Vijayawada&appid=3d476dc9480ae4fac3ee1c79a66ea408')
    // .then((res)=>console.log(res.data.results))
    .then((res)=>setstate(res.data.main))
  return (
    <>
    <h1> Weather Report  Vijayawada</h1>
    <h1>{state.temp}</h1>
    </>
  )
}