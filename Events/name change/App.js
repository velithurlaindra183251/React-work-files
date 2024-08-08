import React, { useState } from 'react'
import './style.css'
export default function App() {
    const person = {
        fname: 'Indra',
        lname: 'Sena',
        age: 23
    }
    const [state, setState] = useState(person)
    const update = () => {
        setState({ fname: 'Vinod', lname: 'Kumar' })
    }
    return (
        <>
            <h3>First Name is <span className='txt'>{state.fname}</span> and Last Name is <span className='txt'>{state.lname} </span></h3>
            <button onClick={update}>update</button>
        </>
    )
}
