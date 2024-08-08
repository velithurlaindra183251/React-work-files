import React, { useState } from 'react'
import './style.css'
export default function App() {
    const person = {
        fname: 'Siva',
        lname: 'Kumar'
    }
    const [state, setState] = useState(person)
    const vk = () => {
        setState({...state,fname:'Vinod'})

    }
    return (
        <>
            <h3>First Name is <span className='txt'>{state.fname}</span> last  Name is <span className='txt'>{state.lname}</span>  </h3>
            <button onClick={vk}>update</button>
        </>
    )
}
