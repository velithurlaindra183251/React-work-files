import React from "react";
import { useState } from "react";
export default function App() {
  const [state, setState] = useState([])
  fetch('https://jsonplaceholder.typicode.com/posts')
    .then(response => response.json())
    //.then(json => console.log(json))
    .then(json => setState(json))

  return (
    <>
      <table border={2}>
        <tr><th>Id</th>
          <th>Title</th></tr>
        {state.map((val) => <tr><td>{val.id}</td><td>{val.title}</td></tr>)}
      </table>
    </>
  )
}



