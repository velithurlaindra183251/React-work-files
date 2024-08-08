import React, { useState } from 'react'
import './style.css'
export default function App() {
    const [style, setStyle] = useState('txt')
    const update = () => {
        setStyle('txt1')
    }

    return (
        <>
           <h2 className={style}>React Js</h2>
            <button onClick={update}>update</button>
        </>
    )
}
