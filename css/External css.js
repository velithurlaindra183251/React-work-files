import ReactDOM from 'react-dom/client'
import pic from './images/dogs.jpg'
import './External.css'
const root = ReactDOM.createRoot(document.getElementById('root'))
root.render(
   <>
      <h1 className='txt'>External Css</h1>
      <h1 className='txt'>External Css</h1>
      <h1 className='txt'>External Css</h1>
      <h1 className='txt'>External Css</h1>
      <img src={pic} alt=''/>
      <br/>
      <img src="logo192.png" alt=''/>
   </>
)