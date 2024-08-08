import React from "react"
import { useState } from "react"
export default function App() {
  const [state, setState] = useState("Hello")
  const handler = (e) => {
    setState(e.target.value)
  }
  return (
    <>
      <h1>Controlled</h1>
      <h3>You Slected <span style={{ color: 'Orange' }}> {state} </span> Course</h3>
      <select onChange={handler}>
        <option>HTML</option>
        <option>CSS</option>
        <option>JAVASCRIPT</option>
        <option>REACT JS</option>
      </select>


    </>
  )
}