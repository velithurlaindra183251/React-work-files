import React, { useState } from 'react'
import './style.css'
export default function App() {
    const person = {
        fname: 'Indra'
    }
    const [state, setState] = useState(person)
    const f1 = () => {
        if (state.fname == "Indra") {
            setState({ fname: "Vinod" })
        }
        else if (state.fname == "Vinod") {
            setState({ fname: "Indra" })
        }
    }
    return (
        <>
            <h3>First Name is <span className='txt'>{state.fname}</span>  </h3>
            <button onClick={f1}>update</button>
        </>
    )
}
