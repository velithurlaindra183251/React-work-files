import React from "react"
import { useState, useEffect } from "react"
export
  default function App() {
  const [state, setState] = useState([])
  useEffect(() => {
    fetch('https://fakestoreapi.com/products')
      .then(res => res.json())
      // .then(json=>console.log(json))
      .then(json => setState(json))
  })
  return (
    <>
      <div className="container">
        <div className="row">
          {state.filter(x=>x.title.includes('men')).map((item) =>
            <div className="col-md-4">
              <div className="card">
                <img src={item.image} alt='' style={{ width: '300px', height: '300px' }} />

                <div class="card-body">
                  <p class="card-text">{item.title}</p>
                  <p class="card-text">{item.category}</p>
                  <button style={{ backgroundColor: 'blue' }}>Know More</button>
                </div>
              </div>
            </div>)}
        </div>
      </div>
      <h1>useEffect</h1>
    </>
  )
}