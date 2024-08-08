import React, { useState } from 'react'
import axios from 'axios'
export default function App() {

  const [state, setstate] = useState([])
  function a() {
    axios.get('https://randomuser.me/api/?results=5')
      // .then((res)=>console.log(res.data.results))
      .then((res) => setstate(res.data.results))
  }
  return (
    <>
      {/* {state.map((x,y)=><li key={y}>{x.name.first}</li>)} */}
      <button onClick={a}>Click Me</button>
      <div className='container'>
        <div className='row'>
          {state.map((x) => <div className='col-md-4'>
            <div className="card">
              <img src={x.picture.medium} class="card-img-top" alt="" />
              <div className="card-body">
                <h2 className="card-title">{x.name.first}</h2>
              </div>
            </div>
          </div>
          )}
        </div>
      </div>
    </>
  )
}