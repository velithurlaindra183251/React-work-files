import React from 'react'
import { useState } from 'react'
export default function App() {
    const a = ['1', '2']
    const [state, setState] = useState(a)
    function handler()
    {
    setState(['3','4'])
}
return (
    <>
        <h3>Click Event</h3>
        <h3>{state}</h3>
        <button onClick={handler}>Click Me</button>
    </>
)
}
