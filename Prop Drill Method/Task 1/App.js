import React, { useState } from 'react'
import Home from './Home'
export default function App() {
  const array=["charan","indra","sateesh","ramesh"]
  const [state,setState]=useState(array)
  return (
    <div>
      <Home data={state}/>
    </div>
  )
}
