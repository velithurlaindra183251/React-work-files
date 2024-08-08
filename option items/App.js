import React, { useState, useEffect } from 'react';
import '../node_modules/bootstrap/dist/css/bootstrap.css';
import '../node_modules/bootstrap/dist/js/bootstrap.js'

export default function Card_API() {
  const [state, setState] = useState([]);
  const [search, setSearch] = useState("");
  const vk= (e) => {
    setSearch(e.target.value);
  };
 
  useEffect(() => {
    fetch('https://fakestoreapi.com/products')
      .then(res => res.json())
      .then(json => setState(json));
  }, []);
 
  return (
    <>
      <div className='container'>
        <div className='row' style={{margin:15}}>
          <div className='col-md-12'>
        <select onChange={vk}>
          <option>{'Women'}</option>
          <option>{'Men'}</option>
          <option>{'Hard Drive'}</option>
          <option>{'Gold'}</option>
          <option>{'SanDisk'}</option>\
          <option>{'Ultra'}</option>
 
        </select>
        </div>
        <div className='row' style={{margin:15}}>
          {/* <input type="text" placeholder="Search" value={search} onChange={sai} /> */}
         
          {state.filter((item) => item.title.includes(search)).map((item) => (
            <div  className='col-md-4'>
              <div className="card">
                <img src={item.image} className="card-img-top" alt={item.title}  style={{height:300}}/>
                <div className="card-body" style={{height:300}}>
             
                  <h5 className="card-title">{item.title} </h5>
                  <h4 className='card-title'>{item.price}</h4>
                  <div className='scroll' style={{ maxHeight: '100px', overflowY: 'auto' }}>
                  <p className="card-text">{item.description}</p>
               
                 
                <a href="#" className="btn btn-primary">Go somewhere</a>
                </div>
                </div>
              </div>
            </div>
          ))}
        </div>
        </div>
      </div>
    </>
  );
}