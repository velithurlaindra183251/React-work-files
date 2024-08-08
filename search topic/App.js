import React from "react"
import Data from './Data.json'
import { useState } from "react"
export default function App() {
  const [state, setState] = useState(Data)
  const [search, setSearch] = useState()
  const handler = (e) => {
    setSearch(e.target.value)
  }
  return (
    <>
    
      <input type="text" placeholder="search" value={search} onChange={handler} />
      <br />
      {state.filter((x) => x.name.includes(search)).map((item) => <li>{item.name}</li>)}

    </>
  )
}