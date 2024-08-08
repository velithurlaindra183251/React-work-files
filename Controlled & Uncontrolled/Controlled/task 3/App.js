import React from "react"
import { useState } from "react"
export default function App() {
  const [state, setState] = useState("")
  const handler = (e) => {
    setState(e.target.value)
  }
  return (
    <>
      <h3>You Slected <span style={{ color: 'Orange' }}> {state} </span> Pizza </h3>

      <label onChange={handler}> <input type="radio" value="Regular" name="a" />Regular</label>

      <label onChange={handler}> <input type="radio" value="Medium" name="a" />Medium</label>

      <label onChange={handler}> <input type="radio" value="Large" name="a" />Large</label>

    </>
  )
}