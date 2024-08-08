import React from "react"
import pic from './images/dogs.jpg'
import { useState } from "react"
export default function App() {
  const [state, setState] = useState("Hello")
  const handler = (e) => {
    setState(e.target.value)
  }
  return (
    <>
      <img src={pic} width={state} alt="" />
      <h1>Controlled</h1>
      <h3>You Slected <span style={{ color: 'red' }}> {state} </span> Size</h3>
      <select onChange={handler}>
        <option value={'100px'}>100 px</option>
        <option value={'200px'}>200 px</option>
        <option value={'300px'}>300 px</option>
        <option value={'400px'}>400 px</option>
        <option value={'500px'}>500 px</option>
      </select>

    </>
  )
}