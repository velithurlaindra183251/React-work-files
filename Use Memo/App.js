import React, { useMemo } from "react"
import { useState, useEffect } from "react"
export default function App() {
  const [count, setCount] = useState(0);
  const [x, setx] = useState(100);
  const i_Count = () => {
    setCount(count + 1);
  };

  const d_Count = () => {
    setx(x - 1);
  };

const multiplication=useMemo(function multiply(){
  console.log("Hello")
  return count*10
},[count])


  return (
    <>
    {multiplication}<br/>
    <button onClick={i_Count}>+</button>
    {count}<br/>
    <button onClick={d_Count}>-</button>
    {x}
    </>
  )
}