import React from "react";
import  { useState } from "react";
export default function App() {
  const [state, setState] = useState([])
  fetch('https://jsonplaceholder.typicode.com/todos')
    .then(response => response.json())
    //.then(json => console.log(json))
    .then(json => setState(json))

return(
  <>
    <h1>API </h1>
    {state.map((val)=><li>{val.id}</li>)}
  </>
)
}



