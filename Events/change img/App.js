import React from 'react'
import { useState } from 'react'
import pic from './images/aa.jpg'
import pic1 from './images/bb.jpg'
export default function App() {

    const vk = {
        image: <img src={pic} alt='' />
    }
    const rs = {
        image: <img src={pic1} alt='' />
    }
    const [state, setState] = useState(vk.image)
    const handler = () => {
        setState(rs.image)

    }
    return (
        <>
            <h3>{state}</h3>
            <button onClick={handler}>Click Me</button>
        </>
    )
}