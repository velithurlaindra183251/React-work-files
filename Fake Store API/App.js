import React from "react";
import { useState, useEffect } from "react";
export default function App() {
  const [state, setState] = useState(0)
  useEffect(() => {
    fetch('https://fakestoreapi.com/products')
      .then(res => res.json())
      //.then(json => console.log(json))
      .then(json => setState(json))
  })
  return (
    <>
      <h1>useEffect API</h1>
     {state.map((item)=><li>{item.title}</li>)}
    </>
  )
}



