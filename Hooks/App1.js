import React from 'react'
import { useState } from 'react'
export default function App() {
    const [state,setState] = useState("Full Stack Developer")
    const [name,setname] = useState("Indra Velithurla")
    return (
        <>
            <h2>React Hooks</h2>
            <h2>useState Hooks</h2>
            <h1>{state}</h1>
            <h1>{name}</h1>

        </>
    )
}
