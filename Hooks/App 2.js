import React from 'react'
import { useState } from 'react'
export default function App() {
    let uid = "mouritech"
    const person = {
        name: 'Indra',
        place: 'Pulivendula',
        age: '23'
    }
    const students = ['Indra', 'Vinod', 'Sateesh', 'Ramesh']
   // const [state, setState] = useState(uid)
    const[state]=useState(students)
    return (
        <>
            <h1>React Hooks</h1>
            <h1> useState</h1>
            <h1>{state}</h1>
            <h1>{state.name}</h1>
            {/* <h1>{state[0]}</h1> */}
        </>
    )
}
