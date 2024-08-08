import React from 'react'
import pic from './images/mobile1.jpg'
import pic1 from './images/mobile3.jpg'
import pic2 from './images/mobile2.jpg'
function Container() {
  return (

    <div className="container-fluid">
      <div className="row">
        <div className="col-lg-4">
          <div className="card" >
            <img src={pic} className="card-img-top" alt="..." />
            <div className="card-body">
              <h5 className="card-title">Price 1500/-</h5>
              <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
            </div>
          </div>
        </div>


        <div className="col-lg-4">
          <div className="card">
            <img src={pic1} className="card-img-top" alt="..." />
            <div className="card-body">
              <h5 className="card-title">Price 10000/-</h5>
              <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
            </div>
          </div>
        </div>


        <div className="col-lg-4">
          <div className="card">
            <img src={pic2} className="card-img-top" alt="..." />
            <div className="card-body">
              <h5 className="card-title">Price 50000/-</h5>
              <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
            </div>
            <div className="container"></div>

          </div>
        </div>
      </div>
    </div>
  )
}
export default Container