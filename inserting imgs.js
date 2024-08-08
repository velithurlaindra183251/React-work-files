import ReactDOM from 'react-dom/client'
import pic from './images/dogs.jpg'
const root = ReactDOM.createRoot(document.getElementById('root'))
root.render(
   <>
      <h2>Inserting images from React Js in SRC folder</h2>
      <img src={pic} alt='' width="300px" />
      <br/>
      <img src="logo192.png" alt=''/>
   </>
)