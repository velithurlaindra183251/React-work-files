import React, { useState, useEffect } from 'react'
export default function App() {

  const [state, setstate] = useState([])

  useEffect(() => {
    fetch('https://randomuser.me/api/?results=5')
      .then(res => res.json())
      .then(json => setstate(json.results))
  }, [])
  return (
    <>
    <h1>RANDOM USER GENERATOR</h1>
      {state.map((x) => (<li>{x.name.first}</li>))}
      <button>Get Data</button>
    </>
  )
}

