import React from 'react'
import Comp2 from './Comp2'
export default function Comp1({ data,i }) {
    return (
        <>
            <Comp2 data={data} i={i} />
        </>
    )
}
