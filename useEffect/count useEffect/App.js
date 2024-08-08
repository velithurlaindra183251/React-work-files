import React from "react";
import { useState, useEffect } from "react";
export default function App() {
  const [state, setState] = useState(0)
  useEffect(() => {
    console.log('Mouritech')
  })
  const handler=()=>{
    setState(state+1)
  }
  return (
    <>
      <h1>useEffect</h1>
      <h1>{state}</h1>
      <button onClick={handler}>Click Me</button>
    </>
  )
}



