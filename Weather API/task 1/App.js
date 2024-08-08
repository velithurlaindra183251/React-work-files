import React, { useState } from 'react'
import axios from 'axios'
export default function App() {
 
  const [state, setstate] = useState([])
    axios.get('https://api.openweathermap.org/data/2.5/weather?q=Proddatur&appid=3d476dc9480ae4fac3ee1c79a66ea408')
    .then((res)=>setstate(res.data.main))
  return (
    <>
    <h1> Weather Report  </h1>
    <h1>{state.temp-273.15}</h1>
    </>
  )
}
