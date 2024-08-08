import ReactDOM from 'react-dom/client'
import pic from './images/dogs.jpg'
const clr={
   color:'green'
}
const p={
   width:'250px',
   border:'3px solid red'
}
const root = ReactDOM.createRoot(document.getElementById('root'))
root.render(
   <>
      {/* <h2 style={{color:'green'}}>Inline CSS</h2> */}
      <h1 style={clr}>Inline CSS</h1>
      <img src={pic} alt='' style={p} />
      <br/>
      <img src="logo192.png" alt='' style={p}/>
   </>
)