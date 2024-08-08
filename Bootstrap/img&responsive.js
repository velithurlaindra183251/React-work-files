import ReactDOM from "react-dom/client"
import '../node_modules/bootstrap/dist/css/bootstrap.css'
import pic from './images/tree.jpg'
const root = ReactDOM.createRoot(document.getElementById('root'))
root.render(
   <>
      <h1>Bootstrap In React Js</h1>
      <h2 className='text-danger'>Bootstrap</h2>
      <button className="btn btn-success">Click Me</button>
      <img src={pic} alt="" className="img-fluid" />
   </>
)