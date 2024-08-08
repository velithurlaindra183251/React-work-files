import React from "react"
import { useState, useEffect } from "react"
export default function App() {
  const [count, setCount] = useState(0);
  const [x, setx] = useState(100);
  const i_Count = () => {
    setCount(count + 1);
  };

  const d_Count = () => {
    setx(x - 1);
  };

  return (
    <>
      <div className='container mt-4'>
        <div className='row'>
          <div className='col-md-4 text-center'>
            <button onClick={i_Count}> + </button><input type="textarea" placeholder={count} /><br/>
            <span style={{ textAlign: 'center' }}></span><br/>
            <button onClick={d_Count} > - </button><input type="textarea" placeholder={x} />
          </div>

          <div className='col-md-4 '>
          </div>

          <div className='col-md-4'>
          </div>

        </div>
      </div>
    </>
  )
}