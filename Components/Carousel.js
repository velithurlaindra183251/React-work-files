import React from 'react'
import pic1 from './images/aa.jpg'
import pic2 from './images/bb.jpg'
import pic3 from './images/cc.jpg'
 export default function Carousel() {
  return (
    <div id="carouselExample" className="carousel slide">
      <div className="carousel-inner">
        <div className="carousel-item active">
          <img src={pic1} className="d-block w-100" height={350} alt="..." />
        </div>
        <div className="carousel-item">
          <img src={pic2} className="d-block w-100" height={350} alt="..." />
        </div>
        <div className="carousel-item">
          <img src={pic3} className="d-block w-100" height={350} alt="..." />
        </div>
      </div>
      <button className="carousel-control-prev" type="button" data-bs-target="#carouselExample" data-bs-slide="prev">
        <span className="carousel-control-prev-icon" aria-hidden="true"></span>
        <span className="visually-hidden">Previous</span>
      </button>
      <button className="carousel-control-next" type="button" data-bs-target="#carouselExample" data-bs-slide="next">
        <span className="carousel-control-next-icon" aria-hidden="true"></span>
        <span className="visually-hidden">Next</span>
      </button>
    </div>
  )
}
