import ReactDOM from "react-dom/client"
import '../node_modules/bootstrap/dist/css/bootstrap.css'
import '../node_modules/bootstrap/dist/js/bootstrap.js'
import pic from './images/v1.jpg'
import pic1 from './images/v2.jpg'
import pic2 from './images/v3.jpg'
import App4 from "./App4"
const root = ReactDOM.createRoot(document.getElementById('root'))
root.render(
  <>
    <div className="container">
      <div className="row">
        <div className="col-md-4 text-center">
          <App4 pic={pic} price="15000" />
        </div>

        <div className="col-md-4 text-center ">
          <App4 pic={pic1} price="20000" />
        </div>

        <div className="col-md-4 text-center">
          <App4 pic={pic2} price="35000" />
        </div>

      </div>
    </div>
  </>
)
