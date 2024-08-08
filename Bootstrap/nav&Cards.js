import ReactDOM from "react-dom/client"
import pic from './images/aa.jpg'
import pic1 from './images/bb.jpg'
import pic2 from './images/cc.jpg'
import pic3 from './images/tree.jpg'
import pic4 from './images/lo.png'
import '../node_modules/bootstrap/dist/css/bootstrap.css'
import '../node_modules/bootstrap/dist/js/bootstrap.js'
const root = ReactDOM.createRoot(document.getElementById('root'))
root.render(
  <>
    <nav className="navbar navbar-expand-lg bg-info">
      <div className="container-fluid">
        <a className="navbar-brand" href="#"><img src={pic4} alt="mouri tech" /></a>
        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav me-auto mb-2 mb-lg-0">
            <li className="nav-item">
              <a className="nav-link active" aria-current="page" href="#">Home</a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#">Link</a>
            </li>
            <li className="nav-item dropdown">
              <a className="nav-link dropdown-toggle" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                Courses
              </a>
              <ul className="dropdown-menu">
                <li><a className="dropdown-item" href="#">Full Stack Development</a></li>
                <li><a className="dropdown-item" href="#">Front End Development</a></li>
                <li><hr className="dropdown-divider" /></li>
                <li><a className="dropdown-item" href="#">Back End Development</a></li>
              </ul>
            </li>
            <li className="nav-item">
              <a className="nav-link disabled" aria-disabled="true">Disabled</a>
            </li>
          </ul>
          <form className="d-flex" role="search">
            <input className="form-control me-2" type="search" placeholder="Search" aria-label="Search" />
            <button className="btn btn-outline-success" type="submit">Search</button>
          </form>
        </div>
      </div>
    </nav>


    <div id="carouselExample" className="carousel slide">
      <div className="carousel-inner">
        <div className="carousel-item active">
          <img src={pic} className="d-block w-100" height={350} alt="..." />
        </div>
        <div className="carousel-item">
          <img src={pic1} className="d-block w-100" height={350} alt="..." />
        </div>
        <div className="carousel-item">
          <img src={pic2} className="d-block w-100" height={350} alt="..." />
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


    <div className="container-fluid">
      <div className="row">
        <div className="col-lg-4">
          <div className="card" >
            <img src={pic3} className="card-img-top" alt="..." />
            <div className="card-body">
              <h5 className="card-title">Dog</h5>
              <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
              <a href="#" className="btn btn-primary">Go somewhere</a>
            </div>
          </div>
        </div>


        <div className="col-lg-4">
          <div className="card">
            <img src={pic3} className="card-img-top" alt="..." />
            <div className="card-body">
              <h5 className="card-title">Dog 1</h5>
              <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
              <a href="#" className="btn btn-primary">Go somewhere</a>
            </div>
          </div>
        </div>


        <div className="col-lg-4">
          <div className="card">
            <img src={pic3} className="card-img-top" alt="..." />
            <div className="card-body">
              <h5 className="card-title">Dog 2</h5>
              <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
              <a href="#" className="btn btn-primary">Go somewhere</a>
            </div>
            <div className="container"></div>

          </div>
        </div>
      </div>
    </div>


    <div className="container-fluid">
      <div className="row">
        <div className="col-md-12" ></div>
        <h1 className="bg-success text-center " > Indra VELITHURLA</h1>
      </div>
    </div>

  </>
)
