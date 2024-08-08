import React from 'react'
import './Style.css'
export default function ProductList({data}) {
  return (
    <div>
      {data.map((x)=><h1>{x}</h1>)}
    </div>
  )
}
