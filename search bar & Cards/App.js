import React from "react"
import { useState, useEffect } from "react"
export default function App() {
  const [state, setState] = useState([])
  const [search, setSearch] = useState("")

  const a = (e) => {
    setSearch(e.target.value);
  };


  useEffect(() => {
    fetch('https://fakestoreapi.com/products')
      .then(res => res.json())
      .then(json => setState(json));
  }, []);

return (
  <>

    <div className="container">
      <div className="row">
      <input type="text" placeholder="search" value={search} onChange={a} />
        {state.filter(x => x.title.includes(search)).map((item) =>
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
  </>
)
}